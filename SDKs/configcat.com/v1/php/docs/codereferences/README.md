# codeReferences

## Overview

With this endpoint you can upload Feature Flag and Setting usage references that will be shown on the ConfigCat Dashboard.

<a href="https://configcat.com/docs/advanced/code-references/overview/" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Code References.

### Available Operations

* [postV1CodeReferences](#postv1codereferences)
* [postV1CodeReferencesDeleteReports](#postv1codereferencesdeletereports)

## postV1CodeReferences

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CodeReferenceRequest;
use \OpenAPI\OpenAPI\Models\Shared\FlagReference;
use \OpenAPI\OpenAPI\Models\Shared\ReferenceLines;
use \OpenAPI\OpenAPI\Models\Shared\ReferenceLine;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CodeReferenceRequest();
    $request->activeBranches = [
        'perspiciatis',
        'voluptatem',
        'porro',
    ];
    $request->branch = 'consequuntur';
    $request->commitHash = 'blanditiis';
    $request->commitUrl = 'error';
    $request->configId = '09b3fe49-a8d9-4cbf-8863-3323f9b77f3a';
    $request->flagReferences = [
        new FlagReference(),
        new FlagReference(),
    ];
    $request->repository = 'veritatis';
    $request->uploader = 'ipsa';

    $response = $sdk->codeReferences->postV1CodeReferences($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV1CodeReferencesDeleteReports

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRepositoryReportsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoryReportsRequest();
    $request->branch = 'ipsa';
    $request->configId = '674ebf69-280d-41ba-b7a8-9ebf737ae420';
    $request->repository = 'amet';
    $request->settingId = 758379;

    $response = $sdk->codeReferences->postV1CodeReferencesDeleteReports($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
