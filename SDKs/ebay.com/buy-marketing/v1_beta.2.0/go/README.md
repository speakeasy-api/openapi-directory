# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/buy-marketing/v1_beta.2.0/go
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

    req := operations.GetMerchandisedProductsRequest{
        AspectFilter: "corrupti",
        CategoryID: "provident",
        Limit: "distinctio",
        MetricName: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.MerchandisedProduct.GetMerchandisedProducts(ctx, req, operations.GetMerchandisedProductsSecurity{
        ClientCredentials: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### MerchandisedProduct

* `GetMerchandisedProducts` - This method returns an array of products based on the category and metric specified. This includes details of the product, such as the eBay product ID (EPID), title, and user reviews and ratings for the product. You can use the <code>epid</code> returned by this method in the Browse API <b>search</b> method to retrieve items for this product. <h3><b>Restrictions </b></h3> <ul><li>To test <b> getMerchandisedProducts</b> in Sandbox, you must use category ID 9355 and the response will be mock data.  </li>   <li>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/marketing/overview.html#API">API Restrictions</a>.</li>  </ul>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
