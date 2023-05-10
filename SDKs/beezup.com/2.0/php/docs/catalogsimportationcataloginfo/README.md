# catalogsImportationCatalogInfo

### Available Operations

* [importationConfigureCatalogColumn](#importationconfigurecatalogcolumn) - Configure catalog column
* [importationDeleteCustomColumn](#importationdeletecustomcolumn) - Delete Custom Column
* [importationGetCustomColumnExpression](#importationgetcustomcolumnexpression) - Get the encrypted custom column expression in this importation
* [importationGetCustomColumns](#importationgetcustomcolumns) - Get custom columns currently place in this importation
* [importationGetDetectedCatalogColumns](#importationgetdetectedcatalogcolumns) - Get detected catalog columns during this importation.
* [importationGetProductSample](#importationgetproductsample) - Get the product sample related to this importation with all columns (catalog and custom)
* [importationGetProductSampleCustomColumnValue](#importationgetproductsamplecustomcolumnvalue) - Get product sample custom column value related to this importation.
* [importationIgnoreColumn](#importationignorecolumn) - Ignore Column
* [importationMapCatalogColumn](#importationmapcatalogcolumn) - Map catalog column to a BeezUP column
* [importationMapCustomColumn](#importationmapcustomcolumn) - Map custom column to a BeezUP column
* [importationReattendColumn](#importationreattendcolumn) - Reattend Column
* [importationSaveCustomColumn](#importationsavecustomcolumn) - Create or replace a custom column
* [importationUnmapCatalogColumn](#importationunmapcatalogcolumn) - Unmap catalog column
* [importationUnmapCustomColumn](#importationunmapcustomcolumn) - Unmap custom column

## importationConfigureCatalogColumn

Configure catalog column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationConfigureCatalogColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureCatalogColumnCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\CatalogColumn;
use \OpenAPI\OpenAPI\Models\Shared\ColumnConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonColumnDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonColumnImportanceEnum;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateProductValueConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CompareOptionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateProductValueStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CatalogColumnLinks;
use \OpenAPI\OpenAPI\Models\Shared\LinksCatalogChangeCatalogColumnUserNameLink;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonInfoSummaries;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonErrorSummary;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonExceptionDetail;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonInfoSummary;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonSuccessSummary;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonWarningSummary;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonLinkParameter3;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonParameterInEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonLOVLink3;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonLinkParameterProperty3;
use \OpenAPI\OpenAPI\Models\Shared\BeezUPCommonParameterTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationConfigureCatalogColumnRequest();
    $request->columnId = 'ipsum';
    $request->configureCatalogColumnCatalogRequest = new ConfigureCatalogColumnCatalogRequest();
    $request->configureCatalogColumnCatalogRequest->catalogColumn = new CatalogColumn();
    $request->configureCatalogColumnCatalogRequest->catalogColumn->catalogColumnName = 'SKU';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration = new ColumnConfiguration();
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration->beezUPColumnName = 'CategoryFirstLevel';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration->canBeTruncated = true;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration->columnCultureName = 'fr-FR';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration->columnDataType = BeezUPCommonColumnDataTypeEnum::STRING;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration->columnFormat = 'MM/dd/yyyy';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration->columnImportance = BeezUPCommonColumnImportanceEnum::REQUIRED;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->configuration->displayGroupName = 'Category';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->duplicateProductValueConfiguration = new DuplicateProductValueConfiguration();
    $request->configureCatalogColumnCatalogRequest->catalogColumn->duplicateProductValueConfiguration->compareOptions = CompareOptionsEnum::IGNORE_CASE;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->duplicateProductValueConfiguration->strategy = DuplicateProductValueStrategyEnum::KEEP_FIRST_DUPLICATE_PRODUCT_ONLY;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->id = '8f6671d6-a9bc-4de0-a0c4-4643b0c3f871';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->ignored = false;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links = new CatalogColumnLinks();
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename = new LinksCatalogChangeCatalogColumnUserNameLink();
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->allOptionalParamsProvided = false;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->allRequiredParamsProvided = false;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->description = 'This is a description link';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->docUrl = 'https://api-docs.beezup.com/#operation/EnableChannelCatalog';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->href = '/v2/marketplaces/orders/{marketplaceTechnicalCode}/{accountId}/{beezUPOrderId}';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->info = new BeezUPCommonInfoSummaries();
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->info->errors = [
        new BeezUPCommonErrorSummary(),
        new BeezUPCommonErrorSummary(),
        new BeezUPCommonErrorSummary(),
    ];
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->info->informations = [
        new BeezUPCommonInfoSummary(),
        new BeezUPCommonInfoSummary(),
        new BeezUPCommonInfoSummary(),
    ];
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->info->successes = [
        new BeezUPCommonSuccessSummary(),
        new BeezUPCommonSuccessSummary(),
        new BeezUPCommonSuccessSummary(),
    ];
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->info->warnings = [
        new BeezUPCommonWarningSummary(),
        new BeezUPCommonWarningSummary(),
        new BeezUPCommonWarningSummary(),
        new BeezUPCommonWarningSummary(),
    ];
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->label = 'The translated label';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->method = BeezUPCommonHttpMethodEnum::GET;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->operationId = 'GetOrder';
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->parameters = [
        'praesentium' => new BeezUPCommonLinkParameter3(),
        'rem' => new BeezUPCommonLinkParameter3(),
    ];
    $request->configureCatalogColumnCatalogRequest->catalogColumn->links->rename->urlTemplated = false;
    $request->configureCatalogColumnCatalogRequest->catalogColumn->userColumName = 'My SKU';
    $request->executionId = 'voluptates';
    $request->storeId = 'quasi';

    $response = $sdk->catalogsImportationCatalogInfo->importationConfigureCatalogColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationDeleteCustomColumn

Delete Custom Column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationDeleteCustomColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationDeleteCustomColumnRequest();
    $request->columnId = 'repudiandae';
    $request->executionId = 'sint';
    $request->storeId = 'veritatis';

    $response = $sdk->catalogsImportationCatalogInfo->importationDeleteCustomColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetCustomColumnExpression

Get the encrypted custom column expression in this importation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetCustomColumnExpressionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetCustomColumnExpressionRequest();
    $request->columnId = 'itaque';
    $request->executionId = 'incidunt';
    $request->storeId = 'enim';

    $response = $sdk->catalogsImportationCatalogInfo->importationGetCustomColumnExpression($request);

    if ($response->importationGetCustomColumnExpression200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetCustomColumns

Get custom columns currently place in this importation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetCustomColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetCustomColumnsRequest();
    $request->executionId = 'consequatur';
    $request->storeId = 'est';

    $response = $sdk->catalogsImportationCatalogInfo->importationGetCustomColumns($request);

    if ($response->importationCustomColumnList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetDetectedCatalogColumns

Get detected catalog columns during this importation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetDetectedCatalogColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetDetectedCatalogColumnsRequest();
    $request->executionId = 'quibusdam';
    $request->storeId = 'explicabo';

    $response = $sdk->catalogsImportationCatalogInfo->importationGetDetectedCatalogColumns($request);

    if ($response->detectedCatalogColumnList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetProductSample

Get the product sample related to this importation with all columns (catalog and custom)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetProductSampleRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetProductSampleRequest();
    $request->executionId = 'deserunt';
    $request->productSampleIndex = 716327;
    $request->storeId = 'quibusdam';

    $response = $sdk->catalogsImportationCatalogInfo->importationGetProductSample($request);

    if ($response->productSample !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationGetProductSampleCustomColumnValue

/!\ Use this operation only when you just changed the custom column expression and you want to get a precise the property value. Otherwise use the operation Importation_GetProductSample which will give you all property values

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationGetProductSampleCustomColumnValueRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationGetProductSampleCustomColumnValueRequest();
    $request->columnId = 'labore';
    $request->executionId = 'modi';
    $request->productSampleIndex = 183191;
    $request->storeId = 'aliquid';

    $response = $sdk->catalogsImportationCatalogInfo->importationGetProductSampleCustomColumnValue($request);

    if ($response->importationGetProductSampleCustomColumnValue200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationIgnoreColumn

Ignore Column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationIgnoreColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationIgnoreColumnRequest();
    $request->columnId = 'cupiditate';
    $request->executionId = 'quos';
    $request->storeId = 'perferendis';

    $response = $sdk->catalogsImportationCatalogInfo->importationIgnoreColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationMapCatalogColumn

Map catalog column to a BeezUP column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationMapCatalogColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\MapBeezUPColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationMapCatalogColumnRequest();
    $request->columnId = 'magni';
    $request->executionId = 'assumenda';
    $request->mapBeezUPColumnRequest = new MapBeezUPColumnRequest();
    $request->mapBeezUPColumnRequest->beezUPColumnName = 'CategoryFirstLevel';
    $request->storeId = 'ipsam';

    $response = $sdk->catalogsImportationCatalogInfo->importationMapCatalogColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationMapCustomColumn

Map custom column to a BeezUP column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationMapCustomColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\MapBeezUPColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationMapCustomColumnRequest();
    $request->columnId = 'alias';
    $request->executionId = 'fugit';
    $request->mapBeezUPColumnRequest = new MapBeezUPColumnRequest();
    $request->mapBeezUPColumnRequest->beezUPColumnName = 'CategoryFirstLevel';
    $request->storeId = 'dolorum';

    $response = $sdk->catalogsImportationCatalogInfo->importationMapCustomColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationReattendColumn

Reattend Column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationReattendColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationReattendColumnRequest();
    $request->columnId = 'excepturi';
    $request->executionId = 'tempora';
    $request->storeId = 'facilis';

    $response = $sdk->catalogsImportationCatalogInfo->importationReattendColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationSaveCustomColumn

Create or replace a custom column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationSaveCustomColumnRequest;
use \OpenAPI\OpenAPI\Models\Shared\ChangeCustomColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationSaveCustomColumnRequest();
    $request->changeCustomColumnRequest = new ChangeCustomColumnRequest();
    $request->changeCustomColumnRequest->encryptedBlocklyExpression = 'apokpoa,opz,sixsoisiosnoisn';
    $request->changeCustomColumnRequest->encryptedExpression = 'uziushdczaniodnndonisodndsiondsoidsndoin';
    $request->changeCustomColumnRequest->userColumName = 'My SKU';
    $request->columnId = 'tempore';
    $request->executionId = 'labore';
    $request->storeId = 'delectus';

    $response = $sdk->catalogsImportationCatalogInfo->importationSaveCustomColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationUnmapCatalogColumn

Unmap catalog column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationUnmapCatalogColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationUnmapCatalogColumnRequest();
    $request->columnId = 'eum';
    $request->executionId = 'non';
    $request->storeId = 'eligendi';

    $response = $sdk->catalogsImportationCatalogInfo->importationUnmapCatalogColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importationUnmapCustomColumn

Unmap custom column

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ImportationUnmapCustomColumnRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportationUnmapCustomColumnRequest();
    $request->columnId = 'sint';
    $request->executionId = 'aliquid';
    $request->storeId = 'provident';

    $response = $sdk->catalogsImportationCatalogInfo->importationUnmapCustomColumn($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
