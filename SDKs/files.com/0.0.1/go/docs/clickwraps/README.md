# Clickwraps

## Overview

Operations about clickwraps

### Available Operations

* [DeleteClickwrapsID](#deleteclickwrapsid) - Delete Clickwrap
* [GetClickwraps](#getclickwraps) - List Clickwraps
* [GetClickwrapsID](#getclickwrapsid) - Show Clickwrap
* [PatchClickwrapsID](#patchclickwrapsid) - Update Clickwrap
* [PostClickwraps](#postclickwraps) - Create Clickwrap

## DeleteClickwrapsID

Delete Clickwrap

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
    res, err := s.Clickwraps.DeleteClickwrapsID(ctx, operations.DeleteClickwrapsIDRequest{
        ID: 269479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetClickwraps

List Clickwraps

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
    res, err := s.Clickwraps.GetClickwraps(ctx, operations.GetClickwrapsRequest{
        Cursor: sdk.String("ipsam"),
        PerPage: sdk.Int(410492),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClickwrapEntities != nil {
        // handle response
    }
}
```

## GetClickwrapsID

Show Clickwrap

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
    res, err := s.Clickwraps.GetClickwrapsID(ctx, operations.GetClickwrapsIDRequest{
        ID: 136900,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClickwrapEntity != nil {
        // handle response
    }
}
```

## PatchClickwrapsID

Update Clickwrap

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
    res, err := s.Clickwraps.PatchClickwrapsID(ctx, operations.PatchClickwrapsIDRequest{
        RequestBody: &operations.PatchClickwrapsIDRequestBody{
            Body: sdk.String("[Legal body text]"),
            Name: sdk.String("Example Site NDA for Files.com Use"),
            UseWithBundles: operations.PatchClickwrapsIDRequestBodyUseWithBundlesEnumAvailable.ToPointer(),
            UseWithInboxes: operations.PatchClickwrapsIDRequestBodyUseWithInboxesEnumRequire.ToPointer(),
            UseWithUsers: operations.PatchClickwrapsIDRequestBodyUseWithUsersEnumNone.ToPointer(),
        },
        ID: 189848,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClickwrapEntity != nil {
        // handle response
    }
}
```

## PostClickwraps

Create Clickwrap

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
    res, err := s.Clickwraps.PostClickwraps(ctx, operations.PostClickwrapsRequestBody{
        Body: sdk.String("[Legal body text]"),
        Name: sdk.String("Example Site NDA for Files.com Use"),
        UseWithBundles: operations.PostClickwrapsRequestBodyUseWithBundlesEnumAvailable.ToPointer(),
        UseWithInboxes: operations.PostClickwrapsRequestBodyUseWithInboxesEnumAvailable.ToPointer(),
        UseWithUsers: operations.PostClickwrapsRequestBodyUseWithUsersEnumNone.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClickwrapEntity != nil {
        // handle response
    }
}
```
