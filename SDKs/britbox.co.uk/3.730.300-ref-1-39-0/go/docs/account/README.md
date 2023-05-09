# Account

### Available Operations

* [AddPaymentMethod](#addpaymentmethod) - Add a new payment method to an account.
* [AuthorizeDevice](#authorizedevice) - Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [CancelSubscription](#cancelsubscription) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [ChangePassword](#changepassword) - Change the password of an account.

The expected token scope is Settings.

* [ChangePin](#changepin) - Change the pin of an account.
* [CreateProfile](#createprofile) - Create a new profile under the active account.
* [DeleteProfileWithID](#deleteprofilewithid) - Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.

* [DeregisterDevice](#deregisterdevice) - Deregister a playback device from an account.
* [GenerateNonce](#generatenonce) - Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.

* [GetAccount](#getaccount) - Get the details of an account along with the profiles and entitlements under it.
* [GetDevice](#getdevice) - Get a registered device.
* [GetDevices](#getdevices) - Get all devices registered under this account.

Also includes information around device registration and deregistration limits.

* [GetEntitlements](#getentitlements) - Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.

* [GetItemMediaFiles](#getitemmediafiles) - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint accepts an Account Catalog token, however if when requesting
playback files you receive an *403 status code with error code 1* then the file
you're requesting is classification restricted. This means you should switch
to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
Playback token. If not already obtained, this token can be requested via the
`/itv/pinauthorization` endpoint with an account level pin.

For convenience you may also access free / public files through this endpoint
instead of the /items/{id}/videos endpoint, when authenticated.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [GetItemMediaFilesGuarded](#getitemmediafilesguarded) - Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint is identical to the `/account/items/{id}/videos` however it expects
an Account Playback token. This token, and in association this endpoint, is specifically
for use when playback files are classification restricted and require an account
level pin to access them.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.

* [GetPaymentMethod](#getpaymentmethod) - Get a payment method under an account.
* [GetPaymentMethods](#getpaymentmethods) - Get the available payment methods under an account.
* [GetProfileWithID](#getprofilewithid) - Get the summary of a profile with a specific id under the active account.
* [GetPurchases](#getpurchases) - Get a list of all purchases made under an account.
* [MakePurchase](#makepurchase) - Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.

* [RegisterDevice](#registerdevice) - Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.

* [RemovePaymentMethod](#removepaymentmethod) - Remove a payment method from an account.
* [RenameDevice](#renamedevice) - Rename a device
* [RequestEmailVerification](#requestemailverification) - Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.

* [UpdateAccount](#updateaccount) - Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.

* [UpdateProfileWithID](#updateprofilewithid) - Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.

* [UpdateSubscription](#updatesubscription) - Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.


## AddPaymentMethod

Add a new payment method to an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AddPaymentMethod(ctx, operations.AddPaymentMethodRequest{
        AddPaymentMethodRequest: shared.AddPaymentMethodRequest{
            MakeDefault: sdk.Bool(false),
            Token: "corrupti",
            Type: shared.AddPaymentMethodRequestTypeEnumCard,
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumHb,
        },
        Lang: sdk.String("iure"),
    }, operations.AddPaymentMethodSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```

## AuthorizeDevice

Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AuthorizeDevice(ctx, operations.AuthorizeDeviceRequest{
        DeviceAuthorizationCode: shared.DeviceAuthorizationCode{
            Code: "magnam",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumHb,
        },
        Lang: sdk.String("molestiae"),
    }, operations.AuthorizeDeviceSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CancelSubscription

Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CancelSubscription(ctx, operations.CancelSubscriptionRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumRpt,
        },
        ID: "6ed151a0-5dfc-42dd-b7cc-78ca1ba928fc",
        Lang: sdk.String("totam"),
    }, operations.CancelSubscriptionSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangePassword

Change the password of an account.

The expected token scope is Settings.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.ChangePassword(ctx, operations.ChangePasswordRequest{
        ChangePasswordRequest: shared.ChangePasswordRequest{
            Password: "beatae",
            ProfileToken: "commodi",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("impedit"),
    }, operations.ChangePasswordSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ChangePin

Change the pin of an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.ChangePin(ctx, operations.ChangePinRequest{
        ChangePinRequest: shared.ChangePinRequest{
            Pin: "cum",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumIdp,
            shared.FeatureFlagsEnumRpt,
        },
        Lang: sdk.String("aspernatur"),
    }, operations.ChangePinSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateProfile

Create a new profile under the active account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.CreateProfile(ctx, operations.CreateProfileRequest{
        ProfileCreationRequest: shared.ProfileCreationRequest{
            LanguageCode: sdk.String("perferendis"),
            Name: "Faye Cormier",
            PinEnabled: sdk.Bool(false),
            PurchaseEnabled: sdk.Bool(false),
            Segments: []string{
                "laboriosam",
                "hic",
                "saepe",
            },
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumRpt,
        },
        Lang: sdk.String("iure"),
    }, operations.CreateProfileSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileDetail != nil {
        // handle response
    }
}
```

## DeleteProfileWithID

Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DeleteProfileWithID(ctx, operations.DeleteProfileWithIDRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumCd,
        },
        ID: "aaa2352c-5955-4907-aff1-a3a2fa946773",
        Lang: sdk.String("error"),
    }, operations.DeleteProfileWithIDSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeregisterDevice

Deregister a playback device from an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DeregisterDevice(ctx, operations.DeregisterDeviceRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
        },
        ID: "1aa52c3f-5ad0-419d-a1ff-e78f097b0074",
        Lang: sdk.String("maiores"),
    }, operations.DeregisterDeviceSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenerateNonce

Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GenerateNonce(ctx, operations.GenerateNonceRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
        },
        Lang: sdk.String("dolore"),
    }, operations.GenerateNonceSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountNonce != nil {
        // handle response
    }
}
```

## GetAccount

Get the details of an account along with the profiles and entitlements under it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetAccount(ctx, operations.GetAccountRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumCas,
        },
        Lang: sdk.String("enim"),
    }, operations.GetAccountSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## GetDevice

Get a registered device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetDevice(ctx, operations.GetDeviceRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumIdp,
        },
        ID: "b99d488e-1e91-4e45-8ad2-abd44269802d",
        Lang: sdk.String("ipsam"),
    }, operations.GetDeviceSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## GetDevices

Get all devices registered under this account.

Also includes information around device registration and deregistration limits.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetDevices(ctx, operations.GetDevicesRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("dolorum"),
    }, operations.GetDevicesSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountDevices != nil {
        // handle response
    }
}
```

## GetEntitlements

Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetEntitlements(ctx, operations.GetEntitlementsRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumCas,
        },
        Lang: sdk.String("labore"),
    }, operations.GetEntitlementsSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Entitlements != nil {
        // handle response
    }
}
```

## GetItemMediaFiles

Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint accepts an Account Catalog token, however if when requesting
playback files you receive an *403 status code with error code 1* then the file
you're requesting is classification restricted. This means you should switch
to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
Playback token. If not already obtained, this token can be requested via the
`/itv/pinauthorization` endpoint with an account level pin.

For convenience you may also access free / public files through this endpoint
instead of the /items/{id}/videos endpoint, when authenticated.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetItemMediaFiles(ctx, operations.GetItemMediaFilesRequest{
        Delivery: []shared.MediaFileDeliveryEnum{
            shared.MediaFileDeliveryEnumProgressive,
            shared.MediaFileDeliveryEnumStream,
            shared.MediaFileDeliveryEnumDownload,
            shared.MediaFileDeliveryEnumProgressive,
        },
        Device: sdk.String("aliquid"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCas,
        },
        Formats: []shared.MediaFileFormatsEnum{
            shared.MediaFileFormatsEnumExternal,
        },
        ID: "fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66",
        Lang: sdk.String("natus"),
        Resolution: shared.MediaFileResolutionEnumSd,
        Segments: []string{
            "perferendis",
            "nihil",
        },
        Sub: sdk.String("magnam"),
    }, operations.GetItemMediaFilesSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaFiles != nil {
        // handle response
    }
}
```

## GetItemMediaFilesGuarded

Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint is identical to the `/account/items/{id}/videos` however it expects
an Account Playback token. This token, and in association this endpoint, is specifically
for use when playback files are classification restricted and require an account
level pin to access them.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetItemMediaFilesGuarded(ctx, operations.GetItemMediaFilesGuardedRequest{
        Delivery: []shared.MediaFileDeliveryEnum{
            shared.MediaFileDeliveryEnumProgressive,
            shared.MediaFileDeliveryEnumStream,
            shared.MediaFileDeliveryEnumStream,
        },
        Device: sdk.String("suscipit"),
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCd,
        },
        Formats: []shared.MediaFileFormatsEnum{
            shared.MediaFileFormatsEnumMp4,
        },
        ID: "41959890-afa5-463e-a516-fe4c8b711e5b",
        Lang: sdk.String("nihil"),
        Resolution: shared.MediaFileResolutionEnumExternal,
        Segments: []string{
            "sed",
            "saepe",
            "pariatur",
            "accusantium",
        },
        Sub: sdk.String("consequuntur"),
    }, operations.GetItemMediaFilesGuardedSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaFiles != nil {
        // handle response
    }
}
```

## GetPaymentMethod

Get a payment method under an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetPaymentMethod(ctx, operations.GetPaymentMethodRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumIdp,
            shared.FeatureFlagsEnumAll,
        },
        ID: "cddc6926-01fb-4576-b0d5-f0d30c5fbb25",
        Lang: sdk.String("totam"),
    }, operations.GetPaymentMethodSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethod != nil {
        // handle response
    }
}
```

## GetPaymentMethods

Get the available payment methods under an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetPaymentMethods(ctx, operations.GetPaymentMethodsRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumLdp,
        },
        Lang: sdk.String("nesciunt"),
    }, operations.GetPaymentMethodsSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentMethods != nil {
        // handle response
    }
}
```

## GetProfileWithID

Get the summary of a profile with a specific id under the active account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetProfileWithID(ctx, operations.GetProfileWithIDRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
        },
        ID: "2c73d5fe-9b90-4c28-909b-3fe49a8d9cbf",
        Lang: sdk.String("quaerat"),
    }, operations.GetProfileWithIDSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileSummary != nil {
        // handle response
    }
}
```

## GetPurchases

Get a list of all purchases made under an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.GetPurchases(ctx, operations.GetPurchasesRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumIdp,
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("dolor"),
    }, operations.GetPurchasesSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Purchases != nil {
        // handle response
    }
}
```

## MakePurchase

Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.MakePurchase(ctx, operations.MakePurchaseRequest{
        PurchaseRequest: shared.PurchaseRequest{
            ItemID: sdk.String("qui"),
            OfferID: sdk.String("ipsum"),
            PaymentMethodID: sdk.String("hic"),
            PlanID: sdk.String("excepturi"),
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("amet"),
    }, operations.MakePurchaseSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Entitlement != nil {
        // handle response
    }
}
```

## RegisterDevice

Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RegisterDevice(ctx, operations.RegisterDeviceRequest{
        DeviceRegistrationRequest: shared.DeviceRegistrationRequest{
            ID: "a4100674-ebf6-4928-8d1b-a77a89ebf737",
            Name: "Elbert Gislason I",
            Type: "optio",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCas,
        },
        Lang: sdk.String("provident"),
    }, operations.RegisterDeviceSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## RemovePaymentMethod

Remove a payment method from an account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RemovePaymentMethod(ctx, operations.RemovePaymentMethodRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumRpt,
        },
        ID: "a0d446ce-2af7-4a73-8f3b-e453f870b326",
        Lang: sdk.String("libero"),
    }, operations.RemovePaymentMethodSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RenameDevice

Rename a device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RenameDevice(ctx, operations.RenameDeviceRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumHb,
        },
        ID: "3429cdb1-a842-42bb-a79d-2322715bf0cb",
        Lang: sdk.String("nobis"),
        Name: "Miss Kerry Emmerich",
    }, operations.RenameDeviceSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestEmailVerification

Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.RequestEmailVerification(ctx, operations.RequestEmailVerificationRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumAll,
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("dolorem"),
    }, operations.RequestEmailVerificationSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAccount

Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateAccount(ctx, operations.UpdateAccountRequest{
        AccountUpdateRequest: shared.AccountUpdateRequest{
            Address: &shared.Address{
                AddressLine1: sdk.String("dolore"),
                AddressLine2: sdk.String("labore"),
                City: sdk.String("Lake Barbara"),
                Country: sdk.String("Bahamas"),
                Postcode: sdk.String("59068"),
                State: sdk.String("porro"),
            },
            DefaultPaymentInstrumentID: sdk.String("doloribus"),
            DefaultPaymentMethodID: sdk.String("ut"),
            FirstName: sdk.String("Mckayla"),
            LastName: sdk.String("McGlynn"),
            MinRatingPlaybackGuard: sdk.String("qui"),
            Segments: []string{
                "laudantium",
            },
            TrackingEnabled: sdk.Bool(false),
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumCd,
        },
        Lang: sdk.String("quisquam"),
    }, operations.UpdateAccountSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateProfileWithID

Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateProfileWithID(ctx, operations.UpdateProfileWithIDRequest{
        ProfileUpdateRequest: shared.ProfileUpdateRequest{
            HeroAutoplay: sdk.Bool(false),
            HeroWithAudio: sdk.Bool(false),
            LanguageCode: sdk.String("vero"),
            Name: sdk.String("Tim Erdman"),
            PinEnabled: sdk.Bool(false),
            PurchaseEnabled: sdk.Bool(false),
            Segments: []string{
                "vero",
            },
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumLrl,
        },
        ID: "7abd74dd-39c0-4f5d-acff-7c70a45626d4",
        Lang: sdk.String("ratione"),
    }, operations.UpdateProfileWithIDSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateSubscription

Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UpdateSubscription(ctx, operations.UpdateSubscriptionRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumRpt,
            shared.FeatureFlagsEnumAll,
        },
        ID: "3f16d9f5-fce6-4c55-a146-c3e250fb008c",
        Lang: sdk.String("aliquam"),
        PlanID: sdk.String("fugit"),
    }, operations.UpdateSubscriptionSecurity{
        AccountAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
