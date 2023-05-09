# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/devicefarm/2015-06-23/go
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
    res, err := s.CreateDevicePool(ctx, operations.CreateDevicePoolRequest{
        CreateDevicePoolRequest: shared.CreateDevicePoolRequest{
            Description: sdk.String("corrupti"),
            MaxDevices: sdk.Int64(592845),
            Name: "Ellis Mitchell",
            ProjectArn: "illum",
            Rules: []shared.Rule{
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumInstanceLabels.ToPointer(),
                    Operator: shared.RuleOperatorEnumIn.ToPointer(),
                    Value: sdk.String("suscipit"),
                },
                shared.Rule{
                    Attribute: shared.DeviceAttributeEnumRemoteDebugEnabled.ToPointer(),
                    Operator: shared.RuleOperatorEnumLessThanOrEquals.ToPointer(),
                    Value: sdk.String("debitis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.CreateDevicePoolXAmzTargetEnumDeviceFarm20150623CreateDevicePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDevicePoolResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateDevicePool](docs/sdk/README.md#createdevicepool) - Creates a device pool.
* [CreateInstanceProfile](docs/sdk/README.md#createinstanceprofile) - Creates a profile that can be applied to one or more private fleet device instances.
* [CreateNetworkProfile](docs/sdk/README.md#createnetworkprofile) - Creates a network profile.
* [CreateProject](docs/sdk/README.md#createproject) - Creates a project.
* [CreateRemoteAccessSession](docs/sdk/README.md#createremoteaccesssession) - Specifies and starts a remote access session.
* [CreateTestGridProject](docs/sdk/README.md#createtestgridproject) - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* [CreateTestGridURL](docs/sdk/README.md#createtestgridurl) - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* [CreateUpload](docs/sdk/README.md#createupload) - Uploads an app or test scripts.
* [CreateVPCEConfiguration](docs/sdk/README.md#createvpceconfiguration) - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* [DeleteDevicePool](docs/sdk/README.md#deletedevicepool) - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* [DeleteInstanceProfile](docs/sdk/README.md#deleteinstanceprofile) - Deletes a profile that can be applied to one or more private device instances.
* [DeleteNetworkProfile](docs/sdk/README.md#deletenetworkprofile) - Deletes a network profile.
* [DeleteProject](docs/sdk/README.md#deleteproject) - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [DeleteRemoteAccessSession](docs/sdk/README.md#deleteremoteaccesssession) - Deletes a completed remote access session and its results.
* [DeleteRun](docs/sdk/README.md#deleterun) - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [DeleteTestGridProject](docs/sdk/README.md#deletetestgridproject) - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* [DeleteUpload](docs/sdk/README.md#deleteupload) - Deletes an upload given the upload ARN.
* [DeleteVPCEConfiguration](docs/sdk/README.md#deletevpceconfiguration) - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* [GetAccountSettings](docs/sdk/README.md#getaccountsettings) - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* [GetDevice](docs/sdk/README.md#getdevice) - Gets information about a unique device type.
* [GetDeviceInstance](docs/sdk/README.md#getdeviceinstance) - Returns information about a device instance that belongs to a private device fleet.
* [GetDevicePool](docs/sdk/README.md#getdevicepool) - Gets information about a device pool.
* [GetDevicePoolCompatibility](docs/sdk/README.md#getdevicepoolcompatibility) - Gets information about compatibility with a device pool.
* [GetInstanceProfile](docs/sdk/README.md#getinstanceprofile) - Returns information about the specified instance profile.
* [GetJob](docs/sdk/README.md#getjob) - Gets information about a job.
* [GetNetworkProfile](docs/sdk/README.md#getnetworkprofile) - Returns information about a network profile.
* [GetOfferingStatus](docs/sdk/README.md#getofferingstatus) - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [GetProject](docs/sdk/README.md#getproject) - Gets information about a project.
* [GetRemoteAccessSession](docs/sdk/README.md#getremoteaccesssession) - Returns a link to a currently running remote access session.
* [GetRun](docs/sdk/README.md#getrun) - Gets information about a run.
* [GetSuite](docs/sdk/README.md#getsuite) - Gets information about a suite.
* [GetTest](docs/sdk/README.md#gettest) - Gets information about a test.
* [GetTestGridProject](docs/sdk/README.md#gettestgridproject) - Retrieves information about a Selenium testing project.
* [GetTestGridSession](docs/sdk/README.md#gettestgridsession) - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* [GetUpload](docs/sdk/README.md#getupload) - Gets information about an upload.
* [GetVPCEConfiguration](docs/sdk/README.md#getvpceconfiguration) - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* [InstallToRemoteAccessSession](docs/sdk/README.md#installtoremoteaccesssession) - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* [ListArtifacts](docs/sdk/README.md#listartifacts) - Gets information about artifacts.
* [ListDeviceInstances](docs/sdk/README.md#listdeviceinstances) - Returns information about the private device instances associated with one or more AWS accounts.
* [ListDevicePools](docs/sdk/README.md#listdevicepools) - Gets information about device pools.
* [ListDevices](docs/sdk/README.md#listdevices) - Gets information about unique device types.
* [ListInstanceProfiles](docs/sdk/README.md#listinstanceprofiles) - Returns information about all the instance profiles in an AWS account.
* [ListJobs](docs/sdk/README.md#listjobs) - Gets information about jobs for a given test run.
* [ListNetworkProfiles](docs/sdk/README.md#listnetworkprofiles) - Returns the list of available network profiles.
* [ListOfferingPromotions](docs/sdk/README.md#listofferingpromotions) - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* [ListOfferingTransactions](docs/sdk/README.md#listofferingtransactions) - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [ListOfferings](docs/sdk/README.md#listofferings) - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [ListProjects](docs/sdk/README.md#listprojects) - Gets information about projects.
* [ListRemoteAccessSessions](docs/sdk/README.md#listremoteaccesssessions) - Returns a list of all currently running remote access sessions.
* [ListRuns](docs/sdk/README.md#listruns) - Gets information about runs, given an AWS Device Farm project ARN.
* [ListSamples](docs/sdk/README.md#listsamples) - Gets information about samples, given an AWS Device Farm job ARN.
* [ListSuites](docs/sdk/README.md#listsuites) - Gets information about test suites for a given job.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - List the tags for an AWS Device Farm resource.
* [ListTestGridProjects](docs/sdk/README.md#listtestgridprojects) - Gets a list of all Selenium testing projects in your account.
* [ListTestGridSessionActions](docs/sdk/README.md#listtestgridsessionactions) - Returns a list of the actions taken in a <a>TestGridSession</a>.
* [ListTestGridSessionArtifacts](docs/sdk/README.md#listtestgridsessionartifacts) - Retrieves a list of artifacts created during the session.
* [ListTestGridSessions](docs/sdk/README.md#listtestgridsessions) - Retrieves a list of sessions for a <a>TestGridProject</a>.
* [ListTests](docs/sdk/README.md#listtests) - Gets information about tests in a given test suite.
* [ListUniqueProblems](docs/sdk/README.md#listuniqueproblems) - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* [ListUploads](docs/sdk/README.md#listuploads) - Gets information about uploads, given an AWS Device Farm project ARN.
* [ListVPCEConfigurations](docs/sdk/README.md#listvpceconfigurations) - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* [PurchaseOffering](docs/sdk/README.md#purchaseoffering) - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [RenewOffering](docs/sdk/README.md#renewoffering) - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [ScheduleRun](docs/sdk/README.md#schedulerun) - Schedules a run.
* [StopJob](docs/sdk/README.md#stopjob) - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [StopRemoteAccessSession](docs/sdk/README.md#stopremoteaccesssession) - Ends a specified remote access session.
* [StopRun](docs/sdk/README.md#stoprun) - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [TagResource](docs/sdk/README.md#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [UntagResource](docs/sdk/README.md#untagresource) - Deletes the specified tags from a resource.
* [UpdateDeviceInstance](docs/sdk/README.md#updatedeviceinstance) - Updates information about a private device instance.
* [UpdateDevicePool](docs/sdk/README.md#updatedevicepool) - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* [UpdateInstanceProfile](docs/sdk/README.md#updateinstanceprofile) - Updates information about an existing private device instance profile.
* [UpdateNetworkProfile](docs/sdk/README.md#updatenetworkprofile) - Updates the network profile.
* [UpdateProject](docs/sdk/README.md#updateproject) - Modifies the specified project name, given the project ARN and a new name.
* [UpdateTestGridProject](docs/sdk/README.md#updatetestgridproject) - Change details of a project.
* [UpdateUpload](docs/sdk/README.md#updateupload) - Updates an uploaded test spec.
* [UpdateVPCEConfiguration](docs/sdk/README.md#updatevpceconfiguration) - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
