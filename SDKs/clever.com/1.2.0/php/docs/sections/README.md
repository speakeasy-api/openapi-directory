# sections

### Available Operations

* [getDistrictForSection](#getdistrictforsection) - Returns the district for a section
* [getSchoolForSection](#getschoolforsection) - Returns the school for a section
* [getSection](#getsection) - Returns a specific section
* [getSections](#getsections) - Returns a list of sections
* [getStudentsForSection](#getstudentsforsection) - Returns the students for a section
* [getTeacherForSection](#getteacherforsection) - Returns the primary teacher for a section
* [getTeachersForSection](#getteachersforsection) - Returns the teachers for a section

## getDistrictForSection

Returns the district for a section

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictForSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictForSectionRequest();
    $request->id = 'd6b14429-0747-4477-8a7b-d466d28c10ab';

    $response = $sdk->sections->getDistrictForSection($request);

    if ($response->districtResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchoolForSection

Returns the school for a section

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolForSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolForSectionRequest();
    $request->id = '3cdca425-1904-4e52-bc7e-0bc7178e4796';

    $response = $sdk->sections->getSchoolForSection($request);

    if ($response->schoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSection

Returns a specific section

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionRequest();
    $request->id = 'f2a70c68-8282-4aa4-8256-2f222e9817ee';

    $response = $sdk->sections->getSection($request);

    if ($response->sectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSections

Returns a list of sections

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionsRequest();
    $request->endingBefore = 'veritatis';
    $request->limit = 458604;
    $request->startingAfter = 'quod';
    $request->where = 'nam';

    $response = $sdk->sections->getSections($request);

    if ($response->sectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudentsForSection

Returns the students for a section

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudentsForSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudentsForSectionRequest();
    $request->endingBefore = 'vero';
    $request->id = '61e6b7b9-5bc0-4ab3-820c-4f3789fd871f';
    $request->limit = 621679;
    $request->startingAfter = 'sint';

    $response = $sdk->sections->getStudentsForSection($request);

    if ($response->studentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeacherForSection

Returns the primary teacher for a section

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeacherForSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeacherForSectionRequest();
    $request->id = 'dd2efd12-1aa6-4f1e-a74b-db04f1575608';

    $response = $sdk->sections->getTeacherForSection($request);

    if ($response->teacherResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeachersForSection

Returns the teachers for a section

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeachersForSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeachersForSectionRequest();
    $request->endingBefore = 'qui';
    $request->id = 'd68ea19f-1d17-4051-b39d-08086a184039';
    $request->limit = 253191;
    $request->startingAfter = 'impedit';

    $response = $sdk->sections->getTeachersForSection($request);

    if ($response->teachersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
