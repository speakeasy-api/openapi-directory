# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/cur/2017-01-06/go
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

    req := operations.DeleteReportDefinitionRequest{
        DeleteReportDefinitionRequest: shared.DeleteReportDefinitionRequest{
            ReportName: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "AWSOrigamiServiceGatewayService.DeleteReportDefinition",
    }

    ctx := context.Background()
    res, err := s.DeleteReportDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportDefinitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteReportDefinition` - Deletes the specified report.
* `DescribeReportDefinitions` - Lists the AWS Cost and Usage reports available to this account.
* `ModifyReportDefinition` - Allows you to programatically update your report preferences.
* `PutReportDefinition` - Creates a new report using the description that you provide.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
