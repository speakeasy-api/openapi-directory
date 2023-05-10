# students

### Available Operations

* [getContactsForStudent](#getcontactsforstudent) - Returns the contacts for a student
* [getDistrictForStudent](#getdistrictforstudent) - Returns the district for a student
* [getSchoolForStudent](#getschoolforstudent) - Returns the primary school for a student
* [getSectionsForStudent](#getsectionsforstudent) - Returns the sections for a student
* [getStudent](#getstudent) - Returns a specific student
* [getStudents](#getstudents) - Returns a list of students
* [getTeachersForStudent](#getteachersforstudent) - Returns the teachers for a student

## getContactsForStudent

Returns the contacts for a student

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactsForStudentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactsForStudentRequest();
    $request->id = '26071f93-f5f0-4642-9ac7-af515cc413aa';
    $request->limit = 380729;

    $response = $sdk->students->getContactsForStudent($request);

    if ($response->studentContactsForStudentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDistrictForStudent

Returns the district for a student

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDistrictForStudentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDistrictForStudentRequest();
    $request->id = '3aae8d67-864d-4bb6-b5fd-5e60b375ed4f';

    $response = $sdk->students->getDistrictForStudent($request);

    if ($response->districtResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchoolForStudent

Returns the primary school for a student

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchoolForStudentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchoolForStudentRequest();
    $request->id = '6fbee41f-3331-47fe-b5b6-0eb1ea426555';

    $response = $sdk->students->getSchoolForStudent($request);

    if ($response->schoolResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSectionsForStudent

Returns the sections for a student

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionsForStudentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionsForStudentRequest();
    $request->endingBefore = 'nobis';
    $request->id = 'a3c28744-ed53-4b88-b3a8-d8f5c0b2f2fb';
    $request->limit = 451822;
    $request->startingAfter = 'expedita';

    $response = $sdk->students->getSectionsForStudent($request);

    if ($response->sectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudent

Returns a specific student

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudentRequest();
    $request->id = '194a276b-2691-46fe-9f08-f4294e3698f4';
    $request->include = 'tempora';

    $response = $sdk->students->getStudent($request);

    if ($response->studentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStudents

Returns a list of students

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStudentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStudentsRequest();
    $request->endingBefore = 'voluptate';
    $request->limit = 970076;
    $request->startingAfter = 'ex';
    $request->where = 'sit';

    $response = $sdk->students->getStudents($request);

    if ($response->studentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTeachersForStudent

Returns the teachers for a student

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTeachersForStudentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeachersForStudentRequest();
    $request->endingBefore = 'non';
    $request->id = 'e8b445e8-0ca5-45ef-920e-457e1858b6a8';
    $request->limit = 622385;
    $request->startingAfter = 'hic';

    $response = $sdk->students->getTeachersForStudent($request);

    if ($response->teachersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
