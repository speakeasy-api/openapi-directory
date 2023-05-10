# tenders

### Available Operations

* [tendersAdd](#tendersadd) - Create Tender
* [tendersAll](#tendersall) - List Tenders
* [tendersDelete](#tendersdelete) - Delete Tender
* [tendersOne](#tendersone) - Get Tender
* [tendersUpdate](#tendersupdate) - Update Tender

## tendersAdd

Create Tender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TendersAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\TenderInput;
use \OpenAPI\OpenAPI\Models\Operations\TendersAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TendersAddRequest();
    $request->tenderInput = new TenderInput();
    $request->tenderInput->active = true;
    $request->tenderInput->allowsTipping = false;
    $request->tenderInput->editable = true;
    $request->tenderInput->hidden = true;
    $request->tenderInput->key = 'com.clover.tender.cash';
    $request->tenderInput->label = 'Cash';
    $request->tenderInput->opensCashDrawer = false;
    $request->raw = false;
    $request->xApideckAppId = 'consequatur';
    $request->xApideckConsumerId = 'esse';
    $request->xApideckServiceId = 'ipsam';

    $requestSecurity = new TendersAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tenders->tendersAdd($request, $requestSecurity);

    if ($response->createTenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tendersAll

List Tenders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TendersAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\TendersAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TendersAllRequest();
    $request->cursor = 'sit';
    $request->fields = 'voluptatum';
    $request->limit = 558065;
    $request->raw = false;
    $request->xApideckAppId = 'repudiandae';
    $request->xApideckConsumerId = 'corporis';
    $request->xApideckServiceId = 'et';

    $requestSecurity = new TendersAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tenders->tendersAll($request, $requestSecurity);

    if ($response->getTendersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tendersDelete

Delete Tender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TendersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\TendersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TendersDeleteRequest();
    $request->id = '862065e9-04f3-4b11-94b8-abf603a79f9d';
    $request->raw = false;
    $request->xApideckAppId = 'delectus';
    $request->xApideckConsumerId = 'voluptates';
    $request->xApideckServiceId = 'perferendis';

    $requestSecurity = new TendersDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tenders->tendersDelete($request, $requestSecurity);

    if ($response->deleteTenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tendersOne

Get Tender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TendersOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\TendersOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TendersOneRequest();
    $request->fields = 'est';
    $request->id = 'b7da8a50-ce18-47f8-abc1-73d689eee952';
    $request->raw = false;
    $request->xApideckAppId = 'ex';
    $request->xApideckConsumerId = 'maiores';
    $request->xApideckServiceId = 'corrupti';

    $requestSecurity = new TendersOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tenders->tendersOne($request, $requestSecurity);

    if ($response->getTenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tendersUpdate

Update Tender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TendersUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TenderInput;
use \OpenAPI\OpenAPI\Models\Operations\TendersUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TendersUpdateRequest();
    $request->tenderInput = new TenderInput();
    $request->tenderInput->active = true;
    $request->tenderInput->allowsTipping = false;
    $request->tenderInput->editable = true;
    $request->tenderInput->hidden = true;
    $request->tenderInput->key = 'com.clover.tender.cash';
    $request->tenderInput->label = 'Cash';
    $request->tenderInput->opensCashDrawer = false;
    $request->id = 'd986e881-ead4-4f0e-9012-563f94e29e97';
    $request->raw = false;
    $request->xApideckAppId = 'adipisci';
    $request->xApideckConsumerId = 'eveniet';
    $request->xApideckServiceId = 'occaecati';

    $requestSecurity = new TendersUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tenders->tendersUpdate($request, $requestSecurity);

    if ($response->updateTenderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
