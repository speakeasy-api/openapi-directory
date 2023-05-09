# account

### Available Operations

* [addPaymentMethod](#addpaymentmethod) - Add a new payment method to an account.
* [authorizeDevice](#authorizedevice) - Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the 
credentials of the user.

* [cancelSubscription](#cancelsubscription) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [changePassword](#changepassword) - Change the password of an account.

The expected token scope is Settings.

* [changePin](#changepin) - Change the pin of an account.
* [createProfile](#createprofile) - Create a new profile under the active account.
* [deleteProfileWithId](#deleteprofilewithid) - Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.

* [deregisterDevice](#deregisterdevice) - Deregister a playback device from an account.
* [generateNonce](#generatenonce) - Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.

* [getAccount](#getaccount) - Get the details of an account along with the profiles and entitlements under it.
* [getDevice](#getdevice) - Get a registered device.
* [getDevices](#getdevices) - Get all devices registered under this account.

Also includes information around device registration and deregistration limits.

* [getEntitlements](#getentitlements) - Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.

* [getItemMediaFiles](#getitemmediafiles) - Get the video files associated with an item given maximum resolution, device type
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

* [getItemMediaFilesGuarded](#getitemmediafilesguarded) - Get the video files associated with an item given maximum resolution, device type
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

* [getPaymentMethod](#getpaymentmethod) - Get a payment method under an account.
* [getPaymentMethods](#getpaymentmethods) - Get the available payment methods under an account.
* [getProfileWithId](#getprofilewithid) - Get the summary of a profile with a specific id under the active account.
* [getPurchases](#getpurchases) - Get a list of all purchases made under an account.
* [makePurchase](#makepurchase) - Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.

* [registerDevice](#registerdevice) - Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.

* [removePaymentMethod](#removepaymentmethod) - Remove a payment method from an account.
* [renameDevice](#renamedevice) - Rename a device
* [requestEmailVerification](#requestemailverification) - Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.

* [updateAccount](#updateaccount) - Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.

* [updateProfileWithId](#updateprofilewithid) - Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.

* [updateSubscription](#updatesubscription) - Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.


## addPaymentMethod

Add a new payment method to an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddPaymentMethodRequest;
import org.openapis.openapi.models.operations.AddPaymentMethodResponse;
import org.openapis.openapi.models.operations.AddPaymentMethodSecurity;
import org.openapis.openapi.models.shared.AddPaymentMethodRequest;
import org.openapis.openapi.models.shared.AddPaymentMethodRequestTypeEnum;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddPaymentMethodRequest req = new AddPaymentMethodRequest(                new AddPaymentMethodRequest("illum", AddPaymentMethodRequestTypeEnum.CARD) {{
                                makeDefault = false;
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "suscipit";
            }};            

            AddPaymentMethodResponse res = sdk.account.addPaymentMethod(req, new AddPaymentMethodSecurity("iure") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## authorizeDevice

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthorizeDeviceRequest;
import org.openapis.openapi.models.operations.AuthorizeDeviceResponse;
import org.openapis.openapi.models.operations.AuthorizeDeviceSecurity;
import org.openapis.openapi.models.shared.DeviceAuthorizationCode;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthorizeDeviceRequest req = new AuthorizeDeviceRequest(                new DeviceAuthorizationCode("magnam");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "molestiae";
            }};            

            AuthorizeDeviceResponse res = sdk.account.authorizeDevice(req, new AuthorizeDeviceSecurity("minus") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelSubscription

Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelSubscriptionRequest;
import org.openapis.openapi.models.operations.CancelSubscriptionResponse;
import org.openapis.openapi.models.operations.CancelSubscriptionSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelSubscriptionRequest req = new CancelSubscriptionRequest("placeat") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "recusandae";
            }};            

            CancelSubscriptionResponse res = sdk.account.cancelSubscription(req, new CancelSubscriptionSecurity("temporibus") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePassword

Change the password of an account.

The expected token scope is Settings.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordRequest;
import org.openapis.openapi.models.operations.ChangePasswordResponse;
import org.openapis.openapi.models.operations.ChangePasswordSecurity;
import org.openapis.openapi.models.shared.ChangePasswordRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordRequest req = new ChangePasswordRequest(                new ChangePasswordRequest("ab", "quis");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "perferendis";
            }};            

            ChangePasswordResponse res = sdk.account.changePassword(req, new ChangePasswordSecurity("ipsam") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## changePin

Change the pin of an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePinRequest;
import org.openapis.openapi.models.operations.ChangePinResponse;
import org.openapis.openapi.models.operations.ChangePinSecurity;
import org.openapis.openapi.models.shared.ChangePinRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePinRequest req = new ChangePinRequest(                new ChangePinRequest("repellendus");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "maiores";
            }};            

            ChangePinResponse res = sdk.account.changePin(req, new ChangePinSecurity("molestiae") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProfile

Create a new profile under the active account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProfileRequest;
import org.openapis.openapi.models.operations.CreateProfileResponse;
import org.openapis.openapi.models.operations.CreateProfileSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ProfileCreationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProfileRequest req = new CreateProfileRequest(                new ProfileCreationRequest("quod") {{
                                languageCode = "quod";
                                pinEnabled = false;
                                purchaseEnabled = false;
                                segments = new String[]{{
                                    add("totam"),
                                    add("porro"),
                                }};
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "occaecati";
            }};            

            CreateProfileResponse res = sdk.account.createProfile(req, new CreateProfileSecurity("fugit") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.profileDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfileWithId

Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfileWithIdRequest;
import org.openapis.openapi.models.operations.DeleteProfileWithIdResponse;
import org.openapis.openapi.models.operations.DeleteProfileWithIdSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProfileWithIdRequest req = new DeleteProfileWithIdRequest("deleniti") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LRL),
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "molestiae";
            }};            

            DeleteProfileWithIdResponse res = sdk.account.deleteProfileWithId(req, new DeleteProfileWithIdSecurity("modi") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deregisterDevice

Deregister a playback device from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeregisterDeviceRequest;
import org.openapis.openapi.models.operations.DeregisterDeviceResponse;
import org.openapis.openapi.models.operations.DeregisterDeviceSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeregisterDeviceRequest req = new DeregisterDeviceRequest("qui") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.RPT),
                }};
                lang = "aspernatur";
            }};            

            DeregisterDeviceResponse res = sdk.account.deregisterDevice(req, new DeregisterDeviceSecurity("perferendis") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateNonce

Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateNonceRequest;
import org.openapis.openapi.models.operations.GenerateNonceResponse;
import org.openapis.openapi.models.operations.GenerateNonceSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateNonceRequest req = new GenerateNonceRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.IDP),
                }};
                lang = "iste";
            }};            

            GenerateNonceResponse res = sdk.account.generateNonce(req, new GenerateNonceSecurity("dolor") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountNonce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccount

Get the details of an account along with the profiles and entitlements under it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountRequest;
import org.openapis.openapi.models.operations.GetAccountResponse;
import org.openapis.openapi.models.operations.GetAccountSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountRequest req = new GetAccountRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "fuga";
            }};            

            GetAccountResponse res = sdk.account.getAccount(req, new GetAccountSecurity("in") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevice

Get a registered device.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceRequest;
import org.openapis.openapi.models.operations.GetDeviceResponse;
import org.openapis.openapi.models.operations.GetDeviceSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDeviceRequest req = new GetDeviceRequest("corporis") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "architecto";
            }};            

            GetDeviceResponse res = sdk.account.getDevice(req, new GetDeviceSecurity("ipsa") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDevices

Get all devices registered under this account.

Also includes information around device registration and deregistration limits.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDevicesRequest;
import org.openapis.openapi.models.operations.GetDevicesResponse;
import org.openapis.openapi.models.operations.GetDevicesSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDevicesRequest req = new GetDevicesRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.IDP),
                }};
                lang = "dolorem";
            }};            

            GetDevicesResponse res = sdk.account.getDevices(req, new GetDevicesSecurity("corporis") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accountDevices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEntitlements

Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEntitlementsRequest;
import org.openapis.openapi.models.operations.GetEntitlementsResponse;
import org.openapis.openapi.models.operations.GetEntitlementsSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEntitlementsRequest req = new GetEntitlementsRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "enim";
            }};            

            GetEntitlementsResponse res = sdk.account.getEntitlements(req, new GetEntitlementsSecurity("omnis") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entitlements != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemMediaFiles

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemMediaFilesRequest;
import org.openapis.openapi.models.operations.GetItemMediaFilesResponse;
import org.openapis.openapi.models.operations.GetItemMediaFilesSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.MediaFileDeliveryEnum;
import org.openapis.openapi.models.shared.MediaFileFormatsEnum;
import org.openapis.openapi.models.shared.MediaFileResolutionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemMediaFilesRequest req = new GetItemMediaFilesRequest(                new org.openapis.openapi.models.shared.MediaFileDeliveryEnum[]{{
                                add(MediaFileDeliveryEnum.STREAM),
                                add(MediaFileDeliveryEnum.PROGRESSIVE),
                            }}, "accusantium", MediaFileResolutionEnum.HD720) {{
                device = "culpa";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.IDP),
                }};
                formats = new org.openapis.openapi.models.shared.MediaFileFormatsEnum[]{{
                    add(MediaFileFormatsEnum.MP4),
                    add(MediaFileFormatsEnum.EXTERNAL),
                    add(MediaFileFormatsEnum.HLS),
                }};
                lang = "occaecati";
                segments = new String[]{{
                    add("commodi"),
                    add("quam"),
                }};
                sub = "molestiae";
            }};            

            GetItemMediaFilesResponse res = sdk.account.getItemMediaFiles(req, new GetItemMediaFilesSecurity("velit") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.mediaFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemMediaFilesGuarded

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemMediaFilesGuardedRequest;
import org.openapis.openapi.models.operations.GetItemMediaFilesGuardedResponse;
import org.openapis.openapi.models.operations.GetItemMediaFilesGuardedSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.MediaFileDeliveryEnum;
import org.openapis.openapi.models.shared.MediaFileFormatsEnum;
import org.openapis.openapi.models.shared.MediaFileResolutionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemMediaFilesGuardedRequest req = new GetItemMediaFilesGuardedRequest(                new org.openapis.openapi.models.shared.MediaFileDeliveryEnum[]{{
                                add(MediaFileDeliveryEnum.STREAM),
                                add(MediaFileDeliveryEnum.PROGRESSIVE),
                                add(MediaFileDeliveryEnum.STREAM),
                            }}, "laborum", MediaFileResolutionEnum.SD) {{
                device = "enim";
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LRL),
                }};
                formats = new org.openapis.openapi.models.shared.MediaFileFormatsEnum[]{{
                    add(MediaFileFormatsEnum.EXTERNAL),
                }};
                lang = "ipsam";
                segments = new String[]{{
                    add("possimus"),
                    add("aut"),
                    add("quasi"),
                }};
                sub = "error";
            }};            

            GetItemMediaFilesGuardedResponse res = sdk.account.getItemMediaFilesGuarded(req, new GetItemMediaFilesGuardedSecurity("temporibus") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.mediaFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentMethod

Get a payment method under an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentMethodRequest;
import org.openapis.openapi.models.operations.GetPaymentMethodResponse;
import org.openapis.openapi.models.operations.GetPaymentMethodSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentMethodRequest req = new GetPaymentMethodRequest("laborum") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "voluptatibus";
            }};            

            GetPaymentMethodResponse res = sdk.account.getPaymentMethod(req, new GetPaymentMethodSecurity("vero") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentMethod != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentMethods

Get the available payment methods under an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentMethodsRequest;
import org.openapis.openapi.models.operations.GetPaymentMethodsResponse;
import org.openapis.openapi.models.operations.GetPaymentMethodsSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentMethodsRequest req = new GetPaymentMethodsRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "ipsa";
            }};            

            GetPaymentMethodsResponse res = sdk.account.getPaymentMethods(req, new GetPaymentMethodsSecurity("omnis") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentMethods != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProfileWithId

Get the summary of a profile with a specific id under the active account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProfileWithIdRequest;
import org.openapis.openapi.models.operations.GetProfileWithIdResponse;
import org.openapis.openapi.models.operations.GetProfileWithIdSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProfileWithIdRequest req = new GetProfileWithIdRequest("voluptate") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "ut";
            }};            

            GetProfileWithIdResponse res = sdk.account.getProfileWithId(req, new GetProfileWithIdSecurity("maiores") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.profileSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPurchases

Get a list of all purchases made under an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPurchasesRequest;
import org.openapis.openapi.models.operations.GetPurchasesResponse;
import org.openapis.openapi.models.operations.GetPurchasesSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPurchasesRequest req = new GetPurchasesRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                }};
                lang = "dolore";
            }};            

            GetPurchasesResponse res = sdk.account.getPurchases(req, new GetPurchasesSecurity("iusto") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.purchases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## makePurchase

Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MakePurchaseRequest;
import org.openapis.openapi.models.operations.MakePurchaseResponse;
import org.openapis.openapi.models.operations.MakePurchaseSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.PurchaseRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MakePurchaseRequest req = new MakePurchaseRequest(                new PurchaseRequest() {{
                                itemId = "dicta";
                                offerId = "harum";
                                paymentMethodId = "enim";
                                planId = "accusamus";
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.ALL),
                }};
                lang = "ipsum";
            }};            

            MakePurchaseResponse res = sdk.account.makePurchase(req, new MakePurchaseSecurity("quidem") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.entitlement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registerDevice

Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegisterDeviceRequest;
import org.openapis.openapi.models.operations.RegisterDeviceResponse;
import org.openapis.openapi.models.operations.RegisterDeviceSecurity;
import org.openapis.openapi.models.shared.DeviceRegistrationRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegisterDeviceRequest req = new RegisterDeviceRequest(                new DeviceRegistrationRequest("molestias", "excepturi", "pariatur");) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.RPT),
                }};
                lang = "voluptates";
            }};            

            RegisterDeviceResponse res = sdk.account.registerDevice(req, new RegisterDeviceSecurity("quasi") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removePaymentMethod

Remove a payment method from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemovePaymentMethodRequest;
import org.openapis.openapi.models.operations.RemovePaymentMethodResponse;
import org.openapis.openapi.models.operations.RemovePaymentMethodSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemovePaymentMethodRequest req = new RemovePaymentMethodRequest("repudiandae") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LDP),
                }};
                lang = "enim";
            }};            

            RemovePaymentMethodResponse res = sdk.account.removePaymentMethod(req, new RemovePaymentMethodSecurity("consequatur") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## renameDevice

Rename a device

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenameDeviceRequest;
import org.openapis.openapi.models.operations.RenameDeviceResponse;
import org.openapis.openapi.models.operations.RenameDeviceSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RenameDeviceRequest req = new RenameDeviceRequest("est", "quibusdam") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "distinctio";
            }};            

            RenameDeviceResponse res = sdk.account.renameDevice(req, new RenameDeviceSecurity("quibusdam") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestEmailVerification

Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestEmailVerificationRequest;
import org.openapis.openapi.models.operations.RequestEmailVerificationResponse;
import org.openapis.openapi.models.operations.RequestEmailVerificationSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RequestEmailVerificationRequest req = new RequestEmailVerificationRequest() {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.IDP),
                }};
                lang = "aliquid";
            }};            

            RequestEmailVerificationResponse res = sdk.account.requestEmailVerification(req, new RequestEmailVerificationSecurity("cupiditate") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccount

Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountRequest;
import org.openapis.openapi.models.operations.UpdateAccountResponse;
import org.openapis.openapi.models.operations.UpdateAccountSecurity;
import org.openapis.openapi.models.shared.AccountUpdateRequest;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountRequest req = new UpdateAccountRequest(                new AccountUpdateRequest() {{
                                address = new Address() {{
                                    addressLine1 = "quos";
                                    addressLine2 = "perferendis";
                                    city = "Port Friedrichtown";
                                    country = "Cambodia";
                                    postcode = "52772-9427";
                                    state = "sint";
                                }};;
                                defaultPaymentInstrumentId = "aliquid";
                                defaultPaymentMethodId = "provident";
                                firstName = "Sonya";
                                lastName = "Marquardt";
                                minRatingPlaybackGuard = "officia";
                                segments = new String[]{{
                                    add("debitis"),
                                }};
                                trackingEnabled = false;
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "maiores";
            }};            

            UpdateAccountResponse res = sdk.account.updateAccount(req, new UpdateAccountSecurity("rerum") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProfileWithId

Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProfileWithIdRequest;
import org.openapis.openapi.models.operations.UpdateProfileWithIdResponse;
import org.openapis.openapi.models.operations.UpdateProfileWithIdSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;
import org.openapis.openapi.models.shared.ProfileUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProfileWithIdRequest req = new UpdateProfileWithIdRequest(                new ProfileUpdateRequest() {{
                                heroAutoplay = false;
                                heroWithAudio = false;
                                languageCode = "dicta";
                                name = "Blanca Schulist";
                                pinEnabled = false;
                                purchaseEnabled = false;
                                segments = new String[]{{
                                    add("accusamus"),
                                    add("non"),
                                    add("occaecati"),
                                }};
                            }};, "enim") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.RPT),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "id";
            }};            

            UpdateProfileWithIdResponse res = sdk.account.updateProfileWithId(req, new UpdateProfileWithIdSecurity("blanditiis") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubscription

Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubscriptionRequest;
import org.openapis.openapi.models.operations.UpdateSubscriptionResponse;
import org.openapis.openapi.models.operations.UpdateSubscriptionSecurity;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSubscriptionRequest req = new UpdateSubscriptionRequest("deleniti") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.IDP),
                    add(FeatureFlagsEnum.CAS),
                    add(FeatureFlagsEnum.HB),
                    add(FeatureFlagsEnum.HB),
                }};
                lang = "natus";
                planId = "omnis";
            }};            

            UpdateSubscriptionResponse res = sdk.account.updateSubscription(req, new UpdateSubscriptionSecurity("molestiae") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
