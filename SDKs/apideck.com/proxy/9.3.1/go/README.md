# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/proxy/9.3.1/go
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
    res, err := s.Execute.DeleteProxy(ctx, operations.DeleteProxyRequest{
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckDownstreamAuthorization: sdk.String("distinctio"),
        XApideckDownstreamURL: "quibusdam",
        XApideckServiceID: "unde",
    }, operations.DeleteProxySecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProxy200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Execute](docs/execute/README.md)

* [DeleteProxy](docs/execute/README.md#deleteproxy) - DELETE
* [GetProxy](docs/execute/README.md#getproxy) - GET
* [OptionsProxy](docs/execute/README.md#optionsproxy) - OPTIONS
* [PatchProxy](docs/execute/README.md#patchproxy) - PATCH
* [PostProxy](docs/execute/README.md#postproxy) - POST
* [PutProxy](docs/execute/README.md#putproxy) - PUT
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
