# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = BatchGetNamedQueryXAmzTargetEnum::AMAZON_ATHENA_BATCH_GET_NAMED_QUERY;

    $response = $sdk->batchGetNamedQuery($request);

    if ($response->batchGetNamedQueryOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchGetNamedQuery](docs/sdk/README.md#batchgetnamedquery) - Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
* [batchGetPreparedStatement](docs/sdk/README.md#batchgetpreparedstatement) - Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.
* [batchGetQueryExecution](docs/sdk/README.md#batchgetqueryexecution) - Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
* [createDataCatalog](docs/sdk/README.md#createdatacatalog) - Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
* [createNamedQuery](docs/sdk/README.md#createnamedquery) - <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [createNotebook](docs/sdk/README.md#createnotebook) - Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.
* [createPreparedStatement](docs/sdk/README.md#createpreparedstatement) - Creates a prepared statement for use with SQL queries in Athena.
* [createPresignedNotebookUrl](docs/sdk/README.md#createpresignednotebookurl) - Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.
* [createWorkGroup](docs/sdk/README.md#createworkgroup) - Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.
* [deleteDataCatalog](docs/sdk/README.md#deletedatacatalog) - Deletes a data catalog.
* [deleteNamedQuery](docs/sdk/README.md#deletenamedquery) - <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [deleteNotebook](docs/sdk/README.md#deletenotebook) - Deletes the specified notebook.
* [deletePreparedStatement](docs/sdk/README.md#deletepreparedstatement) - Deletes the prepared statement with the specified name from the specified workgroup.
* [deleteWorkGroup](docs/sdk/README.md#deleteworkgroup) - Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
* [exportNotebook](docs/sdk/README.md#exportnotebook) - Exports the specified notebook and its metadata.
* [getCalculationExecution](docs/sdk/README.md#getcalculationexecution) - Describes a previously submitted calculation execution.
* [getCalculationExecutionCode](docs/sdk/README.md#getcalculationexecutioncode) - Retrieves the unencrypted code that was executed for the calculation.
* [getCalculationExecutionStatus](docs/sdk/README.md#getcalculationexecutionstatus) - Gets the status of a current calculation.
* [getDataCatalog](docs/sdk/README.md#getdatacatalog) - Returns the specified data catalog.
* [getDatabase](docs/sdk/README.md#getdatabase) - Returns a database object for the specified database and data catalog.
* [getNamedQuery](docs/sdk/README.md#getnamedquery) - Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
* [getNotebookMetadata](docs/sdk/README.md#getnotebookmetadata) - Retrieves notebook metadata for the specified notebook ID.
* [getPreparedStatement](docs/sdk/README.md#getpreparedstatement) - Retrieves the prepared statement with the specified name from the specified workgroup.
* [getQueryExecution](docs/sdk/README.md#getqueryexecution) - Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
* [getQueryResults](docs/sdk/README.md#getqueryresults) - <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
* [getQueryRuntimeStatistics](docs/sdk/README.md#getqueryruntimestatistics) - Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.
* [getSession](docs/sdk/README.md#getsession) - Gets the full details of a previously created session, including the session status and configuration.
* [getSessionStatus](docs/sdk/README.md#getsessionstatus) - Gets the current status of a session.
* [getTableMetadata](docs/sdk/README.md#gettablemetadata) - Returns table metadata for the specified catalog, database, and table.
* [getWorkGroup](docs/sdk/README.md#getworkgroup) - Returns information about the workgroup with the specified name.
* [importNotebook](docs/sdk/README.md#importnotebook) - Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.
* [listApplicationDPUSizes](docs/sdk/README.md#listapplicationdpusizes) - Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 
* [listCalculationExecutions](docs/sdk/README.md#listcalculationexecutions) - Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.
* [listDataCatalogs](docs/sdk/README.md#listdatacatalogs) - <p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>
* [listDatabases](docs/sdk/README.md#listdatabases) - Lists the databases in the specified data catalog.
* [listEngineVersions](docs/sdk/README.md#listengineversions) - Returns a list of engine versions that are available to choose from, including the Auto option.
* [listExecutors](docs/sdk/README.md#listexecutors) - Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.
* [listNamedQueries](docs/sdk/README.md#listnamedqueries) - <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [listNotebookMetadata](docs/sdk/README.md#listnotebookmetadata) - Displays the notebook files for the specified workgroup in paginated format.
* [listNotebookSessions](docs/sdk/README.md#listnotebooksessions) - Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* [listPreparedStatements](docs/sdk/README.md#listpreparedstatements) - Lists the prepared statements in the specified workgroup.
* [listQueryExecutions](docs/sdk/README.md#listqueryexecutions) - <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [listSessions](docs/sdk/README.md#listsessions) - Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* [listTableMetadata](docs/sdk/README.md#listtablemetadata) - Lists the metadata for the tables in the specified data catalog database.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags associated with an Athena workgroup or data catalog resource.
* [listWorkGroups](docs/sdk/README.md#listworkgroups) - Lists available workgroups for the account.
* [startCalculationExecution](docs/sdk/README.md#startcalculationexecution) - Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.
* [startQueryExecution](docs/sdk/README.md#startqueryexecution) - Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
* [startSession](docs/sdk/README.md#startsession) - Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.
* [stopCalculationExecution](docs/sdk/README.md#stopcalculationexecution) - <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>
* [stopQueryExecution](docs/sdk/README.md#stopqueryexecution) - <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
* [terminateSession](docs/sdk/README.md#terminatesession) - Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from a data catalog or workgroup resource.
* [updateDataCatalog](docs/sdk/README.md#updatedatacatalog) - Updates the data catalog that has the specified name.
* [updateNamedQuery](docs/sdk/README.md#updatenamedquery) - Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.
* [updateNotebook](docs/sdk/README.md#updatenotebook) - Updates the contents of a Spark notebook.
* [updateNotebookMetadata](docs/sdk/README.md#updatenotebookmetadata) - Updates the metadata for a notebook.
* [updatePreparedStatement](docs/sdk/README.md#updatepreparedstatement) - Updates a prepared statement.
* [updateWorkGroup](docs/sdk/README.md#updateworkgroup) - Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
