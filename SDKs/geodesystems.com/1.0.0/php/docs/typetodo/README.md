# typeTodo

## Overview

Search API for 'Todo' entry type

### Available Operations

* [searchTodo](#searchtodo) - Search API for 'Todo' entry type

## searchTodo

API to search for entries of type Todo

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTodoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTodoRequest();
    $request->changedateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T21:21:59.349Z');
    $request->changedateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T12:06:32.096Z');
    $request->createdateFrom = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-06T10:01:19.877Z');
    $request->createdateTo = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-13T15:13:55.874Z');
    $request->description = 'blanditiis';
    $request->filesuffix = 'sint';
    $request->fromdate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-06T04:33:53.232Z');
    $request->group = 'molestiae';
    $request->max = 933840;
    $request->maxlatitude = 5231.56;
    $request->maxlongitude = 3663.27;
    $request->minlatitude = 2505.2;
    $request->minlongitude = 9261.42;
    $request->name = 'Jeffrey Gutmann';
    $request->searchDbTodoCategory = 'quibusdam';
    $request->searchDbTodoChecked = false;
    $request->searchDbTodoTitle = 'magni';
    $request->skip = 163673;
    $request->text = 'consequuntur';
    $request->todate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T18:49:09.447Z');

    $response = $sdk->typeTodo->searchTodo($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
