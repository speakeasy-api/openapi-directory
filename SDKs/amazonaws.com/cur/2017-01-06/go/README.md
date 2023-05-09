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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DeleteReportDefinition(ctx, operations.DeleteReportDefinitionRequest{
        DeleteReportDefinitionRequest: shared.DeleteReportDefinitionRequest{
            ReportName: sdk.String("corrupti"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.DeleteReportDefinitionXAmzTargetEnumAwsOrigamiServiceGatewayServiceDeleteReportDefinition,
    })
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

### [SDK](docs/sdk/README.md)

* [DeleteReportDefinition](docs/sdk/README.md#deletereportdefinition) - Deletes the specified report.
* [DescribeReportDefinitions](docs/sdk/README.md#describereportdefinitions) - Lists the AWS Cost and Usage reports available to this account.
* [ModifyReportDefinition](docs/sdk/README.md#modifyreportdefinition) - Allows you to programatically update your report preferences.
* [PutReportDefinition](docs/sdk/README.md#putreportdefinition) - Creates a new report using the description that you provide.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
