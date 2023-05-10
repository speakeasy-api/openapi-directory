# districts

### Available Operations

* [getAdminsForDistrict](#getadminsfordistrict) - Returns the admins for a district
* [getDistrict](#getdistrict) - Returns a specific district
* [getDistrictStatus](#getdistrictstatus) - Returns the status of the district
* [getDistricts](#getdistricts) - Returns a list of districts. In practice this will only return the one district associated with the bearer token
* [getSchoolsForDistrict](#getschoolsfordistrict) - Returns the schools for a district
* [getSectionsForDistrict](#getsectionsfordistrict) - Returns the sections for a district
* [getStudentsForDistrict](#getstudentsfordistrict) - Returns the students for a district
* [getTeachersForDistrict](#getteachersfordistrict) - Returns the teachers for a district

## getAdminsForDistrict

Returns the admins for a district

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAdminsForDistrictRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAdminsForDistrictRequest();
    $request->id = 'e6e13b99-d488-4e1e-91e4-50ad2abd4426';

    $response = $sdk->districts->getAdminsForDistrict($request);

    if ($response->districtAdminsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrict

Returns a specific district

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictRequest();
    $request->id = '9802d502-a94b-4b4f-a3c9-69e9a3efa77d';
    $request->include = 'maiores';

    $response = $sdk->districts->getDistrict($request);

    if ($response->districtResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictStatus

Returns the status of the district

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictStatusRequest();
    $request->id = 'b14cd66a-e395-4efb-9ba8-8f3a66997074';

    $response = $sdk->districts->getDistrictStatus($request);

    if ($response->districtStatusResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistricts

Returns a list of districts. In practice this will only return the one district associated with the bearer token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->districts->getDistricts();

    if ($response->districtsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchoolsForDistrict

Returns the schools for a district

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolsForDistrictRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolsForDistrictRequest();
    $request->endingBefore = 'distinctio';
    $request->id = 'a4469b6e-2141-4959-890a-fa563e2516fe';
    $request->limit = 260341;
    $request->startingAfter = 'maxime';
    $request->where = 'deleniti';

    $response = $sdk->districts->getSchoolsForDistrict($request);

    if ($response->schoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSectionsForDistrict

Returns the sections for a district

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionsForDistrictRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionsForDistrictRequest();
    $request->endingBefore = 'facilis';
    $request->id = '711e5b7f-d2ed-4028-921c-ddc692601fb5';
    $request->limit = 453543;
    $request->startingAfter = 'autem';
    $request->where = 'nam';

    $response = $sdk->districts->getSectionsForDistrict($request);

    if ($response->sectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudentsForDistrict

Returns the students for a district

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudentsForDistrictRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudentsForDistrictRequest();
    $request->endingBefore = 'eaque';
    $request->id = 'd5f0d30c-5fbb-4258-b053-202c73d5fe9b';
    $request->limit = 596656;
    $request->startingAfter = 'voluptatem';
    $request->where = 'porro';

    $response = $sdk->districts->getStudentsForDistrict($request);

    if ($response->studentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeachersForDistrict

Returns the teachers for a district

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeachersForDistrictRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeachersForDistrictRequest();
    $request->endingBefore = 'consequuntur';
    $request->id = '8909b3fe-49a8-4d9c-bf48-633323f9b77f';
    $request->limit = 227414;
    $request->startingAfter = 'dolorum';
    $request->where = 'numquam';

    $response = $sdk->districts->getTeachersForDistrict($request);

    if ($response->teachersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
