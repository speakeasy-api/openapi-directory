# SDK

## Overview

<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing Amazon Athena with JDBC</a>.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/athena/>
### Available Operations

* [batchGetNamedQuery](#batchgetnamedquery) - Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
* [batchGetPreparedStatement](#batchgetpreparedstatement) - Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.
* [batchGetQueryExecution](#batchgetqueryexecution) - Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
* [createDataCatalog](#createdatacatalog) - Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
* [createNamedQuery](#createnamedquery) - <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [createNotebook](#createnotebook) - Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.
* [createPreparedStatement](#createpreparedstatement) - Creates a prepared statement for use with SQL queries in Athena.
* [createPresignedNotebookUrl](#createpresignednotebookurl) - Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.
* [createWorkGroup](#createworkgroup) - Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.
* [deleteDataCatalog](#deletedatacatalog) - Deletes a data catalog.
* [deleteNamedQuery](#deletenamedquery) - <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [deleteNotebook](#deletenotebook) - Deletes the specified notebook.
* [deletePreparedStatement](#deletepreparedstatement) - Deletes the prepared statement with the specified name from the specified workgroup.
* [deleteWorkGroup](#deleteworkgroup) - Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
* [exportNotebook](#exportnotebook) - Exports the specified notebook and its metadata.
* [getCalculationExecution](#getcalculationexecution) - Describes a previously submitted calculation execution.
* [getCalculationExecutionCode](#getcalculationexecutioncode) - Retrieves the unencrypted code that was executed for the calculation.
* [getCalculationExecutionStatus](#getcalculationexecutionstatus) - Gets the status of a current calculation.
* [getDataCatalog](#getdatacatalog) - Returns the specified data catalog.
* [getDatabase](#getdatabase) - Returns a database object for the specified database and data catalog.
* [getNamedQuery](#getnamedquery) - Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
* [getNotebookMetadata](#getnotebookmetadata) - Retrieves notebook metadata for the specified notebook ID.
* [getPreparedStatement](#getpreparedstatement) - Retrieves the prepared statement with the specified name from the specified workgroup.
* [getQueryExecution](#getqueryexecution) - Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
* [getQueryResults](#getqueryresults) - <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
* [getQueryRuntimeStatistics](#getqueryruntimestatistics) - Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.
* [getSession](#getsession) - Gets the full details of a previously created session, including the session status and configuration.
* [getSessionStatus](#getsessionstatus) - Gets the current status of a session.
* [getTableMetadata](#gettablemetadata) - Returns table metadata for the specified catalog, database, and table.
* [getWorkGroup](#getworkgroup) - Returns information about the workgroup with the specified name.
* [importNotebook](#importnotebook) - Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.
* [listApplicationDPUSizes](#listapplicationdpusizes) - Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 
* [listCalculationExecutions](#listcalculationexecutions) - Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.
* [listDataCatalogs](#listdatacatalogs) - <p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>
* [listDatabases](#listdatabases) - Lists the databases in the specified data catalog.
* [listEngineVersions](#listengineversions) - Returns a list of engine versions that are available to choose from, including the Auto option.
* [listExecutors](#listexecutors) - Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.
* [listNamedQueries](#listnamedqueries) - <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [listNotebookMetadata](#listnotebookmetadata) - Displays the notebook files for the specified workgroup in paginated format.
* [listNotebookSessions](#listnotebooksessions) - Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* [listPreparedStatements](#listpreparedstatements) - Lists the prepared statements in the specified workgroup.
* [listQueryExecutions](#listqueryexecutions) - <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [listSessions](#listsessions) - Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* [listTableMetadata](#listtablemetadata) - Lists the metadata for the tables in the specified data catalog database.
* [listTagsForResource](#listtagsforresource) - Lists the tags associated with an Athena workgroup or data catalog resource.
* [listWorkGroups](#listworkgroups) - Lists available workgroups for the account.
* [startCalculationExecution](#startcalculationexecution) - Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.
* [startQueryExecution](#startqueryexecution) - Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
* [startSession](#startsession) - Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.
* [stopCalculationExecution](#stopcalculationexecution) - <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>
* [stopQueryExecution](#stopqueryexecution) - <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [tagResource](#tagresource) - Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
* [terminateSession](#terminatesession) - Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.
* [untagResource](#untagresource) - Removes one or more tags from a data catalog or workgroup resource.
* [updateDataCatalog](#updatedatacatalog) - Updates the data catalog that has the specified name.
* [updateNamedQuery](#updatenamedquery) - Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.
* [updateNotebook](#updatenotebook) - Updates the contents of a Spark notebook.
* [updateNotebookMetadata](#updatenotebookmetadata) - Updates the metadata for a notebook.
* [updatePreparedStatement](#updatepreparedstatement) - Updates a prepared statement.
* [updateWorkGroup](#updateworkgroup) - Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.

## batchGetNamedQuery

Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetNamedQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetNamedQueryInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetNamedQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetNamedQueryRequest();
    $request->batchGetNamedQueryInput = new BatchGetNamedQueryInput();
    $request->batchGetNamedQueryInput->namedQueryIds = [
        'iure',
        'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = BatchGetNamedQueryXAmzTargetEnum::AMAZON_ATHENA_BATCH_GET_NAMED_QUERY;

    $response = $sdk->sdk->batchGetNamedQuery($request);

    if ($response->batchGetNamedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetPreparedStatement

Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetPreparedStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetPreparedStatementInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetPreparedStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetPreparedStatementRequest();
    $request->batchGetPreparedStatementInput = new BatchGetPreparedStatementInput();
    $request->batchGetPreparedStatementInput->preparedStatementNames = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->batchGetPreparedStatementInput->workGroup = 'recusandae';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = BatchGetPreparedStatementXAmzTargetEnum::AMAZON_ATHENA_BATCH_GET_PREPARED_STATEMENT;

    $response = $sdk->sdk->batchGetPreparedStatement($request);

    if ($response->batchGetPreparedStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetQueryExecution

Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetQueryExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetQueryExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetQueryExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetQueryExecutionRequest();
    $request->batchGetQueryExecutionInput = new BatchGetQueryExecutionInput();
    $request->batchGetQueryExecutionInput->queryExecutionIds = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = BatchGetQueryExecutionXAmzTargetEnum::AMAZON_ATHENA_BATCH_GET_QUERY_EXECUTION;

    $response = $sdk->sdk->batchGetQueryExecution($request);

    if ($response->batchGetQueryExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataCatalog

Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataCatalogInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\DataCatalogTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataCatalogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataCatalogRequest();
    $request->createDataCatalogInput = new CreateDataCatalogInput();
    $request->createDataCatalogInput->description = 'porro';
    $request->createDataCatalogInput->name = 'Samuel Reichel';
    $request->createDataCatalogInput->parameters = [
        'deleniti' => 'hic',
    ];
    $request->createDataCatalogInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createDataCatalogInput->type = DataCatalogTypeEnum::GLUE;
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = CreateDataCatalogXAmzTargetEnum::AMAZON_ATHENA_CREATE_DATA_CATALOG;

    $response = $sdk->sdk->createDataCatalog($request);

    if ($response->createDataCatalogOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNamedQuery

<p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNamedQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateNamedQueryInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateNamedQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNamedQueryRequest();
    $request->createNamedQueryInput = new CreateNamedQueryInput();
    $request->createNamedQueryInput->clientRequestToken = 'esse';
    $request->createNamedQueryInput->database = 'ipsum';
    $request->createNamedQueryInput->description = 'excepturi';
    $request->createNamedQueryInput->name = 'Dorothy Hane';
    $request->createNamedQueryInput->queryString = 'iste';
    $request->createNamedQueryInput->workGroup = 'dolor';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = CreateNamedQueryXAmzTargetEnum::AMAZON_ATHENA_CREATE_NAMED_QUERY;

    $response = $sdk->sdk->createNamedQuery($request);

    if ($response->createNamedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNotebook

Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotebookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateNotebookInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotebookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotebookRequest();
    $request->createNotebookInput = new CreateNotebookInput();
    $request->createNotebookInput->clientRequestToken = 'iste';
    $request->createNotebookInput->name = 'Mr. Kerry Predovic';
    $request->createNotebookInput->workGroup = 'est';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = CreateNotebookXAmzTargetEnum::AMAZON_ATHENA_CREATE_NOTEBOOK;

    $response = $sdk->sdk->createNotebook($request);

    if ($response->createNotebookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPreparedStatement

Creates a prepared statement for use with SQL queries in Athena.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePreparedStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePreparedStatementInput;
use \OpenAPI\OpenAPI\Models\Operations\CreatePreparedStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePreparedStatementRequest();
    $request->createPreparedStatementInput = new CreatePreparedStatementInput();
    $request->createPreparedStatementInput->description = 'enim';
    $request->createPreparedStatementInput->queryStatement = 'omnis';
    $request->createPreparedStatementInput->statementName = 'nemo';
    $request->createPreparedStatementInput->workGroup = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreatePreparedStatementXAmzTargetEnum::AMAZON_ATHENA_CREATE_PREPARED_STATEMENT;

    $response = $sdk->sdk->createPreparedStatement($request);

    if ($response->createPreparedStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPresignedNotebookUrl

Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresignedNotebookUrlRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePresignedNotebookUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePresignedNotebookUrlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePresignedNotebookUrlRequest();
    $request->createPresignedNotebookUrlRequest = new CreatePresignedNotebookUrlRequest();
    $request->createPresignedNotebookUrlRequest->sessionId = 'mollitia';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = CreatePresignedNotebookUrlXAmzTargetEnum::AMAZON_ATHENA_CREATE_PRESIGNED_NOTEBOOK_URL;

    $response = $sdk->sdk->createPresignedNotebookUrl($request);

    if ($response->createPresignedNotebookUrlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkGroup

Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\WorkGroupConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CustomerContentEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EngineVersion;
use \OpenAPI\OpenAPI\Models\Shared\ResultConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AclConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3AclOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkGroupRequest();
    $request->createWorkGroupInput = new CreateWorkGroupInput();
    $request->createWorkGroupInput->configuration = new WorkGroupConfiguration();
    $request->createWorkGroupInput->configuration->additionalConfiguration = 'commodi';
    $request->createWorkGroupInput->configuration->bytesScannedCutoffPerQuery = 466311;
    $request->createWorkGroupInput->configuration->customerContentEncryptionConfiguration = new CustomerContentEncryptionConfiguration();
    $request->createWorkGroupInput->configuration->customerContentEncryptionConfiguration->kmsKey = 'molestiae';
    $request->createWorkGroupInput->configuration->enableMinimumEncryptionConfiguration = false;
    $request->createWorkGroupInput->configuration->enforceWorkGroupConfiguration = false;
    $request->createWorkGroupInput->configuration->engineVersion = new EngineVersion();
    $request->createWorkGroupInput->configuration->engineVersion->effectiveEngineVersion = 'velit';
    $request->createWorkGroupInput->configuration->engineVersion->selectedEngineVersion = 'error';
    $request->createWorkGroupInput->configuration->executionRole = 'quia';
    $request->createWorkGroupInput->configuration->publishCloudWatchMetricsEnabled = false;
    $request->createWorkGroupInput->configuration->requesterPaysEnabled = false;
    $request->createWorkGroupInput->configuration->resultConfiguration = new ResultConfiguration();
    $request->createWorkGroupInput->configuration->resultConfiguration->aclConfiguration = new AclConfiguration();
    $request->createWorkGroupInput->configuration->resultConfiguration->aclConfiguration->s3AclOption = S3AclOptionEnum::BUCKET_OWNER_FULL_CONTROL;
    $request->createWorkGroupInput->configuration->resultConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->createWorkGroupInput->configuration->resultConfiguration->encryptionConfiguration->encryptionOption = EncryptionOptionEnum::SSE_KMS;
    $request->createWorkGroupInput->configuration->resultConfiguration->encryptionConfiguration->kmsKey = 'vitae';
    $request->createWorkGroupInput->configuration->resultConfiguration->expectedBucketOwner = 'laborum';
    $request->createWorkGroupInput->configuration->resultConfiguration->outputLocation = 'animi';
    $request->createWorkGroupInput->description = 'enim';
    $request->createWorkGroupInput->name = 'Angelica Dietrich';
    $request->createWorkGroupInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateWorkGroupXAmzTargetEnum::AMAZON_ATHENA_CREATE_WORK_GROUP;

    $response = $sdk->sdk->createWorkGroup($request);

    if ($response->createWorkGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataCatalog

Deletes a data catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataCatalogInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataCatalogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataCatalogRequest();
    $request->deleteDataCatalogInput = new DeleteDataCatalogInput();
    $request->deleteDataCatalogInput->name = 'Jan Thiel';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = DeleteDataCatalogXAmzTargetEnum::AMAZON_ATHENA_DELETE_DATA_CATALOG;

    $response = $sdk->sdk->deleteDataCatalog($request);

    if ($response->deleteDataCatalogOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNamedQuery

<p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamedQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNamedQueryInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNamedQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNamedQueryRequest();
    $request->deleteNamedQueryInput = new DeleteNamedQueryInput();
    $request->deleteNamedQueryInput->namedQueryId = 'reprehenderit';
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = DeleteNamedQueryXAmzTargetEnum::AMAZON_ATHENA_DELETE_NAMED_QUERY;

    $response = $sdk->sdk->deleteNamedQuery($request);

    if ($response->deleteNamedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNotebook

Deletes the specified notebook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotebookRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteNotebookInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotebookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotebookRequest();
    $request->deleteNotebookInput = new DeleteNotebookInput();
    $request->deleteNotebookInput->notebookId = 'harum';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DeleteNotebookXAmzTargetEnum::AMAZON_ATHENA_DELETE_NOTEBOOK;

    $response = $sdk->sdk->deleteNotebook($request);

    if ($response->deleteNotebookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePreparedStatement

Deletes the prepared statement with the specified name from the specified workgroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePreparedStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePreparedStatementInput;
use \OpenAPI\OpenAPI\Models\Operations\DeletePreparedStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePreparedStatementRequest();
    $request->deletePreparedStatementInput = new DeletePreparedStatementInput();
    $request->deletePreparedStatementInput->statementName = 'molestias';
    $request->deletePreparedStatementInput->workGroup = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = DeletePreparedStatementXAmzTargetEnum::AMAZON_ATHENA_DELETE_PREPARED_STATEMENT;

    $response = $sdk->sdk->deletePreparedStatement($request);

    if ($response->deletePreparedStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkGroup

Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkGroupRequest();
    $request->deleteWorkGroupInput = new DeleteWorkGroupInput();
    $request->deleteWorkGroupInput->recursiveDeleteOption = false;
    $request->deleteWorkGroupInput->workGroup = 'sint';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DeleteWorkGroupXAmzTargetEnum::AMAZON_ATHENA_DELETE_WORK_GROUP;

    $response = $sdk->sdk->deleteWorkGroup($request);

    if ($response->deleteWorkGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportNotebook

Exports the specified notebook and its metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportNotebookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExportNotebookInput;
use \OpenAPI\OpenAPI\Models\Operations\ExportNotebookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportNotebookRequest();
    $request->exportNotebookInput = new ExportNotebookInput();
    $request->exportNotebookInput->notebookId = 'explicabo';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = ExportNotebookXAmzTargetEnum::AMAZON_ATHENA_EXPORT_NOTEBOOK;

    $response = $sdk->sdk->exportNotebook($request);

    if ($response->exportNotebookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalculationExecution

Describes a previously submitted calculation execution.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalculationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCalculationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCalculationExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalculationExecutionRequest();
    $request->getCalculationExecutionRequest = new GetCalculationExecutionRequest();
    $request->getCalculationExecutionRequest->calculationExecutionId = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = GetCalculationExecutionXAmzTargetEnum::AMAZON_ATHENA_GET_CALCULATION_EXECUTION;

    $response = $sdk->sdk->getCalculationExecution($request);

    if ($response->getCalculationExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalculationExecutionCode

Retrieves the unencrypted code that was executed for the calculation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalculationExecutionCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCalculationExecutionCodeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCalculationExecutionCodeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalculationExecutionCodeRequest();
    $request->getCalculationExecutionCodeRequest = new GetCalculationExecutionCodeRequest();
    $request->getCalculationExecutionCodeRequest->calculationExecutionId = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetCalculationExecutionCodeXAmzTargetEnum::AMAZON_ATHENA_GET_CALCULATION_EXECUTION_CODE;

    $response = $sdk->sdk->getCalculationExecutionCode($request);

    if ($response->getCalculationExecutionCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCalculationExecutionStatus

Gets the status of a current calculation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCalculationExecutionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCalculationExecutionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCalculationExecutionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCalculationExecutionStatusRequest();
    $request->getCalculationExecutionStatusRequest = new GetCalculationExecutionStatusRequest();
    $request->getCalculationExecutionStatusRequest->calculationExecutionId = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = GetCalculationExecutionStatusXAmzTargetEnum::AMAZON_ATHENA_GET_CALCULATION_EXECUTION_STATUS;

    $response = $sdk->sdk->getCalculationExecutionStatus($request);

    if ($response->getCalculationExecutionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataCatalog

Returns the specified data catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataCatalogInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDataCatalogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataCatalogRequest();
    $request->getDataCatalogInput = new GetDataCatalogInput();
    $request->getDataCatalogInput->name = 'Raquel Wilderman';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = GetDataCatalogXAmzTargetEnum::AMAZON_ATHENA_GET_DATA_CATALOG;

    $response = $sdk->sdk->getDataCatalog($request);

    if ($response->getDataCatalogOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatabase

Returns a database object for the specified database and data catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDatabaseInput;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatabaseRequest();
    $request->getDatabaseInput = new GetDatabaseInput();
    $request->getDatabaseInput->catalogName = 'facere';
    $request->getDatabaseInput->databaseName = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = GetDatabaseXAmzTargetEnum::AMAZON_ATHENA_GET_DATABASE;

    $response = $sdk->sdk->getDatabase($request);

    if ($response->getDatabaseOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamedQuery

Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamedQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetNamedQueryInput;
use \OpenAPI\OpenAPI\Models\Operations\GetNamedQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamedQueryRequest();
    $request->getNamedQueryInput = new GetNamedQueryInput();
    $request->getNamedQueryInput->namedQueryId = 'delectus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = GetNamedQueryXAmzTargetEnum::AMAZON_ATHENA_GET_NAMED_QUERY;

    $response = $sdk->sdk->getNamedQuery($request);

    if ($response->getNamedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNotebookMetadata

Retrieves notebook metadata for the specified notebook ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNotebookMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetNotebookMetadataInput;
use \OpenAPI\OpenAPI\Models\Operations\GetNotebookMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNotebookMetadataRequest();
    $request->getNotebookMetadataInput = new GetNotebookMetadataInput();
    $request->getNotebookMetadataInput->notebookId = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = GetNotebookMetadataXAmzTargetEnum::AMAZON_ATHENA_GET_NOTEBOOK_METADATA;

    $response = $sdk->sdk->getNotebookMetadata($request);

    if ($response->getNotebookMetadataOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPreparedStatement

Retrieves the prepared statement with the specified name from the specified workgroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPreparedStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPreparedStatementInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPreparedStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPreparedStatementRequest();
    $request->getPreparedStatementInput = new GetPreparedStatementInput();
    $request->getPreparedStatementInput->statementName = 'nihil';
    $request->getPreparedStatementInput->workGroup = 'magnam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = GetPreparedStatementXAmzTargetEnum::AMAZON_ATHENA_GET_PREPARED_STATEMENT;

    $response = $sdk->sdk->getPreparedStatement($request);

    if ($response->getPreparedStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryExecution

Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQueryExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryExecutionRequest();
    $request->getQueryExecutionInput = new GetQueryExecutionInput();
    $request->getQueryExecutionInput->queryExecutionId = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = GetQueryExecutionXAmzTargetEnum::AMAZON_ATHENA_GET_QUERY_EXECUTION;

    $response = $sdk->sdk->getQueryExecution($request);

    if ($response->getQueryExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryResults

<p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQueryResultsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryResultsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryResultsRequest();
    $request->getQueryResultsInput = new GetQueryResultsInput();
    $request->getQueryResultsInput->maxResults = 590873;
    $request->getQueryResultsInput->nextToken = 'quos';
    $request->getQueryResultsInput->queryExecutionId = 'sint';
    $request->maxResults = 'accusantium';
    $request->nextToken = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = GetQueryResultsXAmzTargetEnum::AMAZON_ATHENA_GET_QUERY_RESULTS;

    $response = $sdk->sdk->getQueryResults($request);

    if ($response->getQueryResultsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQueryRuntimeStatistics

Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryRuntimeStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQueryRuntimeStatisticsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryRuntimeStatisticsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryRuntimeStatisticsRequest();
    $request->getQueryRuntimeStatisticsInput = new GetQueryRuntimeStatisticsInput();
    $request->getQueryRuntimeStatisticsInput->queryExecutionId = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = GetQueryRuntimeStatisticsXAmzTargetEnum::AMAZON_ATHENA_GET_QUERY_RUNTIME_STATISTICS;

    $response = $sdk->sdk->getQueryRuntimeStatistics($request);

    if ($response->getQueryRuntimeStatisticsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSession

Gets the full details of a previously created session, including the session status and configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionRequest();
    $request->getSessionRequest = new GetSessionRequest();
    $request->getSessionRequest->sessionId = 'facilis';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = GetSessionXAmzTargetEnum::AMAZON_ATHENA_GET_SESSION;

    $response = $sdk->sdk->getSession($request);

    if ($response->getSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSessionStatus

Gets the current status of a session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSessionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionStatusRequest();
    $request->getSessionStatusRequest = new GetSessionStatusRequest();
    $request->getSessionStatusRequest->sessionId = 'repellat';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = GetSessionStatusXAmzTargetEnum::AMAZON_ATHENA_GET_SESSION_STATUS;

    $response = $sdk->sdk->getSessionStatus($request);

    if ($response->getSessionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTableMetadata

Returns table metadata for the specified catalog, database, and table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTableMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTableMetadataInput;
use \OpenAPI\OpenAPI\Models\Operations\GetTableMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTableMetadataRequest();
    $request->getTableMetadataInput = new GetTableMetadataInput();
    $request->getTableMetadataInput->catalogName = 'natus';
    $request->getTableMetadataInput->databaseName = 'magni';
    $request->getTableMetadataInput->tableName = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = GetTableMetadataXAmzTargetEnum::AMAZON_ATHENA_GET_TABLE_METADATA;

    $response = $sdk->sdk->getTableMetadata($request);

    if ($response->getTableMetadataOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkGroup

Returns information about the workgroup with the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetWorkGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkGroupRequest();
    $request->getWorkGroupInput = new GetWorkGroupInput();
    $request->getWorkGroupInput->workGroup = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = GetWorkGroupXAmzTargetEnum::AMAZON_ATHENA_GET_WORK_GROUP;

    $response = $sdk->sdk->getWorkGroup($request);

    if ($response->getWorkGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importNotebook

Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportNotebookRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportNotebookInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportNotebookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportNotebookRequest();
    $request->importNotebookInput = new ImportNotebookInput();
    $request->importNotebookInput->clientRequestToken = 'nam';
    $request->importNotebookInput->name = 'Meredith Hickle PhD';
    $request->importNotebookInput->payload = 'amet';
    $request->importNotebookInput->type = NotebookTypeEnum::IPYNB;
    $request->importNotebookInput->workGroup = 'aut';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = ImportNotebookXAmzTargetEnum::AMAZON_ATHENA_IMPORT_NOTEBOOK;

    $response = $sdk->sdk->importNotebook($request);

    if ($response->importNotebookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApplicationDPUSizes

Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationDPUSizesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListApplicationDPUSizesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListApplicationDPUSizesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListApplicationDPUSizesRequest();
    $request->listApplicationDPUSizesInput = new ListApplicationDPUSizesInput();
    $request->listApplicationDPUSizesInput->maxResults = 521037;
    $request->listApplicationDPUSizesInput->nextToken = 'dignissimos';
    $request->maxResults = 'eaque';
    $request->nextToken = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = ListApplicationDPUSizesXAmzTargetEnum::AMAZON_ATHENA_LIST_APPLICATION_DPU_SIZES;

    $response = $sdk->sdk->listApplicationDPUSizes($request);

    if ($response->listApplicationDPUSizesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCalculationExecutions

Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCalculationExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCalculationExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalculationExecutionStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCalculationExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCalculationExecutionsRequest();
    $request->listCalculationExecutionsRequest = new ListCalculationExecutionsRequest();
    $request->listCalculationExecutionsRequest->maxResults = 874573;
    $request->listCalculationExecutionsRequest->nextToken = 'nostrum';
    $request->listCalculationExecutionsRequest->sessionId = 'hic';
    $request->listCalculationExecutionsRequest->stateFilter = CalculationExecutionStateEnum::FAILED;
    $request->maxResults = 'omnis';
    $request->nextToken = 'facilis';
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = ListCalculationExecutionsXAmzTargetEnum::AMAZON_ATHENA_LIST_CALCULATION_EXECUTIONS;

    $response = $sdk->sdk->listCalculationExecutions($request);

    if ($response->listCalculationExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataCatalogs

<p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataCatalogsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataCatalogsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListDataCatalogsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataCatalogsRequest();
    $request->listDataCatalogsInput = new ListDataCatalogsInput();
    $request->listDataCatalogsInput->maxResults = 577229;
    $request->listDataCatalogsInput->nextToken = 'rerum';
    $request->maxResults = 'adipisci';
    $request->nextToken = 'asperiores';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = ListDataCatalogsXAmzTargetEnum::AMAZON_ATHENA_LIST_DATA_CATALOGS;

    $response = $sdk->sdk->listDataCatalogs($request);

    if ($response->listDataCatalogsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatabases

Lists the databases in the specified data catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDatabasesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListDatabasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatabasesRequest();
    $request->listDatabasesInput = new ListDatabasesInput();
    $request->listDatabasesInput->catalogName = 'nobis';
    $request->listDatabasesInput->maxResults = 730122;
    $request->listDatabasesInput->nextToken = 'delectus';
    $request->maxResults = 'quaerat';
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = ListDatabasesXAmzTargetEnum::AMAZON_ATHENA_LIST_DATABASES;

    $response = $sdk->sdk->listDatabases($request);

    if ($response->listDatabasesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEngineVersions

Returns a list of engine versions that are available to choose from, including the Auto option.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEngineVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEngineVersionsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListEngineVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEngineVersionsRequest();
    $request->listEngineVersionsInput = new ListEngineVersionsInput();
    $request->listEngineVersionsInput->maxResults = 569574;
    $request->listEngineVersionsInput->nextToken = 'cum';
    $request->maxResults = 'voluptate';
    $request->nextToken = 'dignissimos';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = ListEngineVersionsXAmzTargetEnum::AMAZON_ATHENA_LIST_ENGINE_VERSIONS;

    $response = $sdk->sdk->listEngineVersions($request);

    if ($response->listEngineVersionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExecutors

Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExecutorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecutorStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExecutorsRequest();
    $request->listExecutorsRequest = new ListExecutorsRequest();
    $request->listExecutorsRequest->executorStateFilter = ExecutorStateEnum::REGISTERED;
    $request->listExecutorsRequest->maxResults = 487838;
    $request->listExecutorsRequest->nextToken = 'quaerat';
    $request->listExecutorsRequest->sessionId = 'accusamus';
    $request->maxResults = 'quidem';
    $request->nextToken = 'voluptatibus';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = ListExecutorsXAmzTargetEnum::AMAZON_ATHENA_LIST_EXECUTORS;

    $response = $sdk->sdk->listExecutors($request);

    if ($response->listExecutorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNamedQueries

<p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNamedQueriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNamedQueriesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListNamedQueriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNamedQueriesRequest();
    $request->listNamedQueriesInput = new ListNamedQueriesInput();
    $request->listNamedQueriesInput->maxResults = 743835;
    $request->listNamedQueriesInput->nextToken = 'dolorum';
    $request->listNamedQueriesInput->workGroup = 'iusto';
    $request->maxResults = 'voluptate';
    $request->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = ListNamedQueriesXAmzTargetEnum::AMAZON_ATHENA_LIST_NAMED_QUERIES;

    $response = $sdk->sdk->listNamedQueries($request);

    if ($response->listNamedQueriesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotebookMetadata

Displays the notebook files for the specified workgroup in paginated format.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNotebookMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\FilterDefinition;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotebookMetadataRequest();
    $request->listNotebookMetadataInput = new ListNotebookMetadataInput();
    $request->listNotebookMetadataInput->filters = new FilterDefinition();
    $request->listNotebookMetadataInput->filters->name = 'Alberta Ullrich';
    $request->listNotebookMetadataInput->maxResults = 20651;
    $request->listNotebookMetadataInput->nextToken = 'amet';
    $request->listNotebookMetadataInput->workGroup = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = ListNotebookMetadataXAmzTargetEnum::AMAZON_ATHENA_LIST_NOTEBOOK_METADATA;

    $response = $sdk->sdk->listNotebookMetadata($request);

    if ($response->listNotebookMetadataOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotebookSessions

Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListNotebookSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNotebookSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotebookSessionsRequest();
    $request->listNotebookSessionsRequest = new ListNotebookSessionsRequest();
    $request->listNotebookSessionsRequest->maxResults = 831049;
    $request->listNotebookSessionsRequest->nextToken = 'totam';
    $request->listNotebookSessionsRequest->notebookId = 'similique';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = ListNotebookSessionsXAmzTargetEnum::AMAZON_ATHENA_LIST_NOTEBOOK_SESSIONS;

    $response = $sdk->sdk->listNotebookSessions($request);

    if ($response->listNotebookSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPreparedStatements

Lists the prepared statements in the specified workgroup.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPreparedStatementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListPreparedStatementsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListPreparedStatementsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPreparedStatementsRequest();
    $request->listPreparedStatementsInput = new ListPreparedStatementsInput();
    $request->listPreparedStatementsInput->maxResults = 185636;
    $request->listPreparedStatementsInput->nextToken = 'dolorum';
    $request->listPreparedStatementsInput->workGroup = 'a';
    $request->maxResults = 'esse';
    $request->nextToken = 'harum';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ListPreparedStatementsXAmzTargetEnum::AMAZON_ATHENA_LIST_PREPARED_STATEMENTS;

    $response = $sdk->sdk->listPreparedStatements($request);

    if ($response->listPreparedStatementsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listQueryExecutions

<p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListQueryExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListQueryExecutionsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListQueryExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListQueryExecutionsRequest();
    $request->listQueryExecutionsInput = new ListQueryExecutionsInput();
    $request->listQueryExecutionsInput->maxResults = 253941;
    $request->listQueryExecutionsInput->nextToken = 'enim';
    $request->listQueryExecutionsInput->workGroup = 'dolorem';
    $request->maxResults = 'sapiente';
    $request->nextToken = 'totam';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'expedita';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = ListQueryExecutionsXAmzTargetEnum::AMAZON_ATHENA_LIST_QUERY_EXECUTIONS;

    $response = $sdk->sdk->listQueryExecutions($request);

    if ($response->listQueryExecutionsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSessions

Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SessionStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSessionsRequest();
    $request->listSessionsRequest = new ListSessionsRequest();
    $request->listSessionsRequest->maxResults = 374170;
    $request->listSessionsRequest->nextToken = 'deserunt';
    $request->listSessionsRequest->stateFilter = SessionStateEnum::BUSY;
    $request->listSessionsRequest->workGroup = 'ipsum';
    $request->maxResults = 'incidunt';
    $request->nextToken = 'qui';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = ListSessionsXAmzTargetEnum::AMAZON_ATHENA_LIST_SESSIONS;

    $response = $sdk->sdk->listSessions($request);

    if ($response->listSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTableMetadata

Lists the metadata for the tables in the specified data catalog database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTableMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTableMetadataInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTableMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTableMetadataRequest();
    $request->listTableMetadataInput = new ListTableMetadataInput();
    $request->listTableMetadataInput->catalogName = 'incidunt';
    $request->listTableMetadataInput->databaseName = 'aspernatur';
    $request->listTableMetadataInput->expression = 'dolores';
    $request->listTableMetadataInput->maxResults = 716860;
    $request->listTableMetadataInput->nextToken = 'facilis';
    $request->maxResults = 'aliquid';
    $request->nextToken = 'quam';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = ListTableMetadataXAmzTargetEnum::AMAZON_ATHENA_LIST_TABLE_METADATA;

    $response = $sdk->sdk->listTableMetadata($request);

    if ($response->listTableMetadataOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags associated with an Athena workgroup or data catalog resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->maxResults = 124833;
    $request->listTagsForResourceInput->nextToken = 'ullam';
    $request->listTagsForResourceInput->resourceARN = 'nam';
    $request->maxResults = 'hic';
    $request->nextToken = 'voluptatem';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AMAZON_ATHENA_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkGroups

Lists available workgroups for the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkGroupsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkGroupsRequest();
    $request->listWorkGroupsInput = new ListWorkGroupsInput();
    $request->listWorkGroupsInput->maxResults = 749255;
    $request->listWorkGroupsInput->nextToken = 'quos';
    $request->maxResults = 'tempore';
    $request->nextToken = 'cupiditate';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ListWorkGroupsXAmzTargetEnum::AMAZON_ATHENA_LIST_WORK_GROUPS;

    $response = $sdk->sdk->listWorkGroups($request);

    if ($response->listWorkGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCalculationExecution

Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCalculationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartCalculationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartCalculationExecutionRequestCalculationConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\StartCalculationExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCalculationExecutionRequest();
    $request->startCalculationExecutionRequest = new StartCalculationExecutionRequest();
    $request->startCalculationExecutionRequest->calculationConfiguration = new StartCalculationExecutionRequestCalculationConfiguration();
    $request->startCalculationExecutionRequest->calculationConfiguration->codeBlock = 'architecto';
    $request->startCalculationExecutionRequest->clientRequestToken = 'quae';
    $request->startCalculationExecutionRequest->codeBlock = 'aut';
    $request->startCalculationExecutionRequest->description = 'quas';
    $request->startCalculationExecutionRequest->sessionId = 'itaque';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = StartCalculationExecutionXAmzTargetEnum::AMAZON_ATHENA_START_CALCULATION_EXECUTION;

    $response = $sdk->sdk->startCalculationExecution($request);

    if ($response->startCalculationExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startQueryExecution

Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartQueryExecutionInput;
use \OpenAPI\OpenAPI\Models\Shared\QueryExecutionContext;
use \OpenAPI\OpenAPI\Models\Shared\ResultConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\AclConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3AclOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResultReuseConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ResultReuseByAgeConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\StartQueryExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartQueryExecutionRequest();
    $request->startQueryExecutionInput = new StartQueryExecutionInput();
    $request->startQueryExecutionInput->clientRequestToken = 'cupiditate';
    $request->startQueryExecutionInput->executionParameters = [
        'quae',
    ];
    $request->startQueryExecutionInput->queryExecutionContext = new QueryExecutionContext();
    $request->startQueryExecutionInput->queryExecutionContext->catalog = 'laudantium';
    $request->startQueryExecutionInput->queryExecutionContext->database = 'odio';
    $request->startQueryExecutionInput->queryString = 'occaecati';
    $request->startQueryExecutionInput->resultConfiguration = new ResultConfiguration();
    $request->startQueryExecutionInput->resultConfiguration->aclConfiguration = new AclConfiguration();
    $request->startQueryExecutionInput->resultConfiguration->aclConfiguration->s3AclOption = S3AclOptionEnum::BUCKET_OWNER_FULL_CONTROL;
    $request->startQueryExecutionInput->resultConfiguration->encryptionConfiguration = new EncryptionConfiguration();
    $request->startQueryExecutionInput->resultConfiguration->encryptionConfiguration->encryptionOption = EncryptionOptionEnum::CSE_KMS;
    $request->startQueryExecutionInput->resultConfiguration->encryptionConfiguration->kmsKey = 'quisquam';
    $request->startQueryExecutionInput->resultConfiguration->expectedBucketOwner = 'vero';
    $request->startQueryExecutionInput->resultConfiguration->outputLocation = 'omnis';
    $request->startQueryExecutionInput->resultReuseConfiguration = new ResultReuseConfiguration();
    $request->startQueryExecutionInput->resultReuseConfiguration->resultReuseByAgeConfiguration = new ResultReuseByAgeConfiguration();
    $request->startQueryExecutionInput->resultReuseConfiguration->resultReuseByAgeConfiguration->enabled = false;
    $request->startQueryExecutionInput->resultReuseConfiguration->resultReuseByAgeConfiguration->maxAgeInMinutes = 338159;
    $request->startQueryExecutionInput->workGroup = 'ipsum';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = StartQueryExecutionXAmzTargetEnum::AMAZON_ATHENA_START_QUERY_EXECUTION;

    $response = $sdk->sdk->startQueryExecution($request);

    if ($response->startQueryExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startSession

Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\EngineConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\StartSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartSessionRequest();
    $request->startSessionRequest = new StartSessionRequest();
    $request->startSessionRequest->clientRequestToken = 'distinctio';
    $request->startSessionRequest->description = 'quod';
    $request->startSessionRequest->engineConfiguration = new EngineConfiguration();
    $request->startSessionRequest->engineConfiguration->additionalConfigs = [
        'similique' => 'facilis',
        'vero' => 'ducimus',
    ];
    $request->startSessionRequest->engineConfiguration->coordinatorDpuSize = 293020;
    $request->startSessionRequest->engineConfiguration->defaultExecutorDpuSize = 844550;
    $request->startSessionRequest->engineConfiguration->maxConcurrentDpus = 848944;
    $request->startSessionRequest->notebookVersion = 'sequi';
    $request->startSessionRequest->sessionIdleTimeoutInMinutes = 617877;
    $request->startSessionRequest->workGroup = 'impedit';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = StartSessionXAmzTargetEnum::AMAZON_ATHENA_START_SESSION;

    $response = $sdk->sdk->startSession($request);

    if ($response->startSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopCalculationExecution

<p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopCalculationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopCalculationExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopCalculationExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopCalculationExecutionRequest();
    $request->stopCalculationExecutionRequest = new StopCalculationExecutionRequest();
    $request->stopCalculationExecutionRequest->calculationExecutionId = 'doloribus';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = StopCalculationExecutionXAmzTargetEnum::AMAZON_ATHENA_STOP_CALCULATION_EXECUTION;

    $response = $sdk->sdk->stopCalculationExecution($request);

    if ($response->stopCalculationExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopQueryExecution

<p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopQueryExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopQueryExecutionInput;
use \OpenAPI\OpenAPI\Models\Operations\StopQueryExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopQueryExecutionRequest();
    $request->stopQueryExecutionInput = new StopQueryExecutionInput();
    $request->stopQueryExecutionInput->queryExecutionId = 'ea';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = StopQueryExecutionXAmzTargetEnum::AMAZON_ATHENA_STOP_QUERY_EXECUTION;

    $response = $sdk->sdk->stopQueryExecution($request);

    if ($response->stopQueryExecutionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceARN = 'dicta';
    $request->tagResourceInput->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AMAZON_ATHENA_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## terminateSession

Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TerminateSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminateSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\TerminateSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TerminateSessionRequest();
    $request->terminateSessionRequest = new TerminateSessionRequest();
    $request->terminateSessionRequest->sessionId = 'sapiente';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = TerminateSessionXAmzTargetEnum::AMAZON_ATHENA_TERMINATE_SESSION;

    $response = $sdk->sdk->terminateSession($request);

    if ($response->terminateSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a data catalog or workgroup resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceARN = 'inventore';
    $request->untagResourceInput->tagKeys = [
        'ea',
        'quo',
    ];
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AMAZON_ATHENA_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataCatalog

Updates the data catalog that has the specified name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataCatalogRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDataCatalogInput;
use \OpenAPI\OpenAPI\Models\Shared\DataCatalogTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataCatalogXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataCatalogRequest();
    $request->updateDataCatalogInput = new UpdateDataCatalogInput();
    $request->updateDataCatalogInput->description = 'aut';
    $request->updateDataCatalogInput->name = 'Margie Russel';
    $request->updateDataCatalogInput->parameters = [
        'inventore' => 'non',
        'et' => 'dolorum',
        'laborum' => 'placeat',
        'velit' => 'eum',
    ];
    $request->updateDataCatalogInput->type = DataCatalogTypeEnum::GLUE;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = UpdateDataCatalogXAmzTargetEnum::AMAZON_ATHENA_UPDATE_DATA_CATALOG;

    $response = $sdk->sdk->updateDataCatalog($request);

    if ($response->updateDataCatalogOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNamedQuery

Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNamedQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNamedQueryInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNamedQueryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNamedQueryRequest();
    $request->updateNamedQueryInput = new UpdateNamedQueryInput();
    $request->updateNamedQueryInput->description = 'tempora';
    $request->updateNamedQueryInput->name = 'Ms. Janice McLaughlin';
    $request->updateNamedQueryInput->namedQueryId = 'odio';
    $request->updateNamedQueryInput->queryString = 'eius';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = UpdateNamedQueryXAmzTargetEnum::AMAZON_ATHENA_UPDATE_NAMED_QUERY;

    $response = $sdk->sdk->updateNamedQuery($request);

    if ($response->updateNamedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotebook

Updates the contents of a Spark notebook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNotebookInput;
use \OpenAPI\OpenAPI\Models\Shared\NotebookTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotebookRequest();
    $request->updateNotebookInput = new UpdateNotebookInput();
    $request->updateNotebookInput->clientRequestToken = 'ut';
    $request->updateNotebookInput->notebookId = 'eum';
    $request->updateNotebookInput->payload = 'suscipit';
    $request->updateNotebookInput->sessionId = 'assumenda';
    $request->updateNotebookInput->type = NotebookTypeEnum::IPYNB;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = UpdateNotebookXAmzTargetEnum::AMAZON_ATHENA_UPDATE_NOTEBOOK;

    $response = $sdk->sdk->updateNotebook($request);

    if ($response->updateNotebookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotebookMetadata

Updates the metadata for a notebook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateNotebookMetadataInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotebookMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotebookMetadataRequest();
    $request->updateNotebookMetadataInput = new UpdateNotebookMetadataInput();
    $request->updateNotebookMetadataInput->clientRequestToken = 'neque';
    $request->updateNotebookMetadataInput->name = 'Dallas Sanford';
    $request->updateNotebookMetadataInput->notebookId = 'eos';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = UpdateNotebookMetadataXAmzTargetEnum::AMAZON_ATHENA_UPDATE_NOTEBOOK_METADATA;

    $response = $sdk->sdk->updateNotebookMetadata($request);

    if ($response->updateNotebookMetadataOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePreparedStatement

Updates a prepared statement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePreparedStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePreparedStatementInput;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePreparedStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePreparedStatementRequest();
    $request->updatePreparedStatementInput = new UpdatePreparedStatementInput();
    $request->updatePreparedStatementInput->description = 'aspernatur';
    $request->updatePreparedStatementInput->queryStatement = 'sequi';
    $request->updatePreparedStatementInput->statementName = 'quo';
    $request->updatePreparedStatementInput->workGroup = 'esse';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = UpdatePreparedStatementXAmzTargetEnum::AMAZON_ATHENA_UPDATE_PREPARED_STATEMENT;

    $response = $sdk->sdk->updatePreparedStatement($request);

    if ($response->updatePreparedStatementOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkGroup

Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\WorkGroupConfigurationUpdates;
use \OpenAPI\OpenAPI\Models\Shared\CustomerContentEncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EngineVersion;
use \OpenAPI\OpenAPI\Models\Shared\ResultConfigurationUpdates;
use \OpenAPI\OpenAPI\Models\Shared\AclConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3AclOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkGroupStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkGroupRequest();
    $request->updateWorkGroupInput = new UpdateWorkGroupInput();
    $request->updateWorkGroupInput->configurationUpdates = new WorkGroupConfigurationUpdates();
    $request->updateWorkGroupInput->configurationUpdates->additionalConfiguration = 'totam';
    $request->updateWorkGroupInput->configurationUpdates->bytesScannedCutoffPerQuery = 882710;
    $request->updateWorkGroupInput->configurationUpdates->customerContentEncryptionConfiguration = new CustomerContentEncryptionConfiguration();
    $request->updateWorkGroupInput->configurationUpdates->customerContentEncryptionConfiguration->kmsKey = 'aliquam';
    $request->updateWorkGroupInput->configurationUpdates->enableMinimumEncryptionConfiguration = false;
    $request->updateWorkGroupInput->configurationUpdates->enforceWorkGroupConfiguration = false;
    $request->updateWorkGroupInput->configurationUpdates->engineVersion = new EngineVersion();
    $request->updateWorkGroupInput->configurationUpdates->engineVersion->effectiveEngineVersion = 'odio';
    $request->updateWorkGroupInput->configurationUpdates->engineVersion->selectedEngineVersion = 'occaecati';
    $request->updateWorkGroupInput->configurationUpdates->executionRole = 'commodi';
    $request->updateWorkGroupInput->configurationUpdates->publishCloudWatchMetricsEnabled = false;
    $request->updateWorkGroupInput->configurationUpdates->removeBytesScannedCutoffPerQuery = false;
    $request->updateWorkGroupInput->configurationUpdates->removeCustomerContentEncryptionConfiguration = false;
    $request->updateWorkGroupInput->configurationUpdates->requesterPaysEnabled = false;
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates = new ResultConfigurationUpdates();
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->aclConfiguration = new AclConfiguration();
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->aclConfiguration->s3AclOption = S3AclOptionEnum::BUCKET_OWNER_FULL_CONTROL;
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->encryptionConfiguration->encryptionOption = EncryptionOptionEnum::CSE_KMS;
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->encryptionConfiguration->kmsKey = 'dolores';
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->expectedBucketOwner = 'deserunt';
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->outputLocation = 'molestiae';
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->removeAclConfiguration = false;
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->removeEncryptionConfiguration = false;
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->removeExpectedBucketOwner = false;
    $request->updateWorkGroupInput->configurationUpdates->resultConfigurationUpdates->removeOutputLocation = false;
    $request->updateWorkGroupInput->description = 'accusantium';
    $request->updateWorkGroupInput->state = WorkGroupStateEnum::DISABLED;
    $request->updateWorkGroupInput->workGroup = 'eum';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = UpdateWorkGroupXAmzTargetEnum::AMAZON_ATHENA_UPDATE_WORK_GROUP;

    $response = $sdk->sdk->updateWorkGroup($request);

    if ($response->updateWorkGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
