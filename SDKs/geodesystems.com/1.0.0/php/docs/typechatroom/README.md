# typeChatroom

## Overview

Search API for 'Chat Room' entry type

### Available Operations

* [searchChatroom](#searchchatroom) - Search API for 'Chat Room' entry type

## searchChatroom

API to search for entries of type Chat Room

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchChatroomRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchChatroomRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T17:54:29.915Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-13T02:57:02.580Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-17T14:59:36.472Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-09T15:08:05.768Z');
    $request->description = 'laborum';
    $request->filesuffix = 'distinctio';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-15T04:55:40.282Z');
    $request->group = 'aliquam';
    $request->max = 320565;
    $request->maxlatitude = 9979.63;
    $request->maxlongitude = 30.99;
    $request->minlatitude = 3621.89;
    $request->minlongitude = 5973.03;
    $request->name = 'Dr. Iris Hodkiewicz';
    $request->skip = 174658;
    $request->text = 'id';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T00:03:17.363Z');

    $response = $sdk->typeChatroom->searchChatroom($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
