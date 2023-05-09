# APIs

### Available Operations

* [ApisAll](#apisall) - List APIs
* [ApisOne](#apisone) - Get API

## ApisAll

List APIs

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
    res, err := s.APIs.ApisAll(ctx, operations.ApisAllRequest{
        Cursor: sdk.String("minima"),
        Filter: &shared.ApisFilter{
            Status: shared.APIStatusEnumDevelopment.ToPointer(),
        },
        Limit: sdk.Int64(38425),
        XApideckAppID: "iure",
    }, operations.ApisAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApisResponse != nil {
        // handle response
    }
}
```

## ApisOne

Get API

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
    res, err := s.APIs.ApisOne(ctx, operations.ApisOneRequest{
        ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
        XApideckAppID: "quasi",
    }, operations.ApisOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResponse != nil {
        // handle response
    }
}
```
