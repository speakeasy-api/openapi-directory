# SDK

## Overview

 Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals, resources, and even your team. 

Amazon Web Services documentation
<https://docs.aws.amazon.com/honeycode/>
### Available Operations

* [batchCreateTableRows](#batchcreatetablerows) - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
* [batchDeleteTableRows](#batchdeletetablerows) -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 
* [batchUpdateTableRows](#batchupdatetablerows) - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [batchUpsertTableRows](#batchupserttablerows) - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
* [describeTableDataImportJob](#describetabledataimportjob) -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 
* [getScreenData](#getscreendata) -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 
* [invokeScreenAutomation](#invokescreenautomation) -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 
* [listTableColumns](#listtablecolumns) -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 
* [listTableRows](#listtablerows) -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 
* [listTables](#listtables) -  The ListTables API allows you to retrieve a list of all the tables in a workbook. 
* [listTagsForResource](#listtagsforresource) -  The ListTagsForResource API allows you to return a resource's tags. 
* [queryTableRows](#querytablerows) -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 
* [startTableDataImportJob](#starttabledataimportjob) -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 
* [tagResource](#tagresource) -  The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 
* [untagResource](#untagresource) -  The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

## batchCreateTableRows

<p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreateTableRowsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CreateRowData;
use \OpenAPI\OpenAPI\Models\Shared\CellInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCreateTableRowsRequest();
    $request->requestBody = new BatchCreateTableRowsRequestBody();
    $request->requestBody->clientRequestToken = 'suscipit';
    $request->requestBody->rowsToCreate = [
        new CreateRowData(),
        new CreateRowData(),
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->tableId = 'minus';
    $request->workbookId = 'placeat';

    $response = $sdk->sdk->batchCreateTableRows($request);

    if ($response->batchCreateTableRowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteTableRows

 The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteTableRowsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteTableRowsRequest();
    $request->requestBody = new BatchDeleteTableRowsRequestBody();
    $request->requestBody->clientRequestToken = 'voluptatum';
    $request->requestBody->rowIds = [
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->tableId = 'ipsam';
    $request->workbookId = 'repellendus';

    $response = $sdk->sdk->batchDeleteTableRows($request);

    if ($response->batchDeleteTableRowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpdateTableRows

<p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdateTableRowsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRowData;
use \OpenAPI\OpenAPI\Models\Shared\CellInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdateTableRowsRequest();
    $request->requestBody = new BatchUpdateTableRowsRequestBody();
    $request->requestBody->clientRequestToken = 'sapiente';
    $request->requestBody->rowsToUpdate = [
        new UpdateRowData(),
        new UpdateRowData(),
        new UpdateRowData(),
        new UpdateRowData(),
    ];
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->tableId = 'esse';
    $request->workbookId = 'totam';

    $response = $sdk->sdk->batchUpdateTableRows($request);

    if ($response->batchUpdateTableRowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpsertTableRows

<p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpsertTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpsertTableRowsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\UpsertRowData;
use \OpenAPI\OpenAPI\Models\Shared\CellInput;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpsertTableRowsRequest();
    $request->requestBody = new BatchUpsertTableRowsRequestBody();
    $request->requestBody->clientRequestToken = 'porro';
    $request->requestBody->rowsToUpsert = [
        new UpsertRowData(),
        new UpsertRowData(),
        new UpsertRowData(),
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';
    $request->tableId = 'optio';
    $request->workbookId = 'totam';

    $response = $sdk->sdk->batchUpsertTableRows($request);

    if ($response->batchUpsertTableRowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTableDataImportJob

 The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTableDataImportJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTableDataImportJobRequest();
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->jobId = 'esse';
    $request->tableId = 'ipsum';
    $request->workbookId = 'excepturi';

    $response = $sdk->sdk->describeTableDataImportJob($request);

    if ($response->describeTableDataImportJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getScreenData

 The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenDataRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetScreenDataRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\VariableValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetScreenDataRequest();
    $request->requestBody = new GetScreenDataRequestBody();
    $request->requestBody->appId = 'aspernatur';
    $request->requestBody->maxResults = 18789;
    $request->requestBody->nextToken = 'ad';
    $request->requestBody->screenId = 'natus';
    $request->requestBody->variables = [
        'iste' => new VariableValue(),
    ];
    $request->requestBody->workbookId = 'dolor';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->getScreenData($request);

    if ($response->getScreenDataResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invokeScreenAutomation

 The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvokeScreenAutomationRequest;
use \OpenAPI\OpenAPI\Models\Operations\InvokeScreenAutomationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\VariableValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvokeScreenAutomationRequest();
    $request->requestBody = new InvokeScreenAutomationRequestBody();
    $request->requestBody->clientRequestToken = 'iste';
    $request->requestBody->rowId = 'iure';
    $request->requestBody->variables = [
        'quidem' => new VariableValue(),
        'architecto' => new VariableValue(),
        'ipsa' => new VariableValue(),
        'reiciendis' => new VariableValue(),
    ];
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->appId = 'nobis';
    $request->automationId = 'enim';
    $request->screenId = 'omnis';
    $request->workbookId = 'nemo';

    $response = $sdk->sdk->invokeScreenAutomation($request);

    if ($response->invokeScreenAutomationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTableColumns

 The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTableColumnsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTableColumnsRequest();
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->nextToken = 'architecto';
    $request->tableId = 'mollitia';
    $request->workbookId = 'dolorem';

    $response = $sdk->sdk->listTableColumns($request);

    if ($response->listTableColumnsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTableRows

 The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTableRowsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTableRowsRequest();
    $request->requestBody = new ListTableRowsRequestBody();
    $request->requestBody->maxResults = 635059;
    $request->requestBody->nextToken = 'consequuntur';
    $request->requestBody->rowIds = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->maxResults = 'laborum';
    $request->nextToken = 'animi';
    $request->tableId = 'enim';
    $request->workbookId = 'odit';

    $response = $sdk->sdk->listTableRows($request);

    if ($response->listTableRowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTables

 The ListTables API allows you to retrieve a list of all the tables in a workbook. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTablesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTablesRequest();
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';
    $request->maxResults = 97101;
    $request->nextToken = 'error';
    $request->workbookId = 'temporibus';

    $response = $sdk->sdk->listTables($request);

    if ($response->listTablesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 The ListTagsForResource API allows you to return a resource's tags. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->resourceArn = 'voluptatibus';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryTableRows

 The QueryTableRows API allows you to use a filter formula to query for specific rows in a table. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QueryTableRowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\QueryTableRowsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\QueryTableRowsRequestBodyFilterFormula;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryTableRowsRequest();
    $request->requestBody = new QueryTableRowsRequestBody();
    $request->requestBody->filterFormula = new QueryTableRowsRequestBodyFilterFormula();
    $request->requestBody->filterFormula->contextRowId = 'ipsa';
    $request->requestBody->filterFormula->formula = 'omnis';
    $request->requestBody->maxResults = 451159;
    $request->requestBody->nextToken = 'cum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->maxResults = 'dolore';
    $request->nextToken = 'iusto';
    $request->tableId = 'dicta';
    $request->workbookId = 'harum';

    $response = $sdk->sdk->queryTableRows($request);

    if ($response->queryTableRowsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTableDataImportJob

 The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTableDataImportJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartTableDataImportJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartTableDataImportJobRequestBodyDataFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartTableDataImportJobRequestBodyDataSource;
use \OpenAPI\OpenAPI\Models\Shared\ImportDataSourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\StartTableDataImportJobRequestBodyImportOptions;
use \OpenAPI\OpenAPI\Models\Shared\DelimitedTextImportOptions;
use \OpenAPI\OpenAPI\Models\Shared\ImportDataCharacterEncodingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DestinationOptions;
use \OpenAPI\OpenAPI\Models\Shared\SourceDataColumnProperties;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTableDataImportJobRequest();
    $request->requestBody = new StartTableDataImportJobRequestBody();
    $request->requestBody->clientRequestToken = 'enim';
    $request->requestBody->dataFormat = StartTableDataImportJobRequestBodyDataFormatEnum::DELIMITED_TEXT;
    $request->requestBody->dataSource = new StartTableDataImportJobRequestBodyDataSource();
    $request->requestBody->dataSource->dataSourceConfig = new ImportDataSourceConfig();
    $request->requestBody->dataSource->dataSourceConfig->dataSourceUrl = 'accusamus';
    $request->requestBody->importOptions = new StartTableDataImportJobRequestBodyImportOptions();
    $request->requestBody->importOptions->delimitedTextOptions = new DelimitedTextImportOptions();
    $request->requestBody->importOptions->delimitedTextOptions->dataCharacterEncoding = ImportDataCharacterEncodingEnum::ISO88591;
    $request->requestBody->importOptions->delimitedTextOptions->delimiter = 'repudiandae';
    $request->requestBody->importOptions->delimitedTextOptions->hasHeaderRow = false;
    $request->requestBody->importOptions->delimitedTextOptions->ignoreEmptyRows = false;
    $request->requestBody->importOptions->destinationOptions = new DestinationOptions();
    $request->requestBody->importOptions->destinationOptions->columnMap = [
        'ipsum' => new SourceDataColumnProperties(),
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->tableId = 'voluptates';
    $request->workbookId = 'quasi';

    $response = $sdk->sdk->startTableDataImportJob($request);

    if ($response->startTableDataImportJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'sint' => 'veritatis',
        'itaque' => 'incidunt',
        'enim' => 'consequatur',
        'est' => 'quibusdam',
    ];
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->resourceArn = 'aliquid';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table, screen and screen-automation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->resourceArn = 'fugit';
    $request->tagKeys = [
        'excepturi',
        'tempora',
        'facilis',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
