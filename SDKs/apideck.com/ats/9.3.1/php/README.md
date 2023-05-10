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
    ];
    $request->applicantInput->anonymized = true;
    $request->applicantInput->applications = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->applicantInput->archived = false;
    $request->applicantInput->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->applicantInput->confidential = false;
    $request->applicantInput->coordinatorId = '12345';
    $request->applicantInput->coverLetter = 'I submit this application to express my sincere interest in the API developer position. In the previous role, I was responsible for leadership and ...';
    $request->applicantInput->customFields = [
        new CustomField(),
        new CustomField(),
        new CustomField(),
        new CustomField(),
    ];
    $request->applicantInput->deleted = true;
    $request->applicantInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->applicantInput->firstName = 'Elon';
    $request->applicantInput->followers = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
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
    ];
    $request->applicantInput->photoUrl = 'https://unavatar.io/elon-musk';
    $request->applicantInput->positionId = '123';
    $request->applicantInput->recordUrl = 'https://app.intercom.io/contacts/12345';
    $request->applicantInput->recruiterId = '12345';
    $request->applicantInput->socialLinks = [
        new ApplicantSocialLinks(),
        new ApplicantSocialLinks(),
    ];
    $request->applicantInput->sources = [
        'ipsa',
        'delectus',
        'tempora',
        'suscipit',
    ];
    $request->applicantInput->stageId = '12345';
    $request->applicantInput->tags = [
        'minus',
        'placeat',
    ];
    $request->applicantInput->title = 'CEO';
    $request->applicantInput->websites = [
        new ApplicantWebsites(),
        new ApplicantWebsites(),
        new ApplicantWebsites(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'iusto';
    $request->xApideckConsumerId = 'excepturi';
    $request->xApideckServiceId = 'nisi';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [applicants](docs/applicants/README.md)

* [applicantsAdd](docs/applicants/README.md#applicantsadd) - Create applicant
* [applicantsAll](docs/applicants/README.md#applicantsall) - List applicants
* [applicantsOne](docs/applicants/README.md#applicantsone) - Get applicant

### [jobs](docs/jobs/README.md)

* [jobsAll](docs/jobs/README.md#jobsall) - List Jobs
* [jobsOne](docs/jobs/README.md#jobsone) - Get Job
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
