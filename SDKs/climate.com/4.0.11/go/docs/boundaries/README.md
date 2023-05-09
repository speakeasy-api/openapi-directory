# Boundaries

## Overview

Field Boundary data endpoints.

### Available Operations

* [FetchBoundaries](#fetchboundaries) - Retrieve Boundaries in batch
* [FetchBoundaryByID](#fetchboundarybyid) - Retrieve a Boundary by ID
* [UploadBoundary](#uploadboundary) - Upload a boundary

## FetchBoundaries

Retrieve multiple **Boundaries** (up to 10 per request).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Boundaries.FetchBoundaries(ctx, shared.BoundariesQuery{
        Ids: []string{
            "c5955907-aff1-4a3a-afa9-467739251aa5",
        },
    }, operations.FetchBoundariesSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Boundaries != nil {
        // handle response
    }
}
```

## FetchBoundaryByID

Retrieve a **Boundary** by ID.

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
    res, err := s.Boundaries.FetchBoundaryByID(ctx, operations.FetchBoundaryByIDRequest{
        BoundaryID: "2c3f5ad0-19da-41ff-a78f-097b0074f154",
    }, operations.FetchBoundaryByIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Boundary != nil {
        // handle response
    }
}
```

## UploadBoundary

Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
This is restricted to callers with **boundaries:write** scope.
To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Boundaries.UploadBoundary(ctx, shared.BoundaryUpload{
        Geometry: shared.Geometry{
            Coordinates: []string{
                "dicta",
                "harum",
            },
            Type: shared.GeometryTypeEnumPoint,
        },
    }, operations.UploadBoundarySecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UploadedBoundaryID != nil {
        // handle response
    }
}
```
