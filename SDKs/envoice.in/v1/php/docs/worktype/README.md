# workType

### Available Operations

* [workTypeApiAll](#worktypeapiall) - Return all work types for the account
* [workTypeApiDeleteForm](#worktypeapideleteform) - Delete an existing work type
* [workTypeApiDeleteJson](#worktypeapideletejson) - Delete an existing work type
* [workTypeApiDeleteRaw](#worktypeapideleteraw) - Delete an existing work type
* [workTypeApiDetails](#worktypeapidetails) - Return work type details
* [workTypeApiNewForm](#worktypeapinewform) - Create a work type
* [workTypeApiNewJson](#worktypeapinewjson) - Create a work type
* [workTypeApiNewRaw](#worktypeapinewraw) - Create a work type
* [workTypeApiSearch](#worktypeapisearch) - Return all work types for the account that match the query param
* [workTypeApiUpdateForm](#worktypeapiupdateform) - Update an existing work type
* [workTypeApiUpdateJson](#worktypeapiupdatejson) - Update an existing work type
* [workTypeApiUpdateRaw](#worktypeapiupdateraw) - Update an existing work type

## workTypeApiAll

Return all work types for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiAllRequest();
    $request->xAuthKey = 'exercitationem';
    $request->xAuthSecret = 'quam';

    $response = $sdk->workType->workTypeApiAll($request);

    if ($response->workTypeDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiDeleteForm

Delete an existing work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkTypeDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiDeleteFormRequest();
    $request->workTypeDeleteApiModel = new WorkTypeDeleteApiModel();
    $request->workTypeDeleteApiModel->id = 211455;
    $request->xAuthKey = 'modi';
    $request->xAuthSecret = 'ipsa';

    $response = $sdk->workType->workTypeApiDeleteForm($request);

    if ($response->workTypeApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiDeleteJson

Delete an existing work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkTypeDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiDeleteJsonRequest();
    $request->workTypeDeleteApiModel = new WorkTypeDeleteApiModel();
    $request->workTypeDeleteApiModel->id = 575534;
    $request->xAuthKey = 'vero';
    $request->xAuthSecret = 'sequi';

    $response = $sdk->workType->workTypeApiDeleteJson($request);

    if ($response->workTypeApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiDeleteRaw

Delete an existing work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiDeleteRawRequest();
    $request->requestBody = 'repudiandae';
    $request->xAuthKey = 'cum';
    $request->xAuthSecret = 'dicta';

    $response = $sdk->workType->workTypeApiDeleteRaw($request);

    if ($response->workTypeApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiDetails

Return work type details

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiDetailsRequest();
    $request->workTypeId = 936928;
    $request->xAuthKey = 'veniam';
    $request->xAuthSecret = 'animi';

    $response = $sdk->workType->workTypeApiDetails($request);

    if ($response->workTypeDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiNewForm

Create a work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkTypeCreateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiNewFormRequest();
    $request->workTypeCreateApiModel = new WorkTypeCreateApiModel();
    $request->workTypeCreateApiModel->title = 'Mr.';
    $request->xAuthKey = 'nam';
    $request->xAuthSecret = 'dicta';

    $response = $sdk->workType->workTypeApiNewForm($request);

    if ($response->workTypeApiNewForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiNewJson

Create a work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkTypeCreateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiNewJsonRequest();
    $request->workTypeCreateApiModel = new WorkTypeCreateApiModel();
    $request->workTypeCreateApiModel->title = 'Mr.';
    $request->xAuthKey = 'necessitatibus';
    $request->xAuthSecret = 'nobis';

    $response = $sdk->workType->workTypeApiNewJson($request);

    if ($response->workTypeApiNewJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiNewRaw

Create a work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiNewRawRequest();
    $request->requestBody = 'ipsa';
    $request->xAuthKey = 'ducimus';
    $request->xAuthSecret = 'maiores';

    $response = $sdk->workType->workTypeApiNewRaw($request);

    if ($response->workTypeApiNewRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiSearch

Return all work types for the account that match the query param

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiSearchQueryOptionsOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiSearchRequest();
    $request->queryOptionsOrder = WorkTypeApiSearchQueryOptionsOrderEnum::NONE;
    $request->queryOptionsOrderBy = 'quasi';
    $request->queryOptionsPage = 386447;
    $request->queryOptionsPageSize = 863471;
    $request->queryOptionsQuery = 'libero';
    $request->xAuthKey = 'excepturi';
    $request->xAuthSecret = 'occaecati';

    $response = $sdk->workType->workTypeApiSearch($request);

    if ($response->workTypeDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiUpdateForm

Update an existing work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkTypeUpdateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiUpdateFormRequest();
    $request->workTypeUpdateApiModel = new WorkTypeUpdateApiModel();
    $request->workTypeUpdateApiModel->id = 367917;
    $request->workTypeUpdateApiModel->title = 'Mrs.';
    $request->xAuthKey = 'nostrum';
    $request->xAuthSecret = 'doloribus';

    $response = $sdk->workType->workTypeApiUpdateForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiUpdateJson

Update an existing work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkTypeUpdateApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiUpdateJsonRequest();
    $request->workTypeUpdateApiModel = new WorkTypeUpdateApiModel();
    $request->workTypeUpdateApiModel->id = 757364;
    $request->workTypeUpdateApiModel->title = 'Ms.';
    $request->xAuthKey = 'enim';
    $request->xAuthSecret = 'hic';

    $response = $sdk->workType->workTypeApiUpdateJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## workTypeApiUpdateRaw

Update an existing work type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WorkTypeApiUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkTypeApiUpdateRawRequest();
    $request->requestBody = 'animi';
    $request->xAuthKey = 'quas';
    $request->xAuthSecret = 'totam';

    $response = $sdk->workType->workTypeApiUpdateRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
