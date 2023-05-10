# search

## Overview

Search for candidates, committees by name.

### Available Operations

* [getNamesCandidates](#getnamescandidates) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

* [getNamesCommittees](#getnamescommittees) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


## getNamesCandidates


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesCandidatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesCandidatesRequest();
    $request->apiKey = 'cupiditate';
    $request->q = [
        'alias',
        'quidem',
        'nesciunt',
        'commodi',
    ];

    $response = $sdk->search->getNamesCandidates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesCommittees


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesCommitteesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesCommitteesRequest();
    $request->apiKey = 'sapiente';
    $request->q = [
        'veniam',
    ];

    $response = $sdk->search->getNamesCommittees($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
