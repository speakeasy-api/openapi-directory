# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/byautomata.io/1.0.1/go
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

    req := operations.GetContentproSearchRequest{
        Terms: "corrupti",
    }

    ctx := context.Background()
    res, err := s.ContentproSearch.GetContentproSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContentproSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### ContentproSearch

* `GetContentproSearch` - Send search terms to receive the most relevant articles and companies.

### ContentproSimilarText

* `PostContentproSimilarText` - The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

### Search

* `GetSearch` - Send search terms to receive the most relevant companies along with text snippets.

### Similar

* `GetSimilar` - Send a company website to receive a list of companies related to them.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
