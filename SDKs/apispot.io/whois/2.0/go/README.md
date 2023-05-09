# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apispot.io/whois/2.0/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CheckDomain(ctx, operations.CheckDomainRequest{
        Domain: "corrupti",
    })
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

### [SDK](docs/sdk/README.md)

* [CheckDomain](docs/sdk/README.md#checkdomain) - Check domain availability
* [CreateBatch](docs/sdk/README.md#createbatch) - Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
* [DeleteBatch](docs/sdk/README.md#deletebatch) - Delete batch
* [DomainRank](docs/sdk/README.md#domainrank) - Check domain rank (authority).
* [GetBatch](docs/sdk/README.md#getbatch) - Get batch
* [GetBatches](docs/sdk/README.md#getbatches) - Get your batches
* [QueryDb](docs/sdk/README.md#querydb) - Query domain database
* [Whois](docs/sdk/README.md#whois) - WHOIS query for a domain
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
