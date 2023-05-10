# SDK

## Overview

<fullname>Lake Formation</fullname> <p>Defines the public endpoint for the Lake Formation service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/lakeformation/>
### Available Operations

* [addLFTagsToResource](#addlftagstoresource) - Attaches one or more LF-tags to an existing resource.
* [assumeDecoratedRoleWithSAML](#assumedecoratedrolewithsaml) - <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>
* [batchGrantPermissions](#batchgrantpermissions) - Batch operation to grant permissions to the principal.
* [batchRevokePermissions](#batchrevokepermissions) - Batch operation to revoke permissions from the principal.
* [cancelTransaction](#canceltransaction) - Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
* [commitTransaction](#committransaction) - Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
* [createDataCellsFilter](#createdatacellsfilter) - Creates a data cell filter to allow one to grant access to certain columns on certain rows.
* [createLFTag](#createlftag) - Creates an LF-tag with the specified name and values.
* [deleteDataCellsFilter](#deletedatacellsfilter) - Deletes a data cell filter.
* [deleteLFTag](#deletelftag) - Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.
* [deleteObjectsOnCancel](#deleteobjectsoncancel) - <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>
* [deregisterResource](#deregisterresource) - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
* [describeResource](#describeresource) - Retrieves the current data access role for the given resource registered in Lake Formation.
* [describeTransaction](#describetransaction) - Returns the details of a single transaction.
* [extendTransaction](#extendtransaction) - <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
* [getDataCellsFilter](#getdatacellsfilter) - Returns a data cells filter.
* [getDataLakeSettings](#getdatalakesettings) - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
* [getEffectivePermissionsForPath](#geteffectivepermissionsforpath) - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
* [getLFTag](#getlftag) - Returns an LF-tag definition.
* [getQueryState](#getquerystate) - Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.
* [getQueryStatistics](#getquerystatistics) - Retrieves statistics on the planning and execution of a query.
* [getResourceLFTags](#getresourcelftags) - Returns the LF-tags applied to a resource.
* [getTableObjects](#gettableobjects) - Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
* [getTemporaryGluePartitionCredentials](#gettemporarygluepartitioncredentials) - This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
* [getTemporaryGlueTableCredentials](#gettemporarygluetablecredentials) - Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
* [getWorkUnitResults](#getworkunitresults) - Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 
* [getWorkUnits](#getworkunits) - Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.
* [grantPermissions](#grantpermissions) - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [listDataCellsFilter](#listdatacellsfilter) - Lists all the data cell filters on a table.
* [listLFTags](#listlftags) - Lists LF-tags that the requester has permission to view. 
* [listPermissions](#listpermissions) - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
* [listResources](#listresources) - Lists the resources registered to be managed by the Data Catalog.
* [listTableStorageOptimizers](#listtablestorageoptimizers) - Returns the configuration of all storage optimizers associated with a specified table.
* [listTransactions](#listtransactions) - <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
* [putDataLakeSettings](#putdatalakesettings) - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
* [registerResource](#registerresource) - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
* [removeLFTagsFromResource](#removelftagsfromresource) - Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
* [revokePermissions](#revokepermissions) - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
* [searchDatabasesByLFTags](#searchdatabasesbylftags) - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
* [searchTablesByLFTags](#searchtablesbylftags) - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
* [startQueryPlanning](#startqueryplanning) - <p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
* [startTransaction](#starttransaction) - Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
* [updateDataCellsFilter](#updatedatacellsfilter) - Updates a data cell filter.
* [updateLFTag](#updatelftag) - Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 
* [updateResource](#updateresource) - Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 
* [updateTableObjects](#updatetableobjects) - Updates the manifest of Amazon S3 objects that make up the specified governed table.
* [updateTableStorageOptimizer](#updatetablestorageoptimizer) - Updates the configuration of the storage optimizers for a table.

## addLFTagsToResource

Attaches one or more LF-tags to an existing resource.

### Example Usage

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
    $request->requestBody->catalogId = 'iste';
    $request->requestBody->lfTags = [
        new LFTagPair(),
    ];
    $request->requestBody->resource = new AddLFTagsToResourceRequestBodyResource();
    $request->requestBody->resource->catalog = [
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
        'in' => 'corporis',
    ];
    $request->requestBody->resource->dataCellsFilter = new DataCellsFilterResource();
    $request->requestBody->resource->dataCellsFilter->databaseName = 'iste';
    $request->requestBody->resource->dataCellsFilter->name = 'Mr. Kerry Predovic';
    $request->requestBody->resource->dataCellsFilter->tableCatalogId = 'est';
    $request->requestBody->resource->dataCellsFilter->tableName = 'mollitia';
    $request->requestBody->resource->dataLocation = new DataLocationResource();
    $request->requestBody->resource->dataLocation->catalogId = 'laborum';
    $request->requestBody->resource->dataLocation->resourceArn = 'dolores';
    $request->requestBody->resource->database = new DatabaseResource();
    $request->requestBody->resource->database->catalogId = 'dolorem';
    $request->requestBody->resource->database->name = 'Rose Rolfson';
    $request->requestBody->resource->lfTag = new LFTagKeyResource();
    $request->requestBody->resource->lfTag->catalogId = 'nemo';
    $request->requestBody->resource->lfTag->tagKey = 'minima';
    $request->requestBody->resource->lfTag->tagValues = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->requestBody->resource->lfTagPolicy = new LFTagPolicyResource();
    $request->requestBody->resource->lfTagPolicy->catalogId = 'doloribus';
    $request->requestBody->resource->lfTagPolicy->expression = [
        new LFTag(),
        new LFTag(),
        new LFTag(),
        new LFTag(),
    ];
    $request->requestBody->resource->lfTagPolicy->resourceType = ResourceTypeEnum::DATABASE;
    $request->requestBody->resource->table = new TableResource();
    $request->requestBody->resource->table->catalogId = 'mollitia';
    $request->requestBody->resource->table->databaseName = 'dolorem';
    $request->requestBody->resource->table->name = 'Carlos Ziemann';
    $request->requestBody->resource->table->tableWildcard = [
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->requestBody->resource->tableWithColumns = new TableWithColumnsResource();
    $request->requestBody->resource->tableWithColumns->catalogId = 'error';
    $request->requestBody->resource->tableWithColumns->columnNames = [
        'quis',
    ];
    $request->requestBody->resource->tableWithColumns->columnWildcard = new ColumnWildcard();
    $request->requestBody->resource->tableWithColumns->columnWildcard->excludedColumnNames = [
        'laborum',
    ];
    $request->requestBody->resource->tableWithColumns->databaseName = 'animi';
    $request->requestBody->resource->tableWithColumns->name = 'Christina Satterfield';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->addLFTagsToResource($request);

    if ($response->addLFTagsToResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## assumeDecoratedRoleWithSAML

<p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssumeDecoratedRoleWithSAMLRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssumeDecoratedRoleWithSAMLRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssumeDecoratedRoleWithSAMLRequest();
    $request->requestBody = new AssumeDecoratedRoleWithSAMLRequestBody();
    $request->requestBody->durationSeconds = 673660;
    $request->requestBody->principalArn = 'quasi';
    $request->requestBody->roleArn = 'reiciendis';
    $request->requestBody->samlAssertion = 'voluptatibus';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->assumeDecoratedRoleWithSAML($request);

    if ($response->assumeDecoratedRoleWithSAMLResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGrantPermissions

Batch operation to grant permissions to the principal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGrantPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGrantPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchPermissionsRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataLakePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
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
    $request = new BatchGrantPermissionsRequest();
    $request->requestBody = new BatchGrantPermissionsRequestBody();
    $request->requestBody->catalogId = 'cum';
    $request->requestBody->entries = [
        new BatchPermissionsRequestEntry(),
    ];
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';

    $response = $sdk->sdk->batchGrantPermissions($request);

    if ($response->batchGrantPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchRevokePermissions

Batch operation to revoke permissions from the principal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchRevokePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchRevokePermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchPermissionsRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataLakePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\Resource;
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
    $request = new BatchRevokePermissionsRequest();
    $request->requestBody = new BatchRevokePermissionsRequestBody();
    $request->requestBody->catalogId = 'iusto';
    $request->requestBody->entries = [
        new BatchPermissionsRequestEntry(),
    ];
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->batchRevokePermissions($request);

    if ($response->batchRevokePermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelTransaction

Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelTransactionRequest();
    $request->requestBody = new CancelTransactionRequestBody();
    $request->requestBody->transactionId = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';

    $response = $sdk->sdk->cancelTransaction($request);

    if ($response->cancelTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commitTransaction

Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CommitTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommitTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommitTransactionRequest();
    $request->requestBody = new CommitTransactionRequestBody();
    $request->requestBody->transactionId = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->commitTransaction($request);

    if ($response->commitTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataCellsFilter

Creates a data cell filter to allow one to grant access to certain columns on certain rows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataCellsFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataCellsFilterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataCellsFilterRequestBodyTableData;
use \OpenAPI\OpenAPI\Models\Shared\ColumnWildcard;
use \OpenAPI\OpenAPI\Models\Shared\RowFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataCellsFilterRequest();
    $request->requestBody = new CreateDataCellsFilterRequestBody();
    $request->requestBody->tableData = new CreateDataCellsFilterRequestBodyTableData();
    $request->requestBody->tableData->columnNames = [
        'quibusdam',
        'explicabo',
        'deserunt',
    ];
    $request->requestBody->tableData->columnWildcard = new ColumnWildcard();
    $request->requestBody->tableData->columnWildcard->excludedColumnNames = [
        'quibusdam',
        'labore',
        'modi',
    ];
    $request->requestBody->tableData->databaseName = 'qui';
    $request->requestBody->tableData->name = 'Mr. Shelly Lueilwitz';
    $request->requestBody->tableData->rowFilter = new RowFilter();
    $request->requestBody->tableData->rowFilter->allRowsWildcard = [
        'alias' => 'fugit',
        'dolorum' => 'excepturi',
    ];
    $request->requestBody->tableData->rowFilter->filterExpression = 'tempora';
    $request->requestBody->tableData->tableCatalogId = 'facilis';
    $request->requestBody->tableData->tableName = 'tempore';
    $request->requestBody->tableData->versionId = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->createDataCellsFilter($request);

    if ($response->createDataCellsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLFTag

Creates an LF-tag with the specified name and values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLFTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateLFTagRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLFTagRequest();
    $request->requestBody = new CreateLFTagRequestBody();
    $request->requestBody->catalogId = 'necessitatibus';
    $request->requestBody->tagKey = 'sint';
    $request->requestBody->tagValues = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->createLFTag($request);

    if ($response->createLFTagResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataCellsFilter

Deletes a data cell filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataCellsFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataCellsFilterRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataCellsFilterRequest();
    $request->requestBody = new DeleteDataCellsFilterRequestBody();
    $request->requestBody->databaseName = 'magnam';
    $request->requestBody->name = 'Irving Jenkins';
    $request->requestBody->tableCatalogId = 'accusamus';
    $request->requestBody->tableName = 'non';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->deleteDataCellsFilter($request);

    if ($response->deleteDataCellsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLFTag

Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLFTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLFTagRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLFTagRequest();
    $request->requestBody = new DeleteLFTagRequestBody();
    $request->requestBody->catalogId = 'id';
    $request->requestBody->tagKey = 'blanditiis';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->deleteLFTag($request);

    if ($response->deleteLFTagResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteObjectsOnCancel

<p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObjectsOnCancelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObjectsOnCancelRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\VirtualObject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteObjectsOnCancelRequest();
    $request->requestBody = new DeleteObjectsOnCancelRequestBody();
    $request->requestBody->catalogId = 'omnis';
    $request->requestBody->databaseName = 'molestiae';
    $request->requestBody->objects = [
        new VirtualObject(),
    ];
    $request->requestBody->tableName = 'nihil';
    $request->requestBody->transactionId = 'magnam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->deleteObjectsOnCancel($request);

    if ($response->deleteObjectsOnCancelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterResource

<p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterResourceRequest();
    $request->requestBody = new DeregisterResourceRequestBody();
    $request->requestBody->resourceArn = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->deregisterResource($request);

    if ($response->deregisterResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResource

Retrieves the current data access role for the given resource registered in Lake Formation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourceRequest();
    $request->requestBody = new DescribeResourceRequestBody();
    $request->requestBody->resourceArn = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->describeResource($request);

    if ($response->describeResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTransaction

Returns the details of a single transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTransactionRequest();
    $request->requestBody = new DescribeTransactionRequestBody();
    $request->requestBody->transactionId = 'eum';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->describeTransaction($request);

    if ($response->describeTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## extendTransaction

<p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExtendTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExtendTransactionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExtendTransactionRequest();
    $request->requestBody = new ExtendTransactionRequestBody();
    $request->requestBody->transactionId = 'debitis';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->extendTransaction($request);

    if ($response->extendTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataCellsFilter

Returns a data cells filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataCellsFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataCellsFilterRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataCellsFilterRequest();
    $request->requestBody = new GetDataCellsFilterRequestBody();
    $request->requestBody->databaseName = 'repudiandae';
    $request->requestBody->name = 'Lola Koss';
    $request->requestBody->tableCatalogId = 'sed';
    $request->requestBody->tableName = 'saepe';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';

    $response = $sdk->sdk->getDataCellsFilter($request);

    if ($response->getDataCellsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataLakeSettings

Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataLakeSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataLakeSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataLakeSettingsRequest();
    $request->requestBody = new GetDataLakeSettingsRequestBody();
    $request->requestBody->catalogId = 'quo';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->getDataLakeSettings($request);

    if ($response->getDataLakeSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEffectivePermissionsForPath

Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEffectivePermissionsForPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEffectivePermissionsForPathRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEffectivePermissionsForPathRequest();
    $request->maxResults = 'accusantium';
    $request->nextToken = 'ab';
    $request->requestBody = new GetEffectivePermissionsForPathRequestBody();
    $request->requestBody->catalogId = 'maiores';
    $request->requestBody->maxResults = 697429;
    $request->requestBody->nextToken = 'ipsam';
    $request->requestBody->resourceArn = 'voluptate';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getEffectivePermissionsForPath($request);

    if ($response->getEffectivePermissionsForPathResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLFTag

Returns an LF-tag definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLFTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLFTagRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLFTagRequest();
    $request->requestBody = new GetLFTagRequestBody();
    $request->requestBody->catalogId = 'fugiat';
    $request->requestBody->tagKey = 'amet';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->getLFTag($request);

    if ($response->getLFTagResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryState

Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryStateRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryStateRequest();
    $request->requestBody = new GetQueryStateRequestBody();
    $request->requestBody->queryId = 'quis';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getQueryState($request);

    if ($response->getQueryStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryStatistics

Retrieves statistics on the planning and execution of a query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryStatisticsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryStatisticsRequest();
    $request->requestBody = new GetQueryStatisticsRequestBody();
    $request->requestBody->queryId = 'dolores';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->getQueryStatistics($request);

    if ($response->getQueryStatisticsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourceLFTags

Returns the LF-tags applied to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceLFTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceLFTagsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetResourceLFTagsRequestBodyResource;
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
    $request = new GetResourceLFTagsRequest();
    $request->requestBody = new GetResourceLFTagsRequestBody();
    $request->requestBody->catalogId = 'omnis';
    $request->requestBody->resource = new GetResourceLFTagsRequestBodyResource();
    $request->requestBody->resource->catalog = [
        'perspiciatis' => 'voluptatem',
        'porro' => 'consequuntur',
        'blanditiis' => 'error',
    ];
    $request->requestBody->resource->dataCellsFilter = new DataCellsFilterResource();
    $request->requestBody->resource->dataCellsFilter->databaseName = 'eaque';
    $request->requestBody->resource->dataCellsFilter->name = 'Jean Ferry';
    $request->requestBody->resource->dataCellsFilter->tableCatalogId = 'modi';
    $request->requestBody->resource->dataCellsFilter->tableName = 'iste';
    $request->requestBody->resource->dataLocation = new DataLocationResource();
    $request->requestBody->resource->dataLocation->catalogId = 'dolorum';
    $request->requestBody->resource->dataLocation->resourceArn = 'deleniti';
    $request->requestBody->resource->database = new DatabaseResource();
    $request->requestBody->resource->database->catalogId = 'pariatur';
    $request->requestBody->resource->database->name = 'Loren Renner';
    $request->requestBody->resource->lfTag = new LFTagKeyResource();
    $request->requestBody->resource->lfTag->catalogId = 'quos';
    $request->requestBody->resource->lfTag->tagKey = 'aliquid';
    $request->requestBody->resource->lfTag->tagValues = [
        'dolorem',
    ];
    $request->requestBody->resource->lfTagPolicy = new LFTagPolicyResource();
    $request->requestBody->resource->lfTagPolicy->catalogId = 'dolor';
    $request->requestBody->resource->lfTagPolicy->expression = [
        new LFTag(),
    ];
    $request->requestBody->resource->lfTagPolicy->resourceType = ResourceTypeEnum::DATABASE;
    $request->requestBody->resource->table = new TableResource();
    $request->requestBody->resource->table->catalogId = 'hic';
    $request->requestBody->resource->table->databaseName = 'excepturi';
    $request->requestBody->resource->table->name = 'Adrian Kuhn';
    $request->requestBody->resource->table->tableWildcard = [
        'numquam' => 'veritatis',
        'ipsa' => 'ipsa',
        'iure' => 'odio',
    ];
    $request->requestBody->resource->tableWithColumns = new TableWithColumnsResource();
    $request->requestBody->resource->tableWithColumns->catalogId = 'quaerat';
    $request->requestBody->resource->tableWithColumns->columnNames = [
        'quidem',
        'voluptatibus',
        'voluptas',
        'natus',
    ];
    $request->requestBody->resource->tableWithColumns->columnWildcard = new ColumnWildcard();
    $request->requestBody->resource->tableWithColumns->columnWildcard->excludedColumnNames = [
        'atque',
    ];
    $request->requestBody->resource->tableWithColumns->databaseName = 'sit';
    $request->requestBody->resource->tableWithColumns->name = 'Stephen Roberts';
    $request->requestBody->showAssignedLFTags = false;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->getResourceLFTags($request);

    if ($response->getResourceLFTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTableObjects

Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTableObjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTableObjectsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTableObjectsRequest();
    $request->maxResults = 'nihil';
    $request->nextToken = 'ipsum';
    $request->requestBody = new GetTableObjectsRequestBody();
    $request->requestBody->catalogId = 'voluptate';
    $request->requestBody->databaseName = 'id';
    $request->requestBody->maxResults = 906418;
    $request->requestBody->nextToken = 'eius';
    $request->requestBody->partitionPredicate = 'aspernatur';
    $request->requestBody->queryAsOfTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T08:02:18.659Z');
    $request->requestBody->tableName = 'optio';
    $request->requestBody->transactionId = 'accusamus';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->getTableObjects($request);

    if ($response->getTableObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemporaryGluePartitionCredentials

This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemporaryGluePartitionCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTemporaryGluePartitionCredentialsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetTemporaryGluePartitionCredentialsRequestBodyAuditContext;
use \OpenAPI\OpenAPI\Models\Operations\GetTemporaryGluePartitionCredentialsRequestBodyPartition;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemporaryGluePartitionCredentialsRequest();
    $request->requestBody = new GetTemporaryGluePartitionCredentialsRequestBody();
    $request->requestBody->auditContext = new GetTemporaryGluePartitionCredentialsRequestBodyAuditContext();
    $request->requestBody->auditContext->additionalAuditContext = 'totam';
    $request->requestBody->durationSeconds = 628982;
    $request->requestBody->partition = new GetTemporaryGluePartitionCredentialsRequestBodyPartition();
    $request->requestBody->partition->values = [
        'at',
    ];
    $request->requestBody->permissions = [
        PermissionEnum::DROP,
        PermissionEnum::INSERT,
    ];
    $request->requestBody->supportedPermissionTypes = [
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
        PermissionTypeEnum::COLUMN_PERMISSION,
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
    ];
    $request->requestBody->tableArn = 'esse';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'tempore';

    $response = $sdk->sdk->getTemporaryGluePartitionCredentials($request);

    if ($response->getTemporaryGluePartitionCredentialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemporaryGlueTableCredentials

Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemporaryGlueTableCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTemporaryGlueTableCredentialsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetTemporaryGlueTableCredentialsRequestBodyAuditContext;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemporaryGlueTableCredentialsRequest();
    $request->requestBody = new GetTemporaryGlueTableCredentialsRequestBody();
    $request->requestBody->auditContext = new GetTemporaryGlueTableCredentialsRequestBodyAuditContext();
    $request->requestBody->auditContext->additionalAuditContext = 'accusamus';
    $request->requestBody->durationSeconds = 253941;
    $request->requestBody->permissions = [
        PermissionEnum::ALTER,
        PermissionEnum::ASSOCIATE,
    ];
    $request->requestBody->supportedPermissionTypes = [
        PermissionTypeEnum::COLUMN_PERMISSION,
        PermissionTypeEnum::COLUMN_PERMISSION,
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
    ];
    $request->requestBody->tableArn = 'neque';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getTemporaryGlueTableCredentials($request);

    if ($response->getTemporaryGlueTableCredentialsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkUnitResults

Returns the work units resulting from the query. Work units can be executed in any order and in parallel. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkUnitResultsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkUnitResultsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkUnitResultsRequest();
    $request->requestBody = new GetWorkUnitResultsRequestBody();
    $request->requestBody->queryId = 'incidunt';
    $request->requestBody->workUnitId = 186458;
    $request->requestBody->workUnitToken = 'cupiditate';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->getWorkUnitResults($request);

    if ($response->getWorkUnitResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkUnits

Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkUnitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkUnitsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkUnitsRequest();
    $request->nextToken = 'aspernatur';
    $request->pageSize = 'dolores';
    $request->requestBody = new GetWorkUnitsRequestBody();
    $request->requestBody->nextToken = 'distinctio';
    $request->requestBody->pageSize = 704474;
    $request->requestBody->queryId = 'aliquid';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->getWorkUnits($request);

    if ($response->getWorkUnitsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## grantPermissions

<p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GrantPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GrantPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GrantPermissionsRequestBodyPrincipal;
use \OpenAPI\OpenAPI\Models\Operations\GrantPermissionsRequestBodyResource;
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
    $request = new GrantPermissionsRequest();
    $request->requestBody = new GrantPermissionsRequestBody();
    $request->requestBody->catalogId = 'odio';
    $request->requestBody->permissions = [
        PermissionEnum::DELETE,
    ];
    $request->requestBody->permissionsWithGrantOption = [
        PermissionEnum::ASSOCIATE,
        PermissionEnum::ALL,
        PermissionEnum::DATA_LOCATION_ACCESS,
    ];
    $request->requestBody->principal = new GrantPermissionsRequestBodyPrincipal();
    $request->requestBody->principal->dataLakePrincipalIdentifier = 'soluta';
    $request->requestBody->resource = new GrantPermissionsRequestBodyResource();
    $request->requestBody->resource->catalog = [
        'et' => 'saepe',
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
    ];
    $request->requestBody->resource->dataCellsFilter = new DataCellsFilterResource();
    $request->requestBody->resource->dataCellsFilter->databaseName = 'tempore';
    $request->requestBody->resource->dataCellsFilter->name = 'Kevin Willms';
    $request->requestBody->resource->dataCellsFilter->tableCatalogId = 'labore';
    $request->requestBody->resource->dataCellsFilter->tableName = 'adipisci';
    $request->requestBody->resource->dataLocation = new DataLocationResource();
    $request->requestBody->resource->dataLocation->catalogId = 'dolorum';
    $request->requestBody->resource->dataLocation->resourceArn = 'architecto';
    $request->requestBody->resource->database = new DatabaseResource();
    $request->requestBody->resource->database->catalogId = 'quae';
    $request->requestBody->resource->database->name = 'Miss Billie Ward';
    $request->requestBody->resource->lfTag = new LFTagKeyResource();
    $request->requestBody->resource->lfTag->catalogId = 'porro';
    $request->requestBody->resource->lfTag->tagKey = 'doloribus';
    $request->requestBody->resource->lfTag->tagValues = [
        'facilis',
        'cupiditate',
    ];
    $request->requestBody->resource->lfTagPolicy = new LFTagPolicyResource();
    $request->requestBody->resource->lfTagPolicy->catalogId = 'qui';
    $request->requestBody->resource->lfTagPolicy->expression = [
        new LFTag(),
    ];
    $request->requestBody->resource->lfTagPolicy->resourceType = ResourceTypeEnum::TABLE;
    $request->requestBody->resource->table = new TableResource();
    $request->requestBody->resource->table->catalogId = 'odio';
    $request->requestBody->resource->table->databaseName = 'occaecati';
    $request->requestBody->resource->table->name = 'Wilson Terry';
    $request->requestBody->resource->table->tableWildcard = [
        'delectus' => 'voluptate',
    ];
    $request->requestBody->resource->tableWithColumns = new TableWithColumnsResource();
    $request->requestBody->resource->tableWithColumns->catalogId = 'consectetur';
    $request->requestBody->resource->tableWithColumns->columnNames = [
        'tenetur',
        'dignissimos',
        'hic',
        'distinctio',
    ];
    $request->requestBody->resource->tableWithColumns->columnWildcard = new ColumnWildcard();
    $request->requestBody->resource->tableWithColumns->columnWildcard->excludedColumnNames = [
        'odio',
        'similique',
        'facilis',
        'vero',
    ];
    $request->requestBody->resource->tableWithColumns->databaseName = 'ducimus';
    $request->requestBody->resource->tableWithColumns->name = 'Rosemarie Stanton';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'exercitationem';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->grantPermissions($request);

    if ($response->grantPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataCellsFilter

Lists all the data cell filters on a table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataCellsFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDataCellsFilterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListDataCellsFilterRequestBodyTable;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataCellsFilterRequest();
    $request->maxResults = 'maiores';
    $request->nextToken = 'doloribus';
    $request->requestBody = new ListDataCellsFilterRequestBody();
    $request->requestBody->maxResults = 478370;
    $request->requestBody->nextToken = 'eligendi';
    $request->requestBody->table = new ListDataCellsFilterRequestBodyTable();
    $request->requestBody->table->catalogId = 'ducimus';
    $request->requestBody->table->databaseName = 'alias';
    $request->requestBody->table->name = 'Don Hills';
    $request->requestBody->table->tableWildcard = [
        'possimus' => 'magnam',
        'ratione' => 'ex',
    ];
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'nulla';

    $response = $sdk->sdk->listDataCellsFilter($request);

    if ($response->listDataCellsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLFTags

Lists LF-tags that the requester has permission to view. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLFTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLFTagsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListLFTagsRequestBodyResourceShareTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLFTagsRequest();
    $request->maxResults = 'excepturi';
    $request->nextToken = 'voluptatibus';
    $request->requestBody = new ListLFTagsRequestBody();
    $request->requestBody->catalogId = 'nostrum';
    $request->requestBody->maxResults = 960835;
    $request->requestBody->nextToken = 'quisquam';
    $request->requestBody->resourceShareType = ListLFTagsRequestBodyResourceShareTypeEnum::ALL;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->listLFTags($request);

    if ($response->listLFTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPermissions

<p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequestBodyPrincipal;
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequestBodyResource;
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
use \OpenAPI\OpenAPI\Models\Operations\ListPermissionsRequestBodyResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPermissionsRequest();
    $request->maxResults = 'ea';
    $request->nextToken = 'quo';
    $request->requestBody = new ListPermissionsRequestBody();
    $request->requestBody->catalogId = 'consectetur';
    $request->requestBody->includeRelated = 'recusandae';
    $request->requestBody->maxResults = 132487;
    $request->requestBody->nextToken = 'minima';
    $request->requestBody->principal = new ListPermissionsRequestBodyPrincipal();
    $request->requestBody->principal->dataLakePrincipalIdentifier = 'eaque';
    $request->requestBody->resource = new ListPermissionsRequestBodyResource();
    $request->requestBody->resource->catalog = [
        'libero' => 'aut',
        'aut' => 'deleniti',
        'impedit' => 'aliquam',
        'fugit' => 'accusamus',
    ];
    $request->requestBody->resource->dataCellsFilter = new DataCellsFilterResource();
    $request->requestBody->resource->dataCellsFilter->databaseName = 'inventore';
    $request->requestBody->resource->dataCellsFilter->name = 'Janet Pagac';
    $request->requestBody->resource->dataCellsFilter->tableCatalogId = 'velit';
    $request->requestBody->resource->dataCellsFilter->tableName = 'eum';
    $request->requestBody->resource->dataLocation = new DataLocationResource();
    $request->requestBody->resource->dataLocation->catalogId = 'autem';
    $request->requestBody->resource->dataLocation->resourceArn = 'nobis';
    $request->requestBody->resource->database = new DatabaseResource();
    $request->requestBody->resource->database->catalogId = 'quas';
    $request->requestBody->resource->database->name = 'Drew Hoeger I';
    $request->requestBody->resource->lfTag = new LFTagKeyResource();
    $request->requestBody->resource->lfTag->catalogId = 'numquam';
    $request->requestBody->resource->lfTag->tagKey = 'explicabo';
    $request->requestBody->resource->lfTag->tagValues = [
        'ipsa',
        'molestiae',
        'magnam',
    ];
    $request->requestBody->resource->lfTagPolicy = new LFTagPolicyResource();
    $request->requestBody->resource->lfTagPolicy->catalogId = 'odio';
    $request->requestBody->resource->lfTagPolicy->expression = [
        new LFTag(),
        new LFTag(),
    ];
    $request->requestBody->resource->lfTagPolicy->resourceType = ResourceTypeEnum::DATABASE;
    $request->requestBody->resource->table = new TableResource();
    $request->requestBody->resource->table->catalogId = 'esse';
    $request->requestBody->resource->table->databaseName = 'rem';
    $request->requestBody->resource->table->name = 'Mitchell Predovic';
    $request->requestBody->resource->table->tableWildcard = [
        'suscipit' => 'assumenda',
        'eos' => 'praesentium',
    ];
    $request->requestBody->resource->tableWithColumns = new TableWithColumnsResource();
    $request->requestBody->resource->tableWithColumns->catalogId = 'quisquam';
    $request->requestBody->resource->tableWithColumns->columnNames = [
        'ipsa',
    ];
    $request->requestBody->resource->tableWithColumns->columnWildcard = new ColumnWildcard();
    $request->requestBody->resource->tableWithColumns->columnWildcard->excludedColumnNames = [
        'quidem',
        'neque',
        'quo',
    ];
    $request->requestBody->resource->tableWithColumns->databaseName = 'illum';
    $request->requestBody->resource->tableWithColumns->name = 'Wilbur Gerlach';
    $request->requestBody->resourceType = ListPermissionsRequestBodyResourceTypeEnum::CATALOG;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'sequi';

    $response = $sdk->sdk->listPermissions($request);

    if ($response->listPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResources

Lists the resources registered to be managed by the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResourcesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FilterCondition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldNameStringEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourcesRequest();
    $request->maxResults = 'quo';
    $request->nextToken = 'esse';
    $request->requestBody = new ListResourcesRequestBody();
    $request->requestBody->filterConditionList = [
        new FilterCondition(),
        new FilterCondition(),
        new FilterCondition(),
        new FilterCondition(),
    ];
    $request->requestBody->maxResults = 44612;
    $request->requestBody->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'inventore';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'aliquam';

    $response = $sdk->sdk->listResources($request);

    if ($response->listResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTableStorageOptimizers

Returns the configuration of all storage optimizers associated with a specified table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTableStorageOptimizersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTableStorageOptimizersRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListTableStorageOptimizersRequestBodyStorageOptimizerTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTableStorageOptimizersRequest();
    $request->maxResults = 'odio';
    $request->nextToken = 'occaecati';
    $request->requestBody = new ListTableStorageOptimizersRequestBody();
    $request->requestBody->catalogId = 'commodi';
    $request->requestBody->databaseName = 'sapiente';
    $request->requestBody->maxResults = 174112;
    $request->requestBody->nextToken = 'deserunt';
    $request->requestBody->storageOptimizerType = ListTableStorageOptimizersRequestBodyStorageOptimizerTypeEnum::GARBAGE_COLLECTION;
    $request->requestBody->tableName = 'accusantium';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->listTableStorageOptimizers($request);

    if ($response->listTableStorageOptimizersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTransactions

<p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListTransactionsRequestBodyStatusFilterEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTransactionsRequest();
    $request->maxResults = 'fuga';
    $request->nextToken = 'mollitia';
    $request->requestBody = new ListTransactionsRequestBody();
    $request->requestBody->catalogId = 'incidunt';
    $request->requestBody->maxResults = 539224;
    $request->requestBody->nextToken = 'explicabo';
    $request->requestBody->statusFilter = ListTransactionsRequestBodyStatusFilterEnum::COMPLETED;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->listTransactions($request);

    if ($response->listTransactionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDataLakeSettings

<p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDataLakeSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDataLakeSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutDataLakeSettingsRequestBodyDataLakeSettings;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalPermissions;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataLakePrincipal;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDataLakeSettingsRequest();
    $request->requestBody = new PutDataLakeSettingsRequestBody();
    $request->requestBody->catalogId = 'occaecati';
    $request->requestBody->dataLakeSettings = new PutDataLakeSettingsRequestBodyDataLakeSettings();
    $request->requestBody->dataLakeSettings->allowExternalDataFiltering = false;
    $request->requestBody->dataLakeSettings->authorizedSessionTagValueList = [
        'et',
        'esse',
        'eveniet',
    ];
    $request->requestBody->dataLakeSettings->createDatabaseDefaultPermissions = [
        new PrincipalPermissions(),
        new PrincipalPermissions(),
        new PrincipalPermissions(),
        new PrincipalPermissions(),
    ];
    $request->requestBody->dataLakeSettings->createTableDefaultPermissions = [
        new PrincipalPermissions(),
    ];
    $request->requestBody->dataLakeSettings->dataLakeAdmins = [
        new DataLakePrincipal(),
        new DataLakePrincipal(),
    ];
    $request->requestBody->dataLakeSettings->externalDataFilteringAllowList = [
        new DataLakePrincipal(),
        new DataLakePrincipal(),
        new DataLakePrincipal(),
        new DataLakePrincipal(),
    ];
    $request->requestBody->dataLakeSettings->parameters = [
        'vero' => 'aliquid',
        'quasi' => 'saepe',
        'vel' => 'harum',
    ];
    $request->requestBody->dataLakeSettings->trustedResourceOwners = [
        'rerum',
        'occaecati',
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'adipisci';

    $response = $sdk->sdk->putDataLakeSettings($request);

    if ($response->putDataLakeSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerResource

<p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterResourceRequest();
    $request->requestBody = new RegisterResourceRequestBody();
    $request->requestBody->resourceArn = 'cumque';
    $request->requestBody->roleArn = 'consequuntur';
    $request->requestBody->useServiceLinkedRole = false;
    $request->requestBody->withFederation = false;
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->registerResource($request);

    if ($response->registerResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeLFTagsFromResource

Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveLFTagsFromResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveLFTagsFromResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LFTagPair;
use \OpenAPI\OpenAPI\Models\Operations\RemoveLFTagsFromResourceRequestBodyResource;
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
    $request = new RemoveLFTagsFromResourceRequest();
    $request->requestBody = new RemoveLFTagsFromResourceRequestBody();
    $request->requestBody->catalogId = 'provident';
    $request->requestBody->lfTags = [
        new LFTagPair(),
        new LFTagPair(),
        new LFTagPair(),
        new LFTagPair(),
    ];
    $request->requestBody->resource = new RemoveLFTagsFromResourceRequestBodyResource();
    $request->requestBody->resource->catalog = [
        'quas' => 'esse',
        'quasi' => 'a',
        'error' => 'sint',
        'pariatur' => 'possimus',
    ];
    $request->requestBody->resource->dataCellsFilter = new DataCellsFilterResource();
    $request->requestBody->resource->dataCellsFilter->databaseName = 'quia';
    $request->requestBody->resource->dataCellsFilter->name = 'Mr. Marlon Schultz V';
    $request->requestBody->resource->dataCellsFilter->tableCatalogId = 'culpa';
    $request->requestBody->resource->dataCellsFilter->tableName = 'aliquid';
    $request->requestBody->resource->dataLocation = new DataLocationResource();
    $request->requestBody->resource->dataLocation->catalogId = 'tenetur';
    $request->requestBody->resource->dataLocation->resourceArn = 'quae';
    $request->requestBody->resource->database = new DatabaseResource();
    $request->requestBody->resource->database->catalogId = 'earum';
    $request->requestBody->resource->database->name = 'Pearl Gerlach';
    $request->requestBody->resource->lfTag = new LFTagKeyResource();
    $request->requestBody->resource->lfTag->catalogId = 'soluta';
    $request->requestBody->resource->lfTag->tagKey = 'accusantium';
    $request->requestBody->resource->lfTag->tagValues = [
        'sapiente',
        'dicta',
    ];
    $request->requestBody->resource->lfTagPolicy = new LFTagPolicyResource();
    $request->requestBody->resource->lfTagPolicy->catalogId = 'ullam';
    $request->requestBody->resource->lfTagPolicy->expression = [
        new LFTag(),
        new LFTag(),
    ];
    $request->requestBody->resource->lfTagPolicy->resourceType = ResourceTypeEnum::DATABASE;
    $request->requestBody->resource->table = new TableResource();
    $request->requestBody->resource->table->catalogId = 'nisi';
    $request->requestBody->resource->table->databaseName = 'aut';
    $request->requestBody->resource->table->name = 'Clarence Sporer';
    $request->requestBody->resource->table->tableWildcard = [
        'dolorum' => 'architecto',
        'omnis' => 'tenetur',
        'quasi' => 'at',
        'et' => 'voluptate',
    ];
    $request->requestBody->resource->tableWithColumns = new TableWithColumnsResource();
    $request->requestBody->resource->tableWithColumns->catalogId = 'ipsa';
    $request->requestBody->resource->tableWithColumns->columnNames = [
        'veritatis',
        'consectetur',
    ];
    $request->requestBody->resource->tableWithColumns->columnWildcard = new ColumnWildcard();
    $request->requestBody->resource->tableWithColumns->columnWildcard->excludedColumnNames = [
        'iste',
    ];
    $request->requestBody->resource->tableWithColumns->databaseName = 'temporibus';
    $request->requestBody->resource->tableWithColumns->name = 'Patsy Armstrong';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->removeLFTagsFromResource($request);

    if ($response->removeLFTagsFromResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## revokePermissions

Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RevokePermissionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RevokePermissionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Operations\RevokePermissionsRequestBodyPrincipal;
use \OpenAPI\OpenAPI\Models\Operations\RevokePermissionsRequestBodyResource;
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
    $request = new RevokePermissionsRequest();
    $request->requestBody = new RevokePermissionsRequestBody();
    $request->requestBody->catalogId = 'numquam';
    $request->requestBody->permissions = [
        PermissionEnum::SELECT,
        PermissionEnum::DELETE,
        PermissionEnum::ALL,
        PermissionEnum::INSERT,
    ];
    $request->requestBody->permissionsWithGrantOption = [
        PermissionEnum::ASSOCIATE,
    ];
    $request->requestBody->principal = new RevokePermissionsRequestBodyPrincipal();
    $request->requestBody->principal->dataLakePrincipalIdentifier = 'natus';
    $request->requestBody->resource = new RevokePermissionsRequestBodyResource();
    $request->requestBody->resource->catalog = [
        'voluptatibus' => 'voluptas',
    ];
    $request->requestBody->resource->dataCellsFilter = new DataCellsFilterResource();
    $request->requestBody->resource->dataCellsFilter->databaseName = 'asperiores';
    $request->requestBody->resource->dataCellsFilter->name = 'Eileen Hagenes';
    $request->requestBody->resource->dataCellsFilter->tableCatalogId = 'officia';
    $request->requestBody->resource->dataCellsFilter->tableName = 'maxime';
    $request->requestBody->resource->dataLocation = new DataLocationResource();
    $request->requestBody->resource->dataLocation->catalogId = 'dignissimos';
    $request->requestBody->resource->dataLocation->resourceArn = 'officia';
    $request->requestBody->resource->database = new DatabaseResource();
    $request->requestBody->resource->database->catalogId = 'asperiores';
    $request->requestBody->resource->database->name = 'Anna Hahn';
    $request->requestBody->resource->lfTag = new LFTagKeyResource();
    $request->requestBody->resource->lfTag->catalogId = 'labore';
    $request->requestBody->resource->lfTag->tagKey = 'ab';
    $request->requestBody->resource->lfTag->tagValues = [
        'fuga',
    ];
    $request->requestBody->resource->lfTagPolicy = new LFTagPolicyResource();
    $request->requestBody->resource->lfTagPolicy->catalogId = 'id';
    $request->requestBody->resource->lfTagPolicy->expression = [
        new LFTag(),
        new LFTag(),
    ];
    $request->requestBody->resource->lfTagPolicy->resourceType = ResourceTypeEnum::DATABASE;
    $request->requestBody->resource->table = new TableResource();
    $request->requestBody->resource->table->catalogId = 'culpa';
    $request->requestBody->resource->table->databaseName = 'est';
    $request->requestBody->resource->table->name = 'Felix Stehr';
    $request->requestBody->resource->table->tableWildcard = [
        'vel' => 'labore',
        'possimus' => 'facilis',
        'cum' => 'commodi',
    ];
    $request->requestBody->resource->tableWithColumns = new TableWithColumnsResource();
    $request->requestBody->resource->tableWithColumns->catalogId = 'in';
    $request->requestBody->resource->tableWithColumns->columnNames = [
        'reiciendis',
        'assumenda',
    ];
    $request->requestBody->resource->tableWithColumns->columnWildcard = new ColumnWildcard();
    $request->requestBody->resource->tableWithColumns->columnWildcard->excludedColumnNames = [
        'recusandae',
        'aliquid',
    ];
    $request->requestBody->resource->tableWithColumns->databaseName = 'aperiam';
    $request->requestBody->resource->tableWithColumns->name = 'Glenn Kirlin';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->revokePermissions($request);

    if ($response->revokePermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchDatabasesByLFTags

This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchDatabasesByLFTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchDatabasesByLFTagsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LFTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchDatabasesByLFTagsRequest();
    $request->maxResults = 'necessitatibus';
    $request->nextToken = 'dolore';
    $request->requestBody = new SearchDatabasesByLFTagsRequestBody();
    $request->requestBody->catalogId = 'sunt';
    $request->requestBody->expression = [
        new LFTag(),
        new LFTag(),
        new LFTag(),
        new LFTag(),
    ];
    $request->requestBody->maxResults = 241545;
    $request->requestBody->nextToken = 'non';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->searchDatabasesByLFTags($request);

    if ($response->searchDatabasesByLFTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTablesByLFTags

This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchTablesByLFTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchTablesByLFTagsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LFTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTablesByLFTagsRequest();
    $request->maxResults = 'harum';
    $request->nextToken = 'laboriosam';
    $request->requestBody = new SearchTablesByLFTagsRequestBody();
    $request->requestBody->catalogId = 'ipsa';
    $request->requestBody->expression = [
        new LFTag(),
        new LFTag(),
        new LFTag(),
        new LFTag(),
    ];
    $request->requestBody->maxResults = 730709;
    $request->requestBody->nextToken = 'vitae';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'voluptas';

    $response = $sdk->sdk->searchTablesByLFTags($request);

    if ($response->searchTablesByLFTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startQueryPlanning

<p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryPlanningRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryPlanningRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryPlanningRequestBodyQueryPlanningContext;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartQueryPlanningRequest();
    $request->requestBody = new StartQueryPlanningRequestBody();
    $request->requestBody->queryPlanningContext = new StartQueryPlanningRequestBodyQueryPlanningContext();
    $request->requestBody->queryPlanningContext->catalogId = 'minima';
    $request->requestBody->queryPlanningContext->databaseName = 'nobis';
    $request->requestBody->queryPlanningContext->queryAsOfTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T09:37:00.887Z');
    $request->requestBody->queryPlanningContext->queryParameters = [
        'dolores' => 'blanditiis',
        'in' => 'dolore',
        'aliquam' => 'officiis',
        'temporibus' => 'ullam',
    ];
    $request->requestBody->queryPlanningContext->transactionId = 'adipisci';
    $request->requestBody->queryString = 'cum';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->startQueryPlanning($request);

    if ($response->startQueryPlanningResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTransaction

Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartTransactionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartTransactionRequestBodyTransactionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTransactionRequest();
    $request->requestBody = new StartTransactionRequestBody();
    $request->requestBody->transactionType = StartTransactionRequestBodyTransactionTypeEnum::READ_ONLY;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'reiciendis';

    $response = $sdk->sdk->startTransaction($request);

    if ($response->startTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataCellsFilter

Updates a data cell filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataCellsFilterRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataCellsFilterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataCellsFilterRequestBodyTableData;
use \OpenAPI\OpenAPI\Models\Shared\ColumnWildcard;
use \OpenAPI\OpenAPI\Models\Shared\RowFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataCellsFilterRequest();
    $request->requestBody = new UpdateDataCellsFilterRequestBody();
    $request->requestBody->tableData = new UpdateDataCellsFilterRequestBodyTableData();
    $request->requestBody->tableData->columnNames = [
        'asperiores',
    ];
    $request->requestBody->tableData->columnWildcard = new ColumnWildcard();
    $request->requestBody->tableData->columnWildcard->excludedColumnNames = [
        'voluptate',
        'expedita',
        'ab',
    ];
    $request->requestBody->tableData->databaseName = 'iste';
    $request->requestBody->tableData->name = 'Janie Cremin';
    $request->requestBody->tableData->rowFilter = new RowFilter();
    $request->requestBody->tableData->rowFilter->allRowsWildcard = [
        'explicabo' => 'voluptas',
        'unde' => 'architecto',
        'suscipit' => 'sapiente',
    ];
    $request->requestBody->tableData->rowFilter->filterExpression = 'debitis';
    $request->requestBody->tableData->tableCatalogId = 'illo';
    $request->requestBody->tableData->tableName = 'reiciendis';
    $request->requestBody->tableData->versionId = 'perferendis';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->updateDataCellsFilter($request);

    if ($response->updateDataCellsFilterResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLFTag

Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLFTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLFTagRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLFTagRequest();
    $request->requestBody = new UpdateLFTagRequestBody();
    $request->requestBody->catalogId = 'ipsum';
    $request->requestBody->tagKey = 'ea';
    $request->requestBody->tagValuesToAdd = [
        'quos',
        'voluptatibus',
        'tempora',
    ];
    $request->requestBody->tagValuesToDelete = [
        'voluptate',
        'reiciendis',
    ];
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'quaerat';

    $response = $sdk->sdk->updateLFTag($request);

    if ($response->updateLFTagResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResource

Updates the data access role used for vending access to the given (registered) resource in Lake Formation. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResourceRequest();
    $request->requestBody = new UpdateResourceRequestBody();
    $request->requestBody->resourceArn = 'incidunt';
    $request->requestBody->roleArn = 'ipsam';
    $request->requestBody->withFederation = false;
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->updateResource($request);

    if ($response->updateResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTableObjects

Updates the manifest of Amazon S3 objects that make up the specified governed table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableObjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableObjectsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\WriteOperation;
use \OpenAPI\OpenAPI\Models\Shared\AddObjectInput;
use \OpenAPI\OpenAPI\Models\Shared\DeleteObjectInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableObjectsRequest();
    $request->requestBody = new UpdateTableObjectsRequestBody();
    $request->requestBody->catalogId = 'recusandae';
    $request->requestBody->databaseName = 'reiciendis';
    $request->requestBody->tableName = 'nulla';
    $request->requestBody->transactionId = 'magni';
    $request->requestBody->writeOperations = [
        new WriteOperation(),
    ];
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'laudantium';

    $response = $sdk->sdk->updateTableObjects($request);

    if ($response->updateTableObjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTableStorageOptimizer

Updates the configuration of the storage optimizers for a table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableStorageOptimizerRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableStorageOptimizerRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableStorageOptimizerRequest();
    $request->requestBody = new UpdateTableStorageOptimizerRequestBody();
    $request->requestBody->catalogId = 'exercitationem';
    $request->requestBody->databaseName = 'praesentium';
    $request->requestBody->storageOptimizerConfig = [
        'laboriosam' => [
            'voluptatum' => 'error',
            'hic' => 'expedita',
            'debitis' => 'neque',
        ],
        'dolorum' => [
            'officia' => 'dolorum',
            'corrupti' => 'accusamus',
        ],
        'tempora' => [
            'fugit' => 'ut',
            'fugiat' => 'voluptatem',
            'culpa' => 'expedita',
        ],
    ];
    $request->requestBody->tableName = 'magnam';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->updateTableStorageOptimizer($request);

    if ($response->updateTableStorageOptimizerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
