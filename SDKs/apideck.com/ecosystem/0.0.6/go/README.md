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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Category.CategoriesAll(ctx, operations.CategoriesAllRequest{
        Cursor: sdk.String("corrupti"),
        EcosystemID: "provident",
        Limit: sdk.Int64(715190),
    })
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


### [Category](docs/category/README.md)

* [CategoriesAll](docs/category/README.md#categoriesall) - List categories
* [CategoriesOne](docs/category/README.md#categoriesone) - Get category
* [CategoryListingsAll](docs/category/README.md#categorylistingsall) - List category listings

### [Collection](docs/collection/README.md)

* [CollectionListingsAll](docs/collection/README.md#collectionlistingsall) - List collection listings
* [CollectionsAll](docs/collection/README.md#collectionsall) - List collections
* [CollectionsOne](docs/collection/README.md#collectionsone) - Get collection

### [Ecosystem](docs/ecosystem/README.md)

* [EcosystemsOne](docs/ecosystem/README.md#ecosystemsone) - Get ecosystem

### [Listing](docs/listing/README.md)

* [ListingsAll](docs/listing/README.md#listingsall) - List listings
* [ListingsOne](docs/listing/README.md#listingsone) - Get listing

### [Product](docs/product/README.md)

* [ProductListingsAll](docs/product/README.md#productlistingsall) - List product listings
* [ProductsAll](docs/product/README.md#productsall) - List products
* [ProductsOne](docs/product/README.md#productsone) - Get product
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
