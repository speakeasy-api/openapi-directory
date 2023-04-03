# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apispot.io/whois/1.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CheckDomainRequest{
        Domain: "corrupti",
    }

    ctx := context.Background()
    res, err := s.CheckDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckDomain200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CheckDomain` - Check domain availability
* `CreateBatch` - Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
* `DeleteBatch` - Delete batch
* `DomainRank` - Check domain rank (authority).
* `GetBatch` - Get batch
* `GetBatches` - Get your batches
* `QueryDb` - Query domain database
* `Whois` - WHOIS query for a domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
