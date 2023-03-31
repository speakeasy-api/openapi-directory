# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ebay.com/developer-analytics/v1_beta.0.0/go
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

    req := operations.GetRateLimitsRequest{
        APIContext: "corrupti",
        APIName: "provident",
    }

    ctx := context.Background()
    res, err := s.RateLimit.GetRateLimits(ctx, req, operations.GetRateLimitsSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RateLimitsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### RateLimit

* `GetRateLimits` - This method retrieves the call limit and utilization data for an application. The data is retrieved for all RESTful APIs and the legacy Trading API.  <br><br>The response from <b>getRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful API and the legacy Trading API resources. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.

### UserRateLimit

* `GetUserRateLimits` - This method retrieves the call limit and utilization data for an application user. The call-limit data is returned for all RESTful APIs and the legacy Trading API that limit calls on a per-user basis.  <br><br>The response from <b>getUserRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful APIs resources and the legacy Trading API calls that limit request access by user. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
