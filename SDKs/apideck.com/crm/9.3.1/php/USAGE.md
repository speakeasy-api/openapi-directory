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