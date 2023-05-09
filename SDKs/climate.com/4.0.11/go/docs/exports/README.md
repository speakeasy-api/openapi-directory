# Exports

## Overview

General data export endpoints.

### Available Operations

* [FetchExportContentsByID](#fetchexportcontentsbyid) - Retrieve the binary contents of a processed export request.
* [FetchExportStatusByID](#fetchexportstatusbyid) - Retrieve the status of an Export.
* [PostExport](#postexport) - Initiate a new export request.

## FetchExportContentsByID

Downloads larger than `5MiB` (`5242880 bytes`) in size must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).

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
    res, err := s.Exports.FetchExportContentsByID(ctx, operations.FetchExportContentsByIDRequest{
        Accept: "accusamus",
        Range: "commodi",
        ExportID: "e13b99d4-88e1-4e91-a450-ad2abd442698",
    }, operations.FetchExportContentsByIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## FetchExportStatusByID

Check the status of an **Export** by ID.

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
    res, err := s.Exports.FetchExportStatusByID(ctx, operations.FetchExportStatusByIDRequest{
        ExportID: "02d502a9-4bb4-4f63-8969-e9a3efa77dfb",
    }, operations.FetchExportStatusByIDSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportStatus != nil {
        // handle response
    }
}
```

## PostExport

Step one in requesting a data product. The method will return an **Export** ID which the caller will use in subsequent `GET` requests.
The following `contentTypes` may be requested:
  * __application/vnd.climate.acrsi.geojson__ (Beta)
     Exports the planting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * plantingStartDate
       * plantingEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.
  
  * __application/vnd.climate.harvest.geojson__
     Exports the harvesting activities accessible by the authenticated user and optionally filtered by resource owner
     as a [GeoJSON Feature Collection](https://tools.ietf.org/html/rfc7946#page-12).

     The export request definition must contain the following properties:
       * harvestStartDate
       * harvestEndDate
       * resourceOwnerId

     Requires `exports:read` and `plantingActivitySummary:read` scope.

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
    res, err := s.Exports.PostExport(ctx, shared.Export{
        ContentType: shared.ExportContentTypeEnumApplicationVndClimateAcrsiGeojson,
        Definition: map[string]interface{}{
            "cumque": "facere",
            "ea": "aliquid",
        },
    }, operations.PostExportSecurity{
        APIKey: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatedExport != nil {
        // handle response
    }
}
```
