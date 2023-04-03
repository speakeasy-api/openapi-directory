# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/applicationcostprofiler/2020-09-10/go
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
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        ReportID: "illum",
    }

    ctx := context.Background()
    res, err := s.DeleteReportDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportDefinitionResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteReportDefinition` - Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being generated.
* `GetReportDefinition` - Retrieves the definition of a report already configured in AWS Application Cost Profiler.
* `ImportApplicationUsage` - <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p> <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing asynchronously.</p>
* `ListReportDefinitions` - <p>Retrieves a list of all reports and their configurations for your AWS account.</p> <p>The maximum number of reports is one.</p>
* `PutReportDefinition` - Creates the report definition for a report in Application Cost Profiler.
* `UpdateReportDefinition` - Updates existing report in AWS Application Cost Profiler.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
