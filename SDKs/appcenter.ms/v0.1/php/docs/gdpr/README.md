# gdpr

### Available Operations

* [dataSubjectRightCancelDeleteRequest](#datasubjectrightcanceldeleterequest)
* [dataSubjectRightCancelExportRequest](#datasubjectrightcancelexportrequest)
* [dataSubjectRightDeleteRequest](#datasubjectrightdeleterequest)
* [dataSubjectRightDeleteStatusRequest](#datasubjectrightdeletestatusrequest)
* [dataSubjectRightExportRequest](#datasubjectrightexportrequest)
* [dataSubjectRightExportStatusRequest](#datasubjectrightexportstatusrequest)

## dataSubjectRightCancelDeleteRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightCancelDeleteRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightCancelDeleteRequestRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightCancelDeleteRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataSubjectRightCancelDeleteRequestRequest();
    $request->requestBody = new DataSubjectRightCancelDeleteRequestRequestBody();
    $request->requestBody->email = 'Jessie_Kling62@gmail.com';
    $request->token = 'c646ecb5-7340-49e3-ab1e-5a2b12eb07f1';

    $requestSecurity = new DataSubjectRightCancelDeleteRequestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->gdpr->dataSubjectRightCancelDeleteRequest($request, $requestSecurity);

    if ($response->dataSubjectRightCancelDeleteRequest202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataSubjectRightCancelExportRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightCancelExportRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightCancelExportRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataSubjectRightCancelExportRequestRequest();
    $request->token = '16db9954-5fc9-45fa-8897-0e189dbb30fc';

    $requestSecurity = new DataSubjectRightCancelExportRequestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->gdpr->dataSubjectRightCancelExportRequest($request, $requestSecurity);

    if ($response->dataSubjectRightCancelExportRequest202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataSubjectRightDeleteRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightDeleteRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DataSubjectRightDeleteRequestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->gdpr->dataSubjectRightDeleteRequest($requestSecurity);

    if ($response->dataSubjectRightDeleteRequest202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataSubjectRightDeleteStatusRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightDeleteStatusRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightDeleteStatusRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataSubjectRightDeleteStatusRequestRequest();
    $request->email = 'Curt_Ferry4@hotmail.com';
    $request->token = '55b197cd-44e2-4f52-982d-3513bb6f48b6';

    $requestSecurity = new DataSubjectRightDeleteStatusRequestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->gdpr->dataSubjectRightDeleteStatusRequest($request, $requestSecurity);

    if ($response->dataSubjectRightDeleteStatusRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataSubjectRightExportRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightExportRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new DataSubjectRightExportRequestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->gdpr->dataSubjectRightExportRequest($requestSecurity);

    if ($response->dataSubjectRightExportRequest202ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dataSubjectRightExportStatusRequest

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightExportStatusRequestRequest;
use \OpenAPI\OpenAPI\Models\Operations\DataSubjectRightExportStatusRequestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DataSubjectRightExportStatusRequestRequest();
    $request->token = '56bcdb35-ff2e-44b2-b537-a8cd9e7319c1';

    $requestSecurity = new DataSubjectRightExportStatusRequestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->gdpr->dataSubjectRightExportStatusRequest($request, $requestSecurity);

    if ($response->dataSubjectRightExportStatusRequest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
