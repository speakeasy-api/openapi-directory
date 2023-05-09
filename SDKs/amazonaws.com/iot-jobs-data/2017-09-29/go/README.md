# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iot-jobs-data/2017-09-29/go
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DescribeJobExecution(ctx, operations.DescribeJobExecutionRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        ExecutionNumber: sdk.Int64(847252),
        IncludeJobDocument: sdk.Bool(false),
        JobID: "vel",
        ThingName: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeJobExecutionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [DescribeJobExecution](docs/sdk/README.md#describejobexecution) - Gets details of a job execution.
* [GetPendingJobExecutions](docs/sdk/README.md#getpendingjobexecutions) - Gets the list of all jobs for a thing that are not in a terminal status.
* [StartNextPendingJobExecution](docs/sdk/README.md#startnextpendingjobexecution) - Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing.
* [UpdateJobExecution](docs/sdk/README.md#updatejobexecution) - Updates the status of a job execution.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
