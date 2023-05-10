# comments

### Available Operations

* [collectionTicketCommentsAdd](#collectionticketcommentsadd) - Create Comment
* [collectionTicketCommentsAll](#collectionticketcommentsall) - List Comments
* [collectionTicketCommentsDelete](#collectionticketcommentsdelete) - Delete Comment
* [collectionTicketCommentsOne](#collectionticketcommentsone) - Get Comment
* [collectionTicketCommentsUpdate](#collectionticketcommentsupdate) - Update Comment

## collectionTicketCommentsAdd

Create Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionTicketCommentInput;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketCommentsAddRequest();
    $request->collectionTicketCommentInput = new CollectionTicketCommentInput();
    $request->collectionTicketCommentInput->body = 'What internet provider do you use?';
    $request->collectionId = 'apideck-io';
    $request->raw = false;
    $request->ticketId = 'suscipit';
    $request->xApideckAppId = 'molestiae';
    $request->xApideckConsumerId = 'minus';
    $request->xApideckServiceId = 'placeat';

    $requestSecurity = new CollectionTicketCommentsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->comments->collectionTicketCommentsAdd($request, $requestSecurity);

    if ($response->createCommentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketCommentsAll

List Comments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommentsSort;
use \OpenAPI\OpenAPI\Models\Shared\CommentsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketCommentsAllRequest();
    $request->collectionId = 'apideck-io';
    $request->cursor = 'voluptatum';
    $request->fields = 'iusto';
    $request->limit = 568045;
    $request->raw = false;
    $request->sort = new CommentsSort();
    $request->sort->by = CommentsSortByEnum::CREATED_AT;
    $request->sort->direction = SortDirectionEnum::ASC;
    $request->ticketId = 'recusandae';
    $request->xApideckAppId = 'temporibus';
    $request->xApideckConsumerId = 'ab';
    $request->xApideckServiceId = 'quis';

    $requestSecurity = new CollectionTicketCommentsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->comments->collectionTicketCommentsAll($request, $requestSecurity);

    if ($response->getCommentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketCommentsDelete

Delete Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketCommentsDeleteRequest();
    $request->collectionId = 'apideck-io';
    $request->id = '1a05dfc2-ddf7-4cc7-8ca1-ba928fc81674';
    $request->raw = false;
    $request->ticketId = 'qui';
    $request->xApideckAppId = 'impedit';
    $request->xApideckConsumerId = 'cum';
    $request->xApideckServiceId = 'esse';

    $requestSecurity = new CollectionTicketCommentsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->comments->collectionTicketCommentsDelete($request, $requestSecurity);

    if ($response->deleteCommentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketCommentsOne

Get Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketCommentsOneRequest();
    $request->collectionId = 'apideck-io';
    $request->cursor = 'ipsum';
    $request->fields = 'excepturi';
    $request->id = '20592939-6fea-4759-aeb1-0faaa2352c59';
    $request->limit = 363711;
    $request->raw = false;
    $request->ticketId = 'minima';
    $request->xApideckAppId = 'excepturi';
    $request->xApideckConsumerId = 'accusantium';
    $request->xApideckServiceId = 'iure';

    $requestSecurity = new CollectionTicketCommentsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->comments->collectionTicketCommentsOne($request, $requestSecurity);

    if ($response->getCommentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionTicketCommentsUpdate

Update Comment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionTicketCommentInput;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTicketCommentsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTicketCommentsUpdateRequest();
    $request->collectionTicketCommentInput = new CollectionTicketCommentInput();
    $request->collectionTicketCommentInput->body = 'What internet provider do you use?';
    $request->collectionId = 'apideck-io';
    $request->id = 'aff1a3a2-fa94-4677-b925-1aa52c3f5ad0';
    $request->raw = false;
    $request->ticketId = 'quasi';
    $request->xApideckAppId = 'error';
    $request->xApideckConsumerId = 'temporibus';
    $request->xApideckServiceId = 'laborum';

    $requestSecurity = new CollectionTicketCommentsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->comments->collectionTicketCommentsUpdate($request, $requestSecurity);

    if ($response->updateCommentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
