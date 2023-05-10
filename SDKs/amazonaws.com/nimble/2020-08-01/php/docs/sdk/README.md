# SDK

## Overview

<p>Welcome to the Amazon Nimble Studio API reference. This API reference provides methods, schema, resources, parameters, and more to help you get the most out of Nimble Studio.</p> <p>Nimble Studio is a virtual studio that empowers visual effects, animation, and interactive content teams to create content securely within a scalable, private cloud service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/nimble/>
### Available Operations

* [acceptEulas](#accepteulas) - Accept EULAs.
* [createLaunchProfile](#createlaunchprofile) - Create a launch profile.
* [createStreamingImage](#createstreamingimage) - Creates a streaming image resource in a studio.
* [createStreamingSession](#createstreamingsession) - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>
* [createStreamingSessionStream](#createstreamingsessionstream) - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>
* [createStudio](#createstudio) - <p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
* [createStudioComponent](#createstudiocomponent) - Creates a studio component resource.
* [deleteLaunchProfile](#deletelaunchprofile) - Permanently delete a launch profile.
* [deleteLaunchProfileMember](#deletelaunchprofilemember) - Delete a user from launch profile membership.
* [deleteStreamingImage](#deletestreamingimage) - Delete streaming image.
* [deleteStreamingSession](#deletestreamingsession) - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>
* [deleteStudio](#deletestudio) - Delete a studio resource.
* [deleteStudioComponent](#deletestudiocomponent) - Deletes a studio component resource.
* [deleteStudioMember](#deletestudiomember) - Delete a user from studio membership.
* [getEula](#geteula) - Get EULA.
* [getLaunchProfile](#getlaunchprofile) - Get a launch profile.
* [getLaunchProfileDetails](#getlaunchprofiledetails) - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
* [getLaunchProfileInitialization](#getlaunchprofileinitialization) - Get a launch profile initialization.
* [getLaunchProfileMember](#getlaunchprofilemember) - Get a user persona in launch profile membership.
* [getStreamingImage](#getstreamingimage) - Get streaming image.
* [getStreamingSession](#getstreamingsession) - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
* [getStreamingSessionBackup](#getstreamingsessionbackup) - <p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>
* [getStreamingSessionStream](#getstreamingsessionstream) - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>
* [getStudio](#getstudio) - Get a studio resource.
* [getStudioComponent](#getstudiocomponent) - Gets a studio component resource.
* [getStudioMember](#getstudiomember) - Get a user's membership in a studio.
* [listEulaAcceptances](#listeulaacceptances) - List EULA acceptances.
* [listEulas](#listeulas) - List EULAs.
* [listLaunchProfileMembers](#listlaunchprofilemembers) - Get all users in a given launch profile membership.
* [listLaunchProfiles](#listlaunchprofiles) - List all the launch profiles a studio.
* [listStreamingImages](#liststreamingimages) - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
* [listStreamingSessionBackups](#liststreamingsessionbackups) - Lists the backups of a streaming session in a studio.
* [listStreamingSessions](#liststreamingsessions) - Lists the streaming sessions in a studio.
* [listStudioComponents](#liststudiocomponents) - Lists the <code>StudioComponents</code> in a studio.
* [listStudioMembers](#liststudiomembers) - <p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>
* [listStudios](#liststudios) - List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.
* [listTagsForResource](#listtagsforresource) - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
* [putLaunchProfileMembers](#putlaunchprofilemembers) - Add/update users with given persona to launch profile membership.
* [putStudioMembers](#putstudiomembers) - Add/update users with given persona to studio membership.
* [startStreamingSession](#startstreamingsession) - Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.
* [startStudioSSOConfigurationRepair](#startstudiossoconfigurationrepair) - <p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
* [stopStreamingSession](#stopstreamingsession) - Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.
* [tagResource](#tagresource) - Creates tags for a resource, given its ARN.
* [untagResource](#untagresource) - Deletes the tags for a resource.
* [updateLaunchProfile](#updatelaunchprofile) - Update a launch profile.
* [updateLaunchProfileMember](#updatelaunchprofilemember) - Update a user persona in launch profile membership.
* [updateStreamingImage](#updatestreamingimage) - Update streaming image.
* [updateStudio](#updatestudio) - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
* [updateStudioComponent](#updatestudiocomponent) - Updates a studio component resource.

## acceptEulas

Accept EULAs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEulasRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptEulasRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptEulasRequest();
    $request->requestBody = new AcceptEulasRequestBody();
    $request->requestBody->eulaIds = [
        'debitis',
        'ipsa',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzClientToken = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->studioId = 'excepturi';

    $response = $sdk->sdk->acceptEulas($request);

    if ($response->acceptEulasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLaunchProfile

Create a launch profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLaunchProfileRequestBodyStreamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutomaticTerminationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingClipboardModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamConfigurationSessionBackup;
use \OpenAPI\OpenAPI\Models\Shared\SessionBackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPersistenceModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamConfigurationSessionStorage;
use \OpenAPI\OpenAPI\Models\Shared\StreamingSessionStorageModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingSessionStorageRoot;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLaunchProfileRequest();
    $request->requestBody = new CreateLaunchProfileRequestBody();
    $request->requestBody->description = 'nisi';
    $request->requestBody->ec2SubnetIds = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->requestBody->launchProfileProtocolVersions = [
        'perferendis',
        'ipsam',
        'repellendus',
    ];
    $request->requestBody->name = 'sapiente';
    $request->requestBody->streamConfiguration = new CreateLaunchProfileRequestBodyStreamConfiguration();
    $request->requestBody->streamConfiguration->automaticTerminationMode = AutomaticTerminationModeEnum::ACTIVATED;
    $request->requestBody->streamConfiguration->clipboardMode = StreamingClipboardModeEnum::ENABLED;
    $request->requestBody->streamConfiguration->ec2InstanceTypes = [
        StreamingInstanceTypeEnum::G58XLARGE,
        StreamingInstanceTypeEnum::G516XLARGE,
        StreamingInstanceTypeEnum::G34XLARGE,
        StreamingInstanceTypeEnum::G54XLARGE,
    ];
    $request->requestBody->streamConfiguration->maxSessionLengthInMinutes = 800911;
    $request->requestBody->streamConfiguration->maxStoppedSessionLengthInMinutes = 461479;
    $request->requestBody->streamConfiguration->sessionBackup = new StreamConfigurationSessionBackup();
    $request->requestBody->streamConfiguration->sessionBackup->maxBackupsToRetain = 520478;
    $request->requestBody->streamConfiguration->sessionBackup->mode = SessionBackupModeEnum::DEACTIVATED;
    $request->requestBody->streamConfiguration->sessionPersistenceMode = SessionPersistenceModeEnum::ACTIVATED;
    $request->requestBody->streamConfiguration->sessionStorage = new StreamConfigurationSessionStorage();
    $request->requestBody->streamConfiguration->sessionStorage->mode = [
        StreamingSessionStorageModeEnum::UPLOAD,
    ];
    $request->requestBody->streamConfiguration->sessionStorage->root = new StreamingSessionStorageRoot();
    $request->requestBody->streamConfiguration->sessionStorage->root->linux = 'nam';
    $request->requestBody->streamConfiguration->sessionStorage->root->windows = 'officia';
    $request->requestBody->streamConfiguration->streamingImageIds = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->requestBody->streamConfiguration->volumeConfiguration = new VolumeConfiguration();
    $request->requestBody->streamConfiguration->volumeConfiguration->iops = 758616;
    $request->requestBody->streamConfiguration->volumeConfiguration->size = 521848;
    $request->requestBody->streamConfiguration->volumeConfiguration->throughput = 105907;
    $request->requestBody->studioComponentIds = [
        'molestiae',
        'modi',
    ];
    $request->requestBody->tags = [
        'impedit' => 'cum',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzClientToken = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';
    $request->studioId = 'iste';

    $response = $sdk->sdk->createLaunchProfile($request);

    if ($response->createLaunchProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStreamingImage

Creates a streaming image resource in a studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingImageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamingImageRequest();
    $request->requestBody = new CreateStreamingImageRequestBody();
    $request->requestBody->description = 'dolor';
    $request->requestBody->ec2ImageId = 'natus';
    $request->requestBody->name = 'laboriosam';
    $request->requestBody->tags = [
        'saepe' => 'fuga',
        'in' => 'corporis',
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzClientToken = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->studioId = 'corporis';

    $response = $sdk->sdk->createStreamingImage($request);

    if ($response->createStreamingImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStreamingSession

<p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingSessionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingSessionRequestBodyEc2InstanceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamingSessionRequest();
    $request->requestBody = new CreateStreamingSessionRequestBody();
    $request->requestBody->ec2InstanceType = CreateStreamingSessionRequestBodyEc2InstanceTypeEnum::G4DN2XLARGE;
    $request->requestBody->launchProfileId = 'nobis';
    $request->requestBody->ownedBy = 'enim';
    $request->requestBody->streamingImageId = 'omnis';
    $request->requestBody->tags = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzClientToken = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->studioId = 'repellat';

    $response = $sdk->sdk->createStreamingSession($request);

    if ($response->createStreamingSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStreamingSessionStream

<p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingSessionStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamingSessionStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamingSessionStreamRequest();
    $request->requestBody = new CreateStreamingSessionStreamRequestBody();
    $request->requestBody->expirationInSeconds = 653108;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzClientToken = 'numquam';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'velit';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'quia';
    $request->sessionId = 'quis';
    $request->studioId = 'vitae';

    $response = $sdk->sdk->createStreamingSessionStream($request);

    if ($response->createStreamingSessionStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStudio

<p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioRequestBodyStudioEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StudioEncryptionConfigurationKeyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStudioRequest();
    $request->requestBody = new CreateStudioRequestBody();
    $request->requestBody->adminRoleArn = 'laborum';
    $request->requestBody->displayName = 'animi';
    $request->requestBody->studioEncryptionConfiguration = new CreateStudioRequestBodyStudioEncryptionConfiguration();
    $request->requestBody->studioEncryptionConfiguration->keyArn = 'enim';
    $request->requestBody->studioEncryptionConfiguration->keyType = StudioEncryptionConfigurationKeyTypeEnum::AWS_OWNED_KEY;
    $request->requestBody->studioName = 'quo';
    $request->requestBody->tags = [
        'tenetur' => 'ipsam',
    ];
    $request->requestBody->userRoleArn = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzClientToken = 'aut';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->createStudio($request);

    if ($response->createStudioResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStudioComponent

Creates a studio component resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioComponentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioComponentRequestBodyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryComputerAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ComputeFarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LicenseServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SharedFileSystemConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StudioComponentInitializationScript;
use \OpenAPI\OpenAPI\Models\Shared\LaunchProfilePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\StudioComponentInitializationScriptRunContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScriptParameterKeyValue;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioComponentRequestBodySubtypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateStudioComponentRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStudioComponentRequest();
    $request->requestBody = new CreateStudioComponentRequestBody();
    $request->requestBody->configuration = new CreateStudioComponentRequestBodyConfiguration();
    $request->requestBody->configuration->activeDirectoryConfiguration = new ActiveDirectoryConfiguration();
    $request->requestBody->configuration->activeDirectoryConfiguration->computerAttributes = [
        new ActiveDirectoryComputerAttribute(),
        new ActiveDirectoryComputerAttribute(),
        new ActiveDirectoryComputerAttribute(),
        new ActiveDirectoryComputerAttribute(),
    ];
    $request->requestBody->configuration->activeDirectoryConfiguration->directoryId = 'vero';
    $request->requestBody->configuration->activeDirectoryConfiguration->organizationalUnitDistinguishedName = 'nihil';
    $request->requestBody->configuration->computeFarmConfiguration = new ComputeFarmConfiguration();
    $request->requestBody->configuration->computeFarmConfiguration->activeDirectoryUser = 'praesentium';
    $request->requestBody->configuration->computeFarmConfiguration->endpoint = 'voluptatibus';
    $request->requestBody->configuration->licenseServiceConfiguration = new LicenseServiceConfiguration();
    $request->requestBody->configuration->licenseServiceConfiguration->endpoint = 'ipsa';
    $request->requestBody->configuration->sharedFileSystemConfiguration = new SharedFileSystemConfiguration();
    $request->requestBody->configuration->sharedFileSystemConfiguration->endpoint = 'omnis';
    $request->requestBody->configuration->sharedFileSystemConfiguration->fileSystemId = 'voluptate';
    $request->requestBody->configuration->sharedFileSystemConfiguration->linuxMountPoint = 'cum';
    $request->requestBody->configuration->sharedFileSystemConfiguration->shareName = 'perferendis';
    $request->requestBody->configuration->sharedFileSystemConfiguration->windowsMountDrive = 'doloremque';
    $request->requestBody->description = 'reprehenderit';
    $request->requestBody->ec2SecurityGroupIds = [
        'maiores',
        'dicta',
    ];
    $request->requestBody->initializationScripts = [
        new StudioComponentInitializationScript(),
        new StudioComponentInitializationScript(),
    ];
    $request->requestBody->name = 'dolore';
    $request->requestBody->runtimeRoleArn = 'iusto';
    $request->requestBody->scriptParameters = [
        new ScriptParameterKeyValue(),
    ];
    $request->requestBody->secureInitializationRoleArn = 'harum';
    $request->requestBody->subtype = CreateStudioComponentRequestBodySubtypeEnum::AMAZON_FSX_FOR_WINDOWS;
    $request->requestBody->tags = [
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
        'quidem' => 'molestias',
        'excepturi' => 'pariatur',
    ];
    $request->requestBody->type = CreateStudioComponentRequestBodyTypeEnum::SHARED_FILE_SYSTEM;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzClientToken = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->studioId = 'incidunt';

    $response = $sdk->sdk->createStudioComponent($request);

    if ($response->createStudioComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLaunchProfile

Permanently delete a launch profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLaunchProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLaunchProfileRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzClientToken = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->launchProfileId = 'labore';
    $request->studioId = 'modi';

    $response = $sdk->sdk->deleteLaunchProfile($request);

    if ($response->deleteLaunchProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLaunchProfileMember

Delete a user from launch profile membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLaunchProfileMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLaunchProfileMemberRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzClientToken = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->launchProfileId = 'alias';
    $request->principalId = 'fugit';
    $request->studioId = 'dolorum';

    $response = $sdk->sdk->deleteLaunchProfileMember($request);

    if ($response->deleteLaunchProfileMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStreamingImage

Delete streaming image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStreamingImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStreamingImageRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzClientToken = 'tempora';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'non';
    $request->streamingImageId = 'eligendi';
    $request->studioId = 'sint';

    $response = $sdk->sdk->deleteStreamingImage($request);

    if ($response->deleteStreamingImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStreamingSession

<p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStreamingSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStreamingSessionRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzClientToken = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';
    $request->sessionId = 'dolorum';
    $request->studioId = 'in';

    $response = $sdk->sdk->deleteStreamingSession($request);

    if ($response->deleteStreamingSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStudio

Delete a studio resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStudioRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzClientToken = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->studioId = 'ea';

    $response = $sdk->sdk->deleteStudio($request);

    if ($response->deleteStudioResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStudioComponent

Deletes a studio component resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStudioComponentRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzClientToken = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->studioComponentId = 'quidem';
    $request->studioId = 'provident';

    $response = $sdk->sdk->deleteStudioComponent($request);

    if ($response->deleteStudioComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStudioMember

Delete a user from studio membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStudioMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStudioMemberRequest();
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzClientToken = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';
    $request->principalId = 'vel';
    $request->studioId = 'natus';

    $response = $sdk->sdk->deleteStudioMember($request);

    if ($response->deleteStudioMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEula

Get EULA.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEulaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEulaRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->eulaId = 'labore';

    $response = $sdk->sdk->getEula($request);

    if ($response->getEulaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLaunchProfile

Get a launch profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLaunchProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLaunchProfileRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->launchProfileId = 'architecto';
    $request->studioId = 'magnam';

    $response = $sdk->sdk->getLaunchProfile($request);

    if ($response->getLaunchProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLaunchProfileDetails

Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLaunchProfileDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLaunchProfileDetailsRequest();
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->launchProfileId = 'mollitia';
    $request->studioId = 'reiciendis';

    $response = $sdk->sdk->getLaunchProfileDetails($request);

    if ($response->getLaunchProfileDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLaunchProfileInitialization

Get a launch profile initialization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLaunchProfileInitializationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLaunchProfileInitializationRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';
    $request->launchProfileId = 'quasi';
    $request->launchProfileProtocolVersions = [
        'doloribus',
        'debitis',
    ];
    $request->launchPurpose = 'eius';
    $request->platform = 'maxime';
    $request->studioId = 'deleniti';

    $response = $sdk->sdk->getLaunchProfileInitialization($request);

    if ($response->getLaunchProfileInitializationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLaunchProfileMember

Get a user persona in launch profile membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLaunchProfileMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLaunchProfileMemberRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';
    $request->launchProfileId = 'nihil';
    $request->principalId = 'repellat';
    $request->studioId = 'quibusdam';

    $response = $sdk->sdk->getLaunchProfileMember($request);

    if ($response->getLaunchProfileMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStreamingImage

Get streaming image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamingImageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStreamingImageRequest();
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';
    $request->streamingImageId = 'magni';
    $request->studioId = 'sunt';

    $response = $sdk->sdk->getStreamingImage($request);

    if ($response->getStreamingImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStreamingSession

<p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamingSessionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStreamingSessionRequest();
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';
    $request->sessionId = 'ea';
    $request->studioId = 'accusantium';

    $response = $sdk->sdk->getStreamingSession($request);

    if ($response->getStreamingSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStreamingSessionBackup

<p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamingSessionBackupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStreamingSessionBackupRequest();
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'nam';
    $request->backupId = 'eaque';
    $request->studioId = 'pariatur';

    $response = $sdk->sdk->getStreamingSessionBackup($request);

    if ($response->getStreamingSessionBackupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStreamingSessionStream

<p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamingSessionStreamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStreamingSessionStreamRequest();
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->sessionId = 'corporis';
    $request->streamId = 'hic';
    $request->studioId = 'libero';

    $response = $sdk->sdk->getStreamingSessionStream($request);

    if ($response->getStreamingSessionStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudio

Get a studio resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudioRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->studioId = 'nesciunt';

    $response = $sdk->sdk->getStudio($request);

    if ($response->getStudioResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudioComponent

Gets a studio component resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudioComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudioComponentRequest();
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'vero';
    $request->studioComponentId = 'nostrum';
    $request->studioId = 'hic';

    $response = $sdk->sdk->getStudioComponent($request);

    if ($response->getStudioComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudioMember

Get a user's membership in a studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudioMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudioMemberRequest();
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->principalId = 'blanditiis';
    $request->studioId = 'error';

    $response = $sdk->sdk->getStudioMember($request);

    if ($response->getStudioMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEulaAcceptances

List EULA acceptances.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEulaAcceptancesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEulaAcceptancesRequest();
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';
    $request->eulaIds = [
        'dolorum',
        'deleniti',
        'pariatur',
    ];
    $request->nextToken = 'provident';
    $request->studioId = 'nobis';

    $response = $sdk->sdk->listEulaAcceptances($request);

    if ($response->listEulaAcceptancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEulas

List EULAs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEulasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEulasRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->eulaIds = [
        'qui',
    ];
    $request->nextToken = 'ipsum';

    $response = $sdk->sdk->listEulas($request);

    if ($response->listEulasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLaunchProfileMembers

Get all users in a given launch profile membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLaunchProfileMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLaunchProfileMembersRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->launchProfileId = 'dolorum';
    $request->maxResults = 254356;
    $request->nextToken = 'veritatis';
    $request->studioId = 'ipsa';

    $response = $sdk->sdk->listLaunchProfileMembers($request);

    if ($response->listLaunchProfileMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLaunchProfiles

List all the launch profiles a studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLaunchProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\LaunchProfileStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLaunchProfilesRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->maxResults = 377752;
    $request->nextToken = 'natus';
    $request->principalId = 'eos';
    $request->states = [
        LaunchProfileStateEnum::CREATE_IN_PROGRESS,
        LaunchProfileStateEnum::CREATE_FAILED,
        LaunchProfileStateEnum::CREATE_IN_PROGRESS,
    ];
    $request->studioId = 'soluta';

    $response = $sdk->sdk->listLaunchProfiles($request);

    if ($response->listLaunchProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreamingImages

<p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamingImagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamingImagesRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->nextToken = 'distinctio';
    $request->owner = 'asperiores';
    $request->studioId = 'nihil';

    $response = $sdk->sdk->listStreamingImages($request);

    if ($response->listStreamingImagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreamingSessionBackups

Lists the backups of a streaming session in a studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamingSessionBackupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamingSessionBackupsRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->nextToken = 'amet';
    $request->ownedBy = 'optio';
    $request->studioId = 'accusamus';

    $response = $sdk->sdk->listStreamingSessionBackups($request);

    if ($response->listStreamingSessionBackupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreamingSessions

Lists the streaming sessions in a studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamingSessionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamingSessionsRequest();
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->createdBy = 'totam';
    $request->nextToken = 'similique';
    $request->ownedBy = 'alias';
    $request->sessionIds = 'at';
    $request->studioId = 'quaerat';

    $response = $sdk->sdk->listStreamingSessions($request);

    if ($response->listStreamingSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStudioComponents

Lists the <code>StudioComponents</code> in a studio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStudioComponentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\StudioComponentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\StudioComponentTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStudioComponentsRequest();
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->maxResults = 456130;
    $request->nextToken = 'harum';
    $request->states = [
        StudioComponentStateEnum::READY,
        StudioComponentStateEnum::CREATE_FAILED,
    ];
    $request->studioId = 'tenetur';
    $request->types = [
        StudioComponentTypeEnum::LICENSE_SERVICE,
    ];

    $response = $sdk->sdk->listStudioComponents($request);

    if ($response->listStudioComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStudioMembers

<p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStudioMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStudioMembersRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'nihil';
    $request->maxResults = 25662;
    $request->nextToken = 'expedita';
    $request->studioId = 'neque';

    $response = $sdk->sdk->listStudioMembers($request);

    if ($response->listStudioMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStudios

List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStudiosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStudiosRequest();
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->listStudios($request);

    if ($response->listStudiosResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'laborum';
    $request->resourceArn = 'totam';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putLaunchProfileMembers

Add/update users with given persona to launch profile membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutLaunchProfileMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutLaunchProfileMembersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\NewLaunchProfileMember;
use \OpenAPI\OpenAPI\Models\Shared\LaunchProfilePersonaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutLaunchProfileMembersRequest();
    $request->requestBody = new PutLaunchProfileMembersRequestBody();
    $request->requestBody->identityStoreId = 'incidunt';
    $request->requestBody->members = [
        new NewLaunchProfileMember(),
    ];
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzClientToken = 'distinctio';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'qui';
    $request->launchProfileId = 'neque';
    $request->studioId = 'fugit';

    $response = $sdk->sdk->putLaunchProfileMembers($request);

    if ($response->putLaunchProfileMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putStudioMembers

Add/update users with given persona to studio membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutStudioMembersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutStudioMembersRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\NewStudioMember;
use \OpenAPI\OpenAPI\Models\Shared\StudioPersonaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutStudioMembersRequest();
    $request->requestBody = new PutStudioMembersRequestBody();
    $request->requestBody->identityStoreId = 'magni';
    $request->requestBody->members = [
        new NewStudioMember(),
        new NewStudioMember(),
    ];
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzClientToken = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';
    $request->studioId = 'et';

    $response = $sdk->sdk->putStudioMembers($request);

    if ($response->putStudioMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startStreamingSession

Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartStreamingSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartStreamingSessionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartStreamingSessionRequest();
    $request->requestBody = new StartStreamingSessionRequestBody();
    $request->requestBody->backupId = 'saepe';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzClientToken = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->sessionId = 'dolorem';
    $request->studioId = 'dolore';

    $response = $sdk->sdk->startStreamingSession($request);

    if ($response->startStreamingSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startStudioSSOConfigurationRepair

<p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartStudioSSOConfigurationRepairRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartStudioSSOConfigurationRepairRequest();
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzClientToken = 'adipisci';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'itaque';
    $request->studioId = 'consequatur';

    $response = $sdk->sdk->startStudioSSOConfigurationRepair($request);

    if ($response->startStudioSSOConfigurationRepairResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopStreamingSession

Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopStreamingSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopStreamingSessionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StopStreamingSessionRequestBodyVolumeRetentionModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopStreamingSessionRequest();
    $request->requestBody = new StopStreamingSessionRequestBody();
    $request->requestBody->volumeRetentionMode = StopStreamingSessionRequestBodyVolumeRetentionModeEnum::DELETE;
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzClientToken = 'porro';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'quae';
    $request->sessionId = 'laudantium';
    $request->studioId = 'odio';

    $response = $sdk->sdk->stopStreamingSession($request);

    if ($response->stopStreamingSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Creates tags for a resource, given its ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'voluptatibus' => 'quisquam',
        'vero' => 'omnis',
        'quis' => 'ipsum',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';
    $request->resourceArn = 'distinctio';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Deletes the tags for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'dolore';
    $request->resourceArn = 'quibusdam';
    $request->tagKeys = [
        'sequi',
        'natus',
        'impedit',
        'aut',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLaunchProfile

Update a launch profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchProfileRequestBodyStreamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AutomaticTerminationModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingClipboardModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingInstanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamConfigurationSessionBackup;
use \OpenAPI\OpenAPI\Models\Shared\SessionBackupModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPersistenceModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamConfigurationSessionStorage;
use \OpenAPI\OpenAPI\Models\Shared\StreamingSessionStorageModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamingSessionStorageRoot;
use \OpenAPI\OpenAPI\Models\Shared\VolumeConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLaunchProfileRequest();
    $request->requestBody = new UpdateLaunchProfileRequestBody();
    $request->requestBody->description = 'voluptatibus';
    $request->requestBody->launchProfileProtocolVersions = [
        'nulla',
        'fugit',
    ];
    $request->requestBody->name = 'porro';
    $request->requestBody->streamConfiguration = new UpdateLaunchProfileRequestBodyStreamConfiguration();
    $request->requestBody->streamConfiguration->automaticTerminationMode = AutomaticTerminationModeEnum::ACTIVATED;
    $request->requestBody->streamConfiguration->clipboardMode = StreamingClipboardModeEnum::DISABLED;
    $request->requestBody->streamConfiguration->ec2InstanceTypes = [
        StreamingInstanceTypeEnum::G52XLARGE,
        StreamingInstanceTypeEnum::G34XLARGE,
    ];
    $request->requestBody->streamConfiguration->maxSessionLengthInMinutes = 4048;
    $request->requestBody->streamConfiguration->maxStoppedSessionLengthInMinutes = 639473;
    $request->requestBody->streamConfiguration->sessionBackup = new StreamConfigurationSessionBackup();
    $request->requestBody->streamConfiguration->sessionBackup->maxBackupsToRetain = 269479;
    $request->requestBody->streamConfiguration->sessionBackup->mode = SessionBackupModeEnum::AUTOMATIC;
    $request->requestBody->streamConfiguration->sessionPersistenceMode = SessionPersistenceModeEnum::DEACTIVATED;
    $request->requestBody->streamConfiguration->sessionStorage = new StreamConfigurationSessionStorage();
    $request->requestBody->streamConfiguration->sessionStorage->mode = [
        StreamingSessionStorageModeEnum::UPLOAD,
    ];
    $request->requestBody->streamConfiguration->sessionStorage->root = new StreamingSessionStorageRoot();
    $request->requestBody->streamConfiguration->sessionStorage->root->linux = 'vel';
    $request->requestBody->streamConfiguration->sessionStorage->root->windows = 'possimus';
    $request->requestBody->streamConfiguration->streamingImageIds = [
        'ratione',
        'ex',
    ];
    $request->requestBody->streamConfiguration->volumeConfiguration = new VolumeConfiguration();
    $request->requestBody->streamConfiguration->volumeConfiguration->iops = 511319;
    $request->requestBody->streamConfiguration->volumeConfiguration->size = 120657;
    $request->requestBody->streamConfiguration->volumeConfiguration->throughput = 224317;
    $request->requestBody->studioComponentIds = [
        'quasi',
        'ex',
        'nulla',
        'excepturi',
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzClientToken = 'nostrum';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'corporis';
    $request->launchProfileId = 'veniam';
    $request->studioId = 'aliquid';

    $response = $sdk->sdk->updateLaunchProfile($request);

    if ($response->updateLaunchProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLaunchProfileMember

Update a user persona in launch profile membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchProfileMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchProfileMemberRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLaunchProfileMemberRequestBodyPersonaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLaunchProfileMemberRequest();
    $request->requestBody = new UpdateLaunchProfileMemberRequestBody();
    $request->requestBody->persona = UpdateLaunchProfileMemberRequestBodyPersonaEnum::USER;
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzClientToken = 'magnam';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'minima';
    $request->launchProfileId = 'eaque';
    $request->principalId = 'a';
    $request->studioId = 'libero';

    $response = $sdk->sdk->updateLaunchProfileMember($request);

    if ($response->updateLaunchProfileMemberResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStreamingImage

Update streaming image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamingImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamingImageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStreamingImageRequest();
    $request->requestBody = new UpdateStreamingImageRequestBody();
    $request->requestBody->description = 'aut';
    $request->requestBody->name = 'aut';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzClientToken = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';
    $request->streamingImageId = 'dolorum';
    $request->studioId = 'laborum';

    $response = $sdk->sdk->updateStreamingImage($request);

    if ($response->updateStreamingImageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStudio

<p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStudioRequest();
    $request->requestBody = new UpdateStudioRequestBody();
    $request->requestBody->adminRoleArn = 'placeat';
    $request->requestBody->displayName = 'velit';
    $request->requestBody->userRoleArn = 'eum';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzClientToken = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';
    $request->studioId = 'tempora';

    $response = $sdk->sdk->updateStudio($request);

    if ($response->updateStudioResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStudioComponent

Updates a studio component resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioComponentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioComponentRequestBodyConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryComputerAttribute;
use \OpenAPI\OpenAPI\Models\Shared\ComputeFarmConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LicenseServiceConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SharedFileSystemConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\StudioComponentInitializationScript;
use \OpenAPI\OpenAPI\Models\Shared\LaunchProfilePlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\StudioComponentInitializationScriptRunContextEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScriptParameterKeyValue;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioComponentRequestBodySubtypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStudioComponentRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStudioComponentRequest();
    $request->requestBody = new UpdateStudioComponentRequestBody();
    $request->requestBody->configuration = new UpdateStudioComponentRequestBodyConfiguration();
    $request->requestBody->configuration->activeDirectoryConfiguration = new ActiveDirectoryConfiguration();
    $request->requestBody->configuration->activeDirectoryConfiguration->computerAttributes = [
        new ActiveDirectoryComputerAttribute(),
        new ActiveDirectoryComputerAttribute(),
    ];
    $request->requestBody->configuration->activeDirectoryConfiguration->directoryId = 'explicabo';
    $request->requestBody->configuration->activeDirectoryConfiguration->organizationalUnitDistinguishedName = 'provident';
    $request->requestBody->configuration->computeFarmConfiguration = new ComputeFarmConfiguration();
    $request->requestBody->configuration->computeFarmConfiguration->activeDirectoryUser = 'ipsa';
    $request->requestBody->configuration->computeFarmConfiguration->endpoint = 'molestiae';
    $request->requestBody->configuration->licenseServiceConfiguration = new LicenseServiceConfiguration();
    $request->requestBody->configuration->licenseServiceConfiguration->endpoint = 'magnam';
    $request->requestBody->configuration->sharedFileSystemConfiguration = new SharedFileSystemConfiguration();
    $request->requestBody->configuration->sharedFileSystemConfiguration->endpoint = 'odio';
    $request->requestBody->configuration->sharedFileSystemConfiguration->fileSystemId = 'eius';
    $request->requestBody->configuration->sharedFileSystemConfiguration->linuxMountPoint = 'esse';
    $request->requestBody->configuration->sharedFileSystemConfiguration->shareName = 'esse';
    $request->requestBody->configuration->sharedFileSystemConfiguration->windowsMountDrive = 'rem';
    $request->requestBody->description = 'fuga';
    $request->requestBody->ec2SecurityGroupIds = [
        'quidem',
        'fugiat',
    ];
    $request->requestBody->initializationScripts = [
        new StudioComponentInitializationScript(),
        new StudioComponentInitializationScript(),
    ];
    $request->requestBody->name = 'eum';
    $request->requestBody->runtimeRoleArn = 'suscipit';
    $request->requestBody->scriptParameters = [
        new ScriptParameterKeyValue(),
        new ScriptParameterKeyValue(),
        new ScriptParameterKeyValue(),
        new ScriptParameterKeyValue(),
    ];
    $request->requestBody->secureInitializationRoleArn = 'eos';
    $request->requestBody->subtype = UpdateStudioComponentRequestBodySubtypeEnum::AMAZON_FSX_FOR_LUSTRE;
    $request->requestBody->type = UpdateStudioComponentRequestBodyTypeEnum::LICENSE_SERVICE;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzClientToken = 'ipsa';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'quo';
    $request->studioComponentId = 'fuga';
    $request->studioId = 'eius';

    $response = $sdk->sdk->updateStudioComponent($request);

    if ($response->updateStudioComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
