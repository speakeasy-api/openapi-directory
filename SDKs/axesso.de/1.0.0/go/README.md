# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/axesso.de/1.0.0/go
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

    req := operations.KeywordSearchRequest{
        DomainCode: "corrupti",
        Keyword: "provident",
        NumberOfProducts: 715190,
        SortBy: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.Amz.KeywordSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordSearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Amz

* `KeywordSearch` - fetch results auf a keyword search on Amazon
* `RequestBuyRecommendation` - request buy recommendations to a given product
* `RequestProduct` - lookup product information
* `SortOptions` - request available sort options to use in keyword search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
