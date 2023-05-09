# SegmentQueryFilters

## Overview

Segment Query Filter Restv 2 Controller

### Available Operations

* [GETSegmentQueryFiltersConfigUsingGET](#getsegmentqueryfiltersconfigusingget) - getSegmentQueryFiltersConfig
* [GETSegmentQueryFiltersUsingGET](#getsegmentqueryfiltersusingget) - getSegmentQueryFilters
* [GETSegmentQueryStandardFiltersUsingGET](#getsegmentquerystandardfiltersusingget) - getSegmentQueryStandardFilters
* [UpdateSegmentQueryFiltersConfigUsingPUT](#updatesegmentqueryfiltersconfigusingput) - updateSegmentQueryFiltersConfig

## GETSegmentQueryFiltersConfigUsingGET

getSegmentQueryFiltersConfig

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
    res, err := s.SegmentQueryFilters.GETSegmentQueryFiltersConfigUsingGET(ctx, operations.GETSegmentQueryFiltersConfigUsingGETRequest{
        APIKey: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentQueryFilterConfigModel != nil {
        // handle response
    }
}
```

## GETSegmentQueryFiltersUsingGET

getSegmentQueryFilters

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
    res, err := s.SegmentQueryFilters.GETSegmentQueryFiltersUsingGET(ctx, operations.GETSegmentQueryFiltersUsingGETRequest{
        APIKey: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentQueryFilterListModel != nil {
        // handle response
    }
}
```

## GETSegmentQueryStandardFiltersUsingGET

getSegmentQueryStandardFilters

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
    res, err := s.SegmentQueryFilters.GETSegmentQueryStandardFiltersUsingGET(ctx, operations.GETSegmentQueryStandardFiltersUsingGETRequest{
        APIKey: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentQueryFilterListModel != nil {
        // handle response
    }
}
```

## UpdateSegmentQueryFiltersConfigUsingPUT

updateSegmentQueryFiltersConfig

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
    res, err := s.SegmentQueryFilters.UpdateSegmentQueryFiltersConfigUsingPUT(ctx, operations.UpdateSegmentQueryFiltersConfigUsingPUTRequest{
        SegmentQueryFilterConfigModel: shared.SegmentQueryFilterConfigModel{
            CustomFilters: []shared.SegmentQueryFilterModel{
                shared.SegmentQueryFilterModel{
                    Key: sdk.String("excepturi"),
                    Name: sdk.String("Dr. Rosemary Bartoletti"),
                    Options: []map[string]interface{}{
                        map[string]interface{}{
                            "autem": "nam",
                            "eaque": "pariatur",
                        },
                        map[string]interface{}{
                            "voluptatibus": "perferendis",
                            "fugiat": "amet",
                        },
                    },
                    Type: sdk.String("aut"),
                },
                shared.SegmentQueryFilterModel{
                    Key: sdk.String("cumque"),
                    Name: sdk.String("Mindy Renner"),
                    Options: []map[string]interface{}{
                        map[string]interface{}{
                            "dignissimos": "eaque",
                            "quis": "nesciunt",
                            "eos": "perferendis",
                        },
                        map[string]interface{}{
                            "minus": "quam",
                        },
                    },
                    Type: sdk.String("dolor"),
                },
            },
            HiddenFilters: []string{
                "nostrum",
                "hic",
                "recusandae",
                "omnis",
            },
        },
        APIKey: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SegmentQueryFilterConfigModel != nil {
        // handle response
    }
}
```
