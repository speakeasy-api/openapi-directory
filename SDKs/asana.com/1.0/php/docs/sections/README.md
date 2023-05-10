# sections

## Overview

A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.

Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.

The ‘memberships’ property when [getting a task](/docs/get-a-task) will return the information for the section or the column under ‘section’ in the response.

### Available Operations

* [addTaskForSection](#addtaskforsection) - Add task to section
* [createSectionForProject](#createsectionforproject) - Create a section in a project
* [deleteSection](#deletesection) - Delete a section
* [getSection](#getsection) - Get a section
* [getSectionsForProject](#getsectionsforproject) - Get sections in a project
* [insertSectionForProject](#insertsectionforproject) - Move or Insert sections
* [updateSection](#updatesection) - Update a section

## addTaskForSection

Add a task to a specific, existing section. This will remove the task from other sections of the project.

The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.

This does not work for separators (tasks with the resource_subtype of section).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTaskForSectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddTaskForSectionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SectionTaskInsertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTaskForSectionRequest();
    $request->requestBody = new AddTaskForSectionRequestBody();
    $request->requestBody->data = new SectionTaskInsertRequest();
    $request->requestBody->data->insertAfter = '987654';
    $request->requestBody->data->insertBefore = '86420';
    $request->requestBody->data->task = '123456';
    $request->optFields = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];
    $request->optPretty = false;
    $request->sectionGid = 'odio';

    $response = $sdk->sections->addTaskForSection($request);

    if ($response->addTaskForSection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSectionForProject

Creates a new section in a project.
Returns the full record of the newly created section.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSectionForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSectionForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSectionForProjectRequest();
    $request->requestBody = new CreateSectionForProjectRequestBody();
    $request->requestBody->data = new SectionRequest();
    $request->requestBody->data->insertAfter = '987654';
    $request->requestBody->data->insertBefore = '86420';
    $request->requestBody->data->name = 'Next Actions';
    $request->optFields = [
        'ullam',
    ];
    $request->optPretty = false;
    $request->projectGid = 'nam';

    $response = $sdk->sections->createSectionForProject($request);

    if ($response->createSectionForProject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSection

A specific, existing section can be deleted by making a DELETE request on
the URL for that section.

Note that sections must be empty to be deleted.

The last remaining section cannot be deleted.

Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSectionRequest();
    $request->optFields = [
        'voluptatem',
        'cumque',
        'soluta',
        'nobis',
    ];
    $request->optPretty = false;
    $request->sectionGid = 'et';

    $response = $sdk->sections->deleteSection($request);

    if ($response->deleteSection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSection

Returns the complete record for a single section.

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
    $request->optFields = [
        'ipsum',
        'veritatis',
        'nobis',
        'quos',
    ];
    $request->optPretty = false;
    $request->sectionGid = 'tempore';

    $response = $sdk->sections->getSection($request);

    if ($response->getSection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSectionsForProject

Returns the compact records for all sections in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSectionsForProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSectionsForProjectRequest();
    $request->limit = 584476;
    $request->offset = 'aperiam';
    $request->optFields = [
        'dolorem',
        'dolore',
        'labore',
        'adipisci',
    ];
    $request->optPretty = false;
    $request->projectGid = 'dolorum';

    $response = $sdk->sections->getSectionsForProject($request);

    if ($response->getSectionsForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## insertSectionForProject

Move sections relative to each other. One of
`before_section` or `after_section` is required.

Sections cannot be moved between projects.

Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InsertSectionForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\InsertSectionForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSectionInsertRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InsertSectionForProjectRequest();
    $request->requestBody = new InsertSectionForProjectRequestBody();
    $request->requestBody->data = new ProjectSectionInsertRequest();
    $request->requestBody->data->afterSection = '987654';
    $request->requestBody->data->beforeSection = '86420';
    $request->requestBody->data->project = '123456';
    $request->requestBody->data->section = '321654';
    $request->optFields = [
        'quae',
    ];
    $request->optPretty = false;
    $request->projectGid = 'aut';

    $response = $sdk->sections->insertSectionForProject($request);

    if ($response->insertSectionForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSection

A specific, existing section can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged. (note that
at this time, the only field that can be updated is the `name` field.)

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated section record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSectionRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSectionRequest();
    $request->requestBody = new UpdateSectionRequestBody();
    $request->requestBody->data = new SectionRequest();
    $request->requestBody->data->insertAfter = '987654';
    $request->requestBody->data->insertBefore = '86420';
    $request->requestBody->data->name = 'Next Actions';
    $request->optFields = [
        'itaque',
        'consequatur',
        'est',
    ];
    $request->optPretty = false;
    $request->sectionGid = 'repellendus';

    $response = $sdk->sections->updateSection($request);

    if ($response->updateSection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
