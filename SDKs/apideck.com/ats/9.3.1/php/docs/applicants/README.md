# applicants

### Available Operations

* [applicantsAdd](#applicantsadd) - Create applicant
* [applicantsAll](#applicantsall) - List applicants
* [applicantsOne](#applicantsone) - Get applicant

## applicantsAdd

Create applicant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApplicantsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplicantInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicantSocialLinks;
use \OpenAPI\OpenAPI\Models\Shared\ApplicantWebsites;
use \OpenAPI\OpenAPI\Models\Shared\ApplicantWebsitesTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ApplicantsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicantsAddRequest();
    $request->applicantInput = new ApplicantInput();
    $request->applicantInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->applicantInput->anonymized = true;
    $request->applicantInput->applications = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->applicantInput->archived = false;
    $request->applicantInput->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->applicantInput->confidential = false;
    $request->applicantInput->coordinatorId = '12345';
    $request->applicantInput->coverLetter = 'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...';
    $request->applicantInput->customFields = [
        new CustomField(),
    ];
    $request->applicantInput->deleted = true;
    $request->applicantInput->emails = [
        new Email(),
        new Email(),
    ];
    $request->applicantInput->firstName = 'Elon';
    $request->applicantInput->followers = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->applicantInput->headline = 'PepsiCo, Inc, Central Perk';
    $request->applicantInput->initials = 'EM';
    $request->applicantInput->lastName = 'Musk';
    $request->applicantInput->middleName = 'D.';
    $request->applicantInput->name = 'Elon Musk';
    $request->applicantInput->ownerId = '54321';
    $request->applicantInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->applicantInput->photoUrl = 'https://unavatar.io/elon-musk';
    $request->applicantInput->positionId = '123';
    $request->applicantInput->recordUrl = 'https://app.intercom.io/contacts/12345';
    $request->applicantInput->recruiterId = '12345';
    $request->applicantInput->socialLinks = [
        new ApplicantSocialLinks(),
        new ApplicantSocialLinks(),
        new ApplicantSocialLinks(),
        new ApplicantSocialLinks(),
    ];
    $request->applicantInput->sources = [
        'quod',
        'quod',
    ];
    $request->applicantInput->stageId = '12345';
    $request->applicantInput->tags = [
        'totam',
        'porro',
    ];
    $request->applicantInput->title = 'CEO';
    $request->applicantInput->websites = [
        new ApplicantWebsites(),
        new ApplicantWebsites(),
        new ApplicantWebsites(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'dicta';
    $request->xApideckConsumerId = 'nam';
    $request->xApideckServiceId = 'officia';

    $requestSecurity = new ApplicantsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->applicants->applicantsAdd($request, $requestSecurity);

    if ($response->createApplicantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## applicantsAll

List applicants

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApplicantsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobsFilter;
use \OpenAPI\OpenAPI\Models\Operations\ApplicantsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicantsAllRequest();
    $request->cursor = 'occaecati';
    $request->fields = 'fugit';
    $request->filter = new JobsFilter();
    $request->filter->jobId = '1234';
    $request->limit = 537373;
    $request->raw = false;
    $request->xApideckAppId = 'hic';
    $request->xApideckConsumerId = 'optio';
    $request->xApideckServiceId = 'totam';

    $requestSecurity = new ApplicantsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->applicants->applicantsAll($request, $requestSecurity);

    if ($response->getApplicantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## applicantsOne

Get applicant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApplicantsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApplicantsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplicantsOneRequest();
    $request->fields = 'beatae';
    $request->id = '6742cb73-9205-4929-b96f-ea7596eb10fa';
    $request->raw = false;
    $request->xApideckAppId = 'mollitia';
    $request->xApideckConsumerId = 'laborum';
    $request->xApideckServiceId = 'dolores';

    $requestSecurity = new ApplicantsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->applicants->applicantsOne($request, $requestSecurity);

    if ($response->getApplicantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
