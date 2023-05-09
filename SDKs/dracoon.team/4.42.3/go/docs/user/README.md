# User

## Overview

User operations

### Available Operations

* [ChangeUserPassword](#changeuserpassword) - Change user's password
* [ConfirmTotpSetup](#confirmtotpsetup) - Confirm second factor TOTP setup with a generated OTP
* [CreateAndPreserveUserKeyPair](#createandpreserveuserkeypair) - Create key pair and preserve copy of old private key
* [DeleteMfaTotpSetup](#deletemfatotpsetup) - Disable a MFA TOTP setup with generated OTP
* [~~EnableCustomerEncryption~~](#enablecustomerencryption) - Activate client-side encryption for customer :warning: **Deprecated**
* [GetMfaStatusForUser](#getmfastatusforuser) - Request information about the user's mfa status
* [GetTotpSetupInformation](#gettotpsetupinformation) - Request information to setup TOTP as second authentication factor
* [ListDownloadShareSubscriptions](#listdownloadsharesubscriptions) - List Download Share subscriptions
* [ListNodeSubscriptions](#listnodesubscriptions) - List node subscriptions
* [ListUploadShareSubscriptions](#listuploadsharesubscriptions) - List Upload Share subscriptions
* [~~Logout~~](#logout) - Invalidate authentication token :warning: **Deprecated**
* [PingUser](#pinguser) - (authenticated) Ping
* [RemoveOAuthApproval](#removeoauthapproval) - Remove OAuth client approval
* [RemoveOAuthAuthorization](#removeoauthauthorization) - Remove a OAuth authorization
* [RemoveOAuthAuthorizations](#removeoauthauthorizations) - Remove all OAuth authorizations of a client
* [RemoveProfileAttribute](#removeprofileattribute) - Remove user profile attribute
* [RemoveUserKeyPair](#removeuserkeypair) - Remove user's key pair
* [RequestAvatar](#requestavatar) - Request avatar
* [RequestCustomerInfo](#requestcustomerinfo) - Request customer information for user
* [~~RequestCustomerKeyPair~~](#requestcustomerkeypair) - Request customer's key pair :warning: **Deprecated**
* [RequestListOfNotificationConfigs](#requestlistofnotificationconfigs) - Request list of notification configurations
* [RequestOAuthApprovals](#requestoauthapprovals) - Request list of OAuth client approvals
* [RequestOAuthAuthorizations](#requestoauthauthorizations) - Request list of OAuth client authorizations
* [RequestProfileAttributes](#requestprofileattributes) - Request user profile attributes
* [RequestUserInfo](#requestuserinfo) - Request user account information
* [RequestUserKeyPair](#requestuserkeypair) - Request user's key pair
* [RequestUserKeyPairs](#requestuserkeypairs) - Request all user key pairs
* [ResetAvatar](#resetavatar) - Reset avatar
* [~~SetProfileAttributes~~](#setprofileattributes) - Set user profile attributes :warning: **Deprecated**
* [SetUserKeyPair](#setuserkeypair) - Set user's key pair
* [SubscribeDownloadShare](#subscribedownloadshare) - Subscribe Download Share for notifications
* [SubscribeDownloadShares](#subscribedownloadshares) - Subscribe or Unsubscribe a List of Download Shares for notifications
* [SubscribeNode](#subscribenode) - Subscribe node for notifications
* [SubscribeUploadShare](#subscribeuploadshare) - Subscribe Upload Share for notifications
* [SubscribeUploadShares](#subscribeuploadshares) - Subscribe or Unsubscribe a List of Upload Shares for notifications
* [UnsubscribeDownloadShare](#unsubscribedownloadshare) - Unsubscribe Download Share from notifications
* [UnsubscribeNode](#unsubscribenode) - Unsubscribe node from notifications
* [UnsubscribeUploadShare](#unsubscribeuploadshare) - Unsubscribe Upload Share from notifications
* [UpdateNodeSubscriptions](#updatenodesubscriptions) - Subscribe or Unsubscribe a List of nodes for notifications
* [UpdateNotificationConfig](#updatenotificationconfig) - Update notification configuration
* [UpdateProfileAttributes](#updateprofileattributes) - Add or edit user profile attributes
* [UpdateUserAccount](#updateuseraccount) - Update user account
* [UploadAvatarAsMultipart](#uploadavatarasmultipart) - Change avatar
* [UseEmergencyCode](#useemergencycode) - Using emergency-code

## ChangeUserPassword

### Description:
Change the user's password.

### Precondition:
Authenticated user.

### Postcondition:
User's password is changed.

### Further Information:
The password **MUST** comply to configured password policies.  

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.ChangeUserPassword(ctx, operations.ChangeUserPasswordRequest{
        ChangeUserPasswordRequest: shared.ChangeUserPasswordRequest{
            NewPassword: "perspiciatis",
            OldPassword: "expedita",
        },
        XSdsAuthToken: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ConfirmTotpSetup

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:
Confirm second factor TOTP setup with a generated OTP.

### Precondition:
Authenticated user  

### Postcondition:
Second factor TOTP is enabled.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.ConfirmTotpSetup(ctx, operations.ConfirmTotpSetupRequest{
        MfaTotpConfirmationRequest: shared.MfaTotpConfirmationRequest{
            ID: 954334,
            Otp: "voluptate",
        },
        XSdsAuthToken: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateAndPreserveUserKeyPair

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Create user key pair and preserve copy of old private key.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is created.  
Copy of old private key is preserved.

### Further Information:
You can submit your old private key, encrypted with your current password.  
This allows migrating file keys encrypted with your old key pair to the new one.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.CreateAndPreserveUserKeyPair(ctx, operations.CreateAndPreserveUserKeyPairRequest{
        CreateKeyPairRequest: shared.CreateKeyPairRequest{
            PreviousPrivateKey: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2021-03-16T19:03:02.908Z"),
                CreatedBy: sdk.Int64(654082),
                PrivateKey: "impedit",
                Version: "ipsam",
            },
            PrivateKeyContainer: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-05-02T02:16:13.030Z"),
                CreatedBy: sdk.Int64(621666),
                PrivateKey: "esse",
                Version: "labore",
            },
            PublicKeyContainer: shared.PublicKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-02-15T20:15:24.019Z"),
                CreatedBy: sdk.Int64(233173),
                PublicKey: "vitae",
                Version: "inventore",
            },
        },
        XSdsAuthToken: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMfaTotpSetup

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:  
Delete multi-factor authentication TOTP setup with a valid OTP code.

### Precondition:
Authenticated user  
Multi-factor authentication is **NOT** enforced

### Postcondition:
Second factor TOTP is disabled.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.DeleteMfaTotpSetup(ctx, operations.DeleteMfaTotpSetupRequest{
        XSdsAuthToken: sdk.String("ad"),
        ID: 183033,
        ValidOtp: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~EnableCustomerEncryption~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>

### Use `POST /settings/keypair` API

### Description:  
Activate client-side encryption for according customer.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.

### Postcondition:
Client-side encryption is enabled.

### Further Information:
Sets the ability for this customer to encrypt rooms.  
Once enabled on customer level, it **CANNOT** be unset.  
On activation, a customer rescue key pair **MUST** be set.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.EnableCustomerEncryption(ctx, operations.EnableCustomerEncryptionRequest{
        EnableCustomerEncryptionRequest: shared.EnableCustomerEncryptionRequest{
            DataSpaceRescueKey: shared.UserKeyPairContainer{
                PrivateKeyContainer: shared.PrivateKeyContainer{
                    CreatedAt: types.MustTimeFromString("2022-08-19T19:35:40.341Z"),
                    CreatedBy: sdk.Int64(745233),
                    PrivateKey: "libero",
                    Version: "rem",
                },
                PublicKeyContainer: shared.PublicKeyContainer{
                    CreatedAt: types.MustTimeFromString("2022-01-09T23:54:38.052Z"),
                    CreatedBy: sdk.Int64(144691),
                    PublicKey: "alias",
                    Version: "magni",
                },
            },
            EnableCustomerEncryption: false,
        },
        XSdsAuthToken: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerData != nil {
        // handle response
    }
}
```

## GetMfaStatusForUser

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:
Request information about the user's mfa status

### Precondition:
Authenticated user.

### Postcondition:
None.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetMfaStatusForUser(ctx, operations.GetMfaStatusForUserRequest{
        XSdsAuthToken: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserMfaStatusResponse != nil {
        // handle response
    }
}
```

## GetTotpSetupInformation

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:  
Get setup information for multi-factor authentication (TOTP).

### Precondition:
Authenticated user.

### Postcondition:
None. 

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.GetTotpSetupInformation(ctx, operations.GetTotpSetupInformationRequest{
        XSdsAuthToken: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TotpSetupResponse != nil {
        // handle response
    }
}
```

## ListDownloadShareSubscriptions

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of subscribed Download Shares for current user. 

### Precondition:
Authenticated user.

### Postcondition:
List of subscribed Download Shares is returned.

### Further Information:
None.

### Filtering
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`authParentId:eq:#`  
Get download shares where `authParentId` equals `#`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`downloadShareId`** | Download Share ID filter | `eq` | Download Share ID equals value. | `long value` |
| **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`downloadShareId:desc|authParentId:asc`  
Sort by `downloadShareId` descending **AND** `authParentId` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`downloadShareId`** | Download Share ID |
| **`authParentId`** | Auth parent ID |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.ListDownloadShareSubscriptions(ctx, operations.ListDownloadShareSubscriptionsRequest{
        XSdsAuthToken: sdk.String("modi"),
        Filter: sdk.String("neque"),
        Limit: sdk.Int(348357),
        Offset: sdk.Int(932394),
        Sort: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribedDownloadShareList != nil {
        // handle response
    }
}
```

## ListNodeSubscriptions

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of subscribed nodes for current user. 

### Precondition:
Authenticated user.

### Postcondition:
List of subscribed nodes is returned.

### Further Information:
None.

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`authParentId:eq:#`  
Get nodes where `authParentId` equals `#`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`nodeId`** | Node ID filter | `eq` | Node ID equals value. | `long value` |
| **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`nodeId:desc|authParentId:asc`  
Sort by `nodeId` descending **AND** `authParentId` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`nodeId`** | Node ID |
| **`authParentId`** | Auth parent ID |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.ListNodeSubscriptions(ctx, operations.ListNodeSubscriptionsRequest{
        XSdsAuthToken: sdk.String("ipsum"),
        Filter: sdk.String("unde"),
        Limit: sdk.Int(858338),
        Offset: sdk.Int(714376),
        Sort: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribedNodeList != nil {
        // handle response
    }
}
```

## ListUploadShareSubscriptions

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Retrieve a list of subscribed Upload Shares for current user. 

### Precondition:
Authenticated user.

### Postcondition:
List of subscribed Upload Shares is returned.

### Further Information:
None.

### Filtering
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`targetNodeId:eq:#`  
Get upload shares where `targetNodeId` equals `#`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| **`uploadShareId`** | Upload Share ID filter | `eq` | Upload Share ID equals value. | `long value` |
| **`targetNodeId`** | Target node ID filter | `eq` | Target node ID equals value. | `long value` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`uploadShareId:desc|targetNodeId:asc`  
Sort by `uploadShareId` descending **AND** `targetNodeId` ascending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| **`uploadShareId`** | Upload Share ID |
| **`targetNodeId`** | Target node ID |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.ListUploadShareSubscriptions(ctx, operations.ListUploadShareSubscriptionsRequest{
        XSdsAuthToken: sdk.String("quia"),
        Filter: sdk.String("quia"),
        Limit: sdk.Int(342137),
        Offset: sdk.Int(605712),
        Sort: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribedUploadShareList != nil {
        // handle response
    }
}
```

## ~~Logout~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>

### Description:  
Log out a user.

### Precondition:
Authenticated user.

### Postcondition:
* User is logged out  
* Authentication token gets invalidated.

### Further Information:
None.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.Logout(ctx, operations.LogoutRequest{
        XSdsAuthToken: sdk.String("dicta"),
        Everywhere: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PingUser

### Description:
Test connection to DRACOON Server (while authenticated).

### Precondition:
Authenticated user.

### Postcondition:
`200 OK` with principal information is returned if successful.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.PingUser(ctx, operations.PingUserRequest{
        XSdsAuthToken: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PingUser200TextPlainString != nil {
        // handle response
    }
}
```

## RemoveOAuthApproval

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>

### Functional Description:
Delete an OAuth client approval.

### Precondition:
Authenticated user and valid client ID

### Postcondition:
OAuth Client approval is revoked.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RemoveOAuthApproval(ctx, operations.RemoveOAuthApprovalRequest{
        XSdsAuthToken: sdk.String("libero"),
        ClientID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveOAuthAuthorization

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>

### Description:
Delete an authorization.

### Precondition:
Authenticated user and valid client ID, authorization ID

### Postcondition:
Authorization is revoked.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RemoveOAuthAuthorization(ctx, operations.RemoveOAuthAuthorizationRequest{
        XSdsAuthToken: sdk.String("officia"),
        AuthorizationID: 554603,
        ClientID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveOAuthAuthorizations

### Description:
Delete all authorizations of a client.

### Precondition:
Authenticated user and valid client ID

### Postcondition:
All authorizations for the client are revoked.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RemoveOAuthAuthorizations(ctx, operations.RemoveOAuthAuthorizationsRequest{
        XSdsAuthToken: sdk.String("sit"),
        ClientID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveProfileAttribute

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>

### Description:  
Delete custom user profile attribute.

### Precondition:
None.

### Postcondition:
Custom user profile attribute is deleted.

### Further Information:
Allowed characters for keys are: `[a-zA-Z0-9_-]`

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RemoveProfileAttribute(ctx, operations.RemoveProfileAttributeRequest{
        XSdsAuthToken: sdk.String("ipsa"),
        Key: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveUserKeyPair

### Description:  
Delete user key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is deleted.

### Further Information:
If parameter `version` is not set and two key versions exist, this API deletes version A.      
If two keys with the same version are set, this API deletes the older one.

This will also remove all file keys that were encrypted with the user public key.
If the user had exclusive access to some files, those are removed as well since decrypting them became impossible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RemoveUserKeyPair(ctx, operations.RemoveUserKeyPairRequest{
        XSdsAuthToken: sdk.String("inventore"),
        Version: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestAvatar

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Get the avatar.

### Precondition:
Authenticated user.

### Postcondition:
Avatar is returned.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestAvatar(ctx, operations.RequestAvatarRequest{
        XSdsAuthToken: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Avatar != nil {
        // handle response
    }
}
```

## RequestCustomerInfo

### Description:  
Use this API to get: 
* customer name
* used / free space
* used / available
* user account info

of the according customer.

### Precondition:
Authenticated user.

### Postcondition:
Customer information is returned.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestCustomerInfo(ctx, operations.RequestCustomerInfoRequest{
        XSdsAuthToken: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerData != nil {
        // handle response
    }
}
```

## ~~RequestCustomerKeyPair~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>

### Use `GET /settings/keypair` API

### Description:  
Retrieve the customer rescue key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is returned.

### Further Information:
The private key is password-based encrypted with `AES256` / `PBKDF2`.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestCustomerKeyPair(ctx, operations.RequestCustomerKeyPairRequest{
        XSdsAuthToken: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserKeyPairContainer != nil {
        // handle response
    }
}
```

## RequestListOfNotificationConfigs

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Retrieve a list of notification configurations for current user. 

### Precondition:
Authenticated user.

### Postcondition:
List of available notification configurations is returned.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestListOfNotificationConfigs(ctx, operations.RequestListOfNotificationConfigsRequest{
        XSdsAuthToken: sdk.String("distinctio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationConfigList != nil {
        // handle response
    }
}
```

## RequestOAuthApprovals

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>

### Functional Description:  
Retrieve information about all OAuth client approvals.

### Precondition:
Authenticated user.

### Postcondition:
None.

### Further Information:
None.

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`clientName:desc`  
Sort by `clientName` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `clientName` | Client name |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestOAuthApprovals(ctx, operations.RequestOAuthApprovalsRequest{
        XSdsAuthToken: sdk.String("voluptatem"),
        XSdsDateFormat: operations.RequestOAuthApprovalsXSdsDateFormatEnumOffset.ToPointer(),
        Sort: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthApprovals != nil {
        // handle response
    }
}
```

## RequestOAuthAuthorizations

### Description:  
Retrieve information about all OAuth client authorizations.

### Precondition:
Authenticated user.

### Postcondition:
List of OAuth client authorizations is returned.

### Further Information:

### Filtering:
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`isStandard:eq:true`  
Get standard OAuth clients.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `isStandard` | Standard client filter | `eq` |  | `true or false` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort criteria are possible.  
Fields are connected via logical conjunction **AND**.

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`clientName:desc`  
Sort by `clientName` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `clientName` | Client name |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestOAuthAuthorizations(ctx, operations.RequestOAuthAuthorizationsRequest{
        XSdsAuthToken: sdk.String("dolores"),
        XSdsDateFormat: operations.RequestOAuthAuthorizationsXSdsDateFormatEnumLeet.ToPointer(),
        Filter: sdk.String("beatae"),
        Sort: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OAuthAuthorizations != nil {
        // handle response
    }
}
```

## RequestProfileAttributes

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>

### Description:  
Retrieve a list of user profile attributes.

### Precondition:
None.

### Postcondition:
List of attributes is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical conjunction (**AND**)  
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:cn:searchString_1|value:cn:searchString_2`  
Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `key` | User profile attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
| `value` | User profile attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`key:asc|value:desc`  
Sort by `key` ascending **AND** by `value` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `key` | User profile attribute key |
| `value` | User profile attribute value |

</details>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestProfileAttributes(ctx, operations.RequestProfileAttributesRequest{
        XSdsAuthToken: sdk.String("facere"),
        Filter: sdk.String("corrupti"),
        Limit: sdk.Int(473143),
        Offset: sdk.Int(588812),
        Sort: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttributesResponse != nil {
        // handle response
    }
}
```

## RequestUserInfo

### Description:  
Retrieves all information regarding the current user's account.

### Precondition:
Authenticated user.

### Postcondition:
User information is returned.

### Further Information:
Setting the query parameter `more_info` to `true`, causes the API to return more details e.g. the user's groups.  

`customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestUserInfo(ctx, operations.RequestUserInfoRequest{
        XSdsAuthToken: sdk.String("necessitatibus"),
        XSdsDateFormat: operations.RequestUserInfoXSdsDateFormatEnumEpoch.ToPointer(),
        MoreInfo: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserAccount != nil {
        // handle response
    }
}
```

## RequestUserKeyPair

### Description:  
Retrieve the user key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is returned. 

### Further Information:
The private key is password-based encrypted with `AES256` / `PBKDF2`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestUserKeyPair(ctx, operations.RequestUserKeyPairRequest{
        XSdsAuthToken: sdk.String("sint"),
        XSdsDateFormat: operations.RequestUserKeyPairXSdsDateFormatEnumOffset.ToPointer(),
        Version: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserKeyPairContainer != nil {
        // handle response
    }
}
```

## RequestUserKeyPairs

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Retrieve all user key pairs to allow re-encrypting file keys without need for a second distributor.

### Precondition:
Authenticated user.

### Postcondition:
List of key pairs is returned. 

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.RequestUserKeyPairs(ctx, operations.RequestUserKeyPairsRequest{
        XSdsAuthToken: sdk.String("ipsam"),
        XSdsDateFormat: operations.RequestUserKeyPairsXSdsDateFormatEnumEpoch.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserKeyPairContainers != nil {
        // handle response
    }
}
```

## ResetAvatar

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:  
Reset (custom) avatar to default avatar.

### Precondition:
Authenticated user.

### Postcondition:
* User's avatar gets deleted.  
* Default avatar is set.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.ResetAvatar(ctx, operations.ResetAvatarRequest{
        XSdsAuthToken: sdk.String("laudantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Avatar != nil {
        // handle response
    }
}
```

## ~~SetProfileAttributes~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>

### Description:  
Set custom user profile attributes.

### Precondition:
None.

### Postcondition:
Custom user profile attributes are set.

### Further Information:
Batch function.  
All existing user profile attributes will be deleted.  

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**  
* Maximum key length is **255**  
* Maximum value length is **4096**

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SetProfileAttributes(ctx, operations.SetProfileAttributesRequest{
        ProfileAttributesRequest: shared.ProfileAttributesRequest{
            Items: []shared.KeyValueEntry{
                shared.KeyValueEntry{
                    Key: "officiis",
                    Value: "voluptatibus",
                },
                shared.KeyValueEntry{
                    Key: "cum",
                    Value: "at",
                },
            },
        },
        XSdsAuthToken: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileAttributes != nil {
        // handle response
    }
}
```

## SetUserKeyPair

### Description:  
Set the user key pair.

### Precondition:
Authenticated user.

### Postcondition:
Key pair is set.

### Further Information:
Overwriting an existing key pair is **NOT** possible.  
Please delete the existing key pair first.  
The private key is password-based encrypted with `AES256` / `PBKDF2`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SetUserKeyPair(ctx, operations.SetUserKeyPairRequest{
        UserKeyPairContainer: shared.UserKeyPairContainer{
            PrivateKeyContainer: shared.PrivateKeyContainer{
                CreatedAt: types.MustTimeFromString("2022-04-22T15:10:37.825Z"),
                CreatedBy: sdk.Int64(684126),
                PrivateKey: "repudiandae",
                Version: "accusantium",
            },
            PublicKeyContainer: shared.PublicKeyContainer{
                CreatedAt: types.MustTimeFromString("2021-03-25T19:10:06.582Z"),
                CreatedBy: sdk.Int64(177005),
                PublicKey: "quibusdam",
                Version: "odio",
            },
        },
        XSdsAuthToken: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscribeDownloadShare

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Subscribe Download Share for notifications.

### Precondition:
User with _"manage download share"_ permissions on target node.

### Postcondition:
Download Share is subscribed.  
Notifications for this Download Share will be triggered in the future.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SubscribeDownloadShare(ctx, operations.SubscribeDownloadShareRequest{
        XSdsAuthToken: sdk.String("odit"),
        ShareID: 127688,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribedDownloadShare != nil {
        // handle response
    }
}
```

## SubscribeDownloadShares

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>

### Description:  
Subscribe/Unsubscribe download shares for notifications.

### Precondition:
User with _"manage download share"_ permissions on target node.



### Postcondition:
Download shares are subscribed or unsubscribed.
Notifications for these download shares will be triggered in the future.

### Further Information:
Maximum number of subscriptions is 200.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SubscribeDownloadShares(ctx, operations.SubscribeDownloadSharesRequest{
        UpdateSubscriptionsBulkRequest: shared.UpdateSubscriptionsBulkRequest{
            IsSubscribed: false,
            ObjectIds: []int64{
                621473,
                937117,
            },
        },
        XSdsAuthToken: sdk.String("adipisci"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SubscribeNode

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:
Subscribe node for notifications.

### Precondition:
User has _"read"_ permissions in auth parent room.

### Postcondition:
Node is subscribed.
Notifications for this node will be triggered in the future.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SubscribeNode(ctx, operations.SubscribeNodeRequest{
        XSdsAuthToken: sdk.String("recusandae"),
        NodeID: 630871,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribedNode != nil {
        // handle response
    }
}
```

## SubscribeUploadShare

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Subscribe Upload Share for notifications.

### Precondition:
User with _"manage upload share"_ permissions on target node.

### Postcondition:
Upload Share is subscribed.  
Notifications for this Upload Share will be triggered in the future.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SubscribeUploadShare(ctx, operations.SubscribeUploadShareRequest{
        XSdsAuthToken: sdk.String("ut"),
        ShareID: 693746,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribedUploadShare != nil {
        // handle response
    }
}
```

## SubscribeUploadShares

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>

### Description:  
Subscribe/Unsubscribe upload shares for notifications.

### Precondition:
User with _"manage upload share"_ permissions on target node.



### Postcondition:
Upload shares are subscribed or unsubscribed.
Notifications for these upload shares will be triggered in the future.

### Further Information:
Maximum number of subscriptions is 200.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.SubscribeUploadShares(ctx, operations.SubscribeUploadSharesRequest{
        UpdateSubscriptionsBulkRequest: shared.UpdateSubscriptionsBulkRequest{
            IsSubscribed: false,
            ObjectIds: []int64{
                106255,
                600213,
            },
        },
        XSdsAuthToken: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnsubscribeDownloadShare

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Unsubscribe Download Share from notifications.

### Precondition:
User with _"manage download share"_ permissions on target node.

### Postcondition:
Download Share is unsubscribed.  
Notifications for this Download Share are disabled.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UnsubscribeDownloadShare(ctx, operations.UnsubscribeDownloadShareRequest{
        XSdsAuthToken: sdk.String("delectus"),
        ShareID: 585593,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnsubscribeNode

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Unsubscribe node from notifications.

### Precondition:
User has _"read"_ permissions in auth parent room.

### Postcondition:
Node is unsubscribed.  
Notifications for this node are disabled.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UnsubscribeNode(ctx, operations.UnsubscribeNodeRequest{
        XSdsAuthToken: sdk.String("fugit"),
        NodeID: 253625,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UnsubscribeUploadShare

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>

### Description:  
Unsubscribe Upload Share from notifications.

### Precondition:
User with _"manage upload share"_ permissions on target node.

### Postcondition:
Upload Share is unsubscribed.  
Notifications for this Upload Share are disabled.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UnsubscribeUploadShare(ctx, operations.UnsubscribeUploadShareRequest{
        XSdsAuthToken: sdk.String("numquam"),
        ShareID: 201010,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateNodeSubscriptions

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>

### Description:  
Subscribe/Unsubscribe nodes for notifications.

### Precondition:
User has _"read"_ permissions in auth parent room.

### Postcondition:
Nodes are subscribed or unsubscribed.
Notifications for these nodes will be triggered in the future.

### Further Information:
Maximum number of subscriptions is 200.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateNodeSubscriptions(ctx, operations.UpdateNodeSubscriptionsRequest{
        UpdateSubscriptionsBulkRequest: shared.UpdateSubscriptionsBulkRequest{
            IsSubscribed: false,
            ObjectIds: []int64{
                637856,
                491892,
                760744,
                898961,
            },
        },
        XSdsAuthToken: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateNotificationConfig

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>

### Description:  
Update notification configuration for current user. 

### Precondition:
Authenticated user.

### Postcondition:
Notification configuration is updated.

### Further Information:
Leave `channelIds` empty to disable notifications.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateNotificationConfig(ctx, operations.UpdateNotificationConfigRequest{
        NotificationConfigChangeRequest: shared.NotificationConfigChangeRequest{
            ChannelIds: []int{
                708898,
            },
        },
        XSdsAuthToken: sdk.String("voluptatum"),
        ID: 587375,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationConfig != nil {
        // handle response
    }
}
```

## UpdateProfileAttributes

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>

### Description:  
Add or edit custom user profile attributes.
<br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>

### Precondition:
None.

### Postcondition:
Custom user profile attributes are added or edited.

### Further Information:
Batch function.  
If an entry existed before, it will be overwritten.  
Range submodel is never returned.

* Allowed characters for keys are: `[a-zA-Z0-9_-]`  
* Characters are **case-insensitive**  
* Maximum key length is **255**  
* Maximum value length is **4096**

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateProfileAttributes(ctx, operations.UpdateProfileAttributesRequest{
        ProfileAttributesRequest: shared.ProfileAttributesRequest{
            Items: []shared.KeyValueEntry{
                shared.KeyValueEntry{
                    Key: "placeat",
                    Value: "enim",
                },
                shared.KeyValueEntry{
                    Key: "neque",
                    Value: "in",
                },
            },
        },
        XSdsAuthToken: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProfileAttributes != nil {
        // handle response
    }
}
```

## UpdateUserAccount

### Description:  
Update current user's account.

### Precondition:
Authenticated user.

### Postcondition:
User's account is updated.

### Further Information:
* All input fields are limited to **150** characters.  
* **All** characters are allowed.  

`customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UpdateUserAccount(ctx, operations.UpdateUserAccountRequest{
        UpdateUserAccountRequest: shared.UpdateUserAccountRequest{
            AcceptEULA: sdk.Bool(false),
            Email: sdk.String("Dion91@yahoo.com"),
            FirstName: sdk.String("Wiley"),
            Gender: sdk.String("male"),
            Language: sdk.String("aperiam"),
            LastName: sdk.String("Rempel"),
            Login: sdk.String("ratione"),
            Phone: sdk.String("653-827-6367 x978"),
            Title: sdk.String("Mr."),
            UserName: sdk.String("Zita.Streich"),
        },
        XSdsAuthToken: sdk.String("aperiam"),
        XSdsDateFormat: operations.UpdateUserAccountXSdsDateFormatEnumOffset.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserAccount != nil {
        // handle response
    }
}
```

## UploadAvatarAsMultipart

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Change the avatar.

### Precondition:
Authenticated user.

### Postcondition:
Avatar is changed.

### Further Information:
* Media type **MUST** be `jpeg` or `png`
* File size **MUST** bei less than `5 MB`
* Dimensions **MUST** be `256x256 px`

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UploadAvatarAsMultipart(ctx, operations.UploadAvatarAsMultipartRequest{
        RequestBody: &operations.UploadAvatarAsMultipartRequestBody{
            File: operations.UploadAvatarAsMultipartRequestBodyFile{
                Content: []byte("minima"),
                File: "in",
            },
        },
        XSdsAuthToken: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Avatar != nil {
        // handle response
    }
}
```

## UseEmergencyCode

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>

### Description:
Using emergency code for login

### Precondition:
User has MFA enabled and is already logged in with account/pw (aka pre-Auth-Role)

### Postcondition:
All MFA-setups for the user are deleted.

### Further Information:




### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.User.UseEmergencyCode(ctx, operations.UseEmergencyCodeRequest{
        XSdsAuthToken: sdk.String("excepturi"),
        EmergencyCode: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
