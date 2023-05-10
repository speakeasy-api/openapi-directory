# practiceManagement

## Overview

Create and manage practice management resources

### Available Operations

* [inventoryCategoriesList](#inventorycategorieslist) - Retrieve or search inventory categories
* [inventoryCategoriesRead](#inventorycategoriesread) - Retrieve an existing inventory category
* [inventoryVaccinesCreate](#inventoryvaccinescreate) - Create vaccine inventory
* [inventoryVaccinesList](#inventoryvaccineslist) - Retrieve or search vaccine inventories
* [inventoryVaccinesRead](#inventoryvaccinesread) - Retrieve an existing vaccine inventory
* [messagesCreate](#messagescreate) - Create messages in doctor's message center
* [messagesDelete](#messagesdelete) - Delete an existing message in doctor's message center
* [messagesList](#messageslist) - Retrieve or search messages in doctor's message center
* [messagesPartialUpdate](#messagespartialupdate) - Update an existing message in doctor's message center
* [messagesRead](#messagesread) - Retrieve an existing message in doctor's message center
* [messagesUpdate](#messagesupdate) - Update an existing message in doctor's message center
* [officesAddExamRoom](#officesaddexamroom) - Add an exam room to the office
* [officesList](#officeslist) - Retrieve or search offices
* [officesPartialUpdate](#officespartialupdate) - Update an existing office
* [officesRead](#officesread) - Retrieve an existing office
* [officesUpdate](#officesupdate) - Update an existing office
* [taskCategoriesCreate](#taskcategoriescreate) - Create a task category
* [taskCategoriesList](#taskcategorieslist) - Retrieve or search task categories
* [taskCategoriesPartialUpdate](#taskcategoriespartialupdate) - Update an existing task category
* [taskCategoriesRead](#taskcategoriesread) - Retrieve an existing task category
* [taskCategoriesUpdate](#taskcategoriesupdate) - Update an existing task category
* [taskNotesCreate](#tasknotescreate) - Create a task note
* [taskNotesList](#tasknoteslist) - Retrieve or search task notes
* [taskNotesPartialUpdate](#tasknotespartialupdate) - Update an existing task note
* [taskNotesRead](#tasknotesread) - Retrieve an existing task note
* [taskNotesUpdate](#tasknotesupdate) - Update an existing task note
* [taskStatusesCreate](#taskstatusescreate) - Create a task status
* [taskStatusesList](#taskstatuseslist) - Retrieve or search task statuses
* [taskStatusesPartialUpdate](#taskstatusespartialupdate) - Update an existing task status
* [taskStatusesRead](#taskstatusesread) - Retrieve an existing task status
* [taskStatusesUpdate](#taskstatusesupdate) - Update an existing task status
* [taskTemplatesCreate](#tasktemplatescreate) - Create a task template
* [taskTemplatesList](#tasktemplateslist) - Retrieve or search task templates
* [taskTemplatesPartialUpdate](#tasktemplatespartialupdate) - Update an existing task template
* [taskTemplatesRead](#tasktemplatesread) - Retrieve an existing task template
* [taskTemplatesUpdate](#tasktemplatesupdate) - Update an existing task template
* [tasksCreate](#taskscreate) - Create a task
* [tasksList](#taskslist) - Retrieve or search tasks
* [tasksPartialUpdate](#taskspartialupdate) - Update an existing task
* [tasksRead](#tasksread) - Retrieve an existing task
* [tasksUpdate](#tasksupdate) - Update an existing task

## inventoryCategoriesList

Retrieve or search inventory categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InventoryCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\InventoryCategoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryCategoriesListRequest();
    $request->cursor = 'voluptatem';
    $request->doctor = 271216;
    $request->pageSize = 577622;
    $request->since = 'quasi';

    $requestSecurity = new InventoryCategoriesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->inventoryCategoriesList($request, $requestSecurity);

    if ($response->inventoryCategoriesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryCategoriesRead

Retrieve an existing inventory category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InventoryCategoriesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\InventoryCategoriesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryCategoriesReadRequest();
    $request->doctor = 82915;
    $request->id = '60820788-8ec6-4618-bbfe-9659eb40ec16';
    $request->since = 'earum';

    $requestSecurity = new InventoryCategoriesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->inventoryCategoriesRead($request, $requestSecurity);

    if ($response->inventoryCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryVaccinesCreate

Create vaccine inventory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InventoryVaccinesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\InventoryVaccinesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryVaccinesCreateRequest();
    $request->cvxCode = 'est';
    $request->doctor = 937687;
    $request->since = 'nihil';
    $request->status = 'nostrum';

    $requestSecurity = new InventoryVaccinesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->inventoryVaccinesCreate($request, $requestSecurity);

    if ($response->inventoryVaccine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryVaccinesList

Retrieve or search vaccine inventories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InventoryVaccinesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\InventoryVaccinesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryVaccinesListRequest();
    $request->cursor = 'rerum';
    $request->cvxCode = 'perferendis';
    $request->doctor = 724331;
    $request->pageSize = 353041;
    $request->since = 'ratione';
    $request->status = 'eos';

    $requestSecurity = new InventoryVaccinesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->inventoryVaccinesList($request, $requestSecurity);

    if ($response->inventoryVaccinesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## inventoryVaccinesRead

Retrieve an existing vaccine inventory

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\InventoryVaccinesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\InventoryVaccinesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InventoryVaccinesReadRequest();
    $request->cvxCode = 'id';
    $request->doctor = 266067;
    $request->id = 'da37cbaa-f445-42c4-842c-9b2ad32dafe8';
    $request->since = 'quasi';
    $request->status = 'mollitia';

    $requestSecurity = new InventoryVaccinesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->inventoryVaccinesRead($request, $requestSecurity);

    if ($response->inventoryVaccine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesCreate

Create messages in doctor's message center

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesCreateRequest();
    $request->doctor = 530232;
    $request->owner = 500692;
    $request->patient = 958091;
    $request->receivedSince = 'ut';
    $request->responsibleUser = 277943;
    $request->type = 'labore';
    $request->updatedSince = 'ut';

    $requestSecurity = new MessagesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->messagesCreate($request, $requestSecurity);

    if ($response->doctorMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesDelete

Delete an existing message in doctor's message center

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesDeleteRequest();
    $request->doctor = 313420;
    $request->id = '73fecd47-353f-463c-8209-379aa69cd5fb';
    $request->owner = 763862;
    $request->patient = 959659;
    $request->receivedSince = 'quam';
    $request->responsibleUser = 579242;
    $request->type = 'repellendus';
    $request->updatedSince = 'culpa';

    $requestSecurity = new MessagesDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->messagesDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesList

Retrieve or search messages in doctor's message center

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesListRequest();
    $request->cursor = 'dicta';
    $request->doctor = 524801;
    $request->owner = 683271;
    $request->pageSize = 485950;
    $request->patient = 518338;
    $request->receivedSince = 'magni';
    $request->responsibleUser = 178066;
    $request->type = 'harum';
    $request->updatedSince = 'voluptatibus';

    $requestSecurity = new MessagesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->messagesList($request, $requestSecurity);

    if ($response->messagesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesPartialUpdate

Update an existing message in doctor's message center

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesPartialUpdateRequest();
    $request->doctor = 606172;
    $request->id = '5894e686-1adb-455f-9e5d-751c9fe8f750';
    $request->owner = 170126;
    $request->patient = 700204;
    $request->receivedSince = 'voluptatibus';
    $request->responsibleUser = 858478;
    $request->type = 'quod';
    $request->updatedSince = 'non';

    $requestSecurity = new MessagesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->messagesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesRead

Retrieve an existing message in doctor's message center

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesReadRequest();
    $request->doctor = 293176;
    $request->id = '50841f17-6445-4637-9f3f-b27e21f86265';
    $request->owner = 442853;
    $request->patient = 743340;
    $request->receivedSince = 'ipsum';
    $request->responsibleUser = 424505;
    $request->type = 'delectus';
    $request->updatedSince = 'maxime';

    $requestSecurity = new MessagesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->messagesRead($request, $requestSecurity);

    if ($response->doctorMessage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## messagesUpdate

Update an existing message in doctor's message center

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MessagesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\MessagesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MessagesUpdateRequest();
    $request->doctor = 424499;
    $request->id = 'b9f587ce-525c-4676-81a8-312e5047b4c2';
    $request->owner = 105831;
    $request->patient = 783837;
    $request->receivedSince = 'cumque';
    $request->responsibleUser = 714933;
    $request->type = 'numquam';
    $request->updatedSince = 'fugit';

    $requestSecurity = new MessagesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->messagesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## officesAddExamRoom

Add an exam room to the office

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OfficesAddExamRoomRequest;
use \OpenAPI\OpenAPI\Models\Operations\OfficesAddExamRoomSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfficesAddExamRoomRequest();
    $request->doctor = 226556;
    $request->id = 'abcdc91f-aabd-4d88-a71f-6c48252d7771';

    $requestSecurity = new OfficesAddExamRoomSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->officesAddExamRoom($request, $requestSecurity);

    if ($response->office !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## officesList

Retrieve or search offices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OfficesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\OfficesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfficesListRequest();
    $request->cursor = 'eveniet';
    $request->doctor = 454904;
    $request->pageSize = 941091;

    $requestSecurity = new OfficesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->officesList($request, $requestSecurity);

    if ($response->officesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## officesPartialUpdate

Update an existing office

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OfficesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\OfficesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfficesPartialUpdateRequest();
    $request->doctor = 871969;
    $request->id = '074009ef-8d29-4de1-9d70-97b5da08c57f';

    $requestSecurity = new OfficesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->officesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## officesRead

Retrieve an existing office

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OfficesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\OfficesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfficesReadRequest();
    $request->doctor = 660799;
    $request->id = '6c78a216-e19b-4afe-8a61-91498140b64f';

    $requestSecurity = new OfficesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->officesRead($request, $requestSecurity);

    if ($response->office !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## officesUpdate

Update an existing office

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OfficesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\OfficesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OfficesUpdateRequest();
    $request->doctor = 964021;
    $request->id = '8ae170ef-03b5-4f37-a4aa-868555966732';

    $requestSecurity = new OfficesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->officesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskCategoriesCreate

Create a task category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskCategoriesCreateRequest();
    $request->since = 'animi';

    $requestSecurity = new TaskCategoriesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskCategoriesCreate($request, $requestSecurity);

    if ($response->taskCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskCategoriesList

Retrieve or search task categories

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskCategoriesListRequest();
    $request->cursor = 'dolorum';
    $request->pageSize = 373840;
    $request->since = 'temporibus';

    $requestSecurity = new TaskCategoriesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskCategoriesList($request, $requestSecurity);

    if ($response->taskCategoriesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskCategoriesPartialUpdate

Update an existing task category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskCategoriesPartialUpdateRequest();
    $request->id = 'cb6682cb-70f8-4cfd-9fb6-e91b9a9f7484';
    $request->since = 'aliquid';

    $requestSecurity = new TaskCategoriesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskCategoriesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskCategoriesRead

Retrieve an existing task category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskCategoriesReadRequest();
    $request->id = 'e2c3309d-b053-46d9-a75c-a006f5392c11';
    $request->since = 'est';

    $requestSecurity = new TaskCategoriesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskCategoriesRead($request, $requestSecurity);

    if ($response->taskCategory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskCategoriesUpdate

Update an existing task category

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskCategoriesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskCategoriesUpdateRequest();
    $request->id = '25a8bf92-f974-428a-99a9-f8bf82211253';
    $request->since = 'ullam';

    $requestSecurity = new TaskCategoriesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskCategoriesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskNotesCreate

Create a task note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskNotesCreateRequest();
    $request->since = 'provident';
    $request->task = 820725;

    $requestSecurity = new TaskNotesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskNotesCreate($request, $requestSecurity);

    if ($response->taskNote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskNotesList

Retrieve or search task notes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskNotesListRequest();
    $request->cursor = 'iste';
    $request->pageSize = 503598;
    $request->since = 'consectetur';
    $request->task = 520824;

    $requestSecurity = new TaskNotesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskNotesList($request, $requestSecurity);

    if ($response->taskNotesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskNotesPartialUpdate

Update an existing task note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskNotesPartialUpdateRequest();
    $request->id = '7f7a79cd-72cd-4248-8da2-1729f2ac41ef';
    $request->since = 'exercitationem';
    $request->task = 468221;

    $requestSecurity = new TaskNotesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskNotesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskNotesRead

Retrieve an existing task note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskNotesReadRequest();
    $request->id = '25f1169a-c1e4-41d8-a23c-23e34f2dfa4a';
    $request->since = 'sunt';
    $request->task = 598066;

    $requestSecurity = new TaskNotesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskNotesRead($request, $requestSecurity);

    if ($response->taskNote !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskNotesUpdate

Update an existing task note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskNotesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskNotesUpdateRequest();
    $request->id = '7f6de922-151f-4e17-9209-9853e9f543d8';
    $request->since = 'nemo';
    $request->task = 291649;

    $requestSecurity = new TaskNotesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskNotesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskStatusesCreate

Create a task status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskStatusesCreateRequest();
    $request->since = 'numquam';

    $requestSecurity = new TaskStatusesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskStatusesCreate($request, $requestSecurity);

    if ($response->taskStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskStatusesList

Retrieve or search task statuses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskStatusesListRequest();
    $request->cursor = 'dolor';
    $request->pageSize = 596888;
    $request->since = 'accusamus';

    $requestSecurity = new TaskStatusesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskStatusesList($request, $requestSecurity);

    if ($response->taskStatusesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskStatusesPartialUpdate

Update an existing task status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskStatusesPartialUpdateRequest();
    $request->id = 'e2244604-43bc-4154-988c-2f56e85da783';
    $request->since = 'odit';

    $requestSecurity = new TaskStatusesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskStatusesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskStatusesRead

Retrieve an existing task status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskStatusesReadRequest();
    $request->id = 'eabd617c-3b0d-451a-84bf-01bad8706d46';
    $request->since = 'alias';

    $requestSecurity = new TaskStatusesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskStatusesRead($request, $requestSecurity);

    if ($response->taskStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskStatusesUpdate

Update an existing task status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskStatusesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskStatusesUpdateRequest();
    $request->id = '82bfbdc4-1ff5-4d4e-aae4-fb5cb35d1763';
    $request->since = 'quos';

    $requestSecurity = new TaskStatusesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskStatusesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskTemplatesCreate

Create a task template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskTemplatesCreateRequest();
    $request->assigneeGroup = 966415;
    $request->assigneeUser = 123016;
    $request->category = 922593;
    $request->since = 'facere';
    $request->status = 716538;

    $requestSecurity = new TaskTemplatesCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskTemplatesCreate($request, $requestSecurity);

    if ($response->taskTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskTemplatesList

Retrieve or search task templates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskTemplatesListRequest();
    $request->assigneeGroup = 497363;
    $request->assigneeUser = 540416;
    $request->category = 234383;
    $request->cursor = 'nemo';
    $request->pageSize = 592760;
    $request->since = 'accusamus';
    $request->status = 793260;

    $requestSecurity = new TaskTemplatesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskTemplatesList($request, $requestSecurity);

    if ($response->taskTemplatesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskTemplatesPartialUpdate

Update an existing task template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskTemplatesPartialUpdateRequest();
    $request->assigneeGroup = 773479;
    $request->assigneeUser = 327624;
    $request->category = 767235;
    $request->id = 'b860f8cd-580b-4a73-810e-4fe4447297cd';
    $request->since = 'non';
    $request->status = 701506;

    $requestSecurity = new TaskTemplatesPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskTemplatesPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskTemplatesRead

Retrieve an existing task template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskTemplatesReadRequest();
    $request->assigneeGroup = 72677;
    $request->assigneeUser = 846332;
    $request->category = 859740;
    $request->id = '3bbce247-b768-44ef-b501-26d71cffbd0e';
    $request->since = 'rerum';
    $request->status = 475060;

    $requestSecurity = new TaskTemplatesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskTemplatesRead($request, $requestSecurity);

    if ($response->taskTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## taskTemplatesUpdate

Update an existing task template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TaskTemplatesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TaskTemplatesUpdateRequest();
    $request->assigneeGroup = 308620;
    $request->assigneeUser = 719317;
    $request->category = 501451;
    $request->id = '421953b4-4bd3-4c43-959d-33e5953c0011';
    $request->since = 'amet';
    $request->status = 578452;

    $requestSecurity = new TaskTemplatesUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->taskTemplatesUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksCreate

Create a task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TasksCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksCreateRequest();
    $request->assigneeGroup = 552512;
    $request->assigneeUser = 397112;
    $request->category = 193048;
    $request->dueAtDate = 'culpa';
    $request->dueAtRange = 'fuga';
    $request->dueAtSince = 'modi';
    $request->dueAtUnknown = 'et';
    $request->since = 'eveniet';
    $request->status = 399732;

    $requestSecurity = new TasksCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->tasksCreate($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksList

Retrieve or search tasks

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksListRequest;
use \OpenAPI\OpenAPI\Models\Operations\TasksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksListRequest();
    $request->assigneeGroup = 760942;
    $request->assigneeUser = 236588;
    $request->category = 67746;
    $request->cursor = 'maxime';
    $request->dueAtDate = 'porro';
    $request->dueAtRange = 'explicabo';
    $request->dueAtSince = 'reiciendis';
    $request->dueAtUnknown = 'dicta';
    $request->pageSize = 942436;
    $request->since = 'porro';
    $request->status = 735484;

    $requestSecurity = new TasksListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->tasksList($request, $requestSecurity);

    if ($response->tasksList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksPartialUpdate

Update an existing task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TasksPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksPartialUpdateRequest();
    $request->assigneeGroup = 351786;
    $request->assigneeUser = 123593;
    $request->category = 787241;
    $request->dueAtDate = 'sint';
    $request->dueAtRange = 'id';
    $request->dueAtSince = 'ut';
    $request->dueAtUnknown = 'et';
    $request->id = 'ffbe9cbd-795e-4e65-a076-cc7abf616ea5';
    $request->since = 'porro';
    $request->status = 474003;

    $requestSecurity = new TasksPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->tasksPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksRead

Retrieve an existing task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\TasksReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksReadRequest();
    $request->assigneeGroup = 81455;
    $request->assigneeUser = 428482;
    $request->category = 264090;
    $request->dueAtDate = 'dicta';
    $request->dueAtRange = 'provident';
    $request->dueAtSince = 'non';
    $request->dueAtUnknown = 'dolore';
    $request->id = 'b90f2e09-d19d-42fc-af9e-2e105944b935';
    $request->since = 'illum';
    $request->status = 153666;

    $requestSecurity = new TasksReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->tasksRead($request, $requestSecurity);

    if ($response->task !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tasksUpdate

Update an existing task

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TasksUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TasksUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TasksUpdateRequest();
    $request->assigneeGroup = 240555;
    $request->assigneeUser = 444494;
    $request->category = 659418;
    $request->dueAtDate = 'ducimus';
    $request->dueAtRange = 'dolores';
    $request->dueAtSince = 'asperiores';
    $request->dueAtUnknown = 'occaecati';
    $request->id = '0849d6ae-d4ae-4cb7-937c-d9222c9ff574';
    $request->since = 'iste';
    $request->status = 81775;

    $requestSecurity = new TasksUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->practiceManagement->tasksUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
