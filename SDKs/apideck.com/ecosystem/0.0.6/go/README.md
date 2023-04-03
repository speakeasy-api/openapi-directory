# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/ecosystem/0.0.6/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CategoriesAllRequest{
        Cursor: "corrupti",
        EcosystemID: "provident",
        Limit: 715190,
    }

    ctx := context.Background()
    res, err := s.Category.CategoriesAll(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoriesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Category

* `CategoriesAll` - List categories
* `CategoriesOne` - Get category
* `CategoryListingsAll` - List category listings

### Collection

* `CollectionListingsAll` - List collection listings
* `CollectionsAll` - List collections
* `CollectionsOne` - Get collection

### Ecosystem

* `EcosystemsOne` - Get ecosystem

### Listing

* `ListingsAll` - List listings
* `ListingsOne` - Get listing

### Product

* `ProductListingsAll` - List product listings
* `ProductsAll` - List products
* `ProductsOne` - Get product
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
