# SDK

## Overview

<p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p> <ul> <li> <p>Testing on desktop browsers</p> <p> Device Farm makes it possible for you to test your web applications on desktop browsers using Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web Applications on Selenium with Device Farm</a>.</p> </li> <li> <p>Testing on real mobile devices</p> <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/devicefarm/>
### Available Operations

* [createDevicePool](#createdevicepool) - Creates a device pool.
* [createInstanceProfile](#createinstanceprofile) - Creates a profile that can be applied to one or more private fleet device instances.
* [createNetworkProfile](#createnetworkprofile) - Creates a network profile.
* [createProject](#createproject) - Creates a project.
* [createRemoteAccessSession](#createremoteaccesssession) - Specifies and starts a remote access session.
* [createTestGridProject](#createtestgridproject) - Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.
* [createTestGridUrl](#createtestgridurl) - Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.
* [createUpload](#createupload) - Uploads an app or test scripts.
* [createVPCEConfiguration](#createvpceconfiguration) - Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
* [deleteDevicePool](#deletedevicepool) - Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
* [deleteInstanceProfile](#deleteinstanceprofile) - Deletes a profile that can be applied to one or more private device instances.
* [deleteNetworkProfile](#deletenetworkprofile) - Deletes a network profile.
* [deleteProject](#deleteproject) - <p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [deleteRemoteAccessSession](#deleteremoteaccesssession) - Deletes a completed remote access session and its results.
* [deleteRun](#deleterun) - <p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>
* [deleteTestGridProject](#deletetestgridproject) - <p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>
* [deleteUpload](#deleteupload) - Deletes an upload given the upload ARN.
* [deleteVPCEConfiguration](#deletevpceconfiguration) - Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
* [getAccountSettings](#getaccountsettings) - Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.
* [getDevice](#getdevice) - Gets information about a unique device type.
* [getDeviceInstance](#getdeviceinstance) - Returns information about a device instance that belongs to a private device fleet.
* [getDevicePool](#getdevicepool) - Gets information about a device pool.
* [getDevicePoolCompatibility](#getdevicepoolcompatibility) - Gets information about compatibility with a device pool.
* [getInstanceProfile](#getinstanceprofile) - Returns information about the specified instance profile.
* [getJob](#getjob) - Gets information about a job.
* [getNetworkProfile](#getnetworkprofile) - Returns information about a network profile.
* [getOfferingStatus](#getofferingstatus) - Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [getProject](#getproject) - Gets information about a project.
* [getRemoteAccessSession](#getremoteaccesssession) - Returns a link to a currently running remote access session.
* [getRun](#getrun) - Gets information about a run.
* [getSuite](#getsuite) - Gets information about a suite.
* [getTest](#gettest) - Gets information about a test.
* [getTestGridProject](#gettestgridproject) - Retrieves information about a Selenium testing project.
* [getTestGridSession](#gettestgridsession) - <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>
* [getUpload](#getupload) - Gets information about an upload.
* [getVPCEConfiguration](#getvpceconfiguration) - Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
* [installToRemoteAccessSession](#installtoremoteaccesssession) - Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
* [listArtifacts](#listartifacts) - Gets information about artifacts.
* [listDeviceInstances](#listdeviceinstances) - Returns information about the private device instances associated with one or more AWS accounts.
* [listDevicePools](#listdevicepools) - Gets information about device pools.
* [listDevices](#listdevices) - Gets information about unique device types.
* [listInstanceProfiles](#listinstanceprofiles) - Returns information about all the instance profiles in an AWS account.
* [listJobs](#listjobs) - Gets information about jobs for a given test run.
* [listNetworkProfiles](#listnetworkprofiles) - Returns the list of available network profiles.
* [listOfferingPromotions](#listofferingpromotions) - Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.
* [listOfferingTransactions](#listofferingtransactions) - Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [listOfferings](#listofferings) - Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [listProjects](#listprojects) - Gets information about projects.
* [listRemoteAccessSessions](#listremoteaccesssessions) - Returns a list of all currently running remote access sessions.
* [listRuns](#listruns) - Gets information about runs, given an AWS Device Farm project ARN.
* [listSamples](#listsamples) - Gets information about samples, given an AWS Device Farm job ARN.
* [listSuites](#listsuites) - Gets information about test suites for a given job.
* [listTagsForResource](#listtagsforresource) - List the tags for an AWS Device Farm resource.
* [listTestGridProjects](#listtestgridprojects) - Gets a list of all Selenium testing projects in your account.
* [listTestGridSessionActions](#listtestgridsessionactions) - Returns a list of the actions taken in a <a>TestGridSession</a>.
* [listTestGridSessionArtifacts](#listtestgridsessionartifacts) - Retrieves a list of artifacts created during the session.
* [listTestGridSessions](#listtestgridsessions) - Retrieves a list of sessions for a <a>TestGridProject</a>.
* [listTests](#listtests) - Gets information about tests in a given test suite.
* [listUniqueProblems](#listuniqueproblems) - <p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>
* [listUploads](#listuploads) - Gets information about uploads, given an AWS Device Farm project ARN.
* [listVPCEConfigurations](#listvpceconfigurations) - Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
* [purchaseOffering](#purchaseoffering) - Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [renewOffering](#renewoffering) - Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.
* [scheduleRun](#schedulerun) - Schedules a run.
* [stopJob](#stopjob) - Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [stopRemoteAccessSession](#stopremoteaccesssession) - Ends a specified remote access session.
* [stopRun](#stoprun) - Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.
* [tagResource](#tagresource) - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.
* [untagResource](#untagresource) - Deletes the specified tags from a resource.
* [updateDeviceInstance](#updatedeviceinstance) - Updates information about a private device instance.
* [updateDevicePool](#updatedevicepool) - Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
* [updateInstanceProfile](#updateinstanceprofile) - Updates information about an existing private device instance profile.
* [updateNetworkProfile](#updatenetworkprofile) - Updates the network profile.
* [updateProject](#updateproject) - Modifies the specified project name, given the project ARN and a new name.
* [updateTestGridProject](#updatetestgridproject) - Change details of a project.
* [updateUpload](#updateupload) - Updates an uploaded test spec.
* [updateVPCEConfiguration](#updatevpceconfiguration) - Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

## createDevicePool

Creates a device pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\DeviceAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevicePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDevicePoolRequest();
    $request->createDevicePoolRequest = new CreateDevicePoolRequest();
    $request->createDevicePoolRequest->description = 'delectus';
    $request->createDevicePoolRequest->maxDevices = 272656;
    $request->createDevicePoolRequest->name = 'Minnie Schiller';
    $request->createDevicePoolRequest->projectArn = 'iusto';
    $request->createDevicePoolRequest->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = CreateDevicePoolXAmzTargetEnum::DEVICE_FARM20150623_CREATE_DEVICE_POOL;

    $response = $sdk->sdk->createDevicePool($request);

    if ($response->createDevicePoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInstanceProfile

Creates a profile that can be applied to one or more private fleet device instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateInstanceProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInstanceProfileRequest();
    $request->createInstanceProfileRequest = new CreateInstanceProfileRequest();
    $request->createInstanceProfileRequest->description = 'perferendis';
    $request->createInstanceProfileRequest->excludeAppPackagesFromCleanup = [
        'repellendus',
        'sapiente',
    ];
    $request->createInstanceProfileRequest->name = 'Fred Strosin';
    $request->createInstanceProfileRequest->packageCleanup = false;
    $request->createInstanceProfileRequest->rebootAfterUse = false;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateInstanceProfileXAmzTargetEnum::DEVICE_FARM20150623_CREATE_INSTANCE_PROFILE;

    $response = $sdk->sdk->createInstanceProfile($request);

    if ($response->createInstanceProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkProfile

Creates a network profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkProfileRequest();
    $request->createNetworkProfileRequest = new CreateNetworkProfileRequest();
    $request->createNetworkProfileRequest->description = 'dicta';
    $request->createNetworkProfileRequest->downlinkBandwidthBits = 720633;
    $request->createNetworkProfileRequest->downlinkDelayMs = 639921;
    $request->createNetworkProfileRequest->downlinkJitterMs = 582020;
    $request->createNetworkProfileRequest->downlinkLossPercent = 143353;
    $request->createNetworkProfileRequest->name = 'Irvin Rosenbaum III';
    $request->createNetworkProfileRequest->projectArn = 'molestiae';
    $request->createNetworkProfileRequest->type = NetworkProfileTypeEnum::CURATED;
    $request->createNetworkProfileRequest->uplinkBandwidthBits = 186332;
    $request->createNetworkProfileRequest->uplinkDelayMs = 774234;
    $request->createNetworkProfileRequest->uplinkJitterMs = 736918;
    $request->createNetworkProfileRequest->uplinkLossPercent = 456150;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = CreateNetworkProfileXAmzTargetEnum::DEVICE_FARM20150623_CREATE_NETWORK_PROFILE;

    $response = $sdk->sdk->createNetworkProfile($request);

    if ($response->createNetworkProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

Creates a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->createProjectRequest = new CreateProjectRequest();
    $request->createProjectRequest->defaultJobTimeoutMinutes = 612096;
    $request->createProjectRequest->name = 'Faye Howe';
    $request->createProjectRequest->vpcConfig = new VpcConfig();
    $request->createProjectRequest->vpcConfig->securityGroupIds = [
        'in',
        'corporis',
        'iste',
    ];
    $request->createProjectRequest->vpcConfig->subnetIds = [
        'saepe',
        'quidem',
    ];
    $request->createProjectRequest->vpcConfig->vpcId = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = CreateProjectXAmzTargetEnum::DEVICE_FARM20150623_CREATE_PROJECT;

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRemoteAccessSession

Specifies and starts a remote access session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRemoteAccessSessionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BillingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InteractionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateRemoteAccessSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRemoteAccessSessionRequest();
    $request->createRemoteAccessSessionRequest = new CreateRemoteAccessSessionRequest();
    $request->createRemoteAccessSessionRequest->clientId = 'corporis';
    $request->createRemoteAccessSessionRequest->configuration = new CreateRemoteAccessSessionConfiguration();
    $request->createRemoteAccessSessionRequest->configuration->billingMethod = BillingMethodEnum::METERED;
    $request->createRemoteAccessSessionRequest->configuration->vpceConfigurationArns = [
        'enim',
        'omnis',
        'nemo',
        'minima',
    ];
    $request->createRemoteAccessSessionRequest->deviceArn = 'excepturi';
    $request->createRemoteAccessSessionRequest->instanceArn = 'accusantium';
    $request->createRemoteAccessSessionRequest->interactionMode = InteractionModeEnum::NO_VIDEO;
    $request->createRemoteAccessSessionRequest->name = 'Miss Aubrey Williamson';
    $request->createRemoteAccessSessionRequest->projectArn = 'culpa';
    $request->createRemoteAccessSessionRequest->remoteDebugEnabled = false;
    $request->createRemoteAccessSessionRequest->remoteRecordAppArn = 'consequuntur';
    $request->createRemoteAccessSessionRequest->remoteRecordEnabled = false;
    $request->createRemoteAccessSessionRequest->skipAppResign = false;
    $request->createRemoteAccessSessionRequest->sshPublicKey = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = CreateRemoteAccessSessionXAmzTargetEnum::DEVICE_FARM20150623_CREATE_REMOTE_ACCESS_SESSION;

    $response = $sdk->sdk->createRemoteAccessSession($request);

    if ($response->createRemoteAccessSessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTestGridProject

Creates a Selenium testing project. Projects are used to track <a>TestGridSession</a> instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestGridVpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateTestGridProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTestGridProjectRequest();
    $request->createTestGridProjectRequest = new CreateTestGridProjectRequest();
    $request->createTestGridProjectRequest->description = 'error';
    $request->createTestGridProjectRequest->name = 'Beatrice Brown';
    $request->createTestGridProjectRequest->vpcConfig = new TestGridVpcConfig();
    $request->createTestGridProjectRequest->vpcConfig->securityGroupIds = [
        'odit',
        'quo',
    ];
    $request->createTestGridProjectRequest->vpcConfig->subnetIds = [
        'tenetur',
    ];
    $request->createTestGridProjectRequest->vpcConfig->vpcId = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreateTestGridProjectXAmzTargetEnum::DEVICE_FARM20150623_CREATE_TEST_GRID_PROJECT;

    $response = $sdk->sdk->createTestGridProject($request);

    if ($response->createTestGridProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTestGridUrl

Creates a signed, short-term URL that can be passed to a Selenium <code>RemoteWebDriver</code> constructor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTestGridUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTestGridUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTestGridUrlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTestGridUrlRequest();
    $request->createTestGridUrlRequest = new CreateTestGridUrlRequest();
    $request->createTestGridUrlRequest->expiresInSeconds = 96098;
    $request->createTestGridUrlRequest->projectArn = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = CreateTestGridUrlXAmzTargetEnum::DEVICE_FARM20150623_CREATE_TEST_GRID_URL;

    $response = $sdk->sdk->createTestGridUrl($request);

    if ($response->createTestGridUrlResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUpload

Uploads an app or test scripts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\UploadTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUploadXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUploadRequest();
    $request->createUploadRequest = new CreateUploadRequest();
    $request->createUploadRequest->contentType = 'voluptate';
    $request->createUploadRequest->name = 'Thomas Batz';
    $request->createUploadRequest->projectArn = 'maiores';
    $request->createUploadRequest->type = UploadTypeEnum::EXTERNAL_DATA;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = CreateUploadXAmzTargetEnum::DEVICE_FARM20150623_CREATE_UPLOAD;

    $response = $sdk->sdk->createUpload($request);

    if ($response->createUploadResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createVPCEConfiguration

Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateVPCEConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVPCEConfigurationRequest();
    $request->createVPCEConfigurationRequest = new CreateVPCEConfigurationRequest();
    $request->createVPCEConfigurationRequest->serviceDnsName = 'commodi';
    $request->createVPCEConfigurationRequest->vpceConfigurationDescription = 'repudiandae';
    $request->createVPCEConfigurationRequest->vpceConfigurationName = 'quae';
    $request->createVPCEConfigurationRequest->vpceServiceName = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = CreateVPCEConfigurationXAmzTargetEnum::DEVICE_FARM20150623_CREATE_VPCE_CONFIGURATION;

    $response = $sdk->sdk->createVPCEConfiguration($request);

    if ($response->createVPCEConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDevicePool

Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDevicePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDevicePoolRequest();
    $request->deleteDevicePoolRequest = new DeleteDevicePoolRequest();
    $request->deleteDevicePoolRequest->arn = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteDevicePoolXAmzTargetEnum::DEVICE_FARM20150623_DELETE_DEVICE_POOL;

    $response = $sdk->sdk->deleteDevicePool($request);

    if ($response->deleteDevicePoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInstanceProfile

Deletes a profile that can be applied to one or more private device instances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInstanceProfileRequest();
    $request->deleteInstanceProfileRequest = new DeleteInstanceProfileRequest();
    $request->deleteInstanceProfileRequest->arn = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DeleteInstanceProfileXAmzTargetEnum::DEVICE_FARM20150623_DELETE_INSTANCE_PROFILE;

    $response = $sdk->sdk->deleteInstanceProfile($request);

    if ($response->deleteInstanceProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkProfile

Deletes a network profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkProfileRequest();
    $request->deleteNetworkProfileRequest = new DeleteNetworkProfileRequest();
    $request->deleteNetworkProfileRequest->arn = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = DeleteNetworkProfileXAmzTargetEnum::DEVICE_FARM20150623_DELETE_NETWORK_PROFILE;

    $response = $sdk->sdk->deleteNetworkProfile($request);

    if ($response->deleteNetworkProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

<p>Deletes an AWS Device Farm project, given the project ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->deleteProjectRequest = new DeleteProjectRequest();
    $request->deleteProjectRequest->arn = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = DeleteProjectXAmzTargetEnum::DEVICE_FARM20150623_DELETE_PROJECT;

    $response = $sdk->sdk->deleteProject($request);

    if ($response->deleteProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRemoteAccessSession

Deletes a completed remote access session and its results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRemoteAccessSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRemoteAccessSessionRequest();
    $request->deleteRemoteAccessSessionRequest = new DeleteRemoteAccessSessionRequest();
    $request->deleteRemoteAccessSessionRequest->arn = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DeleteRemoteAccessSessionXAmzTargetEnum::DEVICE_FARM20150623_DELETE_REMOTE_ACCESS_SESSION;

    $response = $sdk->sdk->deleteRemoteAccessSession($request);

    if ($response->deleteRemoteAccessSessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRun

<p>Deletes the run, given the run ARN.</p> <p> Deleting this resource does not stop an in-progress run.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRunRequest();
    $request->deleteRunRequest = new DeleteRunRequest();
    $request->deleteRunRequest->arn = 'necessitatibus';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteRunXAmzTargetEnum::DEVICE_FARM20150623_DELETE_RUN;

    $response = $sdk->sdk->deleteRun($request);

    if ($response->deleteRunResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTestGridProject

<p> Deletes a Selenium testing project and all content generated under it. </p> <important> <p>You cannot undo this operation.</p> </important> <note> <p>You cannot delete a project if it has active sessions.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTestGridProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTestGridProjectRequest();
    $request->deleteTestGridProjectRequest = new DeleteTestGridProjectRequest();
    $request->deleteTestGridProjectRequest->projectArn = 'in';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = DeleteTestGridProjectXAmzTargetEnum::DEVICE_FARM20150623_DELETE_TEST_GRID_PROJECT;

    $response = $sdk->sdk->deleteTestGridProject($request);

    if ($response->deleteTestGridProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUpload

Deletes an upload given the upload ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUploadXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUploadRequest();
    $request->deleteUploadRequest = new DeleteUploadRequest();
    $request->deleteUploadRequest->arn = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteUploadXAmzTargetEnum::DEVICE_FARM20150623_DELETE_UPLOAD;

    $response = $sdk->sdk->deleteUpload($request);

    if ($response->deleteUploadResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVPCEConfiguration

Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVPCEConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVPCEConfigurationRequest();
    $request->deleteVPCEConfigurationRequest = new DeleteVPCEConfigurationRequest();
    $request->deleteVPCEConfigurationRequest->arn = 'delectus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DeleteVPCEConfigurationXAmzTargetEnum::DEVICE_FARM20150623_DELETE_VPCE_CONFIGURATION;

    $response = $sdk->sdk->deleteVPCEConfiguration($request);

    if ($response->deleteVPCEConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountSettings

Returns the number of unmetered iOS or unmetered Android devices that have been purchased by the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountSettingsRequest();
    $request->requestBody = [
        'deserunt' => 'nisi',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = GetAccountSettingsXAmzTargetEnum::DEVICE_FARM20150623_GET_ACCOUNT_SETTINGS;

    $response = $sdk->sdk->getAccountSettings($request);

    if ($response->getAccountSettingsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevice

Gets information about a unique device type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceRequest();
    $request->getDeviceRequest = new GetDeviceRequest();
    $request->getDeviceRequest->arn = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetDeviceXAmzTargetEnum::DEVICE_FARM20150623_GET_DEVICE;

    $response = $sdk->sdk->getDevice($request);

    if ($response->getDeviceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceInstance

Returns information about a device instance that belongs to a private device fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDeviceInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceInstanceRequest();
    $request->getDeviceInstanceRequest = new GetDeviceInstanceRequest();
    $request->getDeviceInstanceRequest->arn = 'vero';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = GetDeviceInstanceXAmzTargetEnum::DEVICE_FARM20150623_GET_DEVICE_INSTANCE;

    $response = $sdk->sdk->getDeviceInstance($request);

    if ($response->getDeviceInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevicePool

Gets information about a device pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicePoolRequest();
    $request->getDevicePoolRequest = new GetDevicePoolRequest();
    $request->getDevicePoolRequest->arn = 'quos';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetDevicePoolXAmzTargetEnum::DEVICE_FARM20150623_GET_DEVICE_POOL;

    $response = $sdk->sdk->getDevicePool($request);

    if ($response->getDevicePoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevicePoolCompatibility

Gets information about compatibility with a device pool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicePoolCompatibilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDevicePoolCompatibilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleRunConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BillingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerArtifactPaths;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\Radios;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleRunTest;
use \OpenAPI\OpenAPI\Models\Shared\TestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDevicePoolCompatibilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevicePoolCompatibilityRequest();
    $request->getDevicePoolCompatibilityRequest = new GetDevicePoolCompatibilityRequest();
    $request->getDevicePoolCompatibilityRequest->appArn = 'dolor';
    $request->getDevicePoolCompatibilityRequest->configuration = new ScheduleRunConfiguration();
    $request->getDevicePoolCompatibilityRequest->configuration->auxiliaryApps = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->getDevicePoolCompatibilityRequest->configuration->billingMethod = BillingMethodEnum::UNMETERED;
    $request->getDevicePoolCompatibilityRequest->configuration->customerArtifactPaths = new CustomerArtifactPaths();
    $request->getDevicePoolCompatibilityRequest->configuration->customerArtifactPaths->androidPaths = [
        'eius',
        'maxime',
        'deleniti',
        'facilis',
    ];
    $request->getDevicePoolCompatibilityRequest->configuration->customerArtifactPaths->deviceHostPaths = [
        'architecto',
        'architecto',
    ];
    $request->getDevicePoolCompatibilityRequest->configuration->customerArtifactPaths->iosPaths = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->getDevicePoolCompatibilityRequest->configuration->extraDataPackageArn = 'quibusdam';
    $request->getDevicePoolCompatibilityRequest->configuration->locale = 'sed';
    $request->getDevicePoolCompatibilityRequest->configuration->location = new Location();
    $request->getDevicePoolCompatibilityRequest->configuration->location->latitude = 9046.48;
    $request->getDevicePoolCompatibilityRequest->configuration->location->longitude = 8681.26;
    $request->getDevicePoolCompatibilityRequest->configuration->networkProfileArn = 'accusantium';
    $request->getDevicePoolCompatibilityRequest->configuration->radios = new Radios();
    $request->getDevicePoolCompatibilityRequest->configuration->radios->bluetooth = false;
    $request->getDevicePoolCompatibilityRequest->configuration->radios->gps = false;
    $request->getDevicePoolCompatibilityRequest->configuration->radios->nfc = false;
    $request->getDevicePoolCompatibilityRequest->configuration->radios->wifi = false;
    $request->getDevicePoolCompatibilityRequest->configuration->vpceConfigurationArns = [
        'praesentium',
    ];
    $request->getDevicePoolCompatibilityRequest->devicePoolArn = 'natus';
    $request->getDevicePoolCompatibilityRequest->test = new ScheduleRunTest();
    $request->getDevicePoolCompatibilityRequest->test->filter = 'magni';
    $request->getDevicePoolCompatibilityRequest->test->parameters = [
        'quo' => 'illum',
    ];
    $request->getDevicePoolCompatibilityRequest->test->testPackageArn = 'pariatur';
    $request->getDevicePoolCompatibilityRequest->test->testSpecArn = 'maxime';
    $request->getDevicePoolCompatibilityRequest->test->type = TestTypeEnum::APPIUM_WEB_JAVA_JUNIT;
    $request->getDevicePoolCompatibilityRequest->testType = TestTypeEnum::APPIUM_WEB_NODE;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = GetDevicePoolCompatibilityXAmzTargetEnum::DEVICE_FARM20150623_GET_DEVICE_POOL_COMPATIBILITY;

    $response = $sdk->sdk->getDevicePoolCompatibility($request);

    if ($response->getDevicePoolCompatibilityResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceProfile

Returns information about the specified instance profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceProfileRequest();
    $request->getInstanceProfileRequest = new GetInstanceProfileRequest();
    $request->getInstanceProfileRequest->arn = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetInstanceProfileXAmzTargetEnum::DEVICE_FARM20150623_GET_INSTANCE_PROFILE;

    $response = $sdk->sdk->getInstanceProfile($request);

    if ($response->getInstanceProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJob

Gets information about a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRequest();
    $request->getJobRequest = new GetJobRequest();
    $request->getJobRequest->arn = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = GetJobXAmzTargetEnum::DEVICE_FARM20150623_GET_JOB;

    $response = $sdk->sdk->getJob($request);

    if ($response->getJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkProfile

Returns information about a network profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkProfileRequest();
    $request->getNetworkProfileRequest = new GetNetworkProfileRequest();
    $request->getNetworkProfileRequest->arn = 'dolores';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'eos';
    $request->xAmzTarget = GetNetworkProfileXAmzTargetEnum::DEVICE_FARM20150623_GET_NETWORK_PROFILE;

    $response = $sdk->sdk->getNetworkProfile($request);

    if ($response->getNetworkProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOfferingStatus

Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOfferingStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOfferingStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOfferingStatusRequest();
    $request->getOfferingStatusRequest = new GetOfferingStatusRequest();
    $request->getOfferingStatusRequest->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = GetOfferingStatusXAmzTargetEnum::DEVICE_FARM20150623_GET_OFFERING_STATUS;
    $request->nextToken = 'recusandae';

    $response = $sdk->sdk->getOfferingStatus($request);

    if ($response->getOfferingStatusResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

Gets information about a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectRequest();
    $request->getProjectRequest = new GetProjectRequest();
    $request->getProjectRequest->arn = 'omnis';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = GetProjectXAmzTargetEnum::DEVICE_FARM20150623_GET_PROJECT;

    $response = $sdk->sdk->getProject($request);

    if ($response->getProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoteAccessSession

Returns a link to a currently running remote access session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRemoteAccessSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRemoteAccessSessionRequest();
    $request->getRemoteAccessSessionRequest = new GetRemoteAccessSessionRequest();
    $request->getRemoteAccessSessionRequest->arn = 'eaque';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = GetRemoteAccessSessionXAmzTargetEnum::DEVICE_FARM20150623_GET_REMOTE_ACCESS_SESSION;

    $response = $sdk->sdk->getRemoteAccessSession($request);

    if ($response->getRemoteAccessSessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRun

Gets information about a run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRunRequest();
    $request->getRunRequest = new GetRunRequest();
    $request->getRunRequest->arn = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = GetRunXAmzTargetEnum::DEVICE_FARM20150623_GET_RUN;

    $response = $sdk->sdk->getRun($request);

    if ($response->getRunResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSuite

Gets information about a suite.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSuiteRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSuiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSuiteXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSuiteRequest();
    $request->getSuiteRequest = new GetSuiteRequest();
    $request->getSuiteRequest->arn = 'quos';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = GetSuiteXAmzTargetEnum::DEVICE_FARM20150623_GET_SUITE;

    $response = $sdk->sdk->getSuite($request);

    if ($response->getSuiteResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTest

Gets information about a test.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestRequest();
    $request->getTestRequest = new GetTestRequest();
    $request->getTestRequest->arn = 'excepturi';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = GetTestXAmzTargetEnum::DEVICE_FARM20150623_GET_TEST;

    $response = $sdk->sdk->getTest($request);

    if ($response->getTestResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestGridProject

Retrieves information about a Selenium testing project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTestGridProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestGridProjectRequest();
    $request->getTestGridProjectRequest = new GetTestGridProjectRequest();
    $request->getTestGridProjectRequest->projectArn = 'veritatis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = GetTestGridProjectXAmzTargetEnum::DEVICE_FARM20150623_GET_TEST_GRID_PROJECT;

    $response = $sdk->sdk->getTestGridProject($request);

    if ($response->getTestGridProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTestGridSession

<p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p> <ul> <li> <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p> </li> <li> <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p> </li> </ul> <p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTestGridSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTestGridSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTestGridSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTestGridSessionRequest();
    $request->getTestGridSessionRequest = new GetTestGridSessionRequest();
    $request->getTestGridSessionRequest->projectArn = 'voluptatibus';
    $request->getTestGridSessionRequest->sessionArn = 'voluptas';
    $request->getTestGridSessionRequest->sessionId = 'natus';
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = GetTestGridSessionXAmzTargetEnum::DEVICE_FARM20150623_GET_TEST_GRID_SESSION;

    $response = $sdk->sdk->getTestGridSession($request);

    if ($response->getTestGridSessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpload

Gets information about an upload.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUploadXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUploadRequest();
    $request->getUploadRequest = new GetUploadRequest();
    $request->getUploadRequest->arn = 'iusto';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = GetUploadXAmzTargetEnum::DEVICE_FARM20150623_GET_UPLOAD;

    $response = $sdk->sdk->getUpload($request);

    if ($response->getUploadResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVPCEConfiguration

Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVPCEConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVPCEConfigurationRequest();
    $request->getVPCEConfigurationRequest = new GetVPCEConfigurationRequest();
    $request->getVPCEConfigurationRequest->arn = 'nihil';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetVPCEConfigurationXAmzTargetEnum::DEVICE_FARM20150623_GET_VPCE_CONFIGURATION;

    $response = $sdk->sdk->getVPCEConfiguration($request);

    if ($response->getVPCEConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## installToRemoteAccessSession

Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InstallToRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstallToRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\InstallToRemoteAccessSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstallToRemoteAccessSessionRequest();
    $request->installToRemoteAccessSessionRequest = new InstallToRemoteAccessSessionRequest();
    $request->installToRemoteAccessSessionRequest->appArn = 'amet';
    $request->installToRemoteAccessSessionRequest->remoteAccessSessionArn = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = InstallToRemoteAccessSessionXAmzTargetEnum::DEVICE_FARM20150623_INSTALL_TO_REMOTE_ACCESS_SESSION;

    $response = $sdk->sdk->installToRemoteAccessSession($request);

    if ($response->installToRemoteAccessSessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifacts

Gets information about artifacts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListArtifactsRequest();
    $request->listArtifactsRequest = new ListArtifactsRequest();
    $request->listArtifactsRequest->arn = 'repellendus';
    $request->listArtifactsRequest->nextToken = 'totam';
    $request->listArtifactsRequest->type = ArtifactCategoryEnum::FILE;
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = ListArtifactsXAmzTargetEnum::DEVICE_FARM20150623_LIST_ARTIFACTS;
    $request->nextToken = 'qui';

    $response = $sdk->sdk->listArtifacts($request);

    if ($response->listArtifactsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceInstances

Returns information about the private device instances associated with one or more AWS accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDeviceInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceInstancesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceInstancesRequest();
    $request->listDeviceInstancesRequest = new ListDeviceInstancesRequest();
    $request->listDeviceInstancesRequest->maxResults = 679880;
    $request->listDeviceInstancesRequest->nextToken = 'a';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ListDeviceInstancesXAmzTargetEnum::DEVICE_FARM20150623_LIST_DEVICE_INSTANCES;

    $response = $sdk->sdk->listDeviceInstances($request);

    if ($response->listDeviceInstancesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevicePools

Gets information about device pools.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicePoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDevicePoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DevicePoolTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicePoolsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicePoolsRequest();
    $request->listDevicePoolsRequest = new ListDevicePoolsRequest();
    $request->listDevicePoolsRequest->arn = 'tempore';
    $request->listDevicePoolsRequest->nextToken = 'accusamus';
    $request->listDevicePoolsRequest->type = DevicePoolTypeEnum::CURATED;
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = ListDevicePoolsXAmzTargetEnum::DEVICE_FARM20150623_LIST_DEVICE_POOLS;
    $request->nextToken = 'neque';

    $response = $sdk->sdk->listDevicePools($request);

    if ($response->listDevicePoolsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevices

Gets information about unique device types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeviceFilterAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicesRequest();
    $request->listDevicesRequest = new ListDevicesRequest();
    $request->listDevicesRequest->arn = 'sed';
    $request->listDevicesRequest->filters = [
        new DeviceFilter(),
        new DeviceFilter(),
    ];
    $request->listDevicesRequest->nextToken = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = ListDevicesXAmzTargetEnum::DEVICE_FARM20150623_LIST_DEVICES;
    $request->nextToken = 'maxime';

    $response = $sdk->sdk->listDevices($request);

    if ($response->listDevicesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstanceProfiles

Returns information about all the instance profiles in an AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstanceProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListInstanceProfilesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInstanceProfilesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstanceProfilesRequest();
    $request->listInstanceProfilesRequest = new ListInstanceProfilesRequest();
    $request->listInstanceProfilesRequest->maxResults = 863856;
    $request->listInstanceProfilesRequest->nextToken = 'soluta';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = ListInstanceProfilesXAmzTargetEnum::DEVICE_FARM20150623_LIST_INSTANCE_PROFILES;

    $response = $sdk->sdk->listInstanceProfiles($request);

    if ($response->listInstanceProfilesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobs

Gets information about jobs for a given test run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsRequest();
    $request->listJobsRequest = new ListJobsRequest();
    $request->listJobsRequest->arn = 'facilis';
    $request->listJobsRequest->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = ListJobsXAmzTargetEnum::DEVICE_FARM20150623_LIST_JOBS;
    $request->nextToken = 'odio';

    $response = $sdk->sdk->listJobs($request);

    if ($response->listJobsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetworkProfiles

Returns the list of available network profiles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNetworkProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkProfilesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworkProfilesRequest();
    $request->listNetworkProfilesRequest = new ListNetworkProfilesRequest();
    $request->listNetworkProfilesRequest->arn = 'sunt';
    $request->listNetworkProfilesRequest->nextToken = 'ullam';
    $request->listNetworkProfilesRequest->type = NetworkProfileTypeEnum::PRIVATE;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = ListNetworkProfilesXAmzTargetEnum::DEVICE_FARM20150623_LIST_NETWORK_PROFILES;

    $response = $sdk->sdk->listNetworkProfiles($request);

    if ($response->listNetworkProfilesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOfferingPromotions

Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOfferingPromotionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOfferingPromotionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOfferingPromotionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOfferingPromotionsRequest();
    $request->listOfferingPromotionsRequest = new ListOfferingPromotionsRequest();
    $request->listOfferingPromotionsRequest->nextToken = 'ipsum';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = ListOfferingPromotionsXAmzTargetEnum::DEVICE_FARM20150623_LIST_OFFERING_PROMOTIONS;

    $response = $sdk->sdk->listOfferingPromotions($request);

    if ($response->listOfferingPromotionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOfferingTransactions

Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOfferingTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOfferingTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOfferingTransactionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOfferingTransactionsRequest();
    $request->listOfferingTransactionsRequest = new ListOfferingTransactionsRequest();
    $request->listOfferingTransactionsRequest->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = ListOfferingTransactionsXAmzTargetEnum::DEVICE_FARM20150623_LIST_OFFERING_TRANSACTIONS;
    $request->nextToken = 'quas';

    $response = $sdk->sdk->listOfferingTransactions($request);

    if ($response->listOfferingTransactionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOfferings

Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOfferingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOfferingsRequest();
    $request->listOfferingsRequest = new ListOfferingsRequest();
    $request->listOfferingsRequest->nextToken = 'itaque';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ListOfferingsXAmzTargetEnum::DEVICE_FARM20150623_LIST_OFFERINGS;
    $request->nextToken = 'cupiditate';

    $response = $sdk->sdk->listOfferings($request);

    if ($response->listOfferingsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Gets information about projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->listProjectsRequest = new ListProjectsRequest();
    $request->listProjectsRequest->arn = 'qui';
    $request->listProjectsRequest->nextToken = 'quae';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ListProjectsXAmzTargetEnum::DEVICE_FARM20150623_LIST_PROJECTS;
    $request->nextToken = 'quis';

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRemoteAccessSessions

Returns a list of all currently running remote access sessions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRemoteAccessSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRemoteAccessSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRemoteAccessSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRemoteAccessSessionsRequest();
    $request->listRemoteAccessSessionsRequest = new ListRemoteAccessSessionsRequest();
    $request->listRemoteAccessSessionsRequest->arn = 'ipsum';
    $request->listRemoteAccessSessionsRequest->nextToken = 'delectus';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = ListRemoteAccessSessionsXAmzTargetEnum::DEVICE_FARM20150623_LIST_REMOTE_ACCESS_SESSIONS;

    $response = $sdk->sdk->listRemoteAccessSessions($request);

    if ($response->listRemoteAccessSessionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRuns

Gets information about runs, given an AWS Device Farm project ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRunsRequest();
    $request->listRunsRequest = new ListRunsRequest();
    $request->listRunsRequest->arn = 'quod';
    $request->listRunsRequest->nextToken = 'odio';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = ListRunsXAmzTargetEnum::DEVICE_FARM20150623_LIST_RUNS;
    $request->nextToken = 'sequi';

    $response = $sdk->sdk->listRuns($request);

    if ($response->listRunsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSamples

Gets information about samples, given an AWS Device Farm job ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSamplesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSamplesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSamplesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSamplesRequest();
    $request->listSamplesRequest = new ListSamplesRequest();
    $request->listSamplesRequest->arn = 'natus';
    $request->listSamplesRequest->nextToken = 'impedit';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = ListSamplesXAmzTargetEnum::DEVICE_FARM20150623_LIST_SAMPLES;
    $request->nextToken = 'doloribus';

    $response = $sdk->sdk->listSamples($request);

    if ($response->listSamplesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSuites

Gets information about test suites for a given job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSuitesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSuitesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSuitesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSuitesRequest();
    $request->listSuitesRequest = new ListSuitesRequest();
    $request->listSuitesRequest->arn = 'iusto';
    $request->listSuitesRequest->nextToken = 'eligendi';
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = ListSuitesXAmzTargetEnum::DEVICE_FARM20150623_LIST_SUITES;
    $request->nextToken = 'vel';

    $response = $sdk->sdk->listSuites($request);

    if ($response->listSuitesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List the tags for an AWS Device Farm resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceARN = 'possimus';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::DEVICE_FARM20150623_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTestGridProjects

Gets a list of all Selenium testing projects in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridProjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTestGridProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridProjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTestGridProjectsRequest();
    $request->listTestGridProjectsRequest = new ListTestGridProjectsRequest();
    $request->listTestGridProjectsRequest->maxResult = 97844;
    $request->listTestGridProjectsRequest->nextToken = 'ex';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = ListTestGridProjectsXAmzTargetEnum::DEVICE_FARM20150623_LIST_TEST_GRID_PROJECTS;
    $request->maxResult = 'ea';
    $request->nextToken = 'impedit';

    $response = $sdk->sdk->listTestGridProjects($request);

    if ($response->listTestGridProjectsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTestGridSessionActions

Returns a list of the actions taken in a <a>TestGridSession</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridSessionActionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTestGridSessionActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridSessionActionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTestGridSessionActionsRequest();
    $request->listTestGridSessionActionsRequest = new ListTestGridSessionActionsRequest();
    $request->listTestGridSessionActionsRequest->maxResult = 359271;
    $request->listTestGridSessionActionsRequest->nextToken = 'veniam';
    $request->listTestGridSessionActionsRequest->sessionArn = 'aliquid';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = ListTestGridSessionActionsXAmzTargetEnum::DEVICE_FARM20150623_LIST_TEST_GRID_SESSION_ACTIONS;
    $request->maxResult = 'minima';
    $request->nextToken = 'eaque';

    $response = $sdk->sdk->listTestGridSessionActions($request);

    if ($response->listTestGridSessionActionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTestGridSessionArtifacts

Retrieves a list of artifacts created during the session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridSessionArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTestGridSessionArtifactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestGridSessionArtifactCategoryEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridSessionArtifactsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTestGridSessionArtifactsRequest();
    $request->listTestGridSessionArtifactsRequest = new ListTestGridSessionArtifactsRequest();
    $request->listTestGridSessionArtifactsRequest->maxResult = 952871;
    $request->listTestGridSessionArtifactsRequest->nextToken = 'libero';
    $request->listTestGridSessionArtifactsRequest->sessionArn = 'aut';
    $request->listTestGridSessionArtifactsRequest->type = TestGridSessionArtifactCategoryEnum::VIDEO;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = ListTestGridSessionArtifactsXAmzTargetEnum::DEVICE_FARM20150623_LIST_TEST_GRID_SESSION_ARTIFACTS;
    $request->maxResult = 'et';
    $request->nextToken = 'dolorum';

    $response = $sdk->sdk->listTestGridSessionArtifacts($request);

    if ($response->listTestGridSessionArtifactsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTestGridSessions

Retrieves a list of sessions for a <a>TestGridProject</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTestGridSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestGridSessionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListTestGridSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTestGridSessionsRequest();
    $request->listTestGridSessionsRequest = new ListTestGridSessionsRequest();
    $request->listTestGridSessionsRequest->creationTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-19T09:22:11.289Z');
    $request->listTestGridSessionsRequest->creationTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T06:22:58.599Z');
    $request->listTestGridSessionsRequest->endTimeAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-01T11:18:05.592Z');
    $request->listTestGridSessionsRequest->endTimeBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-05T09:22:07.208Z');
    $request->listTestGridSessionsRequest->maxResult = 860552;
    $request->listTestGridSessionsRequest->nextToken = 'voluptas';
    $request->listTestGridSessionsRequest->projectArn = 'libero';
    $request->listTestGridSessionsRequest->status = TestGridSessionStatusEnum::ACTIVE;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = ListTestGridSessionsXAmzTargetEnum::DEVICE_FARM20150623_LIST_TEST_GRID_SESSIONS;
    $request->maxResult = 'odio';
    $request->nextToken = 'eius';

    $response = $sdk->sdk->listTestGridSessions($request);

    if ($response->listTestGridSessionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTests

Gets information about tests in a given test suite.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTestsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTestsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTestsRequest();
    $request->listTestsRequest = new ListTestsRequest();
    $request->listTestsRequest->arn = 'esse';
    $request->listTestsRequest->nextToken = 'esse';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListTestsXAmzTargetEnum::DEVICE_FARM20150623_LIST_TESTS;
    $request->nextToken = 'suscipit';

    $response = $sdk->sdk->listTests($request);

    if ($response->listTestsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUniqueProblems

<p>Gets information about unique problems, such as exceptions or crashes.</p> <p>Unique problems are defined as a single instance of an error across a run, job, or suite. For example, if a call in your application consistently raises an exception (<code>OutOfBoundsException in MyActivity.java:386</code>), <code>ListUniqueProblems</code> returns a single entry instead of many individual entries for that exception.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUniqueProblemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUniqueProblemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUniqueProblemsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUniqueProblemsRequest();
    $request->listUniqueProblemsRequest = new ListUniqueProblemsRequest();
    $request->listUniqueProblemsRequest->arn = 'assumenda';
    $request->listUniqueProblemsRequest->nextToken = 'eos';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = ListUniqueProblemsXAmzTargetEnum::DEVICE_FARM20150623_LIST_UNIQUE_PROBLEMS;
    $request->nextToken = 'quo';

    $response = $sdk->sdk->listUniqueProblems($request);

    if ($response->listUniqueProblemsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUploads

Gets information about uploads, given an AWS Device Farm project ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUploadsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUploadsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UploadTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListUploadsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUploadsRequest();
    $request->listUploadsRequest = new ListUploadsRequest();
    $request->listUploadsRequest->arn = 'illum';
    $request->listUploadsRequest->nextToken = 'quo';
    $request->listUploadsRequest->type = UploadTypeEnum::APPIUM_JAVA_TESTNG_TEST_SPEC;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = ListUploadsXAmzTargetEnum::DEVICE_FARM20150623_LIST_UPLOADS;
    $request->nextToken = 'debitis';

    $response = $sdk->sdk->listUploads($request);

    if ($response->listUploadsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVPCEConfigurations

Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVPCEConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVPCEConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVPCEConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVPCEConfigurationsRequest();
    $request->listVPCEConfigurationsRequest = new ListVPCEConfigurationsRequest();
    $request->listVPCEConfigurationsRequest->maxResults = 370853;
    $request->listVPCEConfigurationsRequest->nextToken = 'aspernatur';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ListVPCEConfigurationsXAmzTargetEnum::DEVICE_FARM20150623_LIST_VPCE_CONFIGURATIONS;

    $response = $sdk->sdk->listVPCEConfigurations($request);

    if ($response->listVPCEConfigurationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## purchaseOffering

Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PurchaseOfferingRequest;
use \OpenAPI\OpenAPI\Models\Shared\PurchaseOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\PurchaseOfferingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PurchaseOfferingRequest();
    $request->purchaseOfferingRequest = new PurchaseOfferingRequest();
    $request->purchaseOfferingRequest->offeringId = 'dignissimos';
    $request->purchaseOfferingRequest->offeringPromotionId = 'inventore';
    $request->purchaseOfferingRequest->quantity = 469498;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = PurchaseOfferingXAmzTargetEnum::DEVICE_FARM20150623_PURCHASE_OFFERING;

    $response = $sdk->sdk->purchaseOffering($request);

    if ($response->purchaseOfferingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renewOffering

Explicitly sets the quantity of devices to renew for an offering, starting from the <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RenewOfferingRequest;
use \OpenAPI\OpenAPI\Models\Shared\RenewOfferingRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenewOfferingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenewOfferingRequest();
    $request->renewOfferingRequest = new RenewOfferingRequest();
    $request->renewOfferingRequest->offeringId = 'dolores';
    $request->renewOfferingRequest->quantity = 645570;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = RenewOfferingXAmzTargetEnum::DEVICE_FARM20150623_RENEW_OFFERING;

    $response = $sdk->sdk->renewOffering($request);

    if ($response->renewOfferingResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## scheduleRun

Schedules a run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleRunConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BillingMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomerArtifactPaths;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\Radios;
use \OpenAPI\OpenAPI\Models\Shared\DeviceSelectionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DeviceFilter;
use \OpenAPI\OpenAPI\Models\Shared\DeviceFilterAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleRunTest;
use \OpenAPI\OpenAPI\Models\Shared\TestTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ScheduleRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ScheduleRunRequest();
    $request->scheduleRunRequest = new ScheduleRunRequest();
    $request->scheduleRunRequest->appArn = 'deleniti';
    $request->scheduleRunRequest->configuration = new ScheduleRunConfiguration();
    $request->scheduleRunRequest->configuration->auxiliaryApps = [
        'fuga',
    ];
    $request->scheduleRunRequest->configuration->billingMethod = BillingMethodEnum::UNMETERED;
    $request->scheduleRunRequest->configuration->customerArtifactPaths = new CustomerArtifactPaths();
    $request->scheduleRunRequest->configuration->customerArtifactPaths->androidPaths = [
        'atque',
        'explicabo',
    ];
    $request->scheduleRunRequest->configuration->customerArtifactPaths->deviceHostPaths = [
        'nisi',
        'fugit',
    ];
    $request->scheduleRunRequest->configuration->customerArtifactPaths->iosPaths = [
        'consequuntur',
        'ratione',
        'explicabo',
        'saepe',
    ];
    $request->scheduleRunRequest->configuration->extraDataPackageArn = 'occaecati';
    $request->scheduleRunRequest->configuration->locale = 'atque';
    $request->scheduleRunRequest->configuration->location = new Location();
    $request->scheduleRunRequest->configuration->location->latitude = 922.6;
    $request->scheduleRunRequest->configuration->location->longitude = 4569.11;
    $request->scheduleRunRequest->configuration->networkProfileArn = 'eveniet';
    $request->scheduleRunRequest->configuration->radios = new Radios();
    $request->scheduleRunRequest->configuration->radios->bluetooth = false;
    $request->scheduleRunRequest->configuration->radios->gps = false;
    $request->scheduleRunRequest->configuration->radios->nfc = false;
    $request->scheduleRunRequest->configuration->radios->wifi = false;
    $request->scheduleRunRequest->configuration->vpceConfigurationArns = [
        'veritatis',
        'esse',
        'quod',
        'nam',
    ];
    $request->scheduleRunRequest->devicePoolArn = 'vero';
    $request->scheduleRunRequest->deviceSelectionConfiguration = new DeviceSelectionConfiguration();
    $request->scheduleRunRequest->deviceSelectionConfiguration->filters = [
        new DeviceFilter(),
        new DeviceFilter(),
    ];
    $request->scheduleRunRequest->deviceSelectionConfiguration->maxDevices = 93459;
    $request->scheduleRunRequest->executionConfiguration = new ExecutionConfiguration();
    $request->scheduleRunRequest->executionConfiguration->accountsCleanup = false;
    $request->scheduleRunRequest->executionConfiguration->appPackagesCleanup = false;
    $request->scheduleRunRequest->executionConfiguration->jobTimeoutMinutes = 904045;
    $request->scheduleRunRequest->executionConfiguration->skipAppResign = false;
    $request->scheduleRunRequest->executionConfiguration->videoCapture = false;
    $request->scheduleRunRequest->name = 'Opal Kozey';
    $request->scheduleRunRequest->projectArn = 'minima';
    $request->scheduleRunRequest->test = new ScheduleRunTest();
    $request->scheduleRunRequest->test->filter = 'distinctio';
    $request->scheduleRunRequest->test->parameters = [
        'sit' => 'culpa',
        'tempore' => 'adipisci',
        'cumque' => 'consequuntur',
        'consequatur' => 'minus',
    ];
    $request->scheduleRunRequest->test->testPackageArn = 'quaerat';
    $request->scheduleRunRequest->test->testSpecArn = 'sapiente';
    $request->scheduleRunRequest->test->type = TestTypeEnum::APPIUM_JAVA_TESTNG;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = ScheduleRunXAmzTargetEnum::DEVICE_FARM20150623_SCHEDULE_RUN;

    $response = $sdk->sdk->scheduleRun($request);

    if ($response->scheduleRunResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopJob

Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device where tests have not started. You are not billed for this device. On the device where tests have started, setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown, and any tests that were in progress or already completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopJobRequest();
    $request->stopJobRequest = new StopJobRequest();
    $request->stopJobRequest->arn = 'quasi';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = StopJobXAmzTargetEnum::DEVICE_FARM20150623_STOP_JOB;

    $response = $sdk->sdk->stopJob($request);

    if ($response->stopJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopRemoteAccessSession

Ends a specified remote access session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopRemoteAccessSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopRemoteAccessSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopRemoteAccessSessionRequest();
    $request->stopRemoteAccessSessionRequest = new StopRemoteAccessSessionRequest();
    $request->stopRemoteAccessSessionRequest->arn = 'asperiores';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = StopRemoteAccessSessionXAmzTargetEnum::DEVICE_FARM20150623_STOP_REMOTE_ACCESS_SESSION;

    $response = $sdk->sdk->stopRemoteAccessSession($request);

    if ($response->stopRemoteAccessSessionResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopRun

Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices where tests have not started. You are not billed for these devices. On devices where tests have started executing, setup suite and teardown suite tests run to completion on those devices. You are billed for setup, teardown, and any tests that were in progress or already completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopRunRequest();
    $request->stopRunRequest = new StopRunRequest();
    $request->stopRunRequest->arn = 'tenetur';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = StopRunXAmzTargetEnum::DEVICE_FARM20150623_STOP_RUN;

    $response = $sdk->sdk->stopRun($request);

    if ($response->stopRunResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceARN = 'soluta';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::DEVICE_FARM20150623_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes the specified tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceARN = 'aut';
    $request->untagResourceRequest->tagKeys = [
        'qui',
        'quibusdam',
        'ex',
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::DEVICE_FARM20150623_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeviceInstance

Updates information about a private device instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeviceInstanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeviceInstanceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeviceInstanceRequest();
    $request->updateDeviceInstanceRequest = new UpdateDeviceInstanceRequest();
    $request->updateDeviceInstanceRequest->arn = 'at';
    $request->updateDeviceInstanceRequest->labels = [
        'voluptate',
    ];
    $request->updateDeviceInstanceRequest->profileArn = 'ipsa';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = UpdateDeviceInstanceXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_DEVICE_INSTANCE;

    $response = $sdk->sdk->updateDeviceInstance($request);

    if ($response->updateDeviceInstanceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDevicePool

Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDevicePoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\DeviceAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevicePoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDevicePoolRequest();
    $request->updateDevicePoolRequest = new UpdateDevicePoolRequest();
    $request->updateDevicePoolRequest->arn = 'rem';
    $request->updateDevicePoolRequest->clearMaxDevices = false;
    $request->updateDevicePoolRequest->description = 'aut';
    $request->updateDevicePoolRequest->maxDevices = 513075;
    $request->updateDevicePoolRequest->name = 'Iris Bernhard';
    $request->updateDevicePoolRequest->rules = [
        new Rule(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = UpdateDevicePoolXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_DEVICE_POOL;

    $response = $sdk->sdk->updateDevicePool($request);

    if ($response->updateDevicePoolResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateInstanceProfile

Updates information about an existing private device instance profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateInstanceProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateInstanceProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateInstanceProfileRequest();
    $request->updateInstanceProfileRequest = new UpdateInstanceProfileRequest();
    $request->updateInstanceProfileRequest->arn = 'dignissimos';
    $request->updateInstanceProfileRequest->description = 'dicta';
    $request->updateInstanceProfileRequest->excludeAppPackagesFromCleanup = [
        'natus',
        'velit',
        'voluptatibus',
        'voluptas',
    ];
    $request->updateInstanceProfileRequest->name = 'Kevin Jast';
    $request->updateInstanceProfileRequest->packageCleanup = false;
    $request->updateInstanceProfileRequest->rebootAfterUse = false;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = UpdateInstanceProfileXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_INSTANCE_PROFILE;

    $response = $sdk->sdk->updateInstanceProfile($request);

    if ($response->updateInstanceProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkProfile

Updates the network profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNetworkProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\NetworkProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkProfileRequest();
    $request->updateNetworkProfileRequest = new UpdateNetworkProfileRequest();
    $request->updateNetworkProfileRequest->arn = 'quae';
    $request->updateNetworkProfileRequest->description = 'quaerat';
    $request->updateNetworkProfileRequest->downlinkBandwidthBits = 783235;
    $request->updateNetworkProfileRequest->downlinkDelayMs = 801836;
    $request->updateNetworkProfileRequest->downlinkJitterMs = 288398;
    $request->updateNetworkProfileRequest->downlinkLossPercent = 70447;
    $request->updateNetworkProfileRequest->name = 'Kristine Ondricka';
    $request->updateNetworkProfileRequest->type = NetworkProfileTypeEnum::PRIVATE;
    $request->updateNetworkProfileRequest->uplinkBandwidthBits = 665859;
    $request->updateNetworkProfileRequest->uplinkDelayMs = 926880;
    $request->updateNetworkProfileRequest->uplinkJitterMs = 517309;
    $request->updateNetworkProfileRequest->uplinkLossPercent = 853940;
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = UpdateNetworkProfileXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_NETWORK_PROFILE;

    $response = $sdk->sdk->updateNetworkProfile($request);

    if ($response->updateNetworkProfileResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

Modifies the specified project name, given the project ARN and a new name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->updateProjectRequest = new UpdateProjectRequest();
    $request->updateProjectRequest->arn = 'cum';
    $request->updateProjectRequest->defaultJobTimeoutMinutes = 414857;
    $request->updateProjectRequest->name = 'Ana Wisozk';
    $request->updateProjectRequest->vpcConfig = new VpcConfig();
    $request->updateProjectRequest->vpcConfig->securityGroupIds = [
        'aliquid',
        'aperiam',
        'cum',
        'consectetur',
    ];
    $request->updateProjectRequest->vpcConfig->subnetIds = [
        'exercitationem',
        'earum',
    ];
    $request->updateProjectRequest->vpcConfig->vpcId = 'facere';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = UpdateProjectXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_PROJECT;

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTestGridProject

Change details of a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTestGridProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestGridVpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTestGridProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTestGridProjectRequest();
    $request->updateTestGridProjectRequest = new UpdateTestGridProjectRequest();
    $request->updateTestGridProjectRequest->description = 'dolore';
    $request->updateTestGridProjectRequest->name = 'Ollie Flatley';
    $request->updateTestGridProjectRequest->projectArn = 'beatae';
    $request->updateTestGridProjectRequest->vpcConfig = new TestGridVpcConfig();
    $request->updateTestGridProjectRequest->vpcConfig->securityGroupIds = [
        'a',
        'debitis',
    ];
    $request->updateTestGridProjectRequest->vpcConfig->subnetIds = [
        'corporis',
    ];
    $request->updateTestGridProjectRequest->vpcConfig->vpcId = 'harum';
    $request->xAmzAlgorithm = 'laboriosam';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = UpdateTestGridProjectXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_TEST_GRID_PROJECT;

    $response = $sdk->sdk->updateTestGridProject($request);

    if ($response->updateTestGridProjectResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUpload

Updates an uploaded test spec.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUploadRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUploadXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUploadRequest();
    $request->updateUploadRequest = new UpdateUploadRequest();
    $request->updateUploadRequest->arn = 'tempora';
    $request->updateUploadRequest->contentType = 'aspernatur';
    $request->updateUploadRequest->editContent = false;
    $request->updateUploadRequest->name = 'Melanie Hirthe';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = UpdateUploadXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_UPLOAD;

    $response = $sdk->sdk->updateUpload($request);

    if ($response->updateUploadResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVPCEConfiguration

Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVPCEConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVPCEConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVPCEConfigurationRequest();
    $request->updateVPCEConfigurationRequest = new UpdateVPCEConfigurationRequest();
    $request->updateVPCEConfigurationRequest->arn = 'aliquam';
    $request->updateVPCEConfigurationRequest->serviceDnsName = 'officiis';
    $request->updateVPCEConfigurationRequest->vpceConfigurationDescription = 'temporibus';
    $request->updateVPCEConfigurationRequest->vpceConfigurationName = 'ullam';
    $request->updateVPCEConfigurationRequest->vpceServiceName = 'adipisci';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'corrupti';
    $request->xAmzTarget = UpdateVPCEConfigurationXAmzTargetEnum::DEVICE_FARM20150623_UPDATE_VPCE_CONFIGURATION;

    $response = $sdk->sdk->updateVPCEConfiguration($request);

    if ($response->updateVPCEConfigurationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
