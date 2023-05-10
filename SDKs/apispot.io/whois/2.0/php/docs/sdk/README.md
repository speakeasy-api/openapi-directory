# SDK

## Overview

Domain API (WHOIS, Check, Batch)

### Available Operations

* [checkDomain](#checkdomain) - Check domain availability
* [createBatch](#createbatch) - Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.
* [deleteBatch](#deletebatch) - Delete batch
* [domainRank](#domainrank) - Check domain rank (authority).
* [getBatch](#getbatch) - Get batch
* [getBatches](#getbatches) - Get your batches
* [queryDb](#querydb) - Query domain database
* [whois](#whois) - WHOIS query for a domain

## checkDomain

Check domain availability

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckDomainRequest();
    $request->domain = 'provident';

    $response = $sdk->sdk->checkDomain($request);

    if ($response->checkDomain200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBatch

Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchRequestBodyOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchRequestBodyOptions;
use \OpenAPI\OpenAPI\Models\Operations\CreateBatchRequestBodyOptionsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBatchRequestBody();
    $request->domains = [
        'quibusdam',
        'unde',
        'nulla',
    ];
    $request->operation = CreateBatchRequestBodyOperationEnum::CHECK;
    $request->options = new CreateBatchRequestBodyOptions();
    $request->options->format = CreateBatchRequestBodyOptionsFormatEnum::JSON;

    $response = $sdk->sdk->createBatch($request);

    if ($response->batch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBatch

Delete batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBatchRequest();
    $request->id = '69a674e0-f467-4cc8-b96e-d151a05dfc2d';

    $response = $sdk->sdk->deleteBatch($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainRank

Check domain rank (authority).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DomainRankRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainRankRequest();
    $request->domain = 'at';

    $response = $sdk->sdk->domainRank($request);

    if ($response->domainRank200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatch

Get batch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchRequest();
    $request->id = 'f7cc78ca-1ba9-428f-8816-742cb7392059';

    $response = $sdk->sdk->getBatch($request);

    if ($response->batch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatches

Get your batches

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
    $response = $sdk->sdk->getBatches();

    if ($response->arrayOfBatch !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryDb

Query domain database

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryDbRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryDbRequest();
    $request->query = 'sed';

    $response = $sdk->sdk->queryDb($request);

    if ($response->queryDb200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## whois

WHOIS query for a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WhoisRequest;
use \OpenAPI\OpenAPI\Models\Operations\WhoisFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WhoisRequest();
    $request->domain = 'iste';
    $request->format = WhoisFormatEnum::RAW;

    $response = $sdk->sdk->whois($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
