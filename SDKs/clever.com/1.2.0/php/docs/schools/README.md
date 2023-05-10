# schools

### Available Operations

* [getDistrictForSchool](#getdistrictforschool) - Returns the district for a school
* [getSchool](#getschool) - Returns a specific school
* [getSchools](#getschools) - Returns a list of schools
* [getSectionsForSchool](#getsectionsforschool) - Returns the sections for a school
* [getStudentsForSchool](#getstudentsforschool) - Returns the students for a school
* [getTeachersForSchool](#getteachersforschool) - Returns the teachers for a school

## getDistrictForSchool

Returns the district for a school

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictForSchoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictForSchoolRequest();
    $request->id = '70b326b5-a734-429c-9b1a-8422bb679d23';

    $response = $sdk->schools->getDistrictForSchool($request);

    if ($response->districtResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchool

Returns a specific school

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolRequest();
    $request->id = '22715bf0-cbb1-4e31-b8b9-0f3443a1108e';

    $response = $sdk->schools->getSchool($request);

    if ($response->schoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchools

Returns a list of schools

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolsRequest();
    $request->endingBefore = 'consequatur';
    $request->limit = 669917;
    $request->startingAfter = 'repellendus';
    $request->where = 'porro';

    $response = $sdk->schools->getSchools($request);

    if ($response->schoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSectionsForSchool

Returns the sections for a school

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionsForSchoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionsForSchoolRequest();
    $request->endingBefore = 'doloribus';
    $request->id = '4b921879-fce9-453f-b3ef-7fbc7abd74dd';
    $request->limit = 194342;
    $request->startingAfter = 'natus';
    $request->where = 'impedit';

    $response = $sdk->schools->getSectionsForSchool($request);

    if ($response->sectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudentsForSchool

Returns the students for a school

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudentsForSchoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudentsForSchoolRequest();
    $request->endingBefore = 'aut';
    $request->id = 'f5d2cff7-c70a-4456-a6d4-36813f16d9f5';
    $request->limit = 960835;
    $request->startingAfter = 'quisquam';
    $request->where = 'saepe';

    $response = $sdk->schools->getStudentsForSchool($request);

    if ($response->studentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeachersForSchool

Returns the teachers for a school

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeachersForSchoolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeachersForSchoolRequest();
    $request->endingBefore = 'ea';
    $request->id = 'c556146c-3e25-40fb-808c-42e141aac366';
    $request->limit = 752135;
    $request->startingAfter = 'quas';
    $request->where = 'assumenda';

    $response = $sdk->schools->getTeachersForSchool($request);

    if ($response->teachersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
