# tickets

### Available Operations

* [collectionTicketsAdd](#collectionticketsadd) - Create Ticket
* [collectionTicketsAll](#collectionticketsall) - List Tickets
* [collectionTicketsDelete](#collectionticketsdelete) - Delete Ticket
* [collectionTicketsOne](#collectionticketsone) - Get Ticket
* [collectionTicketsUpdate](#collectionticketsupdate) - Update Ticket

## collectionTicketsAdd

Create Ticket

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\TicketInput;
use \OpenAPI\OpenAPI\Models\Shared\AssigneeInput;
use \OpenAPI\OpenAPI\Models\Shared\TicketPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectionTagInput;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketsAddRequest();
    $request->ticketInput = new TicketInput();
    $request->ticketInput->assignees = [
        new AssigneeInput(),
        new AssigneeInput(),
        new AssigneeInput(),
        new AssigneeInput(),
    ];
    $request->ticketInput->description = 'I am facing issues with my internet connection';
    $request->ticketInput->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->ticketInput->parentId = '12345';
    $request->ticketInput->priority = TicketPriorityEnum::HIGH;
    $request->ticketInput->status = 'open';
    $request->ticketInput->subject = 'Technical Support Request';
    $request->ticketInput->tags = [
        new CollectionTagInput(),
    ];
    $request->ticketInput->type = 'Technical';
    $request->collectionId = 'apideck-io';
    $request->raw = false;
    $request->xApideckAppId = 'omnis';
    $request->xApideckConsumerId = 'voluptate';
    $request->xApideckServiceId = 'cum';

    $requestSecurity = new CollectionTicketsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tickets->collectionTicketsAdd($request, $requestSecurity);

    if ($response->createTicketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketsAll

List Tickets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\IssuesFilter;
use \OpenAPI\OpenAPI\Models\Shared\TicketsSort;
use \OpenAPI\OpenAPI\Models\Shared\TicketsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketsAllRequest();
    $request->collectionId = 'apideck-io';
    $request->cursor = 'perferendis';
    $request->fields = 'doloremque';
    $request->filter = new IssuesFilter();
    $request->filter->assigneeId = '2332bd9c2eaaa5dcfa14721c';
    $request->filter->since = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->filter->status = [
        'ut',
        'maiores',
    ];
    $request->limit = 120196;
    $request->raw = false;
    $request->sort = new TicketsSort();
    $request->sort->by = TicketsSortByEnum::CREATED_AT;
    $request->sort->direction = SortDirectionEnum::ASC;
    $request->xApideckAppId = 'dolore';
    $request->xApideckConsumerId = 'iusto';
    $request->xApideckServiceId = 'dicta';

    $requestSecurity = new CollectionTicketsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tickets->collectionTicketsAll($request, $requestSecurity);

    if ($response->getTicketsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketsDelete

Delete Ticket

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketsDeleteRequest();
    $request->collectionId = 'apideck-io';
    $request->raw = false;
    $request->ticketId = 'harum';
    $request->xApideckAppId = 'enim';
    $request->xApideckConsumerId = 'accusamus';
    $request->xApideckServiceId = 'commodi';

    $requestSecurity = new CollectionTicketsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tickets->collectionTicketsDelete($request, $requestSecurity);

    if ($response->deleteTicketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketsOne

Get Ticket

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketsOneRequest();
    $request->collectionId = 'apideck-io';
    $request->fields = 'repudiandae';
    $request->raw = false;
    $request->ticketId = 'quae';
    $request->xApideckAppId = 'ipsum';
    $request->xApideckConsumerId = 'quidem';
    $request->xApideckServiceId = 'molestias';

    $requestSecurity = new CollectionTicketsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tickets->collectionTicketsOne($request, $requestSecurity);

    if ($response->getTicketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketsUpdate

Update Ticket

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TicketInput;
use \OpenAPI\OpenAPI\Models\Shared\AssigneeInput;
use \OpenAPI\OpenAPI\Models\Shared\TicketPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\CollectionTagInput;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketsUpdateRequest();
    $request->ticketInput = new TicketInput();
    $request->ticketInput->assignees = [
        new AssigneeInput(),
        new AssigneeInput(),
        new AssigneeInput(),
    ];
    $request->ticketInput->description = 'I am facing issues with my internet connection';
    $request->ticketInput->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->ticketInput->parentId = '12345';
    $request->ticketInput->priority = TicketPriorityEnum::HIGH;
    $request->ticketInput->status = 'open';
    $request->ticketInput->subject = 'Technical Support Request';
    $request->ticketInput->tags = [
        new CollectionTagInput(),
        new CollectionTagInput(),
        new CollectionTagInput(),
        new CollectionTagInput(),
    ];
    $request->ticketInput->type = 'Technical';
    $request->collectionId = 'apideck-io';
    $request->raw = false;
    $request->ticketId = 'modi';
    $request->xApideckAppId = 'praesentium';
    $request->xApideckConsumerId = 'rem';
    $request->xApideckServiceId = 'voluptates';

    $requestSecurity = new CollectionTicketsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tickets->collectionTicketsUpdate($request, $requestSecurity);

    if ($response->updateTicketResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
