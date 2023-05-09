# SDK

## Overview

<p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p> <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing Amazon Athena with JDBC</a>.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/athena/>
### Available Operations

* [BatchGetNamedQuery](#batchgetnamedquery) - Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
* [BatchGetPreparedStatement](#batchgetpreparedstatement) - Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.
* [BatchGetQueryExecution](#batchgetqueryexecution) - Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
* [CreateDataCatalog](#createdatacatalog) - Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
* [CreateNamedQuery](#createnamedquery) - <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [CreateNotebook](#createnotebook) - Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.
* [CreatePreparedStatement](#createpreparedstatement) - Creates a prepared statement for use with SQL queries in Athena.
* [CreatePresignedNotebookURL](#createpresignednotebookurl) - Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.
* [CreateWorkGroup](#createworkgroup) - Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.
* [DeleteDataCatalog](#deletedatacatalog) - Deletes a data catalog.
* [DeleteNamedQuery](#deletenamedquery) - <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [DeleteNotebook](#deletenotebook) - Deletes the specified notebook.
* [DeletePreparedStatement](#deletepreparedstatement) - Deletes the prepared statement with the specified name from the specified workgroup.
* [DeleteWorkGroup](#deleteworkgroup) - Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
* [ExportNotebook](#exportnotebook) - Exports the specified notebook and its metadata.
* [GetCalculationExecution](#getcalculationexecution) - Describes a previously submitted calculation execution.
* [GetCalculationExecutionCode](#getcalculationexecutioncode) - Retrieves the unencrypted code that was executed for the calculation.
* [GetCalculationExecutionStatus](#getcalculationexecutionstatus) - Gets the status of a current calculation.
* [GetDataCatalog](#getdatacatalog) - Returns the specified data catalog.
* [GetDatabase](#getdatabase) - Returns a database object for the specified database and data catalog.
* [GetNamedQuery](#getnamedquery) - Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
* [GetNotebookMetadata](#getnotebookmetadata) - Retrieves notebook metadata for the specified notebook ID.
* [GetPreparedStatement](#getpreparedstatement) - Retrieves the prepared statement with the specified name from the specified workgroup.
* [GetQueryExecution](#getqueryexecution) - Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
* [GetQueryResults](#getqueryresults) - <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
* [GetQueryRuntimeStatistics](#getqueryruntimestatistics) - Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.
* [GetSession](#getsession) - Gets the full details of a previously created session, including the session status and configuration.
* [GetSessionStatus](#getsessionstatus) - Gets the current status of a session.
* [GetTableMetadata](#gettablemetadata) - Returns table metadata for the specified catalog, database, and table.
* [GetWorkGroup](#getworkgroup) - Returns information about the workgroup with the specified name.
* [ImportNotebook](#importnotebook) - Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.
* [ListApplicationDPUSizes](#listapplicationdpusizes) - Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 
* [ListCalculationExecutions](#listcalculationexecutions) - Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.
* [ListDataCatalogs](#listdatacatalogs) - <p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>
* [ListDatabases](#listdatabases) - Lists the databases in the specified data catalog.
* [ListEngineVersions](#listengineversions) - Returns a list of engine versions that are available to choose from, including the Auto option.
* [ListExecutors](#listexecutors) - Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.
* [ListNamedQueries](#listnamedqueries) - <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [ListNotebookMetadata](#listnotebookmetadata) - Displays the notebook files for the specified workgroup in paginated format.
* [ListNotebookSessions](#listnotebooksessions) - Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* [ListPreparedStatements](#listpreparedstatements) - Lists the prepared statements in the specified workgroup.
* [ListQueryExecutions](#listqueryexecutions) - <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [ListSessions](#listsessions) - Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.
* [ListTableMetadata](#listtablemetadata) - Lists the metadata for the tables in the specified data catalog database.
* [ListTagsForResource](#listtagsforresource) - Lists the tags associated with an Athena workgroup or data catalog resource.
* [ListWorkGroups](#listworkgroups) - Lists available workgroups for the account.
* [StartCalculationExecution](#startcalculationexecution) - Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.
* [StartQueryExecution](#startqueryexecution) - Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
* [StartSession](#startsession) - Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.
* [StopCalculationExecution](#stopcalculationexecution) - <p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>
* [StopQueryExecution](#stopqueryexecution) - <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* [TagResource](#tagresource) - Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
* [TerminateSession](#terminatesession) - Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.
* [UntagResource](#untagresource) - Removes one or more tags from a data catalog or workgroup resource.
* [UpdateDataCatalog](#updatedatacatalog) - Updates the data catalog that has the specified name.
* [UpdateNamedQuery](#updatenamedquery) - Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.
* [UpdateNotebook](#updatenotebook) - Updates the contents of a Spark notebook.
* [UpdateNotebookMetadata](#updatenotebookmetadata) - Updates the metadata for a notebook.
* [UpdatePreparedStatement](#updatepreparedstatement) - Updates a prepared statement.
* [UpdateWorkGroup](#updateworkgroup) - Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.

## BatchGetNamedQuery

Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetNamedQuery(ctx, operations.BatchGetNamedQueryRequest{
        BatchGetNamedQueryInput: shared.BatchGetNamedQueryInput{
            NamedQueryIds: []string{
                "iure",
                "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.BatchGetNamedQueryXAmzTargetEnumAmazonAthenaBatchGetNamedQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetNamedQueryOutput != nil {
        // handle response
    }
}
```

## BatchGetPreparedStatement

Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetPreparedStatement(ctx, operations.BatchGetPreparedStatementRequest{
        BatchGetPreparedStatementInput: shared.BatchGetPreparedStatementInput{
            PreparedStatementNames: []string{
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            },
            WorkGroup: "recusandae",
        },
        XAmzAlgorithm: sdk.String("temporibus"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.BatchGetPreparedStatementXAmzTargetEnumAmazonAthenaBatchGetPreparedStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetPreparedStatementOutput != nil {
        // handle response
    }
}
```

## BatchGetQueryExecution

Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchGetQueryExecution(ctx, operations.BatchGetQueryExecutionRequest{
        BatchGetQueryExecutionInput: shared.BatchGetQueryExecutionInput{
            QueryExecutionIds: []string{
                "sapiente",
                "quo",
                "odit",
                "at",
            },
        },
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.BatchGetQueryExecutionXAmzTargetEnumAmazonAthenaBatchGetQueryExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetQueryExecutionOutput != nil {
        // handle response
    }
}
```

## CreateDataCatalog

Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDataCatalog(ctx, operations.CreateDataCatalogRequest{
        CreateDataCatalogInput: shared.CreateDataCatalogInput{
            Description: sdk.String("porro"),
            Name: "Samuel Reichel",
            Parameters: map[string]string{
                "deleniti": "hic",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("totam"),
                    Value: sdk.String("beatae"),
                },
                shared.Tag{
                    Key: sdk.String("commodi"),
                    Value: sdk.String("molestiae"),
                },
                shared.Tag{
                    Key: sdk.String("modi"),
                    Value: sdk.String("qui"),
                },
                shared.Tag{
                    Key: sdk.String("impedit"),
                    Value: sdk.String("cum"),
                },
            },
            Type: shared.DataCatalogTypeEnumGlue,
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("sed"),
        XAmzTarget: operations.CreateDataCatalogXAmzTargetEnumAmazonAthenaCreateDataCatalog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataCatalogOutput != nil {
        // handle response
    }
}
```

## CreateNamedQuery

<p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateNamedQuery(ctx, operations.CreateNamedQueryRequest{
        CreateNamedQueryInput: shared.CreateNamedQueryInput{
            ClientRequestToken: sdk.String("iste"),
            Database: "dolor",
            Description: sdk.String("natus"),
            Name: "May Turcotte",
            QueryString: "corporis",
            WorkGroup: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.CreateNamedQueryXAmzTargetEnumAmazonAthenaCreateNamedQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNamedQueryOutput != nil {
        // handle response
    }
}
```

## CreateNotebook

Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateNotebook(ctx, operations.CreateNotebookRequest{
        CreateNotebookInput: shared.CreateNotebookInput{
            ClientRequestToken: sdk.String("mollitia"),
            Name: "Ernest Ebert",
            WorkGroup: "nobis",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzTarget: operations.CreateNotebookXAmzTargetEnumAmazonAthenaCreateNotebook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNotebookOutput != nil {
        // handle response
    }
}
```

## CreatePreparedStatement

Creates a prepared statement for use with SQL queries in Athena.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePreparedStatement(ctx, operations.CreatePreparedStatementRequest{
        CreatePreparedStatementInput: shared.CreatePreparedStatementInput{
            Description: sdk.String("culpa"),
            QueryStatement: "doloribus",
            StatementName: "sapiente",
            WorkGroup: "architecto",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreatePreparedStatementXAmzTargetEnumAmazonAthenaCreatePreparedStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePreparedStatementOutput != nil {
        // handle response
    }
}
```

## CreatePresignedNotebookURL

Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePresignedNotebookURL(ctx, operations.CreatePresignedNotebookURLRequest{
        CreatePresignedNotebookURLRequest: shared.CreatePresignedNotebookURLRequest{
            SessionID: "numquam",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.CreatePresignedNotebookURLXAmzTargetEnumAmazonAthenaCreatePresignedNotebookURL,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePresignedNotebookURLResponse != nil {
        // handle response
    }
}
```

## CreateWorkGroup

Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateWorkGroup(ctx, operations.CreateWorkGroupRequest{
        CreateWorkGroupInput: shared.CreateWorkGroupInput{
            Configuration: &shared.WorkGroupConfiguration{
                AdditionalConfiguration: sdk.String("vitae"),
                BytesScannedCutoffPerQuery: sdk.Int64(674752),
                CustomerContentEncryptionConfiguration: &shared.CustomerContentEncryptionConfiguration{
                    KmsKey: "animi",
                },
                EnableMinimumEncryptionConfiguration: sdk.Bool(false),
                EnforceWorkGroupConfiguration: sdk.Bool(false),
                EngineVersion: &shared.EngineVersion{
                    EffectiveEngineVersion: sdk.String("enim"),
                    SelectedEngineVersion: sdk.String("odit"),
                },
                ExecutionRole: sdk.String("quo"),
                PublishCloudWatchMetricsEnabled: sdk.Bool(false),
                RequesterPaysEnabled: sdk.Bool(false),
                ResultConfiguration: &shared.ResultConfiguration{
                    ACLConfiguration: &shared.ACLConfiguration{
                        S3ACLOption: shared.S3ACLOptionEnumBucketOwnerFullControl,
                    },
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        EncryptionOption: shared.EncryptionOptionEnumSseS3,
                        KmsKey: sdk.String("tenetur"),
                    },
                    ExpectedBucketOwner: sdk.String("ipsam"),
                    OutputLocation: sdk.String("id"),
                },
            },
            Description: sdk.String("possimus"),
            Name: "Joyce Mueller",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("reiciendis"),
                    Value: sdk.String("voluptatibus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.CreateWorkGroupXAmzTargetEnumAmazonAthenaCreateWorkGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkGroupOutput != nil {
        // handle response
    }
}
```

## DeleteDataCatalog

Deletes a data catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDataCatalog(ctx, operations.DeleteDataCatalogRequest{
        DeleteDataCatalogInput: shared.DeleteDataCatalogInput{
            Name: "Thomas Batz",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.DeleteDataCatalogXAmzTargetEnumAmazonAthenaDeleteDataCatalog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDataCatalogOutput != nil {
        // handle response
    }
}
```

## DeleteNamedQuery

<p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteNamedQuery(ctx, operations.DeleteNamedQueryRequest{
        DeleteNamedQueryInput: shared.DeleteNamedQueryInput{
            NamedQueryID: "enim",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.DeleteNamedQueryXAmzTargetEnumAmazonAthenaDeleteNamedQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNamedQueryOutput != nil {
        // handle response
    }
}
```

## DeleteNotebook

Deletes the specified notebook.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteNotebook(ctx, operations.DeleteNotebookRequest{
        DeleteNotebookInput: shared.DeleteNotebookInput{
            NotebookID: "excepturi",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
        XAmzTarget: operations.DeleteNotebookXAmzTargetEnumAmazonAthenaDeleteNotebook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteNotebookOutput != nil {
        // handle response
    }
}
```

## DeletePreparedStatement

Deletes the prepared statement with the specified name from the specified workgroup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePreparedStatement(ctx, operations.DeletePreparedStatementRequest{
        DeletePreparedStatementInput: shared.DeletePreparedStatementInput{
            StatementName: "sint",
            WorkGroup: "veritatis",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.DeletePreparedStatementXAmzTargetEnumAmazonAthenaDeletePreparedStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePreparedStatementOutput != nil {
        // handle response
    }
}
```

## DeleteWorkGroup

Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteWorkGroup(ctx, operations.DeleteWorkGroupRequest{
        DeleteWorkGroupInput: shared.DeleteWorkGroupInput{
            RecursiveDeleteOption: sdk.Bool(false),
            WorkGroup: "deserunt",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.DeleteWorkGroupXAmzTargetEnumAmazonAthenaDeleteWorkGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkGroupOutput != nil {
        // handle response
    }
}
```

## ExportNotebook

Exports the specified notebook and its metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ExportNotebook(ctx, operations.ExportNotebookRequest{
        ExportNotebookInput: shared.ExportNotebookInput{
            NotebookID: "quos",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ExportNotebookXAmzTargetEnumAmazonAthenaExportNotebook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExportNotebookOutput != nil {
        // handle response
    }
}
```

## GetCalculationExecution

Describes a previously submitted calculation execution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCalculationExecution(ctx, operations.GetCalculationExecutionRequest{
        GetCalculationExecutionRequest: shared.GetCalculationExecutionRequest{
            CalculationExecutionID: "excepturi",
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzTarget: operations.GetCalculationExecutionXAmzTargetEnumAmazonAthenaGetCalculationExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCalculationExecutionResponse != nil {
        // handle response
    }
}
```

## GetCalculationExecutionCode

Retrieves the unencrypted code that was executed for the calculation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCalculationExecutionCode(ctx, operations.GetCalculationExecutionCodeRequest{
        GetCalculationExecutionCodeRequest: shared.GetCalculationExecutionCodeRequest{
            CalculationExecutionID: "eligendi",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzTarget: operations.GetCalculationExecutionCodeXAmzTargetEnumAmazonAthenaGetCalculationExecutionCode,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCalculationExecutionCodeResponse != nil {
        // handle response
    }
}
```

## GetCalculationExecutionStatus

Gets the status of a current calculation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCalculationExecutionStatus(ctx, operations.GetCalculationExecutionStatusRequest{
        GetCalculationExecutionStatusRequest: shared.GetCalculationExecutionStatusRequest{
            CalculationExecutionID: "debitis",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.GetCalculationExecutionStatusXAmzTargetEnumAmazonAthenaGetCalculationExecutionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCalculationExecutionStatusResponse != nil {
        // handle response
    }
}
```

## GetDataCatalog

Returns the specified data catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDataCatalog(ctx, operations.GetDataCatalogRequest{
        GetDataCatalogInput: shared.GetDataCatalogInput{
            Name: "Valerie Runolfsson",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.GetDataCatalogXAmzTargetEnumAmazonAthenaGetDataCatalog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataCatalogOutput != nil {
        // handle response
    }
}
```

## GetDatabase

Returns a database object for the specified database and data catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDatabase(ctx, operations.GetDatabaseRequest{
        GetDatabaseInput: shared.GetDatabaseInput{
            CatalogName: "delectus",
            DatabaseName: "quidem",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.GetDatabaseXAmzTargetEnumAmazonAthenaGetDatabase,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatabaseOutput != nil {
        // handle response
    }
}
```

## GetNamedQuery

Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetNamedQuery(ctx, operations.GetNamedQueryRequest{
        GetNamedQueryInput: shared.GetNamedQueryInput{
            NamedQueryID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.GetNamedQueryXAmzTargetEnumAmazonAthenaGetNamedQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNamedQueryOutput != nil {
        // handle response
    }
}
```

## GetNotebookMetadata

Retrieves notebook metadata for the specified notebook ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetNotebookMetadata(ctx, operations.GetNotebookMetadataRequest{
        GetNotebookMetadataInput: shared.GetNotebookMetadataInput{
            NotebookID: "magnam",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.GetNotebookMetadataXAmzTargetEnumAmazonAthenaGetNotebookMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNotebookMetadataOutput != nil {
        // handle response
    }
}
```

## GetPreparedStatement

Retrieves the prepared statement with the specified name from the specified workgroup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPreparedStatement(ctx, operations.GetPreparedStatementRequest{
        GetPreparedStatementInput: shared.GetPreparedStatementInput{
            StatementName: "eum",
            WorkGroup: "vero",
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.GetPreparedStatementXAmzTargetEnumAmazonAthenaGetPreparedStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPreparedStatementOutput != nil {
        // handle response
    }
}
```

## GetQueryExecution

Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetQueryExecution(ctx, operations.GetQueryExecutionRequest{
        GetQueryExecutionInput: shared.GetQueryExecutionInput{
            QueryExecutionID: "quos",
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.GetQueryExecutionXAmzTargetEnumAmazonAthenaGetQueryExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryExecutionOutput != nil {
        // handle response
    }
}
```

## GetQueryResults

<p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetQueryResults(ctx, operations.GetQueryResultsRequest{
        GetQueryResultsInput: shared.GetQueryResultsInput{
            MaxResults: sdk.Int64(221262),
            NextToken: sdk.String("necessitatibus"),
            QueryExecutionID: "odit",
        },
        MaxResults: sdk.String("nemo"),
        NextToken: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.GetQueryResultsXAmzTargetEnumAmazonAthenaGetQueryResults,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryResultsOutput != nil {
        // handle response
    }
}
```

## GetQueryRuntimeStatistics

Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetQueryRuntimeStatistics(ctx, operations.GetQueryRuntimeStatisticsRequest{
        GetQueryRuntimeStatisticsInput: shared.GetQueryRuntimeStatisticsInput{
            QueryExecutionID: "in",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.GetQueryRuntimeStatisticsXAmzTargetEnumAmazonAthenaGetQueryRuntimeStatistics,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQueryRuntimeStatisticsOutput != nil {
        // handle response
    }
}
```

## GetSession

Gets the full details of a previously created session, including the session status and configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSession(ctx, operations.GetSessionRequest{
        GetSessionRequest: shared.GetSessionRequest{
            SessionID: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.GetSessionXAmzTargetEnumAmazonAthenaGetSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSessionResponse != nil {
        // handle response
    }
}
```

## GetSessionStatus

Gets the current status of a session.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetSessionStatus(ctx, operations.GetSessionStatusRequest{
        GetSessionStatusRequest: shared.GetSessionStatusRequest{
            SessionID: "magni",
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.GetSessionStatusXAmzTargetEnumAmazonAthenaGetSessionStatus,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSessionStatusResponse != nil {
        // handle response
    }
}
```

## GetTableMetadata

Returns table metadata for the specified catalog, database, and table.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetTableMetadata(ctx, operations.GetTableMetadataRequest{
        GetTableMetadataInput: shared.GetTableMetadataInput{
            CatalogName: "odit",
            DatabaseName: "ea",
            TableName: "accusantium",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.GetTableMetadataXAmzTargetEnumAmazonAthenaGetTableMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTableMetadataOutput != nil {
        // handle response
    }
}
```

## GetWorkGroup

Returns information about the workgroup with the specified name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetWorkGroup(ctx, operations.GetWorkGroupRequest{
        GetWorkGroupInput: shared.GetWorkGroupInput{
            WorkGroup: "eaque",
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.GetWorkGroupXAmzTargetEnumAmazonAthenaGetWorkGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkGroupOutput != nil {
        // handle response
    }
}
```

## ImportNotebook

Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportNotebook(ctx, operations.ImportNotebookRequest{
        ImportNotebookInput: shared.ImportNotebookInput{
            ClientRequestToken: sdk.String("cumque"),
            Name: "Mindy Renner",
            Payload: "quis",
            Type: shared.NotebookTypeEnumIpynb,
            WorkGroup: "totam",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.ImportNotebookXAmzTargetEnumAmazonAthenaImportNotebook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportNotebookOutput != nil {
        // handle response
    }
}
```

## ListApplicationDPUSizes

Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListApplicationDPUSizes(ctx, operations.ListApplicationDPUSizesRequest{
        ListApplicationDPUSizesInput: shared.ListApplicationDPUSizesInput{
            MaxResults: sdk.Int64(793698),
            NextToken: sdk.String("quam"),
        },
        MaxResults: sdk.String("dolor"),
        NextToken: sdk.String("vero"),
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.ListApplicationDPUSizesXAmzTargetEnumAmazonAthenaListApplicationDpuSizes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListApplicationDPUSizesOutput != nil {
        // handle response
    }
}
```

## ListCalculationExecutions

Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCalculationExecutions(ctx, operations.ListCalculationExecutionsRequest{
        ListCalculationExecutionsRequest: shared.ListCalculationExecutionsRequest{
            MaxResults: sdk.Int64(783645),
            NextToken: sdk.String("consequuntur"),
            SessionID: "blanditiis",
            StateFilter: shared.CalculationExecutionStateEnumCanceling.ToPointer(),
        },
        MaxResults: sdk.String("eaque"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ListCalculationExecutionsXAmzTargetEnumAmazonAthenaListCalculationExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCalculationExecutionsResponse != nil {
        // handle response
    }
}
```

## ListDataCatalogs

<p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDataCatalogs(ctx, operations.ListDataCatalogsRequest{
        ListDataCatalogsInput: shared.ListDataCatalogsInput{
            MaxResults: sdk.Int64(535633),
            NextToken: sdk.String("pariatur"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.ListDataCatalogsXAmzTargetEnumAmazonAthenaListDataCatalogs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDataCatalogsOutput != nil {
        // handle response
    }
}
```

## ListDatabases

Lists the databases in the specified data catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDatabases(ctx, operations.ListDatabasesRequest{
        ListDatabasesInput: shared.ListDatabasesInput{
            CatalogName: "dolor",
            MaxResults: sdk.Int64(186193),
            NextToken: sdk.String("ipsum"),
        },
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.ListDatabasesXAmzTargetEnumAmazonAthenaListDatabases,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatabasesOutput != nil {
        // handle response
    }
}
```

## ListEngineVersions

Returns a list of engine versions that are available to choose from, including the Auto option.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEngineVersions(ctx, operations.ListEngineVersionsRequest{
        ListEngineVersionsInput: shared.ListEngineVersionsInput{
            MaxResults: sdk.Int64(85295),
            NextToken: sdk.String("ipsa"),
        },
        MaxResults: sdk.String("ipsa"),
        NextToken: sdk.String("iure"),
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.ListEngineVersionsXAmzTargetEnumAmazonAthenaListEngineVersions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEngineVersionsOutput != nil {
        // handle response
    }
}
```

## ListExecutors

Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListExecutors(ctx, operations.ListExecutorsRequest{
        ListExecutorsRequest: shared.ListExecutorsRequest{
            ExecutorStateFilter: shared.ExecutorStateEnumCreated.ToPointer(),
            MaxResults: sdk.Int64(542499),
            NextToken: sdk.String("sit"),
            SessionID: "fugiat",
        },
        MaxResults: sdk.String("ab"),
        NextToken: sdk.String("soluta"),
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.ListExecutorsXAmzTargetEnumAmazonAthenaListExecutors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutorsResponse != nil {
        // handle response
    }
}
```

## ListNamedQueries

<p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListNamedQueries(ctx, operations.ListNamedQueriesRequest{
        ListNamedQueriesInput: shared.ListNamedQueriesInput{
            MaxResults: sdk.Int64(714697),
            NextToken: sdk.String("asperiores"),
            WorkGroup: sdk.String("nihil"),
        },
        MaxResults: sdk.String("ipsum"),
        NextToken: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.ListNamedQueriesXAmzTargetEnumAmazonAthenaListNamedQueries,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNamedQueriesOutput != nil {
        // handle response
    }
}
```

## ListNotebookMetadata

Displays the notebook files for the specified workgroup in paginated format.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListNotebookMetadata(ctx, operations.ListNotebookMetadataRequest{
        ListNotebookMetadataInput: shared.ListNotebookMetadataInput{
            Filters: &shared.FilterDefinition{
                Name: sdk.String("Tommy Turner"),
            },
            MaxResults: sdk.Int64(588317),
            NextToken: sdk.String("minima"),
            WorkGroup: "repellendus",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.ListNotebookMetadataXAmzTargetEnumAmazonAthenaListNotebookMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotebookMetadataOutput != nil {
        // handle response
    }
}
```

## ListNotebookSessions

Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListNotebookSessions(ctx, operations.ListNotebookSessionsRequest{
        ListNotebookSessionsRequest: shared.ListNotebookSessionsRequest{
            MaxResults: sdk.Int64(798047),
            NextToken: sdk.String("officiis"),
            NotebookID: "qui",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.ListNotebookSessionsXAmzTargetEnumAmazonAthenaListNotebookSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNotebookSessionsResponse != nil {
        // handle response
    }
}
```

## ListPreparedStatements

Lists the prepared statements in the specified workgroup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPreparedStatements(ctx, operations.ListPreparedStatementsRequest{
        ListPreparedStatementsInput: shared.ListPreparedStatementsInput{
            MaxResults: sdk.Int64(947371),
            NextToken: sdk.String("amet"),
            WorkGroup: "tempore",
        },
        MaxResults: sdk.String("accusamus"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.ListPreparedStatementsXAmzTargetEnumAmazonAthenaListPreparedStatements,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPreparedStatementsOutput != nil {
        // handle response
    }
}
```

## ListQueryExecutions

<p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListQueryExecutions(ctx, operations.ListQueryExecutionsRequest{
        ListQueryExecutionsInput: shared.ListQueryExecutionsInput{
            MaxResults: sdk.Int64(207470),
            NextToken: sdk.String("sed"),
            WorkGroup: sdk.String("vel"),
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("voluptas"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.ListQueryExecutionsXAmzTargetEnumAmazonAthenaListQueryExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListQueryExecutionsOutput != nil {
        // handle response
    }
}
```

## ListSessions

Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSessions(ctx, operations.ListSessionsRequest{
        ListSessionsRequest: shared.ListSessionsRequest{
            MaxResults: sdk.Int64(863856),
            NextToken: sdk.String("soluta"),
            StateFilter: shared.SessionStateEnumCreating.ToPointer(),
            WorkGroup: "laborum",
        },
        MaxResults: sdk.String("totam"),
        NextToken: sdk.String("incidunt"),
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestias"),
        XAmzTarget: operations.ListSessionsXAmzTargetEnumAmazonAthenaListSessions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSessionsResponse != nil {
        // handle response
    }
}
```

## ListTableMetadata

Lists the metadata for the tables in the specified data catalog database.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTableMetadata(ctx, operations.ListTableMetadataRequest{
        ListTableMetadataInput: shared.ListTableMetadataInput{
            CatalogName: "temporibus",
            DatabaseName: "qui",
            Expression: sdk.String("neque"),
            MaxResults: sdk.Int64(144847),
            NextToken: sdk.String("magni"),
        },
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("sunt"),
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.ListTableMetadataXAmzTargetEnumAmazonAthenaListTableMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTableMetadataOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags associated with an Athena workgroup or data catalog resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceInput: shared.ListTagsForResourceInput{
            MaxResults: sdk.Int64(92596),
            NextToken: sdk.String("saepe"),
            ResourceARN: "ipsum",
        },
        MaxResults: sdk.String("veritatis"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("aperiam"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumAmazonAthenaListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListWorkGroups

Lists available workgroups for the account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListWorkGroups(ctx, operations.ListWorkGroupsRequest{
        ListWorkGroupsInput: shared.ListWorkGroupsInput{
            MaxResults: sdk.Int64(286915),
            NextToken: sdk.String("adipisci"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("consequatur"),
        XAmzSignature: sdk.String("est"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.ListWorkGroupsXAmzTargetEnumAmazonAthenaListWorkGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkGroupsOutput != nil {
        // handle response
    }
}
```

## StartCalculationExecution

Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartCalculationExecution(ctx, operations.StartCalculationExecutionRequest{
        StartCalculationExecutionRequest: shared.StartCalculationExecutionRequest{
            CalculationConfiguration: &shared.StartCalculationExecutionRequestCalculationConfiguration{
                CodeBlock: sdk.String("porro"),
            },
            ClientRequestToken: sdk.String("doloribus"),
            CodeBlock: sdk.String("ut"),
            Description: sdk.String("facilis"),
            SessionID: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.StartCalculationExecutionXAmzTargetEnumAmazonAthenaStartCalculationExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartCalculationExecutionResponse != nil {
        // handle response
    }
}
```

## StartQueryExecution

Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartQueryExecution(ctx, operations.StartQueryExecutionRequest{
        StartQueryExecutionInput: shared.StartQueryExecutionInput{
            ClientRequestToken: sdk.String("vero"),
            ExecutionParameters: []string{
                "quis",
                "ipsum",
                "delectus",
            },
            QueryExecutionContext: &shared.QueryExecutionContext{
                Catalog: sdk.String("voluptate"),
                Database: sdk.String("consectetur"),
            },
            QueryString: "vero",
            ResultConfiguration: &shared.ResultConfiguration{
                ACLConfiguration: &shared.ACLConfiguration{
                    S3ACLOption: shared.S3ACLOptionEnumBucketOwnerFullControl,
                },
                EncryptionConfiguration: &shared.EncryptionConfiguration{
                    EncryptionOption: shared.EncryptionOptionEnumCseKms,
                    KmsKey: sdk.String("dignissimos"),
                },
                ExpectedBucketOwner: sdk.String("hic"),
                OutputLocation: sdk.String("distinctio"),
            },
            ResultReuseConfiguration: &shared.ResultReuseConfiguration{
                ResultReuseByAgeConfiguration: &shared.ResultReuseByAgeConfiguration{
                    Enabled: false,
                    MaxAgeInMinutes: sdk.Int64(799203),
                },
            },
            WorkGroup: sdk.String("odio"),
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.StartQueryExecutionXAmzTargetEnumAmazonAthenaStartQueryExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartQueryExecutionOutput != nil {
        // handle response
    }
}
```

## StartSession

Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartSession(ctx, operations.StartSessionRequest{
        StartSessionRequest: shared.StartSessionRequest{
            ClientRequestToken: sdk.String("sequi"),
            Description: sdk.String("natus"),
            EngineConfiguration: shared.EngineConfiguration{
                AdditionalConfigs: map[string]string{
                    "aut": "voluptatibus",
                    "exercitationem": "nulla",
                    "fugit": "porro",
                    "maiores": "doloribus",
                },
                CoordinatorDpuSize: sdk.Int64(478370),
                DefaultExecutorDpuSize: sdk.Int64(753570),
                MaxConcurrentDpus: 497391,
            },
            NotebookVersion: sdk.String("alias"),
            SessionIdleTimeoutInMinutes: sdk.Int64(639473),
            WorkGroup: "tempora",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("possimus"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("ratione"),
        XAmzTarget: operations.StartSessionXAmzTargetEnumAmazonAthenaStartSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSessionResponse != nil {
        // handle response
    }
}
```

## StopCalculationExecution

<p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopCalculationExecution(ctx, operations.StopCalculationExecutionRequest{
        StopCalculationExecutionRequest: shared.StopCalculationExecutionRequest{
            CalculationExecutionID: "ex",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.StopCalculationExecutionXAmzTargetEnumAmazonAthenaStopCalculationExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopCalculationExecutionResponse != nil {
        // handle response
    }
}
```

## StopQueryExecution

<p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopQueryExecution(ctx, operations.StopQueryExecutionRequest{
        StopQueryExecutionInput: shared.StopQueryExecutionInput{
            QueryExecutionID: "excepturi",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.StopQueryExecutionXAmzTargetEnumAmazonAthenaStopQueryExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopQueryExecutionOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceInput: shared.TagResourceInput{
            ResourceARN: "corporis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("aliquid"),
                    Value: sdk.String("inventore"),
                },
                shared.Tag{
                    Key: sdk.String("magnam"),
                    Value: sdk.String("ea"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumAmazonAthenaTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## TerminateSession

Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TerminateSession(ctx, operations.TerminateSessionRequest{
        TerminateSessionRequest: shared.TerminateSessionRequest{
            SessionID: "libero",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("accusamus"),
        XAmzTarget: operations.TerminateSessionXAmzTargetEnumAmazonAthenaTerminateSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TerminateSessionResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from a data catalog or workgroup resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceInput: shared.UntagResourceInput{
            ResourceARN: "inventore",
            TagKeys: []string{
                "et",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("placeat"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("quas"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumAmazonAthenaUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UpdateDataCatalog

Updates the data catalog that has the specified name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDataCatalog(ctx, operations.UpdateDataCatalogRequest{
        UpdateDataCatalogInput: shared.UpdateDataCatalogInput{
            Description: sdk.String("assumenda"),
            Name: "Mrs. Shane Reinger",
            Parameters: map[string]string{
                "provident": "ipsa",
            },
            Type: shared.DataCatalogTypeEnumGlue,
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.UpdateDataCatalogXAmzTargetEnumAmazonAthenaUpdateDataCatalog,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDataCatalogOutput != nil {
        // handle response
    }
}
```

## UpdateNamedQuery

Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateNamedQuery(ctx, operations.UpdateNamedQueryRequest{
        UpdateNamedQueryInput: shared.UpdateNamedQueryInput{
            Description: sdk.String("reprehenderit"),
            Name: "Nicolas Graham",
            NamedQueryID: "assumenda",
            QueryString: "eos",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("neque"),
        XAmzTarget: operations.UpdateNamedQueryXAmzTargetEnumAmazonAthenaUpdateNamedQuery,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNamedQueryOutput != nil {
        // handle response
    }
}
```

## UpdateNotebook

Updates the contents of a Spark notebook.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateNotebook(ctx, operations.UpdateNotebookRequest{
        UpdateNotebookInput: shared.UpdateNotebookInput{
            ClientRequestToken: sdk.String("quo"),
            NotebookID: "illum",
            Payload: "quo",
            SessionID: sdk.String("fuga"),
            Type: shared.NotebookTypeEnumIpynb,
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.UpdateNotebookXAmzTargetEnumAmazonAthenaUpdateNotebook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotebookOutput != nil {
        // handle response
    }
}
```

## UpdateNotebookMetadata

Updates the metadata for a notebook.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateNotebookMetadata(ctx, operations.UpdateNotebookMetadataRequest{
        UpdateNotebookMetadataInput: shared.UpdateNotebookMetadataInput{
            ClientRequestToken: sdk.String("debitis"),
            Name: "Kelly Donnelly",
            NotebookID: "recusandae",
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.UpdateNotebookMetadataXAmzTargetEnumAmazonAthenaUpdateNotebookMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotebookMetadataOutput != nil {
        // handle response
    }
}
```

## UpdatePreparedStatement

Updates a prepared statement.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePreparedStatement(ctx, operations.UpdatePreparedStatementRequest{
        UpdatePreparedStatementInput: shared.UpdatePreparedStatementInput{
            Description: sdk.String("accusamus"),
            QueryStatement: "aliquam",
            StatementName: "odio",
            WorkGroup: "occaecati",
        },
        XAmzAlgorithm: sdk.String("commodi"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.UpdatePreparedStatementXAmzTargetEnumAmazonAthenaUpdatePreparedStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePreparedStatementOutput != nil {
        // handle response
    }
}
```

## UpdateWorkGroup

Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateWorkGroup(ctx, operations.UpdateWorkGroupRequest{
        UpdateWorkGroupInput: shared.UpdateWorkGroupInput{
            ConfigurationUpdates: &shared.WorkGroupConfigurationUpdates{
                AdditionalConfiguration: sdk.String("eum"),
                BytesScannedCutoffPerQuery: sdk.Int64(556429),
                CustomerContentEncryptionConfiguration: &shared.CustomerContentEncryptionConfiguration{
                    KmsKey: "praesentium",
                },
                EnableMinimumEncryptionConfiguration: sdk.Bool(false),
                EnforceWorkGroupConfiguration: sdk.Bool(false),
                EngineVersion: &shared.EngineVersion{
                    EffectiveEngineVersion: sdk.String("consequuntur"),
                    SelectedEngineVersion: sdk.String("deleniti"),
                },
                ExecutionRole: sdk.String("fugit"),
                PublishCloudWatchMetricsEnabled: sdk.Bool(false),
                RemoveBytesScannedCutoffPerQuery: sdk.Bool(false),
                RemoveCustomerContentEncryptionConfiguration: sdk.Bool(false),
                RequesterPaysEnabled: sdk.Bool(false),
                ResultConfigurationUpdates: &shared.ResultConfigurationUpdates{
                    ACLConfiguration: &shared.ACLConfiguration{
                        S3ACLOption: shared.S3ACLOptionEnumBucketOwnerFullControl,
                    },
                    EncryptionConfiguration: &shared.EncryptionConfiguration{
                        EncryptionOption: shared.EncryptionOptionEnumCseKms,
                        KmsKey: sdk.String("mollitia"),
                    },
                    ExpectedBucketOwner: sdk.String("incidunt"),
                    OutputLocation: sdk.String("atque"),
                    RemoveACLConfiguration: sdk.Bool(false),
                    RemoveEncryptionConfiguration: sdk.Bool(false),
                    RemoveExpectedBucketOwner: sdk.Bool(false),
                    RemoveOutputLocation: sdk.Bool(false),
                },
            },
            Description: sdk.String("explicabo"),
            State: shared.WorkGroupStateEnumEnabled.ToPointer(),
            WorkGroup: "nisi",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.UpdateWorkGroupXAmzTargetEnumAmazonAthenaUpdateWorkGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkGroupOutput != nil {
        // handle response
    }
}
```
