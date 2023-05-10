<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddLFTagsToResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddLFTagsToResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LFTagPair;
use \OpenAPI\OpenAPI\Models\Operations\AddLFTagsToResourceRequestBodyResource;
use \OpenAPI\OpenAPI\Models\Shared\DataCellsFilterResource;
use \OpenAPI\OpenAPI\Models\Shared\DataLocationResource;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseResource;
use \OpenAPI\OpenAPI\Models\Shared\LFTagKeyResource;
use \OpenAPI\OpenAPI\Models\Shared\LFTagPolicyResource;
use \OpenAPI\OpenAPI\Models\Shared\LFTag;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TableResource;
use \OpenAPI\OpenAPI\Models\Shared\TableWithColumnsResource;
use \OpenAPI\OpenAPI\Models\Shared\ColumnWildcard;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddLFTagsToResourceRequest();
    $request->requestBody = new AddLFTagsToResourceRequestBody();
    $request->requestBody->catalogId = 'corrupti';
    $request->requestBody->lfTags = [
        new LFTagPair(),
        new LFTagPair(),
        new LFTagPair(),
    ];
    $request->requestBody->resource = new AddLFTagsToResourceRequestBodyResource();
    $request->requestBody->resource->catalog = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->requestBody->resource->dataCellsFilter = new DataCellsFilterResource();
    $request->requestBody->resource->dataCellsFilter->databaseName = 'error';
    $request->requestBody->resource->dataCellsFilter->name = 'Rick Kertzmann';
    $request->requestBody->resource->dataCellsFilter->tableCatalogId = 'ipsa';
    $request->requestBody->resource->dataCellsFilter->tableName = 'delectus';
    $request->requestBody->resource->dataLocation = new DataLocationResource();
    $request->requestBody->resource->dataLocation->catalogId = 'tempora';
    $request->requestBody->resource->dataLocation->resourceArn = 'suscipit';
    $request->requestBody->resource->database = new DatabaseResource();
    $request->requestBody->resource->database->catalogId = 'molestiae';
    $request->requestBody->resource->database->name = 'Irving Lehner';
    $request->requestBody->resource->lfTag = new LFTagKeyResource();
    $request->requestBody->resource->lfTag->catalogId = 'nisi';
    $request->requestBody->resource->lfTag->tagKey = 'recusandae';
    $request->requestBody->resource->lfTag->tagValues = [
        'ab',
        'quis',
        'veritatis',
        'deserunt',
    ];
    $request->requestBody->resource->lfTagPolicy = new LFTagPolicyResource();
    $request->requestBody->resource->lfTagPolicy->catalogId = 'perferendis';
    $request->requestBody->resource->lfTagPolicy->expression = [
        new LFTag(),
        new LFTag(),
    ];
    $request->requestBody->resource->lfTagPolicy->resourceType = ResourceTypeEnum::TABLE;
    $request->requestBody->resource->table = new TableResource();
    $request->requestBody->resource->table->catalogId = 'sapiente';
    $request->requestBody->resource->table->databaseName = 'quo';
    $request->requestBody->resource->table->name = 'Teri Strosin';
    $request->requestBody->resource->table->tableWildcard = [
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
        'nam' => 'officia',
    ];
    $request->requestBody->resource->tableWithColumns = new TableWithColumnsResource();
    $request->requestBody->resource->tableWithColumns->catalogId = 'occaecati';
    $request->requestBody->resource->tableWithColumns->columnNames = [
        'deleniti',
    ];
    $request->requestBody->resource->tableWithColumns->columnWildcard = new ColumnWildcard();
    $request->requestBody->resource->tableWithColumns->columnWildcard->excludedColumnNames = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->requestBody->resource->tableWithColumns->databaseName = 'molestiae';
    $request->requestBody->resource->tableWithColumns->name = 'Norma Ryan';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->addLFTagsToResource($request);

    if ($response->addLFTagsToResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->