# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/connector/9.3.1/go
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
    res, err := s.APIResources.APIResourceCoverageOne(ctx, operations.APIResourceCoverageOneRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        ResourceID: "deserunt",
        XApideckAppID: "perferendis",
    }, operations.APIResourceCoverageOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceCoverageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [APIResources](docs/apiresources/README.md)

* [APIResourceCoverageOne](docs/apiresources/README.md#apiresourcecoverageone) - Get API Resource Coverage
* [APIResourcesOne](docs/apiresources/README.md#apiresourcesone) - Get API Resource

### [APIs](docs/apis/README.md)

* [ApisAll](docs/apis/README.md#apisall) - List APIs
* [ApisOne](docs/apis/README.md#apisone) - Get API

### [ConnectorDocs](docs/connectordocs/README.md)

* [ConnectorDocsOne](docs/connectordocs/README.md#connectordocsone) - Get Connector Doc content

### [ConnectorResources](docs/connectorresources/README.md)

* [ConnectorResourcesOne](docs/connectorresources/README.md#connectorresourcesone) - Get Connector Resource

### [Connectors](docs/connectors/README.md)

* [ConnectorsAll](docs/connectors/README.md#connectorsall) - List Connectors
* [ConnectorsOne](docs/connectors/README.md#connectorsone) - Get Connector
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
