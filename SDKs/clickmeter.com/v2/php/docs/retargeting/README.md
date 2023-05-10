# retargeting

### Available Operations

* [retargetingCount](#retargetingcount) - Retrieve count of retargeting scripts
* [retargetingDelete](#retargetingdelete) - Deletes a retargeting script (and remove associations)
* [retargetingGet](#retargetingget) - List of all the retargeting scripts associated to the user
* [retargetingGetDatapoints](#retargetinggetdatapoints) - List of all the datapoints associated to the retargeting script.
* [retargetingGetDatapointsCount](#retargetinggetdatapointscount) - Count the datapoints associated to the retargeting script.
* [retargetingPostForm](#retargetingpostform) - Updates a retargeting script
* [retargetingPostJson](#retargetingpostjson) - Updates a retargeting script
* [retargetingPostRaw](#retargetingpostraw) - Updates a retargeting script
* [retargetingPutForm](#retargetingputform) - Creates a retargeting script
* [retargetingPutJson](#retargetingputjson) - Creates a retargeting script
* [retargetingPutRaw](#retargetingputraw) - Creates a retargeting script
* [getRetargetingId](#getretargetingid) - Get a retargeting script object

## retargetingCount

Retrieve count of retargeting scripts

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
    $response = $sdk->retargeting->retargetingCount();

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingDelete

Deletes a retargeting script (and remove associations)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetargetingDeleteRequest();
    $request->id = 942584;

    $response = $sdk->retargeting->retargetingDelete($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingGet

List of all the retargeting scripts associated to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetargetingGetRequest();
    $request->limit = 201517;
    $request->offset = 633998;

    $response = $sdk->retargeting->retargetingGet($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingGetDatapoints

List of all the datapoints associated to the retargeting script.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingGetDatapointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingGetDatapointsSortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingGetDatapointsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetargetingGetDatapointsRequest();
    $request->createdAfter = 'corrupti';
    $request->createdBefore = 'pariatur';
    $request->id = 519643;
    $request->limit = 940210;
    $request->offset = 348783;
    $request->onlyFavorites = false;
    $request->sortBy = 'nobis';
    $request->sortDirection = RetargetingGetDatapointsSortDirectionEnum::ASC;
    $request->status = RetargetingGetDatapointsStatusEnum::PAUSED;
    $request->tags = 'sed';
    $request->textSearch = 'reiciendis';

    $response = $sdk->retargeting->retargetingGetDatapoints($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingGetDatapointsCount

Count the datapoints associated to the retargeting script.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingGetDatapointsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingGetDatapointsCountStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetargetingGetDatapointsCountRequest();
    $request->createdAfter = 'explicabo';
    $request->createdBefore = 'asperiores';
    $request->id = 707918;
    $request->onlyFavorites = false;
    $request->status = RetargetingGetDatapointsCountStatusEnum::ACTIVE;
    $request->tags = 'expedita';
    $request->textSearch = 'ab';

    $response = $sdk->retargeting->retargetingGetDatapointsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingPostForm

Updates a retargeting script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingPostFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoRetargetingRetargetingScript;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetargetingPostFormRequest();
    $request->apiCoreDtoRetargetingRetargetingScript = new ApiCoreDtoRetargetingRetargetingScript();
    $request->apiCoreDtoRetargetingRetargetingScript->id = 611749;
    $request->apiCoreDtoRetargetingRetargetingScript->name = 'Janie Cremin';
    $request->apiCoreDtoRetargetingRetargetingScript->script = 'quidem';
    $request->id = 131289;

    $response = $sdk->retargeting->retargetingPostForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingPostJson

Updates a retargeting script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingPostJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoRetargetingRetargetingScript;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetargetingPostJsonRequest();
    $request->apiCoreDtoRetargetingRetargetingScript = new ApiCoreDtoRetargetingRetargetingScript();
    $request->apiCoreDtoRetargetingRetargetingScript->id = 378326;
    $request->apiCoreDtoRetargetingRetargetingScript->name = 'Joe Hoppe';
    $request->apiCoreDtoRetargetingRetargetingScript->script = 'illo';
    $request->id = 967795;

    $response = $sdk->retargeting->retargetingPostJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingPostRaw

Updates a retargeting script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetargetingPostRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetargetingPostRawRequest();
    $request->requestBody = 'perferendis';
    $request->id = 546885;

    $response = $sdk->retargeting->retargetingPostRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingPutForm

Creates a retargeting script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoRetargetingRetargetingScript;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoRetargetingRetargetingScript();
    $request->id = 979574;
    $request->name = 'Tammy Medhurst';
    $request->script = 'ipsum';

    $response = $sdk->retargeting->retargetingPutForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingPutJson

Creates a retargeting script

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoRetargetingRetargetingScript;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoRetargetingRetargetingScript();
    $request->id = 406733;
    $request->name = 'Isaac Wolf';
    $request->script = 'voluptate';

    $response = $sdk->retargeting->retargetingPutJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retargetingPutRaw

Creates a retargeting script

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
'reiciendis'

    $response = $sdk->retargeting->retargetingPutRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRetargetingId

Get a retargeting script object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRetargetingIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRetargetingIdRequest();
    $request->id = 401713;

    $response = $sdk->retargeting->getRetargetingId($request);

    if ($response->apiCoreDtoRetargetingRetargetingScript !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
