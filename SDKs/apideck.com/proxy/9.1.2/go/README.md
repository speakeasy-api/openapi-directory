# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/proxy/9.1.2/go
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

    req := operations.DeleteProxyRequest{
        XApideckAppID: "corrupti",
        XApideckConsumerID: "provident",
        XApideckDownstreamAuthorization: "distinctio",
        XApideckDownstreamURL: "quibusdam",
        XApideckServiceID: "unde",
    }

    ctx := context.Background()
    res, err := s.Execute.DeleteProxy(ctx, req, operations.DeleteProxySecurity{
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


### Execute

* `DeleteProxy` - DELETE
* `GetProxy` - GET
* `OptionsProxy` - OPTIONS
* `PatchProxy` - PATCH
* `PostProxy` - POST
* `PutProxy` - PUT
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
