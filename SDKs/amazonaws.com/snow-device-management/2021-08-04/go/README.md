# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/snow-device-management/2021-08-04/go
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

    req := operations.CancelTaskRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        TaskID: "illum",
    }

    ctx := context.Background()
    res, err := s.CancelTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTaskOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CancelTask` - <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
* `CreateTask` - Instructs one or more devices to start a task, such as unlocking or rebooting.
* `DescribeDevice` - Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
* `DescribeDeviceEc2Instances` - Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 
* `DescribeExecution` - Checks the status of a remote task running on one or more target devices.
* `DescribeTask` - Checks the metadata for a given task on a device. 
* `ListDeviceResources` - Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
* `ListDevices` - Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
* `ListExecutions` - Returns the status of tasks for one or more target devices.
* `ListTagsForResource` - Returns a list of tags for a managed device or task.
* `ListTasks` - Returns a list of tasks that can be filtered by state.
* `TagResource` - Adds or replaces tags on a device or task.
* `UntagResource` - Removes a tag from a device or task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
