# Namespaces

### Available Operations

* [GetNamespaceDataByTimespan](#getnamespacedatabytimespan) - Get namespace data for timespan
* [GetNamespaceTimespanMetadata](#getnamespacetimespanmetadata) - Get namespace metadata for timespan
* [GetNamespaceTimespans](#getnamespacetimespans) - Get timespans with data
* [GetNamespaceYears](#getnamespaceyears) - Get years with data

## GetNamespaceDataByTimespan

Gets a list of URLs that can be used to download the pull data for the given namespace and timespan

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
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Namespaces.GetNamespaceDataByTimespan(ctx, operations.GetNamespaceDataByTimespanRequest{
        Dataview: shared.DataviewTypeEnumSummary,
        Namespace: "distinctio",
        Timespan: 844266,
        Timespantype: shared.TimespanTypeEnumWeeks,
        Year: 857946,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseData != nil {
        // handle response
    }
}
```

## GetNamespaceTimespanMetadata

Gets info about data for the given namespace and timespan

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
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Namespaces.GetNamespaceTimespanMetadata(ctx, operations.GetNamespaceTimespanMetadataRequest{
        Namespace: "corrupti",
        Timespan: 847252,
        Timespantype: shared.TimespanTypeEnumMonths,
        Year: 623564,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimespanModel != nil {
        // handle response
    }
}
```

## GetNamespaceTimespans

Gets a list of timespans of the given type that have data for the given namespace and year

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
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Namespaces.GetNamespaceTimespans(ctx, operations.GetNamespaceTimespansRequest{
        Namespace: "deserunt",
        Timespantype: shared.TimespanTypeEnumMonths,
        Year: 437587,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TimespanData != nil {
        // handle response
    }
}
```

## GetNamespaceYears

Gets a list of years that have data for the given namespace

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
            HubAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Namespaces.GetNamespaceYears(ctx, operations.GetNamespaceYearsRequest{
        Namespace: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.YearData != nil {
        // handle response
    }
}
```
