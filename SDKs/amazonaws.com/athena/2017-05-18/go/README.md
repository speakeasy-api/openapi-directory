# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/athena/2017-05-18/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchGetNamedQueryRequest{
        BatchGetNamedQueryInput: shared.BatchGetNamedQueryInput{
            NamedQueryIds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "AmazonAthena.BatchGetNamedQuery",
    }

    ctx := context.Background()
    res, err := s.BatchGetNamedQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetNamedQueryOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchGetNamedQuery` - Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
* `BatchGetPreparedStatement` - Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.
* `BatchGetQueryExecution` - Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
* `CreateDataCatalog` - Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
* `CreateNamedQuery` - <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `CreateNotebook` - Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.
* `CreatePreparedStatement` - Creates a prepared statement for use with SQL queries in Athena.
* `CreatePresignedNotebookURL` - Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.
* `CreateWorkGroup` - Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.
* `DeleteDataCatalog` - Deletes a data catalog.
* `DeleteNamedQuery` - <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `DeleteNotebook` - Deletes the specified notebook.
* `DeletePreparedStatement` - Deletes the prepared statement with the specified name from the specified workgroup.
* `DeleteWorkGroup` - Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
* `ExportNotebook` - Exports the specified notebook and its metadata.
* `GetCalculationExecution` - Describes a previously submitted calculation execution.
* `GetCalculationExecutionCode` - Retrieves the unencrypted code that was executed for the calculation.
* `GetCalculationExecutionStatus` - Gets the status of a current calculation.
* `GetDataCatalog` - Returns the specified data catalog.
* `GetDatabase` - Returns a database object for the specified database and data catalog.
* `GetNamedQuery` - Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
* `GetNotebookMetadata` - Retrieves notebook metadata for the specified notebook ID.
* `GetPreparedStatement` - Retrieves the prepared statement with the specified name from the specified workgroup.
* `GetQueryExecution` - Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
* `GetQueryResults` - <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
* `GetQueryRuntimeStatistics` - Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.
* `GetSession` - Gets the full details of a previously created session, including the session status and configuration.
* `GetSessionStatus` - Gets the current status of a session.
* `GetTableMetadata` - Returns table metadata for the specified catalog, database, and table.
* `GetWorkGroup` - Returns information about the workgroup with the specified name.
* `ImportNotebook` - Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.
* `ListApplicationDPUSizes` - Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 
* `ListCalculationExecutions` - Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.
* `ListDataCatalogs` - <p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>
* `ListDatabases` - Lists the databases in the specified data catalog.
* `ListEngineVersions` - Returns a list of engine versions that are available to choose from, including the Auto option.
* `ListExecutors` - Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.
* `ListNamedQueries` - <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `ListNotebookMetadata` - Displays the notebook files for the specified workgroup in paginated format.
* `ListNotebookSessions` - Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* `ListPreparedStatements` - Lists the prepared statements in the specified workgroup.
* `ListQueryExecutions` - <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `ListSessions` - Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* `ListTableMetadata` - Lists the metadata for the tables in the specified data catalog database.
* `ListTagsForResource` - Lists the tags associated with an Athena workgroup or data catalog resource.
* `ListWorkGroups` - Lists available workgroups for the account.
* `StartCalculationExecution` - Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.
* `StartQueryExecution` - Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
* `StartSession` - Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.
* `StopCalculationExecution` - <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>
* `StopQueryExecution` - <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `TagResource` - Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
* `TerminateSession` - Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.
* `UntagResource` - Removes one or more tags from a data catalog or workgroup resource.
* `UpdateDataCatalog` - Updates the data catalog that has the specified name.
* `UpdateNamedQuery` - Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.
* `UpdateNotebook` - Updates the contents of a Spark notebook.
* `UpdateNotebookMetadata` - Updates the metadata for a notebook.
* `UpdatePreparedStatement` - Updates a prepared statement.
* `UpdateWorkGroup` - Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
