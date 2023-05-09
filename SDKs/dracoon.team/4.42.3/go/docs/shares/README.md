# Shares

## Overview

Upload and Download Shares

### Available Operations

* [CreateDownloadShare](#createdownloadshare) - Create new Download Share
* [CreateUploadShare](#createuploadshare) - Create new Upload Share
* [DeleteDownloadShares](#deletedownloadshares) - Remove Download Shares
* [DeleteUploadShares](#deleteuploadshares) - Remove Upload Shares
* [RemoveDownloadShare](#removedownloadshare) - Remove Download Share
* [RemoveUploadShare](#removeuploadshare) - Remove Upload Share
* [RequestDownloadShare](#requestdownloadshare) - Request Download Share
* [RequestDownloadShareQr](#requestdownloadshareqr) - Request Download Share via QR Code
* [RequestDownloadShares](#requestdownloadshares) - Request list of Download Shares
* [RequestUploadShare](#requestuploadshare) - Request Upload Share
* [RequestUploadShareQr](#requestuploadshareqr) - Request Upload Share via QR Code
* [RequestUploadShares](#requestuploadshares) - Request list of Upload Shares
* [SendDownloadShareLinkViaEmail](#senddownloadsharelinkviaemail) - Send an existing Download Share link via email
* [SendUploadShareLinkViaEmail](#senduploadsharelinkviaemail) - Send an existing Upload Share link via email
* [UpdateDownloadShare](#updatedownloadshare) - Update Download Share
* [UpdateDownloadShares](#updatedownloadshares) - Update a list of Download Shares
* [UpdateUploadShare](#updateuploadshare) - Update Upload Share
* [UpdateUploadShares](#updateuploadshares) - Update List of Upload Shares

## CreateDownloadShare

### Description:
Create a new Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is created.

### Further Information:

If the target node is a room: subordinary rooms are excluded from a Download Share.

* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **1024** characters.

Use `POST /shares/downloads/{share_id}/email` API for sending emails.  

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
may not be displayed correctly in short messages (SMS).

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
    res, err := s.Shares.CreateDownloadShare(ctx, operations.CreateDownloadShareRequest{
        CreateDownloadShareRequest: shared.CreateDownloadShareRequest{
            CreatorLanguage: sdk.String("ipsa"),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-11-17T09:54:13.457Z"),
            },
            FileKey: &shared.FileKey{
                Iv: "molestiae",
                Key: "eveniet",
                Tag: "qui",
                Version: "cum",
            },
            InternalNotes: sdk.String("iure"),
            KeyPair: &shared.UserKeyPairContainer{
                PrivateKeyContainer: shared.PrivateKeyContainer{
                    CreatedAt: types.MustTimeFromString("2022-06-09T15:08:05.768Z"),
                    CreatedBy: sdk.Int64(672582),
                    PrivateKey: "distinctio",
                    Version: "voluptatum",
                },
                PublicKeyContainer: shared.PublicKeyContainer{
                    CreatedAt: types.MustTimeFromString("2022-05-23T18:05:58.128Z"),
                    CreatedBy: sdk.Int64(320565),
                    PublicKey: "repellat",
                    Version: "alias",
                },
            },
            MailBody: sdk.String("corporis"),
            MailRecipients: sdk.String("perspiciatis"),
            MailSubject: sdk.String("nihil"),
            MaxDownloads: sdk.Int(649078),
            Name: sdk.String("Linda Wuckert"),
            NodeID: 663866,
            Notes: sdk.String("minima"),
            NotifyCreator: sdk.Bool(false),
            Password: sdk.String("dolore"),
            ReceiverLanguage: sdk.String("dolorum"),
            SendMail: sdk.Bool(false),
            SendSms: sdk.Bool(false),
            ShowCreatorName: sdk.Bool(false),
            ShowCreatorUsername: sdk.Bool(false),
            SmsRecipients: sdk.String("nesciunt"),
            TextMessageRecipients: []string{
                "recusandae",
            },
        },
        XSdsAuthToken: sdk.String("omnis"),
        XSdsDateFormat: operations.CreateDownloadShareXSdsDateFormatEnumLocal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadShare != nil {
        // handle response
    }
}
```

## CreateUploadShare

### Description:
Create a new Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is created.

### Further Information:

* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **1024** characters.

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]  

Use `POST /shares/uploads/{share_id}/email` API for sending emails.

Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
may not be displayed correctly in short messages (SMS).

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
    res, err := s.Shares.CreateUploadShare(ctx, operations.CreateUploadShareRequest{
        CreateUploadShareRequest: shared.CreateUploadShareRequest{
            CreatorLanguage: sdk.String("molestiae"),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-09-19T08:09:35.938Z"),
            },
            FilesExpiryPeriod: sdk.Int(633062),
            InternalNotes: sdk.String("adipisci"),
            MailBody: sdk.String("debitis"),
            MailRecipients: sdk.String("laudantium"),
            MailSubject: sdk.String("eum"),
            MaxSize: sdk.Int64(367927),
            MaxSlots: sdk.Int(928219),
            Name: sdk.String("Sherri Hauck"),
            Notes: sdk.String("provident"),
            NotifyCreator: sdk.Bool(false),
            Password: sdk.String("aspernatur"),
            ReceiverLanguage: sdk.String("ullam"),
            SendMail: sdk.Bool(false),
            SendSms: sdk.Bool(false),
            ShowCreatorName: sdk.Bool(false),
            ShowCreatorUsername: sdk.Bool(false),
            ShowUploadedFiles: sdk.Bool(false),
            SmsRecipients: sdk.String("quasi"),
            TargetID: 657020,
            TextMessageRecipients: []string{
                "mollitia",
                "provident",
            },
        },
        XSdsAuthToken: sdk.String("possimus"),
        XSdsDateFormat: operations.CreateUploadShareXSdsDateFormatEnumEpoch.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadShare != nil {
        // handle response
    }
}
```

## DeleteDownloadShares

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>

### Functional Description:
Delete multiple Download Shares.

### Precondition:
User with _"manage download share"_ permissions on target nodes.

### Postcondition:
Download Shares are deleted.

### Further Information:
Only the Download Shares are removed; the referenced files or containers persists.

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
    res, err := s.Shares.DeleteDownloadShares(ctx, operations.DeleteDownloadSharesRequest{
        DeleteDownloadSharesRequest: shared.DeleteDownloadSharesRequest{
            ShareIds: []int64{
                397257,
                37565,
            },
        },
        XSdsAuthToken: sdk.String("repellat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUploadShares

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>

### Functional Description:
Delete multiple Upload Shares (aka Upload Accounts).

### Precondition:
User has _"manage upload share"_ permissions on target containers.

### Postcondition:
Upload Shares are deleted.

### Further Information:
Only the Upload Shares are removed; already uploaded files and the target container persist.

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
    res, err := s.Shares.DeleteUploadShares(ctx, operations.DeleteUploadSharesRequest{
        DeleteUploadSharesRequest: shared.DeleteUploadSharesRequest{
            ShareIds: []int64{
                351893,
                448143,
                721407,
                937636,
            },
        },
        XSdsAuthToken: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveDownloadShare

### Description:
Delete a Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is deleted.

### Further Information:
Only the Download Share is removed; the referenced file or container persists.

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
    res, err := s.Shares.RemoveDownloadShare(ctx, operations.RemoveDownloadShareRequest{
        XSdsAuthToken: sdk.String("laborum"),
        ShareID: 813054,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveUploadShare

### Description:
Delete an Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is deleted.

### Further Information:
Only the Upload Share is removed; already uploaded files and the target container persist.

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
    res, err := s.Shares.RemoveUploadShare(ctx, operations.RemoveUploadShareRequest{
        XSdsAuthToken: sdk.String("modi"),
        ShareID: 976226,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestDownloadShare

### Description:  
Retrieve detailed information about one Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is returned

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
    res, err := s.Shares.RequestDownloadShare(ctx, operations.RequestDownloadShareRequest{
        XSdsAuthToken: sdk.String("molestias"),
        XSdsDateFormat: operations.RequestDownloadShareXSdsDateFormatEnumLeet.ToPointer(),
        ShareID: 956933,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadShare != nil {
        // handle response
    }
}
```

## RequestDownloadShareQr

### Description:  
Retrieve detailed information about one Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is returned

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
    res, err := s.Shares.RequestDownloadShareQr(ctx, operations.RequestDownloadShareQrRequest{
        XSdsAuthToken: sdk.String("cumque"),
        XSdsDateFormat: operations.RequestDownloadShareQrXSdsDateFormatEnumUtc.ToPointer(),
        ShareID: 698249,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadShare != nil {
        // handle response
    }
}
```

## RequestDownloadShares

### Description:  
Retrieve a list of Download Shares.

### Precondition:
Authenticated user.

### Postcondition:
List of available Download Shares is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.

Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:searchString_1|createdBy:cn:searchString_2`
Filter by file name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Alias or node name filter | `cn` | Alias or node name contains value. | `search String` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
| `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
| `nodeId` | Source node ID | `eq` | Source node (room, folder, file) ID equals value. | `positive Integer` |
| `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`userId`</del>  | Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead | `positive Integer` |

</details>

---

### Sorting:
Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:asc|expireAt:desc`  
Sort by `name` ascending **AND** by `expireAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Alias or node name |
| `notifyCreator` | Notify creator on every download |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |
| `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |

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
    res, err := s.Shares.RequestDownloadShares(ctx, operations.RequestDownloadSharesRequest{
        XSdsAuthToken: sdk.String("tempora"),
        XSdsDateFormat: operations.RequestDownloadSharesXSdsDateFormatEnumLocal.ToPointer(),
        Filter: sdk.String("inventore"),
        Limit: sdk.Int(147685),
        Offset: sdk.Int(765271),
        Sort: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadShareList != nil {
        // handle response
    }
}
```

## RequestUploadShare

### Description:  
Retrieve detailed information about one Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is returned.

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
    res, err := s.Shares.RequestUploadShare(ctx, operations.RequestUploadShareRequest{
        XSdsAuthToken: sdk.String("perferendis"),
        XSdsDateFormat: operations.RequestUploadShareXSdsDateFormatEnumLocal.ToPointer(),
        ShareID: 137251,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadShare != nil {
        // handle response
    }
}
```

## RequestUploadShareQr

### Description:  
Retrieve detailed information about one Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share is returned.

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
    res, err := s.Shares.RequestUploadShareQr(ctx, operations.RequestUploadShareQrRequest{
        XSdsAuthToken: sdk.String("eum"),
        XSdsDateFormat: operations.RequestUploadShareQrXSdsDateFormatEnumLocal.ToPointer(),
        ShareID: 521996,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadShare != nil {
        // handle response
    }
}
```

## RequestUploadShares

### Description:  
Retrieve a list of Upload Shares (aka File Requests).

### Precondition:
Authenticated user.

### Postcondition:
List of available Upload Shares is returned.

### Further Information:

### Filtering:
All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:cn:searchString_1|createdBy:cn:searchString_2`  
Filter by alias name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.

</details>

### Filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| `name` | Alias name filter | `cn` | Alias name contains value. | `search String` |
| `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
| `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
| `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
| `userId` | Creator user ID | `eq` | Creator user ID equals value. | `positive Integer` |
| `targetId` | Target node ID | `eq` | Target node (room, folder) ID equals value. | `positive Integer` |
| `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
| `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |

</details>

### Deprecated filtering options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
| :--- | :--- | :--- | :--- | :--- |
| <del>`targetId`</del> | Target node ID | `cn` | Target node (room, folder) ID equals value. | `positive Integer` |
| <del>`userId` </del>| Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead. | `positive Integer` |

</details>

---

Sort string syntax: `FIELD_NAME:ORDER`  
`ORDER` can be `asc` or `desc`.  
Multiple sort fields are supported.  

<details style="padding-left: 10px">
<summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>

`name:asc|expireAt:desc`  
Sort by `name` ascending **AND** by `expireAt` descending.

</details>

### Sorting options:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| `FIELD_NAME` | Description |
| :--- | :--- |
| `name` | Alias name |
| `notifyCreator` | Notify creator on every upload |
| `expireAt` | Expiration date |
| `createdAt` | Creation date |
| `createdBy` | Creator first name, last name |

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
    res, err := s.Shares.RequestUploadShares(ctx, operations.RequestUploadSharesRequest{
        XSdsAuthToken: sdk.String("at"),
        XSdsDateFormat: operations.RequestUploadSharesXSdsDateFormatEnumEpoch.ToPointer(),
        Filter: sdk.String("eos"),
        Limit: sdk.Int(958741),
        Offset: sdk.Int(433279),
        Sort: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadShareList != nil {
        // handle response
    }
}
```

## SendDownloadShareLinkViaEmail

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Send an email to specific recipients for existing Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share link successfully sent.

### Further Information:

* Forbidden characters in the email body: [`<`, `>`]


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
    res, err := s.Shares.SendDownloadShareLinkViaEmail(ctx, operations.SendDownloadShareLinkViaEmailRequest{
        DownloadShareLinkEmail: shared.DownloadShareLinkEmail{
            Body: "minima",
            ReceiverLanguage: sdk.String("beatae"),
            Recipients: []string{
                "provident",
                "earum",
                "soluta",
            },
        },
        XSdsAuthToken: sdk.String("hic"),
        ShareID: 848151,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SendUploadShareLinkViaEmail

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Send an email to specific recipients for existing Upload Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share link successfully sent.

### Further Information:

* Forbidden characters in the email body: [`<`, `>`]


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
    res, err := s.Shares.SendUploadShareLinkViaEmail(ctx, operations.SendUploadShareLinkViaEmailRequest{
        UploadShareLinkEmail: shared.UploadShareLinkEmail{
            Body: "eaque",
            ReceiverLanguage: sdk.String("earum"),
            Recipients: []string{
                "maiores",
                "debitis",
                "aliquid",
            },
        },
        XSdsAuthToken: sdk.String("porro"),
        ShareID: 380335,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateDownloadShare

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Update an existing Download Share.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Share is successfully updated.

### Further Information:
* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **1024** characters.

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
may not be displayed correctly in short messages (SMS).

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
    res, err := s.Shares.UpdateDownloadShare(ctx, operations.UpdateDownloadShareRequest{
        UpdateDownloadShareRequest: shared.UpdateDownloadShareRequest{
            DefaultCountry: sdk.String("dolorem"),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-03-27T18:38:54.968Z"),
            },
            InternalNotes: sdk.String("fuga"),
            MaxDownloads: sdk.Int(189062),
            Name: sdk.String("Mr. Santiago Stoltenberg IV"),
            Notes: sdk.String("natus"),
            NotifyCreator: sdk.Bool(false),
            Password: sdk.String("occaecati"),
            ReceiverLanguage: sdk.String("suscipit"),
            ResetMaxDownloads: sdk.Bool(false),
            ResetPassword: sdk.Bool(false),
            ShowCreatorName: sdk.Bool(false),
            ShowCreatorUsername: sdk.Bool(false),
            TextMessageRecipients: []string{
                "quasi",
            },
        },
        XSdsAuthToken: sdk.String("magni"),
        XSdsDateFormat: operations.UpdateDownloadShareXSdsDateFormatEnumLeet.ToPointer(),
        ShareID: 859581,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadShare != nil {
        // handle response
    }
}
```

## UpdateDownloadShares

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>

### Description:
Update a list of existing Download Shares.

### Precondition:
User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.

### Postcondition:
Download Shares are successfully updated.

### Further Information:
Maximum number of shares is 200

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
    res, err := s.Shares.UpdateDownloadShares(ctx, operations.UpdateDownloadSharesRequest{
        UpdateDownloadSharesBulkRequest: shared.UpdateDownloadSharesBulkRequest{
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-10-28T21:42:07.129Z"),
            },
            MaxDownloads: sdk.Int(271113),
            ObjectIds: []int64{
                473190,
                115834,
            },
            ResetMaxDownloads: sdk.Bool(false),
            ShowCreatorName: sdk.Bool(false),
            ShowCreatorUsername: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateUploadShare

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>

### Description:
Update existing Upload Share (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Share successfully updated.

### Further Information:

* `name` is limited to **150** characters.
* `notes` are limited to **255** characters.
* `password` is limited to **1024** characters.

Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
may not be displayed correctly in short messages (SMS).

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
    res, err := s.Shares.UpdateUploadShare(ctx, operations.UpdateUploadShareRequest{
        UpdateUploadShareRequest: shared.UpdateUploadShareRequest{
            DefaultCountry: sdk.String("esse"),
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2021-01-15T15:03:36.543Z"),
            },
            FilesExpiryPeriod: sdk.Int(967260),
            InternalNotes: sdk.String("vel"),
            MaxSize: sdk.Int64(99958),
            MaxSlots: sdk.Int(857125),
            Name: sdk.String("Cheryl Kub"),
            Notes: sdk.String("ex"),
            NotifyCreator: sdk.Bool(false),
            Password: sdk.String("consectetur"),
            ReceiverLanguage: sdk.String("aliquid"),
            ResetFilesExpiryPeriod: sdk.Bool(false),
            ResetMaxSize: sdk.Bool(false),
            ResetMaxSlots: sdk.Bool(false),
            ResetPassword: sdk.Bool(false),
            ShowCreatorName: sdk.Bool(false),
            ShowCreatorUsername: sdk.Bool(false),
            ShowUploadedFiles: sdk.Bool(false),
            TextMessageRecipients: []string{
                "laborum",
            },
        },
        XSdsAuthToken: sdk.String("sunt"),
        XSdsDateFormat: operations.UpdateUploadShareXSdsDateFormatEnumLocal.ToPointer(),
        ShareID: 856756,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadShare != nil {
        // handle response
    }
}
```

## UpdateUploadShares

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>

### Description:
Update a list of existing Upload Shares (aka File Request).

### Precondition:
User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.

### Postcondition:
Upload Shares successfully updated.

### Further Information:
Maximum number of shares is 200

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
    res, err := s.Shares.UpdateUploadShares(ctx, operations.UpdateUploadSharesRequest{
        UpdateUploadSharesBulkRequest: shared.UpdateUploadSharesBulkRequest{
            Expiration: &shared.ObjectExpiration{
                EnableExpiration: false,
                ExpireAt: types.MustTimeFromString("2022-03-15T05:49:38.899Z"),
            },
            FilesExpiryPeriod: sdk.Int(639187),
            MaxSize: sdk.Int64(381397),
            MaxSlots: sdk.Int(399161),
            ObjectIds: []int64{
                431760,
            },
            ResetFilesExpiryPeriod: sdk.Bool(false),
            ResetMaxSize: sdk.Bool(false),
            ResetMaxSlots: sdk.Bool(false),
            ShowCreatorName: sdk.Bool(false),
            ShowCreatorUsername: sdk.Bool(false),
            ShowUploadedFiles: sdk.Bool(false),
        },
        XSdsAuthToken: sdk.String("voluptas"),
        XSdsDateFormat: operations.UpdateUploadSharesXSdsDateFormatEnumEpoch.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
