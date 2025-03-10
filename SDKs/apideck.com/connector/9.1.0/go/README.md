# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/connector/9.1.0/go
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

    req := operations.APIResourceCoverageOneRequest{
        Security: operations.APIResourceCoverageOneSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        PathParams: operations.APIResourceCoverageOnePathParams{
            ID: "unde",
            ResourceID: "deserunt",
        },
        Headers: operations.APIResourceCoverageOneHeaders{
            XApideckAppID: "porro",
        },
    }

    ctx := context.Background()
    res, err := s.APIResources.APIResourceCoverageOne(ctx, req)
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
## SDK Available Operations


### APIResources

* `APIResourceCoverageOne` - Get API Resource Coverage
* `APIResourcesOne` - Get API Resource

### APIs

* `ApisAll` - List APIs
* `ApisOne` - Get API

### ConnectorDocs

* `ConnectorDocsOne` - Get Connector Doc content

### ConnectorResources

* `ConnectorResourcesOne` - Get Connector Resource

### Connectors

* `ConnectorsAll` - List Connectors
* `ConnectorsOne` - Get Connector
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
