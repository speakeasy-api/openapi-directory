# history

## Overview

Operations about histories

### Available Operations

* [historyList](#historylist) - List site full action history.
* [historyListForFile](#historylistforfile) - List history for specific file.
* [historyListForFolder](#historylistforfolder) - List history for specific folder.
* [historyListForUser](#historylistforuser) - List history for specific user.
* [historyListLogins](#historylistlogins) - List site login history.

## historyList

List site full action history.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HistoryListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HistoryListRequest();
    $request->cursor = 'minima';
    $request->display = 'veritatis';
    $request->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T10:21:42.350Z');
    $request->filter = [
        'temporibus' => 'accusantium',
        'rem' => 'aut',
        'laudantium' => 'eum',
    ];
    $request->filterPrefix = [
        'ab' => 'corrupti',
        'non' => 'voluptatem',
        'dolor' => 'occaecati',
    ];
    $request->perPage = 253191;
    $request->sortBy = [
        'explicabo' => 'voluptas',
        'aut' => 'dignissimos',
        'dicta' => 'maiores',
        'natus' => 'velit',
    ];
    $request->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-17T02:47:10.534Z');

    $response = $sdk->history->historyList($request);

    if ($response->actionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## historyListForFile

List history for specific file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HistoryListForFileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HistoryListForFileRequest();
    $request->cursor = 'asperiores';
    $request->display = 'aperiam';
    $request->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T19:48:26.093Z');
    $request->path = 'consequuntur';
    $request->perPage = 831520;
    $request->sortBy = [
        'maxime' => 'dignissimos',
        'officia' => 'asperiores',
        'nemo' => 'quae',
    ];
    $request->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T02:51:58.534Z');

    $response = $sdk->history->historyListForFile($request);

    if ($response->actionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## historyListForFolder

List history for specific folder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HistoryListForFolderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HistoryListForFolderRequest();
    $request->cursor = 'quod';
    $request->display = 'labore';
    $request->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-04T21:10:21.697Z');
    $request->path = 'fuga';
    $request->perPage = 662505;
    $request->sortBy = [
        'velit' => 'culpa',
        'est' => 'recusandae',
    ];
    $request->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-17T14:58:08.915Z');

    $response = $sdk->history->historyListForFolder($request);

    if ($response->actionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## historyListForUser

List history for specific user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HistoryListForUserRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HistoryListForUserRequest();
    $request->cursor = 'vel';
    $request->display = 'ducimus';
    $request->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-22T16:20:29.225Z');
    $request->perPage = 287051;
    $request->sortBy = [
        'facilis' => 'cum',
        'commodi' => 'in',
        'corporis' => 'reiciendis',
        'assumenda' => 'nemo',
    ];
    $request->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-22T16:49:10.196Z');
    $request->userId = 46007;

    $response = $sdk->history->historyListForUser($request);

    if ($response->actionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## historyListLogins

List site login history.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HistoryListLoginsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HistoryListLoginsRequest();
    $request->cursor = 'cum';
    $request->display = 'consectetur';
    $request->endAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T18:58:12.703Z');
    $request->perPage = 937285;
    $request->sortBy = [
        'numquam' => 'doloribus',
        'suscipit' => 'reiciendis',
        'quidem' => 'saepe',
        'necessitatibus' => 'dolore',
    ];
    $request->startAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-03T21:58:53.395Z');

    $response = $sdk->history->historyListLogins($request);

    if ($response->actionEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
