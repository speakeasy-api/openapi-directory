# automations

## Overview

Operations about automations

### Available Operations

* [deleteAutomationsId](#deleteautomationsid) - Delete Automation
* [getAutomations](#getautomations) - List Automations
* [getAutomationsId](#getautomationsid) - Show Automation
* [patchAutomationsId](#patchautomationsid) - Update Automation
* [postAutomations](#postautomations) - Create Automation

## deleteAutomationsId

Delete Automation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAutomationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAutomationsIdRequest();
    $request->id = 592042;

    $response = $sdk->automations->deleteAutomationsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomations

List Automations

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationsRequest();
    $request->automation = 'necessitatibus';
    $request->cursor = 'sint';
    $request->filter = [
        'dolor' => 'debitis',
        'a' => 'dolorum',
        'in' => 'in',
    ];
    $request->filterGt = [
        'maiores' => 'rerum',
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->filterGteq = [
        'accusamus' => 'non',
        'occaecati' => 'enim',
        'accusamus' => 'delectus',
    ];
    $request->filterLt = [
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->filterLteq = [
        'deserunt' => 'nisi',
    ];
    $request->perPage = 423855;
    $request->sortBy = [
        'omnis' => 'molestiae',
        'perferendis' => 'nihil',
        'magnam' => 'distinctio',
    ];
    $request->withDeleted = false;

    $response = $sdk->automations->getAutomations($request);

    if ($response->automationEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomationsId

Show Automation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomationsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomationsIdRequest();
    $request->id = 660174;

    $response = $sdk->automations->getAutomationsId($request);

    if ($response->automationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAutomationsId

Update Automation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAutomationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchAutomationsIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchAutomationsIdRequestBodyAutomationEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchAutomationsIdRequestBodyTriggerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAutomationsIdRequest();
    $request->requestBody = new PatchAutomationsIdRequestBody();
    $request->requestBody->automation = PatchAutomationsIdRequestBodyAutomationEnum::CREATE_FOLDER;
    $request->requestBody->description = 'example';
    $request->requestBody->destination = 'labore';
    $request->requestBody->destinationReplaceFrom = 'labore';
    $request->requestBody->destinationReplaceTo = 'suscipit';
    $request->requestBody->destinations = [
        'nobis',
        'eum',
        'vero',
    ];
    $request->requestBody->disabled = true;
    $request->requestBody->groupIds = 'aspernatur';
    $request->requestBody->interval = 'year';
    $request->requestBody->name = 'example';
    $request->requestBody->path = 'architecto';
    $request->requestBody->recurringDay = 25;
    $request->requestBody->schedule = [
        'et' => 'excepturi',
        'ullam' => 'provident',
    ];
    $request->requestBody->source = 'source';
    $request->requestBody->syncIds = 'quos';
    $request->requestBody->trigger = PatchAutomationsIdRequestBodyTriggerEnum::REALTIME;
    $request->requestBody->triggerActions = [
        'accusantium',
        'mollitia',
        'reiciendis',
    ];
    $request->requestBody->userIds = 'mollitia';
    $request->requestBody->value = [
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
    ];
    $request->id = 367562;

    $response = $sdk->automations->patchAutomationsId($request);

    if ($response->automationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAutomations

Create Automation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationsRequestBodyAutomationEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostAutomationsRequestBodyTriggerEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAutomationsRequestBody();
    $request->automation = PostAutomationsRequestBodyAutomationEnum::CREATE_FOLDER;
    $request->description = 'example';
    $request->destination = 'quasi';
    $request->destinationReplaceFrom = 'iure';
    $request->destinationReplaceTo = 'doloribus';
    $request->destinations = [
        'eius',
        'maxime',
        'deleniti',
        'facilis',
    ];
    $request->disabled = true;
    $request->groupIds = 'in';
    $request->interval = 'year';
    $request->name = 'example';
    $request->path = 'architecto';
    $request->recurringDay = 25;
    $request->schedule = [
        'repudiandae' => 'ullam',
    ];
    $request->source = 'source';
    $request->syncIds = 'expedita';
    $request->trigger = PostAutomationsRequestBodyTriggerEnum::REALTIME;
    $request->triggerActions = [
        'repellat',
        'quibusdam',
    ];
    $request->userIds = 'sed';
    $request->value = [
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
        'sunt' => 'quo',
    ];

    $response = $sdk->automations->postAutomations($request);

    if ($response->automationEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
