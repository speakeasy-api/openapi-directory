# boundaries

## Overview

Field Boundary data endpoints.

### Available Operations

* [fetchBoundaries](#fetchboundaries) - Retrieve Boundaries in batch
* [fetchBoundaryById](#fetchboundarybyid) - Retrieve a Boundary by ID
* [uploadBoundary](#uploadboundary) - Upload a boundary

## fetchBoundaries

Retrieve multiple **Boundaries** (up to 10 per request).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BoundariesQuery;
use \OpenAPI\OpenAPI\Models\Operations\FetchBoundariesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoundariesQuery();
    $request->ids = [
        'c5955907-aff1-4a3a-afa9-467739251aa5',
    ];

    $requestSecurity = new FetchBoundariesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->boundaries->fetchBoundaries($request, $requestSecurity);

    if ($response->boundaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchBoundaryById

Retrieve a **Boundary** by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchBoundaryByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchBoundaryByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchBoundaryByIdRequest();
    $request->boundaryId = '2c3f5ad0-19da-41ff-a78f-097b0074f154';

    $requestSecurity = new FetchBoundaryByIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->boundaries->fetchBoundaryById($request, $requestSecurity);

    if ($response->boundary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## uploadBoundary

Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
This is restricted to callers with **boundaries:write** scope.
To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BoundaryUpload;
use \OpenAPI\OpenAPI\Models\Shared\Geometry;
use \OpenAPI\OpenAPI\Models\Shared\GeometryTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UploadBoundarySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BoundaryUpload();
    $request->geometry = new Geometry();
    $request->geometry->coordinates = [
        'dicta',
        'harum',
    ];
    $request->geometry->type = GeometryTypeEnum::POINT;

    $requestSecurity = new UploadBoundarySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->boundaries->uploadBoundary($request, $requestSecurity);

    if ($response->uploadedBoundaryId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
