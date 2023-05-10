# companies

### Available Operations

* [companiesAdd](#companiesadd) - Create company
* [companiesAll](#companiesall) - List companies
* [companiesDelete](#companiesdelete) - Delete company
* [companiesOne](#companiesone) - Get company
* [companiesUpdate](#companiesupdate) - Update company

## companiesAdd

Create company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompanyInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompanyCompanyRowType;
use \OpenAPI\OpenAPI\Models\Shared\SocialLink;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesAddRequest();
    $request->companyInput = new CompanyInput();
    $request->companyInput->abnBranch = '123';
    $request->companyInput->abnOrTfn = '46 115 614 695';
    $request->companyInput->acn = 'XXX XXX XXX';
    $request->companyInput->addresses = [
        new Address(),
        new Address(),
    ];
    $request->companyInput->annualRevenue = '+$35m';
    $request->companyInput->bankAccounts = [
        new BankAccount(),
    ];
    $request->companyInput->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->companyInput->currency = CurrencyEnum::USD;
    $request->companyInput->customFields = [
        new CustomField(),
        new CustomField(),
        new CustomField(),
    ];
    $request->companyInput->description = 'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.';
    $request->companyInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->companyInput->fax = '+12129876543';
    $request->companyInput->firstName = 'Elon';
    $request->companyInput->image = 'https://www.spacex.com/static/images/share.jpg';
    $request->companyInput->industry = 'Apparel';
    $request->companyInput->lastName = 'Musk';
    $request->companyInput->name = 'SpaceX';
    $request->companyInput->numberOfEmployees = '500-1000';
    $request->companyInput->ownerId = '12345';
    $request->companyInput->ownership = 'Public';
    $request->companyInput->payeeNumber = '78932EN';
    $request->companyInput->phoneNumbers = [
        new PhoneNumber(),
        new PhoneNumber(),
    ];
    $request->companyInput->readOnly = false;
    $request->companyInput->rowType = new CompanyCompanyRowType();
    $request->companyInput->rowType->id = '12345';
    $request->companyInput->rowType->name = 'Customer Account';
    $request->companyInput->salesTaxNumber = '12456EN';
    $request->companyInput->salutation = 'Mr';
    $request->companyInput->socialLinks = [
        new SocialLink(),
    ];
    $request->companyInput->status = 'Open';
    $request->companyInput->tags = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->companyInput->vatNumber = 'BE0689615164';
    $request->companyInput->websites = [
        new Website(),
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->raw = false;
    $request->xApideckAppId = 'aut';
    $request->xApideckConsumerId = 'quasi';
    $request->xApideckServiceId = 'error';

    $requestSecurity = new CompaniesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesAdd($request, $requestSecurity);

    if ($response->createCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesAll

List companies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompaniesFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompaniesSort;
use \OpenAPI\OpenAPI\Models\Shared\CompaniesSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesAllRequest();
    $request->cursor = 'temporibus';
    $request->fields = 'laborum';
    $request->filter = new CompaniesFilter();
    $request->filter->name = 'SpaceX';
    $request->limit = 96098;
    $request->raw = false;
    $request->sort = new CompaniesSort();
    $request->sort->by = CompaniesSortByEnum::CREATED_AT;
    $request->sort->direction = SortDirectionEnum::DESC;
    $request->xApideckAppId = 'voluptatibus';
    $request->xApideckConsumerId = 'vero';
    $request->xApideckServiceId = 'nihil';

    $requestSecurity = new CompaniesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesAll($request, $requestSecurity);

    if ($response->getCompaniesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesDelete

Delete company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesDeleteRequest();
    $request->id = '8f097b00-74f1-4547-9b5e-6e13b99d488e';
    $request->raw = false;
    $request->xApideckAppId = 'quasi';
    $request->xApideckConsumerId = 'repudiandae';
    $request->xApideckServiceId = 'sint';

    $requestSecurity = new CompaniesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesDelete($request, $requestSecurity);

    if ($response->deleteCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesOne

Get company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesOneRequest();
    $request->fields = 'veritatis';
    $request->id = 'e450ad2a-bd44-4269-802d-502a94bb4f63';
    $request->raw = false;
    $request->xApideckAppId = 'eligendi';
    $request->xApideckConsumerId = 'sint';
    $request->xApideckServiceId = 'aliquid';

    $requestSecurity = new CompaniesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesOne($request, $requestSecurity);

    if ($response->getCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companiesUpdate

Update company

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompanyInput;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BankAccount;
use \OpenAPI\OpenAPI\Models\Shared\BankAccountAccountTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Shared\Email;
use \OpenAPI\OpenAPI\Models\Shared\EmailTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumber;
use \OpenAPI\OpenAPI\Models\Shared\PhoneNumberTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CompanyCompanyRowType;
use \OpenAPI\OpenAPI\Models\Shared\SocialLink;
use \OpenAPI\OpenAPI\Models\Shared\Website;
use \OpenAPI\OpenAPI\Models\Shared\WebsiteTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompaniesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompaniesUpdateRequest();
    $request->companyInput = new CompanyInput();
    $request->companyInput->abnBranch = '123';
    $request->companyInput->abnOrTfn = '46 115 614 695';
    $request->companyInput->acn = 'XXX XXX XXX';
    $request->companyInput->addresses = [
        new Address(),
        new Address(),
        new Address(),
    ];
    $request->companyInput->annualRevenue = '+$35m';
    $request->companyInput->bankAccounts = [
        new BankAccount(),
        new BankAccount(),
        new BankAccount(),
        new BankAccount(),
    ];
    $request->companyInput->birthday = DateTime::createFromFormat('Y-m-d', '2000-08-12');
    $request->companyInput->currency = CurrencyEnum::USD;
    $request->companyInput->customFields = [
        new CustomField(),
        new CustomField(),
        new CustomField(),
    ];
    $request->companyInput->description = 'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.';
    $request->companyInput->emails = [
        new Email(),
        new Email(),
        new Email(),
    ];
    $request->companyInput->fax = '+12129876543';
    $request->companyInput->firstName = 'Elon';
    $request->companyInput->image = 'https://www.spacex.com/static/images/share.jpg';
    $request->companyInput->industry = 'Apparel';
    $request->companyInput->lastName = 'Musk';
    $request->companyInput->name = 'SpaceX';
    $request->companyInput->numberOfEmployees = '500-1000';
    $request->companyInput->ownerId = '12345';
    $request->companyInput->ownership = 'Public';
    $request->companyInput->payeeNumber = '78932EN';
    $request->companyInput->phoneNumbers = [
        new PhoneNumber(),
    ];
    $request->companyInput->readOnly = false;
    $request->companyInput->rowType = new CompanyCompanyRowType();
    $request->companyInput->rowType->id = '12345';
    $request->companyInput->rowType->name = 'Customer Account';
    $request->companyInput->salesTaxNumber = '12456EN';
    $request->companyInput->salutation = 'Mr';
    $request->companyInput->socialLinks = [
        new SocialLink(),
        new SocialLink(),
        new SocialLink(),
        new SocialLink(),
    ];
    $request->companyInput->status = 'Open';
    $request->companyInput->tags = [
        'dolorum',
        'in',
        'in',
        'illum',
    ];
    $request->companyInput->vatNumber = 'BE0689615164';
    $request->companyInput->websites = [
        new Website(),
        new Website(),
        new Website(),
        new Website(),
    ];
    $request->id = 'b14cd66a-e395-4efb-9ba8-8f3a66997074';
    $request->raw = false;
    $request->xApideckAppId = 'distinctio';
    $request->xApideckConsumerId = 'id';
    $request->xApideckServiceId = 'labore';

    $requestSecurity = new CompaniesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->companies->companiesUpdate($request, $requestSecurity);

    if ($response->updateCompanyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
