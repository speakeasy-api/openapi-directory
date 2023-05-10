# SDK

## Overview

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services.</p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-contacts/>
### Available Operations

* [acceptPage](#acceptpage) - Used to acknowledge an engagement to a contact channel during an incident.
* [activateContactChannel](#activatecontactchannel) - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* [createContact](#createcontact) - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
* [createContactChannel](#createcontactchannel) - A contact channel is the method that Incident Manager uses to engage your contact.
* [createRotation](#createrotation) - Creates a rotation in an on-call schedule.
* [createRotationOverride](#createrotationoverride) - Creates an override for a rotation in an on-call schedule.
* [deactivateContactChannel](#deactivatecontactchannel) - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* [deleteContact](#deletecontact) - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* [deleteContactChannel](#deletecontactchannel) - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* [deleteRotation](#deleterotation) - Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
* [deleteRotationOverride](#deleterotationoverride) - Deletes an existing override for an on-call rotation.
* [describeEngagement](#describeengagement) - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* [describePage](#describepage) - Lists details of the engagement to a contact channel.
* [getContact](#getcontact) - Retrieves information about the specified contact or escalation plan.
* [getContactChannel](#getcontactchannel) - List details about a specific contact channel.
* [getContactPolicy](#getcontactpolicy) - Retrieves the resource policies attached to the specified contact or escalation plan.
* [getRotation](#getrotation) - Retrieves information about an on-call rotation.
* [getRotationOverride](#getrotationoverride) - Retrieves information about an override to an on-call rotation.
* [listContactChannels](#listcontactchannels) - Lists all contact channels for the specified contact.
* [listContacts](#listcontacts) - Lists all contacts and escalation plans in Incident Manager.
* [listEngagements](#listengagements) - Lists all engagements that have happened in an incident.
* [listPageReceipts](#listpagereceipts) - Lists all of the engagements to contact channels that have been acknowledged.
* [listPageResolutions](#listpageresolutions) - Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
* [listPagesByContact](#listpagesbycontact) - Lists the engagements to a contact's contact channels.
* [listPagesByEngagement](#listpagesbyengagement) - Lists the engagements to contact channels that occurred by engaging a contact.
* [listPreviewRotationShifts](#listpreviewrotationshifts) - <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
* [listRotationOverrides](#listrotationoverrides) - Retrieves a list of overrides currently specified for an on-call rotation.
* [listRotationShifts](#listrotationshifts) - Returns a list of shifts generated by an existing rotation in the system.
* [listRotations](#listrotations) - Retrieves a list of on-call rotations.
* [listTagsForResource](#listtagsforresource) - Lists the tags of an escalation plan or contact.
* [putContactPolicy](#putcontactpolicy) - Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
* [sendActivationCode](#sendactivationcode) - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* [startEngagement](#startengagement) - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* [stopEngagement](#stopengagement) - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* [tagResource](#tagresource) - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
* [untagResource](#untagresource) - Removes tags from the specified resource.
* [updateContact](#updatecontact) - Updates the contact or escalation plan specified.
* [updateContactChannel](#updatecontactchannel) - Updates a contact's contact channel.
* [updateRotation](#updaterotation) - Updates the information specified for an on-call rotation.

## acceptPage

Used to acknowledge an engagement to a contact channel during an incident.

### Example Usage

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
    $request->acceptPageRequest->acceptCode = 'magnam';
    $request->acceptPageRequest->acceptCodeValidation = AcceptCodeValidationEnum::ENFORCE;
    $request->acceptPageRequest->acceptType = AcceptTypeEnum::DELIVERED;
    $request->acceptPageRequest->contactChannelId = 'delectus';
    $request->acceptPageRequest->note = 'tempora';
    $request->acceptPageRequest->pageId = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = AcceptPageXAmzTargetEnum::SSM_CONTACTS_ACCEPT_PAGE;

    $response = $sdk->sdk->acceptPage($request);

    if ($response->acceptPageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activateContactChannel

Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateContactChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateContactChannelRequest();
    $request->activateContactChannelRequest = new ActivateContactChannelRequest();
    $request->activateContactChannelRequest->activationCode = 'recusandae';
    $request->activateContactChannelRequest->contactChannelId = 'temporibus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = ActivateContactChannelXAmzTargetEnum::SSM_CONTACTS_ACTIVATE_CONTACT_CHANNEL;

    $response = $sdk->sdk->activateContactChannel($request);

    if ($response->activateContactChannelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContact

Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\Plan;
use \OpenAPI\OpenAPI\Models\Shared\Stage;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTargetInfo;
use \OpenAPI\OpenAPI\Models\Shared\ContactTargetInfo;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\ContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactRequest();
    $request->createContactRequest = new CreateContactRequest();
    $request->createContactRequest->alias = 'sapiente';
    $request->createContactRequest->displayName = 'quo';
    $request->createContactRequest->idempotencyToken = 'odit';
    $request->createContactRequest->plan = new Plan();
    $request->createContactRequest->plan->rotationIds = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->createContactRequest->plan->stages = [
        new Stage(),
        new Stage(),
        new Stage(),
        new Stage(),
    ];
    $request->createContactRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->createContactRequest->type = ContactTypeEnum::ESCALATION;
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = CreateContactXAmzTargetEnum::SSM_CONTACTS_CREATE_CONTACT;

    $response = $sdk->sdk->createContact($request);

    if ($response->createContactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContactChannel

A contact channel is the method that Incident Manager uses to engage your contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactChannelAddress;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateContactChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateContactChannelRequest();
    $request->createContactChannelRequest = new CreateContactChannelRequest();
    $request->createContactChannelRequest->contactId = 'deleniti';
    $request->createContactChannelRequest->deferActivation = false;
    $request->createContactChannelRequest->deliveryAddress = new ContactChannelAddress();
    $request->createContactChannelRequest->deliveryAddress->simpleAddress = 'hic';
    $request->createContactChannelRequest->idempotencyToken = 'optio';
    $request->createContactChannelRequest->name = 'Jack Johns';
    $request->createContactChannelRequest->type = ChannelTypeEnum::SMS;
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateContactChannelXAmzTargetEnum::SSM_CONTACTS_CREATE_CONTACT_CHANNEL;

    $response = $sdk->sdk->createContactChannel($request);

    if ($response->createContactChannelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRotation

Creates a rotation in an on-call schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecurrenceSettings;
use \OpenAPI\OpenAPI\Models\Shared\HandOffTime;
use \OpenAPI\OpenAPI\Models\Shared\MonthlySetting;
use \OpenAPI\OpenAPI\Models\Shared\CoverageTime;
use \OpenAPI\OpenAPI\Models\Shared\WeeklySetting;
use \OpenAPI\OpenAPI\Models\Shared\DayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateRotationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRotationRequest();
    $request->createRotationRequest = new CreateRotationRequest();
    $request->createRotationRequest->contactIds = [
        'natus',
        'sed',
    ];
    $request->createRotationRequest->idempotencyToken = 'iste';
    $request->createRotationRequest->name = 'Faye Howe';
    $request->createRotationRequest->recurrence = new RecurrenceSettings();
    $request->createRotationRequest->recurrence->dailySettings = [
        new HandOffTime(),
        new HandOffTime(),
        new HandOffTime(),
    ];
    $request->createRotationRequest->recurrence->monthlySettings = [
        new MonthlySetting(),
        new MonthlySetting(),
    ];
    $request->createRotationRequest->recurrence->numberOfOnCalls = 359508;
    $request->createRotationRequest->recurrence->recurrenceMultiplier = 613064;
    $request->createRotationRequest->recurrence->shiftCoverages = [
        'saepe' => [
            new CoverageTime(),
            new CoverageTime(),
            new CoverageTime(),
        ],
        'architecto' => [
            new CoverageTime(),
        ],
    ];
    $request->createRotationRequest->recurrence->weeklySettings = [
        new WeeklySetting(),
        new WeeklySetting(),
        new WeeklySetting(),
        new WeeklySetting(),
    ];
    $request->createRotationRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-11T04:59:11.542Z');
    $request->createRotationRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createRotationRequest->timeZoneId = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = CreateRotationXAmzTargetEnum::SSM_CONTACTS_CREATE_ROTATION;

    $response = $sdk->sdk->createRotation($request);

    if ($response->createRotationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRotationOverride

Creates an override for a rotation in an on-call schedule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRotationOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRotationOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRotationOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRotationOverrideRequest();
    $request->createRotationOverrideRequest = new CreateRotationOverrideRequest();
    $request->createRotationOverrideRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-06T21:04:34.044Z');
    $request->createRotationOverrideRequest->idempotencyToken = 'accusantium';
    $request->createRotationOverrideRequest->newContactIds = [
        'culpa',
        'doloribus',
    ];
    $request->createRotationOverrideRequest->rotationId = 'sapiente';
    $request->createRotationOverrideRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-07T17:33:24.154Z');
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = CreateRotationOverrideXAmzTargetEnum::SSM_CONTACTS_CREATE_ROTATION_OVERRIDE;

    $response = $sdk->sdk->createRotationOverride($request);

    if ($response->createRotationOverrideResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateContactChannel

To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeactivateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateContactChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateContactChannelRequest();
    $request->deactivateContactChannelRequest = new DeactivateContactChannelRequest();
    $request->deactivateContactChannelRequest->contactChannelId = 'commodi';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->xAmzTarget = DeactivateContactChannelXAmzTargetEnum::SSM_CONTACTS_DEACTIVATE_CONTACT_CHANNEL;

    $response = $sdk->sdk->deactivateContactChannel($request);

    if ($response->deactivateContactChannelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContact

To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContactRequest();
    $request->deleteContactRequest = new DeleteContactRequest();
    $request->deleteContactRequest->contactId = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = DeleteContactXAmzTargetEnum::SSM_CONTACTS_DELETE_CONTACT;

    $response = $sdk->sdk->deleteContact($request);

    if ($response->deleteContactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContactChannel

To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContactChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContactChannelRequest();
    $request->deleteContactChannelRequest = new DeleteContactChannelRequest();
    $request->deleteContactChannelRequest->contactChannelId = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteContactChannelXAmzTargetEnum::SSM_CONTACTS_DELETE_CONTACT_CHANNEL;

    $response = $sdk->sdk->deleteContactChannel($request);

    if ($response->deleteContactChannelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRotation

Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRotationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRotationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRotationRequest();
    $request->deleteRotationRequest = new DeleteRotationRequest();
    $request->deleteRotationRequest->rotationId = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = DeleteRotationXAmzTargetEnum::SSM_CONTACTS_DELETE_ROTATION;

    $response = $sdk->sdk->deleteRotation($request);

    if ($response->deleteRotationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRotationOverride

Deletes an existing override for an on-call rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRotationOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRotationOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRotationOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRotationOverrideRequest();
    $request->deleteRotationOverrideRequest = new DeleteRotationOverrideRequest();
    $request->deleteRotationOverrideRequest->rotationId = 'voluptate';
    $request->deleteRotationOverrideRequest->rotationOverrideId = 'cum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DeleteRotationOverrideXAmzTargetEnum::SSM_CONTACTS_DELETE_ROTATION_OVERRIDE;

    $response = $sdk->sdk->deleteRotationOverride($request);

    if ($response->deleteRotationOverrideResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEngagement

Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEngagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEngagementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEngagementRequest();
    $request->describeEngagementRequest = new DescribeEngagementRequest();
    $request->describeEngagementRequest->engagementId = 'dolore';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = DescribeEngagementXAmzTargetEnum::SSM_CONTACTS_DESCRIBE_ENGAGEMENT;

    $response = $sdk->sdk->describeEngagement($request);

    if ($response->describeEngagementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describePage

Lists details of the engagement to a contact channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribePageRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribePageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribePageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribePageRequest();
    $request->describePageRequest = new DescribePageRequest();
    $request->describePageRequest->pageId = 'quae';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = DescribePageXAmzTargetEnum::SSM_CONTACTS_DESCRIBE_PAGE;

    $response = $sdk->sdk->describePage($request);

    if ($response->describePageResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContact

Retrieves information about the specified contact or escalation plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactRequest();
    $request->getContactRequest = new GetContactRequest();
    $request->getContactRequest->contactId = 'rem';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = GetContactXAmzTargetEnum::SSM_CONTACTS_GET_CONTACT;

    $response = $sdk->sdk->getContact($request);

    if ($response->getContactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactChannel

List details about a specific contact channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactChannelRequest();
    $request->getContactChannelRequest = new GetContactChannelRequest();
    $request->getContactChannelRequest->contactChannelId = 'enim';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = GetContactChannelXAmzTargetEnum::SSM_CONTACTS_GET_CONTACT_CHANNEL;

    $response = $sdk->sdk->getContactChannel($request);

    if ($response->getContactChannelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactPolicy

Retrieves the resource policies attached to the specified contact or escalation plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetContactPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactPolicyRequest();
    $request->getContactPolicyRequest = new GetContactPolicyRequest();
    $request->getContactPolicyRequest->contactArn = 'labore';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = GetContactPolicyXAmzTargetEnum::SSM_CONTACTS_GET_CONTACT_POLICY;

    $response = $sdk->sdk->getContactPolicy($request);

    if ($response->getContactPolicyResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRotation

Retrieves information about an on-call rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRotationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRotationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRotationRequest();
    $request->getRotationRequest = new GetRotationRequest();
    $request->getRotationRequest->rotationId = 'assumenda';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = GetRotationXAmzTargetEnum::SSM_CONTACTS_GET_ROTATION;

    $response = $sdk->sdk->getRotation($request);

    if ($response->getRotationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRotationOverride

Retrieves information about an override to an on-call rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRotationOverrideRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRotationOverrideRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRotationOverrideXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRotationOverrideRequest();
    $request->getRotationOverrideRequest = new GetRotationOverrideRequest();
    $request->getRotationOverrideRequest->rotationId = 'tempore';
    $request->getRotationOverrideRequest->rotationOverrideId = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = GetRotationOverrideXAmzTargetEnum::SSM_CONTACTS_GET_ROTATION_OVERRIDE;

    $response = $sdk->sdk->getRotationOverride($request);

    if ($response->getRotationOverrideResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContactChannels

Lists all contact channels for the specified contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContactChannelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListContactChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListContactChannelsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContactChannelsRequest();
    $request->listContactChannelsRequest = new ListContactChannelsRequest();
    $request->listContactChannelsRequest->contactId = 'necessitatibus';
    $request->listContactChannelsRequest->maxResults = 572252;
    $request->listContactChannelsRequest->nextToken = 'officia';
    $request->maxResults = 'dolor';
    $request->nextToken = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = ListContactChannelsXAmzTargetEnum::SSM_CONTACTS_LIST_CONTACT_CHANNELS;

    $response = $sdk->sdk->listContactChannels($request);

    if ($response->listContactChannelsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContacts

Lists all contacts and escalation plans in Incident Manager.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListContactsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListContactsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContactsRequest();
    $request->listContactsRequest = new ListContactsRequest();
    $request->listContactsRequest->aliasPrefix = 'dicta';
    $request->listContactsRequest->maxResults = 297437;
    $request->listContactsRequest->nextToken = 'cumque';
    $request->listContactsRequest->type = ContactTypeEnum::ONCALL_SCHEDULE;
    $request->maxResults = 'ea';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = ListContactsXAmzTargetEnum::SSM_CONTACTS_LIST_CONTACTS;

    $response = $sdk->sdk->listContacts($request);

    if ($response->listContactsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEngagements

Lists all engagements that have happened in an incident.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEngagementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEngagementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeRange;
use \OpenAPI\OpenAPI\Models\Operations\ListEngagementsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEngagementsRequest();
    $request->listEngagementsRequest = new ListEngagementsRequest();
    $request->listEngagementsRequest->incidentId = 'quidem';
    $request->listEngagementsRequest->maxResults = 588465;
    $request->listEngagementsRequest->nextToken = 'nam';
    $request->listEngagementsRequest->timeRangeValue = new TimeRange();
    $request->listEngagementsRequest->timeRangeValue->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-31T00:47:48.012Z');
    $request->listEngagementsRequest->timeRangeValue->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-02T01:24:52.629Z');
    $request->maxResults = 'amet';
    $request->nextToken = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = ListEngagementsXAmzTargetEnum::SSM_CONTACTS_LIST_ENGAGEMENTS;

    $response = $sdk->sdk->listEngagements($request);

    if ($response->listEngagementsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPageReceipts

Lists all of the engagements to contact channels that have been acknowledged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPageReceiptsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPageReceiptsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPageReceiptsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPageReceiptsRequest();
    $request->listPageReceiptsRequest = new ListPageReceiptsRequest();
    $request->listPageReceiptsRequest->maxResults = 301575;
    $request->listPageReceiptsRequest->nextToken = 'distinctio';
    $request->listPageReceiptsRequest->pageId = 'id';
    $request->maxResults = 'labore';
    $request->nextToken = 'labore';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListPageReceiptsXAmzTargetEnum::SSM_CONTACTS_LIST_PAGE_RECEIPTS;

    $response = $sdk->sdk->listPageReceipts($request);

    if ($response->listPageReceiptsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPageResolutions

Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPageResolutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPageResolutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPageResolutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPageResolutionsRequest();
    $request->listPageResolutionsRequest = new ListPageResolutionsRequest();
    $request->listPageResolutionsRequest->nextToken = 'magnam';
    $request->listPageResolutionsRequest->pageId = 'et';
    $request->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListPageResolutionsXAmzTargetEnum::SSM_CONTACTS_LIST_PAGE_RESOLUTIONS;

    $response = $sdk->sdk->listPageResolutions($request);

    if ($response->listPageResolutionsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPagesByContact

Lists the engagements to a contact's contact channels.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPagesByContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPagesByContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPagesByContactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPagesByContactRequest();
    $request->listPagesByContactRequest = new ListPagesByContactRequest();
    $request->listPagesByContactRequest->contactId = 'mollitia';
    $request->listPagesByContactRequest->maxResults = 320997;
    $request->listPagesByContactRequest->nextToken = 'eum';
    $request->maxResults = 'dolor';
    $request->nextToken = 'necessitatibus';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = ListPagesByContactXAmzTargetEnum::SSM_CONTACTS_LIST_PAGES_BY_CONTACT;

    $response = $sdk->sdk->listPagesByContact($request);

    if ($response->listPagesByContactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPagesByEngagement

Lists the engagements to contact channels that occurred by engaging a contact.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPagesByEngagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPagesByEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPagesByEngagementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPagesByEngagementRequest();
    $request->listPagesByEngagementRequest = new ListPagesByEngagementRequest();
    $request->listPagesByEngagementRequest->engagementId = 'maxime';
    $request->listPagesByEngagementRequest->maxResults = 537023;
    $request->listPagesByEngagementRequest->nextToken = 'facilis';
    $request->maxResults = 'in';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = ListPagesByEngagementXAmzTargetEnum::SSM_CONTACTS_LIST_PAGES_BY_ENGAGEMENT;

    $response = $sdk->sdk->listPagesByEngagement($request);

    if ($response->listPagesByEngagementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPreviewRotationShifts

<p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPreviewRotationShiftsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPreviewRotationShiftsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PreviewOverride;
use \OpenAPI\OpenAPI\Models\Shared\RecurrenceSettings;
use \OpenAPI\OpenAPI\Models\Shared\HandOffTime;
use \OpenAPI\OpenAPI\Models\Shared\MonthlySetting;
use \OpenAPI\OpenAPI\Models\Shared\CoverageTime;
use \OpenAPI\OpenAPI\Models\Shared\WeeklySetting;
use \OpenAPI\OpenAPI\Models\Shared\DayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListPreviewRotationShiftsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPreviewRotationShiftsRequest();
    $request->listPreviewRotationShiftsRequest = new ListPreviewRotationShiftsRequest();
    $request->listPreviewRotationShiftsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-04T19:17:08.641Z');
    $request->listPreviewRotationShiftsRequest->maxResults = 868126;
    $request->listPreviewRotationShiftsRequest->members = [
        'consequuntur',
    ];
    $request->listPreviewRotationShiftsRequest->nextToken = 'praesentium';
    $request->listPreviewRotationShiftsRequest->overrides = [
        new PreviewOverride(),
        new PreviewOverride(),
        new PreviewOverride(),
    ];
    $request->listPreviewRotationShiftsRequest->recurrence = new RecurrenceSettings();
    $request->listPreviewRotationShiftsRequest->recurrence->dailySettings = [
        new HandOffTime(),
    ];
    $request->listPreviewRotationShiftsRequest->recurrence->monthlySettings = [
        new MonthlySetting(),
    ];
    $request->listPreviewRotationShiftsRequest->recurrence->numberOfOnCalls = 779051;
    $request->listPreviewRotationShiftsRequest->recurrence->recurrenceMultiplier = 848009;
    $request->listPreviewRotationShiftsRequest->recurrence->shiftCoverages = [
        'maxime' => [
            new CoverageTime(),
            new CoverageTime(),
        ],
        'excepturi' => [
            new CoverageTime(),
        ],
        'ea' => [
            new CoverageTime(),
        ],
        'ab' => [
            new CoverageTime(),
            new CoverageTime(),
            new CoverageTime(),
            new CoverageTime(),
        ],
    ];
    $request->listPreviewRotationShiftsRequest->recurrence->weeklySettings = [
        new WeeklySetting(),
        new WeeklySetting(),
        new WeeklySetting(),
    ];
    $request->listPreviewRotationShiftsRequest->rotationStartTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T10:57:57.489Z');
    $request->listPreviewRotationShiftsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-12T10:47:34.158Z');
    $request->listPreviewRotationShiftsRequest->timeZoneId = 'eaque';
    $request->maxResults = 'pariatur';
    $request->nextToken = 'nemo';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = ListPreviewRotationShiftsXAmzTargetEnum::SSM_CONTACTS_LIST_PREVIEW_ROTATION_SHIFTS;

    $response = $sdk->sdk->listPreviewRotationShifts($request);

    if ($response->listPreviewRotationShiftsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRotationOverrides

Retrieves a list of overrides currently specified for an on-call rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRotationOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRotationOverridesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRotationOverridesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRotationOverridesRequest();
    $request->listRotationOverridesRequest = new ListRotationOverridesRequest();
    $request->listRotationOverridesRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-23T15:50:52.666Z');
    $request->listRotationOverridesRequest->maxResults = 749999;
    $request->listRotationOverridesRequest->nextToken = 'dolores';
    $request->listRotationOverridesRequest->rotationId = 'quis';
    $request->listRotationOverridesRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-08T15:06:08.615Z');
    $request->maxResults = 'eaque';
    $request->nextToken = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = ListRotationOverridesXAmzTargetEnum::SSM_CONTACTS_LIST_ROTATION_OVERRIDES;

    $response = $sdk->sdk->listRotationOverrides($request);

    if ($response->listRotationOverridesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRotationShifts

Returns a list of shifts generated by an existing rotation in the system.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRotationShiftsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRotationShiftsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRotationShiftsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRotationShiftsRequest();
    $request->listRotationShiftsRequest = new ListRotationShiftsRequest();
    $request->listRotationShiftsRequest->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-18T20:09:27.741Z');
    $request->listRotationShiftsRequest->maxResults = 944120;
    $request->listRotationShiftsRequest->nextToken = 'recusandae';
    $request->listRotationShiftsRequest->rotationId = 'omnis';
    $request->listRotationShiftsRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-22T10:35:49.400Z');
    $request->maxResults = 'voluptatem';
    $request->nextToken = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = ListRotationShiftsXAmzTargetEnum::SSM_CONTACTS_LIST_ROTATION_SHIFTS;

    $response = $sdk->sdk->listRotationShifts($request);

    if ($response->listRotationShiftsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRotations

Retrieves a list of on-call rotations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRotationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRotationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRotationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRotationsRequest();
    $request->listRotationsRequest = new ListRotationsRequest();
    $request->listRotationsRequest->maxResults = 992397;
    $request->listRotationsRequest->nextToken = 'earum';
    $request->listRotationsRequest->rotationNamePrefix = 'modi';
    $request->maxResults = 'iste';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ListRotationsXAmzTargetEnum::SSM_CONTACTS_LIST_ROTATIONS;

    $response = $sdk->sdk->listRotations($request);

    if ($response->listRotationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags of an escalation plan or contact.

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
    $request->listTagsForResourceRequest->resourceARN = 'quos';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::SSM_CONTACTS_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putContactPolicy

Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutContactPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutContactPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutContactPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutContactPolicyRequest();
    $request->putContactPolicyRequest = new PutContactPolicyRequest();
    $request->putContactPolicyRequest->contactArn = 'excepturi';
    $request->putContactPolicyRequest->policy = 'cum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = PutContactPolicyXAmzTargetEnum::SSM_CONTACTS_PUT_CONTACT_POLICY;

    $response = $sdk->sdk->putContactPolicy($request);

    if ($response->putContactPolicyResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendActivationCode

Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendActivationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendActivationCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\SendActivationCodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendActivationCodeRequest();
    $request->sendActivationCodeRequest = new SendActivationCodeRequest();
    $request->sendActivationCodeRequest->contactChannelId = 'ipsa';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = SendActivationCodeXAmzTargetEnum::SSM_CONTACTS_SEND_ACTIVATION_CODE;

    $response = $sdk->sdk->sendActivationCode($request);

    if ($response->sendActivationCodeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startEngagement

Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartEngagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartEngagementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartEngagementRequest();
    $request->startEngagementRequest = new StartEngagementRequest();
    $request->startEngagementRequest->contactId = 'voluptas';
    $request->startEngagementRequest->content = 'natus';
    $request->startEngagementRequest->idempotencyToken = 'eos';
    $request->startEngagementRequest->incidentId = 'atque';
    $request->startEngagementRequest->publicContent = 'sit';
    $request->startEngagementRequest->publicSubject = 'fugiat';
    $request->startEngagementRequest->sender = 'ab';
    $request->startEngagementRequest->subject = 'soluta';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = StartEngagementXAmzTargetEnum::SSM_CONTACTS_START_ENGAGEMENT;

    $response = $sdk->sdk->startEngagement($request);

    if ($response->startEngagementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopEngagement

Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopEngagementRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopEngagementRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopEngagementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopEngagementRequest();
    $request->stopEngagementRequest = new StopEngagementRequest();
    $request->stopEngagementRequest->engagementId = 'distinctio';
    $request->stopEngagementRequest->reason = 'asperiores';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = StopEngagementXAmzTargetEnum::SSM_CONTACTS_STOP_ENGAGEMENT;

    $response = $sdk->sdk->stopEngagement($request);

    if ($response->stopEngagementResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.

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
    $request->tagResourceRequest->resourceARN = 'perferendis';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::SSM_CONTACTS_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the specified resource.

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
    $request->untagResourceRequest->resourceARN = 'minima';
    $request->untagResourceRequest->tagKeys = [
        'totam',
        'similique',
        'alias',
        'at',
    ];
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::SSM_CONTACTS_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContact

Updates the contact or escalation plan specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContactRequest;
use \OpenAPI\OpenAPI\Models\Shared\Plan;
use \OpenAPI\OpenAPI\Models\Shared\Stage;
use \OpenAPI\OpenAPI\Models\Shared\Target;
use \OpenAPI\OpenAPI\Models\Shared\ChannelTargetInfo;
use \OpenAPI\OpenAPI\Models\Shared\ContactTargetInfo;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactRequest();
    $request->updateContactRequest = new UpdateContactRequest();
    $request->updateContactRequest->contactId = 'a';
    $request->updateContactRequest->displayName = 'esse';
    $request->updateContactRequest->plan = new Plan();
    $request->updateContactRequest->plan->rotationIds = [
        'iusto',
        'ipsum',
        'quisquam',
    ];
    $request->updateContactRequest->plan->stages = [
        new Stage(),
        new Stage(),
        new Stage(),
        new Stage(),
    ];
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = UpdateContactXAmzTargetEnum::SSM_CONTACTS_UPDATE_CONTACT;

    $response = $sdk->sdk->updateContact($request);

    if ($response->updateContactResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContactChannel

Updates a contact's contact channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateContactChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContactChannelAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContactChannelXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContactChannelRequest();
    $request->updateContactChannelRequest = new UpdateContactChannelRequest();
    $request->updateContactChannelRequest->contactChannelId = 'totam';
    $request->updateContactChannelRequest->deliveryAddress = new ContactChannelAddress();
    $request->updateContactChannelRequest->deliveryAddress->simpleAddress = 'nihil';
    $request->updateContactChannelRequest->name = 'Mamie Durgan';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = UpdateContactChannelXAmzTargetEnum::SSM_CONTACTS_UPDATE_CONTACT_CHANNEL;

    $response = $sdk->sdk->updateContactChannel($request);

    if ($response->updateContactChannelResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRotation

Updates the information specified for an on-call rotation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRotationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RecurrenceSettings;
use \OpenAPI\OpenAPI\Models\Shared\HandOffTime;
use \OpenAPI\OpenAPI\Models\Shared\MonthlySetting;
use \OpenAPI\OpenAPI\Models\Shared\CoverageTime;
use \OpenAPI\OpenAPI\Models\Shared\WeeklySetting;
use \OpenAPI\OpenAPI\Models\Shared\DayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRotationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRotationRequest();
    $request->updateRotationRequest = new UpdateRotationRequest();
    $request->updateRotationRequest->contactIds = [
        'maxime',
        'pariatur',
        'soluta',
    ];
    $request->updateRotationRequest->recurrence = new RecurrenceSettings();
    $request->updateRotationRequest->recurrence->dailySettings = [
        new HandOffTime(),
    ];
    $request->updateRotationRequest->recurrence->monthlySettings = [
        new MonthlySetting(),
        new MonthlySetting(),
        new MonthlySetting(),
    ];
    $request->updateRotationRequest->recurrence->numberOfOnCalls = 517379;
    $request->updateRotationRequest->recurrence->recurrenceMultiplier = 276894;
    $request->updateRotationRequest->recurrence->shiftCoverages = [
        'dolores' => [
            new CoverageTime(),
            new CoverageTime(),
            new CoverageTime(),
        ],
    ];
    $request->updateRotationRequest->recurrence->weeklySettings = [
        new WeeklySetting(),
        new WeeklySetting(),
        new WeeklySetting(),
    ];
    $request->updateRotationRequest->rotationId = 'aliquid';
    $request->updateRotationRequest->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-08T14:54:33.206Z');
    $request->updateRotationRequest->timeZoneId = 'temporibus';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = UpdateRotationXAmzTargetEnum::SSM_CONTACTS_UPDATE_ROTATION;

    $response = $sdk->sdk->updateRotation($request);

    if ($response->updateRotationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
