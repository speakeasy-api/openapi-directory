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
import org.openapis.openapi.models.operations.CreateDevicePoolRequest;
import org.openapis.openapi.models.operations.CreateDevicePoolResponse;
import org.openapis.openapi.models.operations.CreateDevicePoolXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDevicePoolRequest;
import org.openapis.openapi.models.shared.DeviceAttributeEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDevicePoolRequest req = new CreateDevicePoolRequest(                new CreateDevicePoolRequest("provident", "distinctio",                 new org.openapis.openapi.models.shared.Rule[]{{
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.INSTANCE_ARN;
                                                    operator = RuleOperatorEnum.NOT_IN;
                                                    value = "corrupti";
                                                }}),
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.MODEL;
                                                    operator = RuleOperatorEnum.GREATER_THAN;
                                                    value = "error";
                                                }}),
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.INSTANCE_LABELS;
                                                    operator = RuleOperatorEnum.GREATER_THAN;
                                                    value = "iure";
                                                }}),
                                                add(new Rule() {{
                                                    attribute = DeviceAttributeEnum.MANUFACTURER;
                                                    operator = RuleOperatorEnum.CONTAINS;
                                                    value = "ipsa";
                                                }}),
                                            }}) {{
                                description = "delectus";
                                maxDevices = 272656L;
                            }};, CreateDevicePoolXAmzTargetEnum.DEVICE_FARM20150623_CREATE_DEVICE_POOL) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateDevicePoolResponse res = sdk.createDevicePool(req);

            if (res.createDevicePoolResult != null) {
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

* [createDevicePool](docs/sdk/README.md#createdevicepool) - Creates a device pool.
* [createInstanceProfile](docs/sdk/README.md#createinstanceprofile) - Creates a profile that can be applied to one or more private fleet device instances.
* [createNetworkProfile](docs/sdk/README.md#createnetworkprofile) - Creates a network profile.
* [createProject](docs/sdk/README.md#createproject) - Creates a project.
* [createRemoteAccessSession](docs/sdk/README.md#createremoteaccesssession) - Specifies and starts a remote access session.
* [createTestGridProject](docs/sdk/README.md#createtestgridproject) - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* [createTestGridUrl](docs/sdk/README.md#createtestgridurl) - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* [createUpload](docs/sdk/README.md#createupload) - Uploads an app or test scripts.
* [createVPCEConfiguration](docs/sdk/README.md#createvpceconfiguration) - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* [deleteDevicePool](docs/sdk/README.md#deletedevicepool) - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* [deleteInstanceProfile](docs/sdk/README.md#deleteinstanceprofile) - Deletes a profile that can be applied to one or more private device instances.
* [deleteNetworkProfile](docs/sdk/README.md#deletenetworkprofile) - Deletes a network profile.
* [deleteProject](docs/sdk/README.md#deleteproject) - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [deleteRemoteAccessSession](docs/sdk/README.md#deleteremoteaccesssession) - Deletes a completed remote access session and its results.
* [deleteRun](docs/sdk/README.md#deleterun) - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [deleteTestGridProject](docs/sdk/README.md#deletetestgridproject) - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* [deleteUpload](docs/sdk/README.md#deleteupload) - Deletes an upload given the upload ARN.
* [deleteVPCEConfiguration](docs/sdk/README.md#deletevpceconfiguration) - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* [getAccountSettings](docs/sdk/README.md#getaccountsettings) - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* [getDevice](docs/sdk/README.md#getdevice) - Gets information about a unique device type.
* [getDeviceInstance](docs/sdk/README.md#getdeviceinstance) - Returns information about a device instance that belongs to a private device fleet.
* [getDevicePool](docs/sdk/README.md#getdevicepool) - Gets information about a device pool.
* [getDevicePoolCompatibility](docs/sdk/README.md#getdevicepoolcompatibility) - Gets information about compatibility with a device pool.
* [getInstanceProfile](docs/sdk/README.md#getinstanceprofile) - Returns information about the specified instance profile.
* [getJob](docs/sdk/README.md#getjob) - Gets information about a job.
* [getNetworkProfile](docs/sdk/README.md#getnetworkprofile) - Returns information about a network profile.
* [getOfferingStatus](docs/sdk/README.md#getofferingstatus) - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [getProject](docs/sdk/README.md#getproject) - Gets information about a project.
* [getRemoteAccessSession](docs/sdk/README.md#getremoteaccesssession) - Returns a link to a currently running remote access session.
* [getRun](docs/sdk/README.md#getrun) - Gets information about a run.
* [getSuite](docs/sdk/README.md#getsuite) - Gets information about a suite.
* [getTest](docs/sdk/README.md#gettest) - Gets information about a test.
* [getTestGridProject](docs/sdk/README.md#gettestgridproject) - Retrieves information about a Selenium testing project.
* [getTestGridSession](docs/sdk/README.md#gettestgridsession) - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* [getUpload](docs/sdk/README.md#getupload) - Gets information about an upload.
* [getVPCEConfiguration](docs/sdk/README.md#getvpceconfiguration) - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* [installToRemoteAccessSession](docs/sdk/README.md#installtoremoteaccesssession) - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* [listArtifacts](docs/sdk/README.md#listartifacts) - Gets information about artifacts.
* [listDeviceInstances](docs/sdk/README.md#listdeviceinstances) - Returns information about the private device instances associated with one or more AWS accounts.
* [listDevicePools](docs/sdk/README.md#listdevicepools) - Gets information about device pools.
* [listDevices](docs/sdk/README.md#listdevices) - Gets information about unique device types.
* [listInstanceProfiles](docs/sdk/README.md#listinstanceprofiles) - Returns information about all the instance profiles in an AWS account.
* [listJobs](docs/sdk/README.md#listjobs) - Gets information about jobs for a given test run.
* [listNetworkProfiles](docs/sdk/README.md#listnetworkprofiles) - Returns the list of available network profiles.
* [listOfferingPromotions](docs/sdk/README.md#listofferingpromotions) - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* [listOfferingTransactions](docs/sdk/README.md#listofferingtransactions) - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [listOfferings](docs/sdk/README.md#listofferings) - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [listProjects](docs/sdk/README.md#listprojects) - Gets information about projects.
* [listRemoteAccessSessions](docs/sdk/README.md#listremoteaccesssessions) - Returns a list of all currently running remote access sessions.
* [listRuns](docs/sdk/README.md#listruns) - Gets information about runs, given an AWS Device Farm project ARN.
* [listSamples](docs/sdk/README.md#listsamples) - Gets information about samples, given an AWS Device Farm job ARN.
* [listSuites](docs/sdk/README.md#listsuites) - Gets information about test suites for a given job.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags for an AWS Device Farm resource.
* [listTestGridProjects](docs/sdk/README.md#listtestgridprojects) - Gets a list of all Selenium testing projects in your account.
* [listTestGridSessionActions](docs/sdk/README.md#listtestgridsessionactions) - Returns a list of the actions taken in a <a>TestGridSession</a>.
* [listTestGridSessionArtifacts](docs/sdk/README.md#listtestgridsessionartifacts) - Retrieves a list of artifacts created during the session.
* [listTestGridSessions](docs/sdk/README.md#listtestgridsessions) - Retrieves a list of sessions for a <a>TestGridProject</a>.
* [listTests](docs/sdk/README.md#listtests) - Gets information about tests in a given test suite.
* [listUniqueProblems](docs/sdk/README.md#listuniqueproblems) - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* [listUploads](docs/sdk/README.md#listuploads) - Gets information about uploads, given an AWS Device Farm project ARN.
* [listVPCEConfigurations](docs/sdk/README.md#listvpceconfigurations) - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* [purchaseOffering](docs/sdk/README.md#purchaseoffering) - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [renewOffering](docs/sdk/README.md#renewoffering) - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [scheduleRun](docs/sdk/README.md#schedulerun) - Schedules a run.
* [stopJob](docs/sdk/README.md#stopjob) - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [stopRemoteAccessSession](docs/sdk/README.md#stopremoteaccesssession) - Ends a specified remote access session.
* [stopRun](docs/sdk/README.md#stoprun) - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [tagResource](docs/sdk/README.md#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes the specified tags from a resource.
* [updateDeviceInstance](docs/sdk/README.md#updatedeviceinstance) - Updates information about a private device instance.
* [updateDevicePool](docs/sdk/README.md#updatedevicepool) - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* [updateInstanceProfile](docs/sdk/README.md#updateinstanceprofile) - Updates information about an existing private device instance profile.
* [updateNetworkProfile](docs/sdk/README.md#updatenetworkprofile) - Updates the network profile.
* [updateProject](docs/sdk/README.md#updateproject) - Modifies the specified project name, given the project ARN and a new name.
* [updateTestGridProject](docs/sdk/README.md#updatetestgridproject) - Change details of a project.
* [updateUpload](docs/sdk/README.md#updateupload) - Updates an uploaded test spec.
* [updateVPCEConfiguration](docs/sdk/README.md#updatevpceconfiguration) - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
