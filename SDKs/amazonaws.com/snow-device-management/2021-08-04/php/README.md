# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancelTask` - <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p> <note> <p>A task might still run if it's processed from the queue before the <code>CancelTask</code> operation changes the task's state.</p> </note>
* `createTask` - Instructs one or more devices to start a task, such as unlocking or rebooting.
* `describeDevice` - Checks device-specific information, such as the device type, software version, IP addresses, and lock status.
* `describeDeviceEc2Instances` - Checks the current state of the Amazon EC2 instances. The output is similar to <code>describeDevice</code>, but the results are sourced from the device cache in the Amazon Web Services Cloud and include a subset of the available fields. 
* `describeExecution` - Checks the status of a remote task running on one or more target devices.
* `describeTask` - Checks the metadata for a given task on a device. 
* `listDeviceResources` - Returns a list of the Amazon Web Services resources available for a device. Currently, Amazon EC2 instances are the only supported resource type.
* `listDevices` - Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management enabled in the Amazon Web Services Region where the command is run.
* `listExecutions` - Returns the status of tasks for one or more target devices.
* `listTagsForResource` - Returns a list of tags for a managed device or task.
* `listTasks` - Returns a list of tasks that can be filtered by state.
* `tagResource` - Adds or replaces tags on a device or task.
* `untagResource` - Removes a tag from a device or task.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
