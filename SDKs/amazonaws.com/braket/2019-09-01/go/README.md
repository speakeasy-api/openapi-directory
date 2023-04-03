# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/braket/2019-09-01/go
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

    req := operations.CancelJobRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        JobArn: "illum",
    }

    ctx := context.Background()
    res, err := s.CancelJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CancelJob` - Cancels an Amazon Braket job.
* `CancelQuantumTask` - Cancels the specified task.
* `CreateJob` - Creates an Amazon Braket job.
* `CreateQuantumTask` - Creates a quantum task.
* `GetDevice` - <p>Retrieves the devices available in Amazon Braket.</p> <note> <p>For backwards compatibility with older versions of BraketSchemas, OpenQASM information is omitted from GetDevice API calls. To get this information the user-agent needs to present a recent version of the BraketSchemas (1.8.0 or later). The Braket SDK automatically reports this for you. If you do not see OpenQASM results in the GetDevice response when using a Braket SDK, you may need to set AWS_EXECUTION_ENV environment variable to configure user-agent. See the code examples provided below for how to do this for the AWS CLI, Boto3, and the Go, Java, and JavaScript/TypeScript SDKs.</p> </note>
* `GetJob` - Retrieves the specified Amazon Braket job.
* `GetQuantumTask` - Retrieves the specified quantum task.
* `ListTagsForResource` - Shows the tags associated with this resource.
* `SearchDevices` - Searches for devices using the specified filters.
* `SearchJobs` - Searches for Amazon Braket jobs that match the specified filter values.
* `SearchQuantumTasks` - Searches for tasks that match the specified filter values.
* `TagResource` - Add a tag to the specified resource.
* `UntagResource` - Remove tags from a resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
