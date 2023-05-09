# SharedLinks

## Overview

Shared links resource represents the links to files and folders in the cloud storage service that have been shared with other users. It provides methods for managing and accessing the shared links, such as creating, deleting, and listing shared links. A shared link allows other users to access the file or folder that it points to, either by viewing it online or by downloading it.

### Available Operations

* [SharedLinksAdd](#sharedlinksadd) - Create Shared Link
* [SharedLinksAll](#sharedlinksall) - List SharedLinks
* [SharedLinksDelete](#sharedlinksdelete) - Delete Shared Link
* [SharedLinksOne](#sharedlinksone) - Get Shared Link
* [SharedLinksUpdate](#sharedlinksupdate) - Update Shared Link

## SharedLinksAdd

Create Shared Link

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
    res, err := s.SharedLinks.SharedLinksAdd(ctx, operations.SharedLinksAddRequest{
        SharedLinkInput: shared.SharedLinkInput{
            DownloadURL: sdk.String("https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg"),
            Password: sdk.String("itaque"),
            Scope: shared.SharedLinkScopeEnumCompany.ToPointer(),
            TargetID: "consequatur",
        },
        Raw: sdk.Bool(false),
        XApideckAppID: "est",
        XApideckConsumerID: "repellendus",
        XApideckServiceID: sdk.String("porro"),
    }, operations.SharedLinksAddSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSharedLinkResponse != nil {
        // handle response
    }
}
```

## SharedLinksAll

List SharedLinks

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SharedLinks.SharedLinksAll(ctx, operations.SharedLinksAllRequest{
        Cursor: sdk.String("doloribus"),
        Fields: sdk.String("ut"),
        Limit: sdk.Int64(703495),
        Raw: sdk.Bool(false),
        XApideckAppID: "cupiditate",
        XApideckConsumerID: "qui",
        XApideckServiceID: sdk.String("quae"),
    }, operations.SharedLinksAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSharedLinksResponse != nil {
        // handle response
    }
}
```

## SharedLinksDelete

Delete Shared Link

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SharedLinks.SharedLinksDelete(ctx, operations.SharedLinksDeleteRequest{
        ID: "879fce95-3f73-4ef7-bbc7-abd74dd39c0f",
        Raw: sdk.Bool(false),
        XApideckAppID: "exercitationem",
        XApideckConsumerID: "nulla",
        XApideckServiceID: sdk.String("fugit"),
    }, operations.SharedLinksDeleteSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSharedLinkResponse != nil {
        // handle response
    }
}
```

## SharedLinksOne

Get Shared Link

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SharedLinks.SharedLinksOne(ctx, operations.SharedLinksOneRequest{
        Fields: sdk.String("porro"),
        ID: "ff7c70a4-5626-4d43-a813-f16d9f5fce6c",
        Raw: sdk.Bool(false),
        XApideckAppID: "corporis",
        XApideckConsumerID: "veniam",
        XApideckServiceID: sdk.String("aliquid"),
    }, operations.SharedLinksOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSharedLinkResponse != nil {
        // handle response
    }
}
```

## SharedLinksUpdate

Update Shared Link

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
    res, err := s.SharedLinks.SharedLinksUpdate(ctx, operations.SharedLinksUpdateRequest{
        SharedLinkInput: shared.SharedLinkInput{
            DownloadURL: sdk.String("https://www.box.com/shared/static/rh935iit6ewrmw0unyul.jpeg"),
            Password: sdk.String("inventore"),
            Scope: shared.SharedLinkScopeEnumCompany.ToPointer(),
            TargetID: "magnam",
        },
        ID: "6c3e250f-b008-4c42-a141-aac366c8dd6b",
        Raw: sdk.Bool(false),
        XApideckAppID: "quasi",
        XApideckConsumerID: "tempora",
        XApideckServiceID: sdk.String("numquam"),
    }, operations.SharedLinksUpdateSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSharedLinkResponse != nil {
        // handle response
    }
}
```
