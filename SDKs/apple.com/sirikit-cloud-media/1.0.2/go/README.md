# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apple.com/sirikit-cloud-media/1.0.2/go
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
    res, err := s.Config.ExtensionConfiguration(ctx, operations.ExtensionConfigurationRequest{
        AcceptLanguage: "corrupti",
        CacheControl: "provident",
        IfNoneMatch: sdk.String("distinctio"),
        RequestTimeout: 8442.66,
        UserAgent: "unde",
        XApplecloudextensionRetryCount: sdk.Float64(8579.46),
        XApplecloudextensionSessionID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Config](docs/config/README.md)

* [ExtensionConfiguration](docs/config/README.md#extensionconfiguration) - Configuration Resource

### [Intent](docs/intent/README.md)

* [AddMediaIntentHandling](docs/intent/README.md#addmediaintenthandling) - addMedia
* [PlayMediaIntentHandling](docs/intent/README.md#playmediaintenthandling) - playMedia
* [UpdateMediaAffinityIntentHandling](docs/intent/README.md#updatemediaaffinityintenthandling) - updateMediaAffinity

### [Queues](docs/queues/README.md)

* [PlayMediaOnQueue](docs/queues/README.md#playmediaonqueue) - playMedia
* [UpdateActivityOnQueue](docs/queues/README.md#updateactivityonqueue) - updateActivity
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
