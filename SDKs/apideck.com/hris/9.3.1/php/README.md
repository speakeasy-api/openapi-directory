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
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\HrisCompanyInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HrisCompanyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesAddRequest();
    $request->hrisCompanyInput = new HrisCompanyInput();
    $request->hrisCompanyInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->hrisCompanyInput->companyNumber = '123456-AB';
    $request->hrisCompanyInput->debtorId = '12345';
    $request->hrisCompanyInput->displayName = 'SpaceX';
    $request->hrisCompanyInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->hrisCompanyInput->legalName = 'SpaceX';
    $request->hrisCompanyInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->hrisCompanyInput->status = HrisCompanyStatusEnum::ACTIVE;
    $request->hrisCompanyInput->subdomain = 'company';
    $request->hrisCompanyInput->websites = [
        new Website(),
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'unde';
    $request->xApideckConsumerId = 'nulla';
    $request->xApideckServiceId = 'corrupti';

    $requestSecurity = new CompaniesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesAdd($request, $requestSecurity);

    if ($response->createHrisCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [companies](docs/companies/README.md)

* [companiesAdd](docs/companies/README.md#companiesadd) - Create Company
* [companiesAll](docs/companies/README.md#companiesall) - List Companies
* [companiesDelete](docs/companies/README.md#companiesdelete) - Delete Company
* [companiesOne](docs/companies/README.md#companiesone) - Get Company
* [companiesUpdate](docs/companies/README.md#companiesupdate) - Update Company

### [departments](docs/departments/README.md)

* [departmentsAdd](docs/departments/README.md#departmentsadd) - Create Department
* [departmentsAll](docs/departments/README.md#departmentsall) - List Departments
* [departmentsDelete](docs/departments/README.md#departmentsdelete) - Delete Department
* [departmentsOne](docs/departments/README.md#departmentsone) - Get Department
* [departmentsUpdate](docs/departments/README.md#departmentsupdate) - Update Department

### [employeePayrolls](docs/employeepayrolls/README.md)

* [employeePayrollsAll](docs/employeepayrolls/README.md#employeepayrollsall) - List Employee Payrolls
* [employeePayrollsOne](docs/employeepayrolls/README.md#employeepayrollsone) - Get Employee Payroll

### [employeeSchedules](docs/employeeschedules/README.md)

* [employeeSchedulesAll](docs/employeeschedules/README.md#employeeschedulesall) - List Employee Schedules

### [employees](docs/employees/README.md)

* [employeesAdd](docs/employees/README.md#employeesadd) - Create Employee
* [employeesAll](docs/employees/README.md#employeesall) - List Employees
* [employeesDelete](docs/employees/README.md#employeesdelete) - Delete Employee
* [employeesOne](docs/employees/README.md#employeesone) - Get Employee
* [employeesUpdate](docs/employees/README.md#employeesupdate) - Update Employee

### [jobs](docs/jobs/README.md)

* [jobsAll](docs/jobs/README.md#jobsall) - List Jobs
* [jobsOne](docs/jobs/README.md#jobsone) - One Job

### [payrolls](docs/payrolls/README.md)

* [payrollsAll](docs/payrolls/README.md#payrollsall) - List Payroll
* [payrollsOne](docs/payrolls/README.md#payrollsone) - Get Payroll

### [timeOffRequests](docs/timeoffrequests/README.md)

* [timeOffRequestsAdd](docs/timeoffrequests/README.md#timeoffrequestsadd) - Create Time Off Request
* [timeOffRequestsAll](docs/timeoffrequests/README.md#timeoffrequestsall) - List Time Off Requests
* [timeOffRequestsDelete](docs/timeoffrequests/README.md#timeoffrequestsdelete) - Delete Time Off Request
* [timeOffRequestsOne](docs/timeoffrequests/README.md#timeoffrequestsone) - Get Time Off Request
* [timeOffRequestsUpdate](docs/timeoffrequests/README.md#timeoffrequestsupdate) - Update Time Off Request
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
