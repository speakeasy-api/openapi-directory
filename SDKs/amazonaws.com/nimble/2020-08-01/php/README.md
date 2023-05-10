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
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzClientToken = 'nulla';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->studioId = 'iure';

    $response = $sdk->acceptEulas($request);

    if ($response->acceptEulasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [acceptEulas](docs/sdk/README.md#accepteulas) - Accept EULAs.
* [createLaunchProfile](docs/sdk/README.md#createlaunchprofile) - Create a launch profile.
* [createStreamingImage](docs/sdk/README.md#createstreamingimage) - Creates a streaming image resource in a studio.
* [createStreamingSession](docs/sdk/README.md#createstreamingsession) - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in the <code>READY</code> state.</p>
* [createStreamingSessionStream](docs/sdk/README.md#createstreamingsessionstream) - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in the <code>READY</code> state.</p>
* [createStudio](docs/sdk/README.md#createstudio) - <p>Create a new studio.</p> <p>When creating a studio, two IAM roles must be provided: the admin role and the user role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy attached for the portal to function properly.</p> <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the <code>StudioEncryptionConfiguration</code>.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling <code>CreateStudio</code> to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
* [createStudioComponent](docs/sdk/README.md#createstudiocomponent) - Creates a studio component resource.
* [deleteLaunchProfile](docs/sdk/README.md#deletelaunchprofile) - Permanently delete a launch profile.
* [deleteLaunchProfileMember](docs/sdk/README.md#deletelaunchprofilemember) - Delete a user from launch profile membership.
* [deleteStreamingImage](docs/sdk/README.md#deletestreamingimage) - Delete streaming image.
* [deleteStreamingSession](docs/sdk/README.md#deletestreamingsession) - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a <code>DELETED</code> state.</p> <p>A streaming session will count against your streaming session quota until it is marked <code>DELETED</code>.</p>
* [deleteStudio](docs/sdk/README.md#deletestudio) - Delete a studio resource.
* [deleteStudioComponent](docs/sdk/README.md#deletestudiocomponent) - Deletes a studio component resource.
* [deleteStudioMember](docs/sdk/README.md#deletestudiomember) - Delete a user from studio membership.
* [getEula](docs/sdk/README.md#geteula) - Get EULA.
* [getLaunchProfile](docs/sdk/README.md#getlaunchprofile) - Get a launch profile.
* [getLaunchProfileDetails](docs/sdk/README.md#getlaunchprofiledetails) - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
* [getLaunchProfileInitialization](docs/sdk/README.md#getlaunchprofileinitialization) - Get a launch profile initialization.
* [getLaunchProfileMember](docs/sdk/README.md#getlaunchprofilemember) - Get a user persona in launch profile membership.
* [getStreamingImage](docs/sdk/README.md#getstreamingimage) - Get streaming image.
* [getStreamingSession](docs/sdk/README.md#getstreamingsession) - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
* [getStreamingSessionBackup](docs/sdk/README.md#getstreamingsessionbackup) - <p>Gets <code>StreamingSessionBackup</code> resource.</p> <p>Invoke this operation to poll for a streaming session backup while stopping a streaming session.</p>
* [getStreamingSessionStream](docs/sdk/README.md#getstreamingsessionstream) - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking <code>CreateStreamingSessionStream</code>.</p> <p>After the <code>StreamingSessionStream</code> changes to the <code>READY</code> state, the url property will contain a stream to be used with the DCV streaming client.</p>
* [getStudio](docs/sdk/README.md#getstudio) - Get a studio resource.
* [getStudioComponent](docs/sdk/README.md#getstudiocomponent) - Gets a studio component resource.
* [getStudioMember](docs/sdk/README.md#getstudiomember) - Get a user's membership in a studio.
* [listEulaAcceptances](docs/sdk/README.md#listeulaacceptances) - List EULA acceptances.
* [listEulas](docs/sdk/README.md#listeulas) - List EULAs.
* [listLaunchProfileMembers](docs/sdk/README.md#listlaunchprofilemembers) - Get all users in a given launch profile membership.
* [listLaunchProfiles](docs/sdk/README.md#listlaunchprofiles) - List all the launch profiles a studio.
* [listStreamingImages](docs/sdk/README.md#liststreamingimages) - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
* [listStreamingSessionBackups](docs/sdk/README.md#liststreamingsessionbackups) - Lists the backups of a streaming session in a studio.
* [listStreamingSessions](docs/sdk/README.md#liststreamingsessions) - Lists the streaming sessions in a studio.
* [listStudioComponents](docs/sdk/README.md#liststudiocomponents) - Lists the <code>StudioComponents</code> in a studio.
* [listStudioMembers](docs/sdk/README.md#liststudiomembers) - <p>Get all users in a given studio membership.</p> <note> <p> <code>ListStudioMembers</code> only returns admin members.</p> </note>
* [listStudios](docs/sdk/README.md#liststudios) - List studios in your Amazon Web Services accounts in the requested Amazon Web Services Region.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
* [putLaunchProfileMembers](docs/sdk/README.md#putlaunchprofilemembers) - Add/update users with given persona to launch profile membership.
* [putStudioMembers](docs/sdk/README.md#putstudiomembers) - Add/update users with given persona to studio membership.
* [startStreamingSession](docs/sdk/README.md#startstreamingsession) - Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code> state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the <code>STOPPED</code> and <code>READY</code> states.
* [startStudioSSOConfigurationRepair](docs/sdk/README.md#startstudiossoconfigurationrepair) - <p>Repairs the IAM Identity Center configuration for a given studio.</p> <p>If the studio has a valid IAM Identity Center configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid IAM Identity Center configuration currently associated with it, then a new IAM Identity Center application is created for the studio and the studio is changed to the <code>READY</code> state.</p> <p>After the IAM Identity Center application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
* [stopStreamingSession](docs/sdk/README.md#stopstreamingsession) - Transitions sessions from the <code>READY</code> state into the <code>STOPPED</code> state. The <code>STOP_IN_PROGRESS</code> state is the intermediate state between the <code>READY</code> and <code>STOPPED</code> states.
* [tagResource](docs/sdk/README.md#tagresource) - Creates tags for a resource, given its ARN.
* [untagResource](docs/sdk/README.md#untagresource) - Deletes the tags for a resource.
* [updateLaunchProfile](docs/sdk/README.md#updatelaunchprofile) - Update a launch profile.
* [updateLaunchProfileMember](docs/sdk/README.md#updatelaunchprofilemember) - Update a user persona in launch profile membership.
* [updateStreamingImage](docs/sdk/README.md#updatestreamingimage) - Update streaming image.
* [updateStudio](docs/sdk/README.md#updatestudio) - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
* [updateStudioComponent](docs/sdk/README.md#updatestudiocomponent) - Updates a studio component resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
