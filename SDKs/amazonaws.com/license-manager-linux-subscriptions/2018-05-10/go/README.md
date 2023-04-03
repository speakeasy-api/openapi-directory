# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/license-manager-linux-subscriptions/2018-05-10/go
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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetServiceSettingsRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
    }

    ctx := context.Background()
    res, err := s.GetServiceSettings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetServiceSettingsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GetServiceSettings` - Lists the Linux subscriptions service settings.
* `ListLinuxSubscriptionInstances` - Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
* `ListLinuxSubscriptions` - Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
* `UpdateServiceSettings` - Updates the service settings for Linux subscriptions.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
