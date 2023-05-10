# notes

### Available Operations

* [notesAdd](#notesadd) - Create note
* [notesAll](#notesall) - List notes
* [notesDelete](#notesdelete) - Delete note
* [notesOne](#notesone) - Get note
* [notesUpdate](#notesupdate) - Update note

## notesAdd

Create note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\NoteInput;
use \OpenAPI\OpenAPI\Models\Operations\NotesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotesAddRequest();
    $request->noteInput = new NoteInput();
    $request->noteInput->active = true;
    $request->noteInput->companyId = '12345';
    $request->noteInput->contactId = '12345';
    $request->noteInput->content = 'Office hours are 9AM-6PM';
    $request->noteInput->leadId = '12345';
    $request->noteInput->opportunityId = '12345';
    $request->noteInput->ownerId = '12345';
    $request->noteInput->title = 'Meeting Notes';
    $request->raw = false;
    $request->xApideckAppId = 'quae';
    $request->xApideckConsumerId = 'aut';
    $request->xApideckServiceId = 'quas';

    $requestSecurity = new NotesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->notes->notesAdd($request, $requestSecurity);

    if ($response->createNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notesAll

List notes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\NotesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotesAllRequest();
    $request->cursor = 'itaque';
    $request->fields = 'consequatur';
    $request->limit = 669917;
    $request->raw = false;
    $request->xApideckAppId = 'repellendus';
    $request->xApideckConsumerId = 'porro';
    $request->xApideckServiceId = 'doloribus';

    $requestSecurity = new NotesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->notes->notesAll($request, $requestSecurity);

    if ($response->getNotesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notesDelete

Delete note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\NotesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotesDeleteRequest();
    $request->id = '4b921879-fce9-453f-b3ef-7fbc7abd74dd';
    $request->raw = false;
    $request->xApideckAppId = 'sequi';
    $request->xApideckConsumerId = 'natus';
    $request->xApideckServiceId = 'impedit';

    $requestSecurity = new NotesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->notes->notesDelete($request, $requestSecurity);

    if ($response->deleteNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notesOne

Get note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\NotesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotesOneRequest();
    $request->fields = 'aut';
    $request->id = 'f5d2cff7-c70a-4456-a6d4-36813f16d9f5';
    $request->raw = false;
    $request->xApideckAppId = 'sapiente';
    $request->xApideckConsumerId = 'quisquam';
    $request->xApideckServiceId = 'saepe';

    $requestSecurity = new NotesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->notes->notesOne($request, $requestSecurity);

    if ($response->getNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## notesUpdate

Update note

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NotesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\NoteInput;
use \OpenAPI\OpenAPI\Models\Operations\NotesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NotesUpdateRequest();
    $request->noteInput = new NoteInput();
    $request->noteInput->active = true;
    $request->noteInput->companyId = '12345';
    $request->noteInput->contactId = '12345';
    $request->noteInput->content = 'Office hours are 9AM-6PM';
    $request->noteInput->leadId = '12345';
    $request->noteInput->opportunityId = '12345';
    $request->noteInput->ownerId = '12345';
    $request->noteInput->title = 'Meeting Notes';
    $request->id = '6c556146-c3e2-450f-b008-c42e141aac36';
    $request->raw = false;
    $request->xApideckAppId = 'autem';
    $request->xApideckConsumerId = 'nobis';
    $request->xApideckServiceId = 'quas';

    $requestSecurity = new NotesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->notes->notesUpdate($request, $requestSecurity);

    if ($response->updateNoteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
