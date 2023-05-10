# teachers

### Available Operations

* [getDistrictForTeacher](#getdistrictforteacher) - Returns the district for a teacher
* [getGradeLevelsForTeacher](#getgradelevelsforteacher) - Returns the grade levels for sections a teacher teaches
* [getSchoolForTeacher](#getschoolforteacher) - Retrieves school info for a teacher.
* [getSectionsForTeacher](#getsectionsforteacher) - Returns the sections for a teacher
* [getStudentsForTeacher](#getstudentsforteacher) - Returns the students for a teacher
* [getTeacher](#getteacher) - Returns a specific teacher
* [getTeachers](#getteachers) - Returns a list of teachers

## getDistrictForTeacher

Returns the district for a teacher

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictForTeacherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictForTeacherRequest();
    $request->id = 'be3a5aa8-e482-44d0-ab40-75088e518620';

    $response = $sdk->teachers->getDistrictForTeacher($request);

    if ($response->districtResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGradeLevelsForTeacher

Returns the grade levels for sections a teacher teaches

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGradeLevelsForTeacherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGradeLevelsForTeacherRequest();
    $request->id = '65e904f3-b119-44b8-abf6-03a79f9dfe0a';

    $response = $sdk->teachers->getGradeLevelsForTeacher($request);

    if ($response->gradeLevelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchoolForTeacher

Retrieves school info for a teacher.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolForTeacherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolForTeacherRequest();
    $request->id = 'b7da8a50-ce18-47f8-abc1-73d689eee952';

    $response = $sdk->teachers->getSchoolForTeacher($request);

    if ($response->schoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSectionsForTeacher

Returns the sections for a teacher

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionsForTeacherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionsForTeacherRequest();
    $request->endingBefore = 'ex';
    $request->id = 'f8d986e8-81ea-4d4f-8e10-12563f94e29e';
    $request->limit = 597937;
    $request->startingAfter = 'in';

    $response = $sdk->teachers->getSectionsForTeacher($request);

    if ($response->sectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudentsForTeacher

Returns the students for a teacher

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudentsForTeacherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudentsForTeacherRequest();
    $request->endingBefore = 'adipisci';
    $request->id = 'e922a57a-15be-43e0-a080-7e2b6e3ab884';
    $request->limit = 320565;
    $request->startingAfter = 'repellat';

    $response = $sdk->teachers->getStudentsForTeacher($request);

    if ($response->studentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeacher

Returns a specific teacher

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeacherRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeacherRequest();
    $request->id = '0597a60f-f2a5-44a3-9e94-764a3e865e79';
    $request->include = 'quis';

    $response = $sdk->teachers->getTeacher($request);

    if ($response->teacherResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeachers

Returns a list of teachers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeachersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeachersRequest();
    $request->endingBefore = 'eum';
    $request->limit = 970494;
    $request->startingAfter = 'provident';
    $request->where = 'aspernatur';

    $response = $sdk->teachers->getTeachers($request);

    if ($response->teachersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
