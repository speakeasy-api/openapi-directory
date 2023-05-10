# scripts

## Overview

Scripts Restv 2 Controller

### Available Operations

* [exportZipUsingGET](#exportzipusingget) - exportZip
* [getScriptDifferencesUsingGET](#getscriptdifferencesusingget) - getScriptDifferences
* [getScriptVersionsUsingGET](#getscriptversionsusingget) - getScriptVersions
* [getScriptVersionsUsingGET1](#getscriptversionsusingget1) - getScriptVersions
* [importAcceptUsingPOST](#importacceptusingpost) - importAccept
* [importZipUsingPOST](#importzipusingpost) - importZip

## exportZipUsingGET

exportZip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExportZipUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportZipUsingGETRequest();
    $request->apiKey = 'repudiandae';

    $response = $sdk->scripts->exportZipUsingGET($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScriptDifferencesUsingGET

getScriptDifferences

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETScriptDifferencesUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETScriptDifferencesUsingGETRequest();
    $request->apiKey = 'ullam';
    $request->snapshotId1 = 'expedita';
    $request->snapshotId2 = 'nihil';

    $response = $sdk->scripts->getScriptDifferencesUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScriptVersionsUsingGET

getScriptVersions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETScriptVersionsUsingGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETScriptVersionsUsingGETRequest();
    $request->apiKey = 'repellat';
    $request->page = 841140;
    $request->pageSize = 149448;

    $response = $sdk->scripts->getScriptVersionsUsingGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScriptVersionsUsingGET1

getScriptVersions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETScriptVersionsUsingGET1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETScriptVersionsUsingGET1Request();
    $request->apiKey = 'saepe';
    $request->pageSize = 868126;

    $response = $sdk->scripts->getScriptVersionsUsingGET1($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importAcceptUsingPOST

importAccept

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportAcceptUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportAcceptUsingPOSTRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportAcceptUsingPOSTRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportAcceptUsingPOSTRequest();
    $request->requestBody = new ImportAcceptUsingPOSTRequestBody();
    $request->requestBody->file = new ImportAcceptUsingPOSTRequestBodyFile();
    $request->requestBody->file->content = 'accusantium';
    $request->requestBody->file->file = 'consequuntur';
    $request->apiKey = 'praesentium';
    $request->body = 'natus';

    $response = $sdk->scripts->importAcceptUsingPOST($request);

    if ($response->messageModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importZipUsingPOST

importZip

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportZipUsingPOSTRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportZipUsingPOSTRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportZipUsingPOSTRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportZipUsingPOSTRequest();
    $request->requestBody = new ImportZipUsingPOSTRequestBody();
    $request->requestBody->file = new ImportZipUsingPOSTRequestBodyFile();
    $request->requestBody->file->content = 'magni';
    $request->requestBody->file->file = 'sunt';
    $request->apiKey = 'quo';

    $response = $sdk->scripts->importZipUsingPOST($request);

    if ($response->scriptsDifferenceListModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
