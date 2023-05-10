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
use \OpenAPI\OpenAPI\Models\Operations\AcceptPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptPageRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptCodeValidationEnum;
use \OpenAPI\OpenAPI\Models\Shared\AcceptTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AcceptPageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptPageRequest();
    $request->acceptPageRequest = new AcceptPageRequest();
    $request->acceptPageRequest->acceptCode = 'corrupti';
    $request->acceptPageRequest->acceptCodeValidation = AcceptCodeValidationEnum::ENFORCE;
    $request->acceptPageRequest->acceptType = AcceptTypeEnum::READ;
    $request->acceptPageRequest->contactChannelId = 'quibusdam';
    $request->acceptPageRequest->note = 'unde';
    $request->acceptPageRequest->pageId = 'nulla';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = AcceptPageXAmzTargetEnum::SSM_CONTACTS_ACCEPT_PAGE;

    $response = $sdk->acceptPage($request);

    if ($response->acceptPageResult !== null) {
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

* [acceptPage](docs/sdk/README.md#acceptpage) - Used to acknowledge an engagement to a contact channel during an incident.
* [activateContactChannel](docs/sdk/README.md#activatecontactchannel) - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* [createContact](docs/sdk/README.md#createcontact) - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
* [createContactChannel](docs/sdk/README.md#createcontactchannel) - A contact channel is the method that Incident Manager uses to engage your contact.
* [createRotation](docs/sdk/README.md#createrotation) - Creates a rotation in an on-call schedule.
* [createRotationOverride](docs/sdk/README.md#createrotationoverride) - Creates an override for a rotation in an on-call schedule.
* [deactivateContactChannel](docs/sdk/README.md#deactivatecontactchannel) - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* [deleteContact](docs/sdk/README.md#deletecontact) - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* [deleteContactChannel](docs/sdk/README.md#deletecontactchannel) - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* [deleteRotation](docs/sdk/README.md#deleterotation) - Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
* [deleteRotationOverride](docs/sdk/README.md#deleterotationoverride) - Deletes an existing override for an on-call rotation.
* [describeEngagement](docs/sdk/README.md#describeengagement) - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* [describePage](docs/sdk/README.md#describepage) - Lists details of the engagement to a contact channel.
* [getContact](docs/sdk/README.md#getcontact) - Retrieves information about the specified contact or escalation plan.
* [getContactChannel](docs/sdk/README.md#getcontactchannel) - List details about a specific contact channel.
* [getContactPolicy](docs/sdk/README.md#getcontactpolicy) - Retrieves the resource policies attached to the specified contact or escalation plan.
* [getRotation](docs/sdk/README.md#getrotation) - Retrieves information about an on-call rotation.
* [getRotationOverride](docs/sdk/README.md#getrotationoverride) - Retrieves information about an override to an on-call rotation.
* [listContactChannels](docs/sdk/README.md#listcontactchannels) - Lists all contact channels for the specified contact.
* [listContacts](docs/sdk/README.md#listcontacts) - Lists all contacts and escalation plans in Incident Manager.
* [listEngagements](docs/sdk/README.md#listengagements) - Lists all engagements that have happened in an incident.
* [listPageReceipts](docs/sdk/README.md#listpagereceipts) - Lists all of the engagements to contact channels that have been acknowledged.
* [listPageResolutions](docs/sdk/README.md#listpageresolutions) - Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
* [listPagesByContact](docs/sdk/README.md#listpagesbycontact) - Lists the engagements to a contact's contact channels.
* [listPagesByEngagement](docs/sdk/README.md#listpagesbyengagement) - Lists the engagements to contact channels that occurred by engaging a contact.
* [listPreviewRotationShifts](docs/sdk/README.md#listpreviewrotationshifts) - <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
* [listRotationOverrides](docs/sdk/README.md#listrotationoverrides) - Retrieves a list of overrides currently specified for an on-call rotation.
* [listRotationShifts](docs/sdk/README.md#listrotationshifts) - Returns a list of shifts generated by an existing rotation in the system.
* [listRotations](docs/sdk/README.md#listrotations) - Retrieves a list of on-call rotations.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags of an escalation plan or contact.
* [putContactPolicy](docs/sdk/README.md#putcontactpolicy) - Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
* [sendActivationCode](docs/sdk/README.md#sendactivationcode) - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* [startEngagement](docs/sdk/README.md#startengagement) - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* [stopEngagement](docs/sdk/README.md#stopengagement) - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* [tagResource](docs/sdk/README.md#tagresource) - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified resource.
* [updateContact](docs/sdk/README.md#updatecontact) - Updates the contact or escalation plan specified.
* [updateContactChannel](docs/sdk/README.md#updatecontactchannel) - Updates a contact's contact channel.
* [updateRotation](docs/sdk/README.md#updaterotation) - Updates the information specified for an on-call rotation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
