# channelCatalogsGlobal

### Available Operations

* [addChannelCatalog](#addchannelcatalog) - Add a new channel catalog
* [deleteChannelCatalog](#deletechannelcatalog) - Delete the channel catalog
* [getChannelCatalog](#getchannelcatalog) - Get the channel catalog information
* [getChannelCatalogFilterOperators](#getchannelcatalogfilteroperators) - Get channel catalog filter operators
* [getChannelCatalogs](#getchannelcatalogs) - List all your current channel catalogs

## addChannelCatalog

Add a new channel catalog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AddChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddChannelCatalogRequest();
    $request->channelId = '2dc136a7-0d3d-4cc9-a825-a28a42c53e28';
    $request->storeId = '64f43358-63a1-47f7-97ec-0301fc39956b';

    $response = $sdk->channelCatalogsGlobal->addChannelCatalog($request);

    if ($response->linksGetChannelCatalogLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannelCatalog

Delete the channel catalog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelCatalogRequest();
    $request->channelCatalogId = 'perferendis';

    $response = $sdk->channelCatalogsGlobal->deleteChannelCatalog($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalog

Get the channel catalog information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogRequest();
    $request->channelCatalogId = 'nihil';

    $response = $sdk->channelCatalogsGlobal->getChannelCatalog($request);

    if ($response->channelCatalog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogFilterOperators

Get channel catalog filter operators

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->channelCatalogsGlobal->getChannelCatalogFilterOperators();

    if ($response->filterOperators !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannelCatalogs

List all your current channel catalogs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelCatalogsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelCatalogsRequest();
    $request->storeId = 'magnam';

    $response = $sdk->channelCatalogsGlobal->getChannelCatalogs($request);

    if ($response->channelCatalogList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
