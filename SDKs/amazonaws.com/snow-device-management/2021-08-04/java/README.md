# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelTaskRequest;
import org.openapis.openapi.models.operations.CancelTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelTaskRequest req = new CancelTaskRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelTaskResponse res = sdk.cancelTask(req);

            if (res.cancelTaskOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [cancelTask](docs/sdk/README.md#canceltask) - <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
* [createTask](docs/sdk/README.md#createtask) - Instructs one or more devices to start a task, such as unlocking or rebooting.
* [describeDevice](docs/sdk/README.md#describedevice) - Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
* [describeDeviceEc2Instances](docs/sdk/README.md#describedeviceec2instances) - Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 
* [describeExecution](docs/sdk/README.md#describeexecution) - Checks the status of a remote task running on one or more target devices.
* [describeTask](docs/sdk/README.md#describetask) - Checks the metadata for a given task on a device. 
* [listDeviceResources](docs/sdk/README.md#listdeviceresources) - Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
* [listDevices](docs/sdk/README.md#listdevices) - Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
* [listExecutions](docs/sdk/README.md#listexecutions) - Returns the status of tasks for one or more target devices.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of tags for a managed device or task.
* [listTasks](docs/sdk/README.md#listtasks) - Returns a list of tasks that can be filtered by state.
* [tagResource](docs/sdk/README.md#tagresource) - Adds or replaces tags on a device or task.
* [untagResource](docs/sdk/README.md#untagresource) - Removes a tag from a device or task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
