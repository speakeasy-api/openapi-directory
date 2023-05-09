# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apis.guru/2.2.0/go
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
    res, err := s.APIs.GetAPI(ctx, operations.GetAPIRequest{
        API: "2.1.0",
        Provider: "apis.guru",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [APIs](docs/apis/README.md)

* [GetAPI](docs/apis/README.md#getapi) - Retrieve one version of a particular API
* [GetMetrics](docs/apis/README.md#getmetrics) - Get basic metrics
* [GetProvider](docs/apis/README.md#getprovider) - List all APIs for a particular provider
* [GetProviders](docs/apis/README.md#getproviders) - List all providers
* [GetServiceAPI](docs/apis/README.md#getserviceapi) - Retrieve one version of a particular API with a serviceName.
* [GetServices](docs/apis/README.md#getservices) - List all serviceNames for a particular provider
* [ListAPIs](docs/apis/README.md#listapis) - List all APIs
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
