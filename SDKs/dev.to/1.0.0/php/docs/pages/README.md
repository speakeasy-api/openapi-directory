# pages

### Available Operations

* [deleteApiPagesId](#deleteapipagesid) - remove a page
* [getApiPages](#getapipages) - show details for all pages
* [getApiPagesId](#getapipagesid) - show details for a page
* [postApiPages](#postapipages) - pages
* [putApiPagesId](#putapipagesid) - update details for a page

## deleteApiPagesId

This endpoint allows the client to delete a single Page object, specified by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteApiPagesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteApiPagesIdRequest();
    $request->id = 363711;

    $response = $sdk->pages->deleteApiPagesId($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiPages

This endpoint allows the client to retrieve details for all Page objects.

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
    $response = $sdk->pages->getApiPages();

    if ($response->pages !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApiPagesId

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetApiPagesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetApiPagesIdRequest();
    $request->id = 325047;

    $response = $sdk->pages->getApiPagesId($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApiPages

This endpoint allows the client to create a new page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostApiPagesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostApiPagesRequestBodyTemplateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostApiPagesRequestBody();
    $request->bodyJson = 'excepturi';
    $request->bodyMarkdown = 'accusantium';
    $request->description = 'iure';
    $request->isTopLevelPath = false;
    $request->slug = 'culpa';
    $request->template = PostApiPagesRequestBodyTemplateEnum::JSON;
    $request->title = 'Dr.';

    $response = $sdk->pages->postApiPages($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putApiPagesId

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutApiPagesIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\Page;
use \OpenAPI\OpenAPI\Models\Shared\PageTemplateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutApiPagesIdRequest();
    $request->page = new Page();
    $request->page->bodyJson = 'architecto';
    $request->page->bodyMarkdown = 'mollitia';
    $request->page->description = 'dolorem';
    $request->page->isTopLevelPath = false;
    $request->page->slug = 'culpa';
    $request->page->socialImage = [
        'repellat' => 'mollitia',
    ];
    $request->page->template = PageTemplateEnum::NAV_BAR_INCLUDED;
    $request->page->title = 'Mrs.';
    $request->id = 414369;

    $response = $sdk->pages->putApiPagesId($request);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
