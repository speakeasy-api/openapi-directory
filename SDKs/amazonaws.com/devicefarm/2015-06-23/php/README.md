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

* `createDevicePool` - Creates a device pool.
* `createInstanceProfile` - Creates a profile that can be applied to one or more private fleet device instances.
* `createNetworkProfile` - Creates a network profile.
* `createProject` - Creates a project.
* `createRemoteAccessSession` - Specifies and starts a remote access session.
* `createTestGridProject` - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* `createTestGridUrl` - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* `createUpload` - Uploads an app or test scripts.
* `createVPCEConfiguration` - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* `deleteDevicePool` - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* `deleteInstanceProfile` - Deletes a profile that can be applied to one or more private device instances.
* `deleteNetworkProfile` - Deletes a network profile.
* `deleteProject` - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* `deleteRemoteAccessSession` - Deletes a completed remote access session and its results.
* `deleteRun` - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* `deleteTestGridProject` - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* `deleteUpload` - Deletes an upload given the upload ARN.
* `deleteVPCEConfiguration` - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* `getAccountSettings` - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* `getDevice` - Gets information about a unique device type.
* `getDeviceInstance` - Returns information about a device instance that belongs to a private device fleet.
* `getDevicePool` - Gets information about a device pool.
* `getDevicePoolCompatibility` - Gets information about compatibility with a device pool.
* `getInstanceProfile` - Returns information about the specified instance profile.
* `getJob` - Gets information about a job.
* `getNetworkProfile` - Returns information about a network profile.
* `getOfferingStatus` - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `getProject` - Gets information about a project.
* `getRemoteAccessSession` - Returns a link to a currently running remote access session.
* `getRun` - Gets information about a run.
* `getSuite` - Gets information about a suite.
* `getTest` - Gets information about a test.
* `getTestGridProject` - Retrieves information about a Selenium testing project.
* `getTestGridSession` - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* `getUpload` - Gets information about an upload.
* `getVPCEConfiguration` - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* `installToRemoteAccessSession` - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* `listArtifacts` - Gets information about artifacts.
* `listDeviceInstances` - Returns information about the private device instances associated with one or more AWS accounts.
* `listDevicePools` - Gets information about device pools.
* `listDevices` - Gets information about unique device types.
* `listInstanceProfiles` - Returns information about all the instance profiles in an AWS account.
* `listJobs` - Gets information about jobs for a given test run.
* `listNetworkProfiles` - Returns the list of available network profiles.
* `listOfferingPromotions` - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* `listOfferingTransactions` - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `listOfferings` - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `listProjects` - Gets information about projects.
* `listRemoteAccessSessions` - Returns a list of all currently running remote access sessions.
* `listRuns` - Gets information about runs, given an AWS Device Farm project ARN.
* `listSamples` - Gets information about samples, given an AWS Device Farm job ARN.
* `listSuites` - Gets information about test suites for a given job.
* `listTagsForResource` - List the tags for an AWS Device Farm resource.
* `listTestGridProjects` - Gets a list of all Selenium testing projects in your account.
* `listTestGridSessionActions` - Returns a list of the actions taken in a <a>TestGridSession</a>.
* `listTestGridSessionArtifacts` - Retrieves a list of artifacts created during the session.
* `listTestGridSessions` - Retrieves a list of sessions for a <a>TestGridProject</a>.
* `listTests` - Gets information about tests in a given test suite.
* `listUniqueProblems` - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* `listUploads` - Gets information about uploads, given an AWS Device Farm project ARN.
* `listVPCEConfigurations` - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* `purchaseOffering` - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `renewOffering` - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* `scheduleRun` - Schedules a run.
* `stopJob` - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* `stopRemoteAccessSession` - Ends a specified remote access session.
* `stopRun` - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* `tagResource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* `untagResource` - Deletes the specified tags from a resource.
* `updateDeviceInstance` - Updates information about a private device instance.
* `updateDevicePool` - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* `updateInstanceProfile` - Updates information about an existing private device instance profile.
* `updateNetworkProfile` - Updates the network profile.
* `updateProject` - Modifies the specified project name, given the project ARN and a new name.
* `updateTestGridProject` - Change details of a project.
* `updateUpload` - Updates an uploaded test spec.
* `updateVPCEConfiguration` - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
