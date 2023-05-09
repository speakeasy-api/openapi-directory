# Listing

### Available Operations

* [ListingsAll](#listingsall) - List listings
* [ListingsOne](#listingsone) - Get listing

## ListingsAll

List listings

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
    res, err := s.Listing.ListingsAll(ctx, operations.ListingsAllRequest{
        Cursor: sdk.String("nihil"),
        EcosystemID: "praesentium",
        ExternalID: sdk.String("voluptatibus"),
        Limit: sdk.Int64(55714),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListingsResponse != nil {
        // handle response
    }
}
```

## ListingsOne

Get listing

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
    res, err := s.Listing.ListingsOne(ctx, operations.ListingsOneRequest{
        EcosystemID: "omnis",
        ID: "7b0074f1-5471-4b5e-ae13-b99d488e1e91",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetListingResponse != nil {
        // handle response
    }
}
```
