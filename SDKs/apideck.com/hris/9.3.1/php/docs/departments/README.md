# departments

### Available Operations

* [departmentsAdd](#departmentsadd) - Create Department
* [departmentsAll](#departmentsall) - List Departments
* [departmentsDelete](#departmentsdelete) - Delete Department
* [departmentsOne](#departmentsone) - Get Department
* [departmentsUpdate](#departmentsupdate) - Update Department

## departmentsAdd

Create Department

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\DepartmentInput;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepartmentsAddRequest();
    $request->departmentInput = new DepartmentInput();
    $request->departmentInput->code = '2';
    $request->departmentInput->description = 'R&D';
    $request->departmentInput->name = 'R&D';
    $request->raw = false;
    $request->xApideckAppId = 'quo';
    $request->xApideckConsumerId = 'sequi';
    $request->xApideckServiceId = 'tenetur';

    $requestSecurity = new DepartmentsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->departments->departmentsAdd($request, $requestSecurity);

    if ($response->createDepartmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## departmentsAll

List Departments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepartmentsAllRequest();
    $request->cursor = 'ipsam';
    $request->fields = 'id';
    $request->limit = 820994;
    $request->raw = false;
    $request->xApideckAppId = 'aut';
    $request->xApideckConsumerId = 'quasi';
    $request->xApideckServiceId = 'error';

    $requestSecurity = new DepartmentsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->departments->departmentsAll($request, $requestSecurity);

    if ($response->getDepartmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## departmentsDelete

Delete Department

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepartmentsDeleteRequest();
    $request->id = 'da1ffe78-f097-4b00-b4f1-5471b5e6e13b';
    $request->raw = false;
    $request->xApideckAppId = 'molestias';
    $request->xApideckConsumerId = 'excepturi';
    $request->xApideckServiceId = 'pariatur';

    $requestSecurity = new DepartmentsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->departments->departmentsDelete($request, $requestSecurity);

    if ($response->deleteDepartmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## departmentsOne

Get Department

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepartmentsOneRequest();
    $request->fields = 'modi';
    $request->id = '88e1e91e-450a-4d2a-bd44-269802d502a9';
    $request->raw = false;
    $request->xApideckAppId = 'tempora';
    $request->xApideckConsumerId = 'facilis';
    $request->xApideckServiceId = 'tempore';

    $requestSecurity = new DepartmentsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->departments->departmentsOne($request, $requestSecurity);

    if ($response->getDepartmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## departmentsUpdate

Update Department

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DepartmentInput;
use \OpenAPI\OpenAPI\Models\Operations\DepartmentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepartmentsUpdateRequest();
    $request->departmentInput = new DepartmentInput();
    $request->departmentInput->code = '2';
    $request->departmentInput->description = 'R&D';
    $request->departmentInput->name = 'R&D';
    $request->id = '4f63c969-e9a3-4efa-b7df-b14cd66ae395';
    $request->raw = false;
    $request->xApideckAppId = 'accusamus';
    $request->xApideckConsumerId = 'delectus';
    $request->xApideckServiceId = 'quidem';

    $requestSecurity = new DepartmentsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->departments->departmentsUpdate($request, $requestSecurity);

    if ($response->updateDepartmentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
