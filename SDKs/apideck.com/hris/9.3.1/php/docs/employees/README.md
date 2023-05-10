# employees

### Available Operations

* [employeesAdd](#employeesadd) - Create Employee
* [employeesAll](#employeesall) - List Employees
* [employeesDelete](#employeesdelete) - Delete Employee
* [employeesOne](#employeesone) - Get Employee
* [employeesUpdate](#employeesupdate) - Update Employee

## employeesAdd

Create Employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCompensationsInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCompensationsFlsaStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmploymentRole;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmploymentRoleEmploymentSubTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmploymentRoleEmploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeJobsInput;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeLeavingReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeManagerInput;
use \OpenAPI\OpenAPI\Models\Shared\EmployeePersonInput;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeSocialLinks;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeTeam;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeesAddRequest();
    $request->employeeInput = new EmployeeInput();
    $request->employeeInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->employeeInput->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->companyId = '23456';
    $request->employeeInput->companyName = 'SpaceX';
    $request->employeeInput->compensations = [
        new EmployeeCompensationsInput(),
        new EmployeeCompensationsInput(),
        new EmployeeCompensationsInput(),
    ];
    $request->employeeInput->countryOfBirth = 'US';
    $request->employeeInput->customFields = [
        new CustomField(),
        new CustomField(),
    ];
    $request->employeeInput->deceasedOn = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->deleted = true;
    $request->employeeInput->department = 'R&D';
    $request->employeeInput->departmentId = '12345';
    $request->employeeInput->departmentName = '12345';
    $request->employeeInput->description = 'A description';
    $request->employeeInput->dietaryPreference = 'Veggie';
    $request->employeeInput->directReports = [
        'suscipit',
        'natus',
    ];
    $request->employeeInput->displayName = 'Technoking';
    $request->employeeInput->division = 'Europe';
    $request->employeeInput->divisionId = '12345';
    $request->employeeInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->employeeInput->employeeNumber = '123456-AB';
    $request->employeeInput->employmentEndDate = '2028-10-26';
    $request->employeeInput->employmentRole = new EmployeeEmploymentRole();
    $request->employeeInput->employmentRole->subType = EmployeeEmploymentRoleEmploymentSubTypeEnum::PART_TIME;
    $request->employeeInput->employmentRole->type = EmployeeEmploymentRoleEmploymentTypeEnum::OTHER;
    $request->employeeInput->employmentStartDate = '2021-10-26';
    $request->employeeInput->employmentStatus = EmploymentStatusEnum::ACTIVE;
    $request->employeeInput->firstName = 'Elon';
    $request->employeeInput->foodAllergies = [
        'architecto',
    ];
    $request->employeeInput->gender = GenderEnum::MALE;
    $request->employeeInput->initials = 'EM';
    $request->employeeInput->jobs = [
        new EmployeeJobsInput(),
        new EmployeeJobsInput(),
    ];
    $request->employeeInput->languages = [
        'EN',
    ];
    $request->employeeInput->lastName = 'Musk';
    $request->employeeInput->leavingReason = EmployeeLeavingReasonEnum::RESIGNED;
    $request->employeeInput->manager = new EmployeeManagerInput();
    $request->employeeInput->manager->email = 'elon@musk.com';
    $request->employeeInput->manager->employmentStatus = EmploymentStatusEnum::ACTIVE;
    $request->employeeInput->manager->firstName = 'Elon';
    $request->employeeInput->manager->lastName = 'Musk';
    $request->employeeInput->manager->name = 'Elon Musk';
    $request->employeeInput->maritalStatus = 'married';
    $request->employeeInput->middleName = 'D.';
    $request->employeeInput->nationalities = [
        'US',
        'US',
        'US',
    ];
    $request->employeeInput->partner = new EmployeePersonInput();
    $request->employeeInput->partner->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->partner->deceasedOn = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->partner->firstName = 'Elon';
    $request->employeeInput->partner->gender = GenderEnum::MALE;
    $request->employeeInput->partner->initials = 'EM';
    $request->employeeInput->partner->lastName = 'Musk';
    $request->employeeInput->partner->middleName = 'D.';
    $request->employeeInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->employeeInput->photoUrl = 'https://unavatar.io/elon-musk';
    $request->employeeInput->preferredLanguage = 'EN';
    $request->employeeInput->preferredName = 'Elon Musk';
    $request->employeeInput->pronouns = 'she,her';
    $request->employeeInput->recordUrl = 'https://app.intercom.io/contacts/12345';
    $request->employeeInput->rowVersion = '1-12345';
    $request->employeeInput->salutation = 'Mr';
    $request->employeeInput->socialLinks = [
        new EmployeeSocialLinks(),
        new EmployeeSocialLinks(),
        new EmployeeSocialLinks(),
    ];
    $request->employeeInput->socialSecurityNumber = '123456789';
    $request->employeeInput->source = 'lever';
    $request->employeeInput->sourceId = '12345';
    $request->employeeInput->tags = [
        'sint',
        'accusantium',
        'mollitia',
    ];
    $request->employeeInput->taxCode = '1111';
    $request->employeeInput->taxId = '234-32-0000';
    $request->employeeInput->team = new EmployeeTeam();
    $request->employeeInput->team->id = '1234';
    $request->employeeInput->team->name = 'Full Stack Engineers';
    $request->employeeInput->timezone = 'Europe/London';
    $request->employeeInput->title = 'CEO';
    $request->employeeInput->worksRemote = true;
    $request->raw = false;
    $request->xApideckAppId = 'reiciendis';
    $request->xApideckConsumerId = 'mollitia';
    $request->xApideckServiceId = 'ad';

    $requestSecurity = new EmployeesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employees->employeesAdd($request, $requestSecurity);

    if ($response->createEmployeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## employeesAll

List Employees

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmployeesFilter;
use \OpenAPI\OpenAPI\Models\Shared\EmployeesFilterEmploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeesSort;
use \OpenAPI\OpenAPI\Models\Shared\EmployeesSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeesAllRequest();
    $request->cursor = 'eum';
    $request->fields = 'dolor';
    $request->filter = new EmployeesFilter();
    $request->filter->companyId = '1234';
    $request->filter->departmentId = '1234';
    $request->filter->email = 'elon@tesla.com';
    $request->filter->employeeNumber = '123456-AB';
    $request->filter->employmentStatus = EmployeesFilterEmploymentStatusEnum::ACTIVE;
    $request->filter->firstName = 'Elon';
    $request->filter->lastName = 'Musk';
    $request->filter->managerId = '1234';
    $request->filter->title = 'Manager';
    $request->limit = 896547;
    $request->raw = false;
    $request->sort = new EmployeesSort();
    $request->sort->by = EmployeesSortByEnum::CREATED_AT;
    $request->sort->direction = SortDirectionEnum::ASC;
    $request->xApideckAppId = 'nemo';
    $request->xApideckConsumerId = 'quasi';
    $request->xApideckServiceId = 'iure';

    $requestSecurity = new EmployeesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employees->employeesAll($request, $requestSecurity);

    if ($response->getEmployeesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## employeesDelete

Delete Employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeesDeleteRequest();
    $request->id = 'fe4c8b71-1e5b-47fd-aed0-28921cddc692';
    $request->raw = false;
    $request->xApideckAppId = 'ea';
    $request->xApideckConsumerId = 'accusantium';
    $request->xApideckServiceId = 'ab';

    $requestSecurity = new EmployeesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employees->employeesDelete($request, $requestSecurity);

    if ($response->deleteEmployeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## employeesOne

Get Employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeesOneRequest();
    $request->fields = 'maiores';
    $request->id = 'b576b0d5-f0d3-40c5-bbb2-587053202c73';
    $request->raw = false;
    $request->xApideckAppId = 'vero';
    $request->xApideckConsumerId = 'nostrum';
    $request->xApideckServiceId = 'hic';

    $requestSecurity = new EmployeesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employees->employeesOne($request, $requestSecurity);

    if ($response->getEmployeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## employeesUpdate

Update Employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCompensationsInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeCompensationsFlsaStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmploymentRole;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmploymentRoleEmploymentSubTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeEmploymentRoleEmploymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmploymentStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeJobsInput;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeLeavingReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeManagerInput;
use \OpenAPI\OpenAPI\Models\Shared\EmployeePersonInput;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeSocialLinks;
use \OpenAPI\OpenAPI\Models\Shared\EmployeeTeam;
use \OpenAPI\OpenAPI\Models\Operations\EmployeesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmployeesUpdateRequest();
    $request->employeeInput = new EmployeeInput();
    $request->employeeInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->employeeInput->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->companyId = '23456';
    $request->employeeInput->companyName = 'SpaceX';
    $request->employeeInput->compensations = [
        new EmployeeCompensationsInput(),
        new EmployeeCompensationsInput(),
        new EmployeeCompensationsInput(),
    ];
    $request->employeeInput->countryOfBirth = 'US';
    $request->employeeInput->customFields = [
        new CustomField(),
        new CustomField(),
        new CustomField(),
    ];
    $request->employeeInput->deceasedOn = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->deleted = true;
    $request->employeeInput->department = 'R&D';
    $request->employeeInput->departmentId = '12345';
    $request->employeeInput->departmentName = '12345';
    $request->employeeInput->description = 'A description';
    $request->employeeInput->dietaryPreference = 'Veggie';
    $request->employeeInput->directReports = [
        'voluptatem',
        'porro',
        'consequuntur',
    ];
    $request->employeeInput->displayName = 'Technoking';
    $request->employeeInput->division = 'Europe';
    $request->employeeInput->divisionId = '12345';
    $request->employeeInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->employeeInput->employeeNumber = '123456-AB';
    $request->employeeInput->employmentEndDate = '2028-10-26';
    $request->employeeInput->employmentRole = new EmployeeEmploymentRole();
    $request->employeeInput->employmentRole->subType = EmployeeEmploymentRoleEmploymentSubTypeEnum::PART_TIME;
    $request->employeeInput->employmentRole->type = EmployeeEmploymentRoleEmploymentTypeEnum::CONTRACTOR;
    $request->employeeInput->employmentStartDate = '2021-10-26';
    $request->employeeInput->employmentStatus = EmploymentStatusEnum::ACTIVE;
    $request->employeeInput->firstName = 'Elon';
    $request->employeeInput->foodAllergies = [
        'rerum',
        'adipisci',
        'asperiores',
    ];
    $request->employeeInput->gender = GenderEnum::MALE;
    $request->employeeInput->initials = 'EM';
    $request->employeeInput->jobs = [
        new EmployeeJobsInput(),
        new EmployeeJobsInput(),
        new EmployeeJobsInput(),
        new EmployeeJobsInput(),
    ];
    $request->employeeInput->languages = [
        'EN',
        'EN',
    ];
    $request->employeeInput->lastName = 'Musk';
    $request->employeeInput->leavingReason = EmployeeLeavingReasonEnum::RESIGNED;
    $request->employeeInput->manager = new EmployeeManagerInput();
    $request->employeeInput->manager->email = 'elon@musk.com';
    $request->employeeInput->manager->employmentStatus = EmploymentStatusEnum::ACTIVE;
    $request->employeeInput->manager->firstName = 'Elon';
    $request->employeeInput->manager->lastName = 'Musk';
    $request->employeeInput->manager->name = 'Elon Musk';
    $request->employeeInput->maritalStatus = 'married';
    $request->employeeInput->middleName = 'D.';
    $request->employeeInput->nationalities = [
        'US',
        'US',
        'US',
    ];
    $request->employeeInput->partner = new EmployeePersonInput();
    $request->employeeInput->partner->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->partner->deceasedOn = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->employeeInput->partner->firstName = 'Elon';
    $request->employeeInput->partner->gender = GenderEnum::MALE;
    $request->employeeInput->partner->initials = 'EM';
    $request->employeeInput->partner->lastName = 'Musk';
    $request->employeeInput->partner->middleName = 'D.';
    $request->employeeInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->employeeInput->photoUrl = 'https://unavatar.io/elon-musk';
    $request->employeeInput->preferredLanguage = 'EN';
    $request->employeeInput->preferredName = 'Elon Musk';
    $request->employeeInput->pronouns = 'she,her';
    $request->employeeInput->recordUrl = 'https://app.intercom.io/contacts/12345';
    $request->employeeInput->rowVersion = '1-12345';
    $request->employeeInput->salutation = 'Mr';
    $request->employeeInput->socialLinks = [
        new EmployeeSocialLinks(),
        new EmployeeSocialLinks(),
        new EmployeeSocialLinks(),
    ];
    $request->employeeInput->socialSecurityNumber = '123456789';
    $request->employeeInput->source = 'lever';
    $request->employeeInput->sourceId = '12345';
    $request->employeeInput->tags = [
        'provident',
        'nobis',
        'libero',
        'delectus',
    ];
    $request->employeeInput->taxCode = '1111';
    $request->employeeInput->taxId = '234-32-0000';
    $request->employeeInput->team = new EmployeeTeam();
    $request->employeeInput->team->id = '1234';
    $request->employeeInput->team->name = 'Full Stack Engineers';
    $request->employeeInput->timezone = 'Europe/London';
    $request->employeeInput->title = 'CEO';
    $request->employeeInput->worksRemote = true;
    $request->id = '48633323-f9b7-47f3-a410-0674ebf69280';
    $request->raw = false;
    $request->xApideckAppId = 'fugiat';
    $request->xApideckConsumerId = 'ab';
    $request->xApideckServiceId = 'soluta';

    $requestSecurity = new EmployeesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->employees->employeesUpdate($request, $requestSecurity);

    if ($response->updateEmployeeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
