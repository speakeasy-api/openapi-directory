# APIKeys

## Overview

Operations about api_keys

### Available Operations

* [DeleteAPIKeysID](#deleteapikeysid) - Delete Api Key
* [GetAPIKeys](#getapikeys) - List Api Keys
* [GetAPIKeysID](#getapikeysid) - Show Api Key
* [PatchAPIKeysID](#patchapikeysid) - Update Api Key
* [PostAPIKeys](#postapikeys) - Create Api Key

## DeleteAPIKeysID

Delete Api Key

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
    res, err := s.APIKeys.DeleteAPIKeysID(ctx, operations.DeleteAPIKeysIDRequest{
        ID: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIKeys

List Api Keys

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
    res, err := s.APIKeys.GetAPIKeys(ctx, operations.GetAPIKeysRequest{
        Cursor: sdk.String("iure"),
        Filter: map[string]interface{}{
            "debitis": "ipsa",
            "delectus": "tempora",
        },
        FilterGt: map[string]interface{}{
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        FilterGteq: map[string]interface{}{
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        FilterLt: map[string]interface{}{
            "quis": "veritatis",
        },
        FilterLteq: map[string]interface{}{
            "perferendis": "ipsam",
            "repellendus": "sapiente",
            "quo": "odit",
        },
        PerPage: sdk.Int(870013),
        SortBy: map[string]interface{}{
            "maiores": "molestiae",
            "quod": "quod",
            "esse": "totam",
            "porro": "dolorum",
        },
        UserID: sdk.Int(118274),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntities != nil {
        // handle response
    }
}
```

## GetAPIKeysID

Show Api Key

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
    res, err := s.APIKeys.GetAPIKeysID(ctx, operations.GetAPIKeysIDRequest{
        ID: 720633,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```

## PatchAPIKeysID

Update Api Key

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIKeys.PatchAPIKeysID(ctx, operations.PatchAPIKeysIDRequest{
        RequestBody: &operations.PatchAPIKeysIDRequestBody{
            Description: sdk.String("example"),
            ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
            Name: sdk.String("My Main API Key"),
            PermissionSet: operations.PatchAPIKeysIDRequestBodyPermissionSetEnumFull.ToPointer(),
        },
        ID: 639921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```

## PostAPIKeys

Create Api Key

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.APIKeys.PostAPIKeys(ctx, operations.PostAPIKeysRequestBody{
        Description: sdk.String("example"),
        ExpiresAt: types.MustTimeFromString("2000-01-01T01:00:00Z"),
        Name: sdk.String("My Main API Key"),
        Path: sdk.String("shared/docs"),
        PermissionSet: operations.PostAPIKeysRequestBodyPermissionSetEnumFull.ToPointer(),
        UserID: sdk.Int(582020),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyEntity != nil {
        // handle response
    }
}
```
