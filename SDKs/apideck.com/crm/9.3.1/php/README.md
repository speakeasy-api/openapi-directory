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
use \OpenAPI\OpenAPI\Models\Operations\ActivitiesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActivityInput;
use \OpenAPI\OpenAPI\Models\Shared\ActivityAttendeeInput;
use \OpenAPI\OpenAPI\Models\Shared\ActivityAttendeeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActivityShowAsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ActivitiesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivitiesAddRequest();
    $request->activityInput = new ActivityInput();
    $request->activityInput->accountId = '12345';
    $request->activityInput->activityDate = '2021-05-01';
    $request->activityInput->activityDatetime = '2021-05-01T12:00:00.000Z';
    $request->activityInput->allDayEvent = false;
    $request->activityInput->archived = false;
    $request->activityInput->assetId = '12345';
    $request->activityInput->attendees = [
        new ActivityAttendeeInput(),
        new ActivityAttendeeInput(),
        new ActivityAttendeeInput(),
    ];
    $request->activityInput->campaignId = '12345';
    $request->activityInput->caseId = '12345';
    $request->activityInput->child = false;
    $request->activityInput->companyId = '12345';
    $request->activityInput->contactId = '12345';
    $request->activityInput->contractId = '12345';
    $request->activityInput->customFields = [
        new CustomField(),
        new CustomField(),
        new CustomField(),
    ];
    $request->activityInput->customObjectId = '12345';
    $request->activityInput->deleted = false;
    $request->activityInput->description = 'More info about the meeting';
    $request->activityInput->done = false;
    $request->activityInput->durationSeconds = 1800;
    $request->activityInput->endDate = '2021-05-01';
    $request->activityInput->endDatetime = '2021-05-01T12:30:00.000Z';
    $request->activityInput->eventSubType = 'debrief';
    $request->activityInput->groupEvent = true;
    $request->activityInput->groupEventType = 'Proposed';
    $request->activityInput->leadId = '12345';
    $request->activityInput->location = 'Space';
    $request->activityInput->locationAddress = new Address();
    $request->activityInput->locationAddress->city = 'San Francisco';
    $request->activityInput->locationAddress->contactName = 'Elon Musk';
    $request->activityInput->locationAddress->country = 'US';
    $request->activityInput->locationAddress->county = 'Santa Clara';
    $request->activityInput->locationAddress->email = 'elon@musk.com';
    $request->activityInput->locationAddress->fax = '122-111-1111';
    $request->activityInput->locationAddress->id = '123';
    $request->activityInput->locationAddress->latitude = '40.759211';
    $request->activityInput->locationAddress->line1 = 'Main street';
    $request->activityInput->locationAddress->line2 = 'apt #';
    $request->activityInput->locationAddress->line3 = 'Suite #';
    $request->activityInput->locationAddress->line4 = 'delivery instructions';
    $request->activityInput->locationAddress->longitude = '-73.984638';
    $request->activityInput->locationAddress->name = 'HQ US';
    $request->activityInput->locationAddress->phoneNumber = '111-111-1111';
    $request->activityInput->locationAddress->postalCode = '94104';
    $request->activityInput->locationAddress->rowVersion = '1-12345';
    $request->activityInput->locationAddress->salutation = 'Mr';
    $request->activityInput->locationAddress->state = 'CA';
    $request->activityInput->locationAddress->streetNumber = '25';
    $request->activityInput->locationAddress->string = '25 Spring Street, Blackburn, VIC 3130';
    $request->activityInput->locationAddress->type = AddressTypeEnum::PRIMARY;
    $request->activityInput->locationAddress->website = 'https://elonmusk.com';
    $request->activityInput->note = 'An internal note about the meeting';
    $request->activityInput->opportunityId = '12345';
    $request->activityInput->ownerId = '12345';
    $request->activityInput->private = true;
    $request->activityInput->productId = '12345';
    $request->activityInput->recurrent = false;
    $request->activityInput->reminderDatetime = '2021-05-01T17:00:00.000Z';
    $request->activityInput->reminderSet = false;
    $request->activityInput->showAs = ActivityShowAsEnum::BUSY;
    $request->activityInput->solutionId = '12345';
    $request->activityInput->startDatetime = '2021-05-01T12:00:00.000Z';
    $request->activityInput->title = 'Meeting';
    $request->activityInput->type = ActivityTypeEnum::MEETING;
    $request->activityInput->userId = '12345';
    $request->activityInput->videoConferenceId = 'zoom:88120759396';
    $request->activityInput->videoConferenceUrl = 'https://us02web.zoom.us/j/88120759396';
    $request->raw = false;
    $request->xApideckAppId = 'distinctio';
    $request->xApideckConsumerId = 'quibusdam';
    $request->xApideckServiceId = 'unde';

    $requestSecurity = new ActivitiesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->activities->activitiesAdd($request, $requestSecurity);

    if ($response->createActivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [activities](docs/activities/README.md)

* [activitiesAdd](docs/activities/README.md#activitiesadd) - Create activity
* [activitiesAll](docs/activities/README.md#activitiesall) - List activities
* [activitiesDelete](docs/activities/README.md#activitiesdelete) - Delete activity
* [activitiesOne](docs/activities/README.md#activitiesone) - Get activity
* [activitiesUpdate](docs/activities/README.md#activitiesupdate) - Update activity

### [companies](docs/companies/README.md)

* [companiesAdd](docs/companies/README.md#companiesadd) - Create company
* [companiesAll](docs/companies/README.md#companiesall) - List companies
* [companiesDelete](docs/companies/README.md#companiesdelete) - Delete company
* [companiesOne](docs/companies/README.md#companiesone) - Get company
* [companiesUpdate](docs/companies/README.md#companiesupdate) - Update company

### [contacts](docs/contacts/README.md)

* [contactsAdd](docs/contacts/README.md#contactsadd) - Create contact
* [contactsAll](docs/contacts/README.md#contactsall) - List contacts
* [contactsDelete](docs/contacts/README.md#contactsdelete) - Delete contact
* [contactsOne](docs/contacts/README.md#contactsone) - Get contact
* [contactsUpdate](docs/contacts/README.md#contactsupdate) - Update contact

### [leads](docs/leads/README.md)

* [leadsAdd](docs/leads/README.md#leadsadd) - Create lead
* [leadsAll](docs/leads/README.md#leadsall) - List leads
* [leadsDelete](docs/leads/README.md#leadsdelete) - Delete lead
* [leadsOne](docs/leads/README.md#leadsone) - Get lead
* [leadsUpdate](docs/leads/README.md#leadsupdate) - Update lead

### [notes](docs/notes/README.md)

* [notesAdd](docs/notes/README.md#notesadd) - Create note
* [notesAll](docs/notes/README.md#notesall) - List notes
* [notesDelete](docs/notes/README.md#notesdelete) - Delete note
* [notesOne](docs/notes/README.md#notesone) - Get note
* [notesUpdate](docs/notes/README.md#notesupdate) - Update note

### [opportunities](docs/opportunities/README.md)

* [opportunitiesAdd](docs/opportunities/README.md#opportunitiesadd) - Create opportunity
* [opportunitiesAll](docs/opportunities/README.md#opportunitiesall) - List opportunities
* [opportunitiesDelete](docs/opportunities/README.md#opportunitiesdelete) - Delete opportunity
* [opportunitiesOne](docs/opportunities/README.md#opportunitiesone) - Get opportunity
* [opportunitiesUpdate](docs/opportunities/README.md#opportunitiesupdate) - Update opportunity

### [pipelines](docs/pipelines/README.md)

* [pipelinesAdd](docs/pipelines/README.md#pipelinesadd) - Create pipeline
* [pipelinesAll](docs/pipelines/README.md#pipelinesall) - List pipelines
* [pipelinesDelete](docs/pipelines/README.md#pipelinesdelete) - Delete pipeline
* [pipelinesOne](docs/pipelines/README.md#pipelinesone) - Get pipeline
* [pipelinesUpdate](docs/pipelines/README.md#pipelinesupdate) - Update pipeline

### [users](docs/users/README.md)

* [usersAdd](docs/users/README.md#usersadd) - Create user
* [usersAll](docs/users/README.md#usersall) - List users
* [usersDelete](docs/users/README.md#usersdelete) - Delete user
* [usersOne](docs/users/README.md#usersone) - Get user
* [usersUpdate](docs/users/README.md#usersupdate) - Update user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
