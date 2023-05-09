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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetNamedQueryRequest;
import org.openapis.openapi.models.operations.BatchGetNamedQueryResponse;
import org.openapis.openapi.models.operations.BatchGetNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetNamedQueryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetNamedQueryRequest req = new BatchGetNamedQueryRequest(                new BatchGetNamedQueryInput(                new String[]{{
                                                add("debitis"),
                                                add("ipsa"),
                                            }});, BatchGetNamedQueryXAmzTargetEnum.AMAZON_ATHENA_BATCH_GET_NAMED_QUERY) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            BatchGetNamedQueryResponse res = sdk.sdk.batchGetNamedQuery(req);

            if (res.batchGetNamedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetPreparedStatement

Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in <code>UnprocessedPreparedStatementNames</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetPreparedStatementRequest;
import org.openapis.openapi.models.operations.BatchGetPreparedStatementResponse;
import org.openapis.openapi.models.operations.BatchGetPreparedStatementXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetPreparedStatementInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetPreparedStatementRequest req = new BatchGetPreparedStatementRequest(                new BatchGetPreparedStatementInput(                new String[]{{
                                                add("nisi"),
                                                add("recusandae"),
                                                add("temporibus"),
                                            }}, "ab");, BatchGetPreparedStatementXAmzTargetEnum.AMAZON_ATHENA_BATCH_GET_PREPARED_STATEMENT) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            BatchGetPreparedStatementResponse res = sdk.sdk.batchGetPreparedStatement(req);

            if (res.batchGetPreparedStatementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetQueryExecution

Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetQueryExecutionRequest;
import org.openapis.openapi.models.operations.BatchGetQueryExecutionResponse;
import org.openapis.openapi.models.operations.BatchGetQueryExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetQueryExecutionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetQueryExecutionRequest req = new BatchGetQueryExecutionRequest(                new BatchGetQueryExecutionInput(                new String[]{{
                                                add("at"),
                                            }});, BatchGetQueryExecutionXAmzTargetEnum.AMAZON_ATHENA_BATCH_GET_QUERY_EXECUTION) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            BatchGetQueryExecutionResponse res = sdk.sdk.batchGetQueryExecution(req);

            if (res.batchGetQueryExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDataCatalog

Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataCatalogRequest;
import org.openapis.openapi.models.operations.CreateDataCatalogResponse;
import org.openapis.openapi.models.operations.CreateDataCatalogXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDataCatalogInput;
import org.openapis.openapi.models.shared.DataCatalogTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataCatalogRequest req = new CreateDataCatalogRequest(                new CreateDataCatalogInput("dolorum", DataCatalogTypeEnum.LAMBDA) {{
                                description = "nam";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                    put("optio", "totam");
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "commodi";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateDataCatalogXAmzTargetEnum.AMAZON_ATHENA_CREATE_DATA_CATALOG) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            CreateDataCatalogResponse res = sdk.sdk.createDataCatalog(req);

            if (res.createDataCatalogOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNamedQuery

<p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNamedQueryRequest;
import org.openapis.openapi.models.operations.CreateNamedQueryResponse;
import org.openapis.openapi.models.operations.CreateNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateNamedQueryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNamedQueryRequest req = new CreateNamedQueryRequest(                new CreateNamedQueryInput("perferendis", "ad", "natus") {{
                                clientRequestToken = "sed";
                                description = "iste";
                                workGroup = "dolor";
                            }};, CreateNamedQueryXAmzTargetEnum.AMAZON_ATHENA_CREATE_NAMED_QUERY) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateNamedQueryResponse res = sdk.sdk.createNamedQuery(req);

            if (res.createNamedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNotebook

Creates an empty <code>ipynb</code> file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNotebookRequest;
import org.openapis.openapi.models.operations.CreateNotebookResponse;
import org.openapis.openapi.models.operations.CreateNotebookXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateNotebookInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNotebookRequest req = new CreateNotebookRequest(                new CreateNotebookInput("iure", "saepe") {{
                                clientRequestToken = "quidem";
                            }};, CreateNotebookXAmzTargetEnum.AMAZON_ATHENA_CREATE_NOTEBOOK) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            CreateNotebookResponse res = sdk.sdk.createNotebook(req);

            if (res.createNotebookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPreparedStatement

Creates a prepared statement for use with SQL queries in Athena.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePreparedStatementRequest;
import org.openapis.openapi.models.operations.CreatePreparedStatementResponse;
import org.openapis.openapi.models.operations.CreatePreparedStatementXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePreparedStatementInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePreparedStatementRequest req = new CreatePreparedStatementRequest(                new CreatePreparedStatementInput("corporis", "explicabo", "nobis") {{
                                description = "enim";
                            }};, CreatePreparedStatementXAmzTargetEnum.AMAZON_ATHENA_CREATE_PREPARED_STATEMENT) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            CreatePreparedStatementResponse res = sdk.sdk.createPreparedStatement(req);

            if (res.createPreparedStatementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPresignedNotebookUrl

Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, <code>CreatePresignedNotebookUrl</code> must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see <a href="https://docs.aws.amazon.com/athena/latest/ug/setting-up.html#setting-up-grant-programmatic-access">Grant programmatic access</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePresignedNotebookUrlRequest;
import org.openapis.openapi.models.operations.CreatePresignedNotebookUrlResponse;
import org.openapis.openapi.models.operations.CreatePresignedNotebookUrlXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreatePresignedNotebookUrlRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePresignedNotebookUrlRequest req = new CreatePresignedNotebookUrlRequest(                new CreatePresignedNotebookUrlRequest("sapiente");, CreatePresignedNotebookUrlXAmzTargetEnum.AMAZON_ATHENA_CREATE_PRESIGNED_NOTEBOOK_URL) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
            }};            

            CreatePresignedNotebookUrlResponse res = sdk.sdk.createPresignedNotebookUrl(req);

            if (res.createPresignedNotebookUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkGroup

Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkGroupRequest;
import org.openapis.openapi.models.operations.CreateWorkGroupResponse;
import org.openapis.openapi.models.operations.CreateWorkGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AclConfiguration;
import org.openapis.openapi.models.shared.CreateWorkGroupInput;
import org.openapis.openapi.models.shared.CustomerContentEncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionOptionEnum;
import org.openapis.openapi.models.shared.EngineVersion;
import org.openapis.openapi.models.shared.ResultConfiguration;
import org.openapis.openapi.models.shared.S3AclOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.WorkGroupConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkGroupRequest req = new CreateWorkGroupRequest(                new CreateWorkGroupInput("numquam") {{
                                configuration = new WorkGroupConfiguration() {{
                                    additionalConfiguration = "commodi";
                                    bytesScannedCutoffPerQuery = 466311L;
                                    customerContentEncryptionConfiguration = new CustomerContentEncryptionConfiguration("molestiae");;
                                    enableMinimumEncryptionConfiguration = false;
                                    enforceWorkGroupConfiguration = false;
                                    engineVersion = new EngineVersion() {{
                                        effectiveEngineVersion = "velit";
                                        selectedEngineVersion = "error";
                                    }};;
                                    executionRole = "quia";
                                    publishCloudWatchMetricsEnabled = false;
                                    requesterPaysEnabled = false;
                                    resultConfiguration = new ResultConfiguration() {{
                                        aclConfiguration = new AclConfiguration(S3AclOptionEnum.BUCKET_OWNER_FULL_CONTROL);;
                                        encryptionConfiguration = new EncryptionConfiguration(EncryptionOptionEnum.SSE_KMS) {{
                                            kmsKey = "vitae";
                                        }};;
                                        expectedBucketOwner = "laborum";
                                        outputLocation = "animi";
                                    }};;
                                }};;
                                description = "enim";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "quo";
                                        value = "sequi";
                                    }}),
                                }};
                            }};, CreateWorkGroupXAmzTargetEnum.AMAZON_ATHENA_CREATE_WORK_GROUP) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            CreateWorkGroupResponse res = sdk.sdk.createWorkGroup(req);

            if (res.createWorkGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataCatalog

Deletes a data catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataCatalogRequest;
import org.openapis.openapi.models.operations.DeleteDataCatalogResponse;
import org.openapis.openapi.models.operations.DeleteDataCatalogXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDataCatalogInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataCatalogRequest req = new DeleteDataCatalogRequest(                new DeleteDataCatalogInput("laborum");, DeleteDataCatalogXAmzTargetEnum.AMAZON_ATHENA_DELETE_DATA_CATALOG) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "voluptatibus";
                xAmzDate = "vero";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteDataCatalogResponse res = sdk.sdk.deleteDataCatalog(req);

            if (res.deleteDataCatalogOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNamedQuery

<p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNamedQueryRequest;
import org.openapis.openapi.models.operations.DeleteNamedQueryResponse;
import org.openapis.openapi.models.operations.DeleteNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteNamedQueryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNamedQueryRequest req = new DeleteNamedQueryRequest(                new DeleteNamedQueryInput("omnis");, DeleteNamedQueryXAmzTargetEnum.AMAZON_ATHENA_DELETE_NAMED_QUERY) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "cum";
                xAmzCredential = "perferendis";
                xAmzDate = "doloremque";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ut";
                xAmzSignedHeaders = "maiores";
            }};            

            DeleteNamedQueryResponse res = sdk.sdk.deleteNamedQuery(req);

            if (res.deleteNamedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNotebook

Deletes the specified notebook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNotebookRequest;
import org.openapis.openapi.models.operations.DeleteNotebookResponse;
import org.openapis.openapi.models.operations.DeleteNotebookXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteNotebookInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNotebookRequest req = new DeleteNotebookRequest(                new DeleteNotebookInput("corporis");, DeleteNotebookXAmzTargetEnum.AMAZON_ATHENA_DELETE_NOTEBOOK) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "dicta";
                xAmzDate = "harum";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "commodi";
            }};            

            DeleteNotebookResponse res = sdk.sdk.deleteNotebook(req);

            if (res.deleteNotebookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePreparedStatement

Deletes the prepared statement with the specified name from the specified workgroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePreparedStatementRequest;
import org.openapis.openapi.models.operations.DeletePreparedStatementResponse;
import org.openapis.openapi.models.operations.DeletePreparedStatementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeletePreparedStatementInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePreparedStatementRequest req = new DeletePreparedStatementRequest(                new DeletePreparedStatementInput("quae", "ipsum");, DeletePreparedStatementXAmzTargetEnum.AMAZON_ATHENA_DELETE_PREPARED_STATEMENT) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "excepturi";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "modi";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "rem";
            }};            

            DeletePreparedStatementResponse res = sdk.sdk.deletePreparedStatement(req);

            if (res.deletePreparedStatementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkGroup

Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkGroupRequest;
import org.openapis.openapi.models.operations.DeleteWorkGroupResponse;
import org.openapis.openapi.models.operations.DeleteWorkGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWorkGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkGroupRequest req = new DeleteWorkGroupRequest(                new DeleteWorkGroupInput("quasi") {{
                                recursiveDeleteOption = false;
                            }};, DeleteWorkGroupXAmzTargetEnum.AMAZON_ATHENA_DELETE_WORK_GROUP) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            DeleteWorkGroupResponse res = sdk.sdk.deleteWorkGroup(req);

            if (res.deleteWorkGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportNotebook

Exports the specified notebook and its metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportNotebookRequest;
import org.openapis.openapi.models.operations.ExportNotebookResponse;
import org.openapis.openapi.models.operations.ExportNotebookXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExportNotebookInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportNotebookRequest req = new ExportNotebookRequest(                new ExportNotebookInput("quibusdam");, ExportNotebookXAmzTargetEnum.AMAZON_ATHENA_EXPORT_NOTEBOOK) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            ExportNotebookResponse res = sdk.sdk.exportNotebook(req);

            if (res.exportNotebookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalculationExecution

Describes a previously submitted calculation execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalculationExecutionRequest;
import org.openapis.openapi.models.operations.GetCalculationExecutionResponse;
import org.openapis.openapi.models.operations.GetCalculationExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCalculationExecutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalculationExecutionRequest req = new GetCalculationExecutionRequest(                new GetCalculationExecutionRequest("cupiditate");, GetCalculationExecutionXAmzTargetEnum.AMAZON_ATHENA_GET_CALCULATION_EXECUTION) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "magni";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "fugit";
            }};            

            GetCalculationExecutionResponse res = sdk.sdk.getCalculationExecution(req);

            if (res.getCalculationExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalculationExecutionCode

Retrieves the unencrypted code that was executed for the calculation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalculationExecutionCodeRequest;
import org.openapis.openapi.models.operations.GetCalculationExecutionCodeResponse;
import org.openapis.openapi.models.operations.GetCalculationExecutionCodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCalculationExecutionCodeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalculationExecutionCodeRequest req = new GetCalculationExecutionCodeRequest(                new GetCalculationExecutionCodeRequest("excepturi");, GetCalculationExecutionCodeXAmzTargetEnum.AMAZON_ATHENA_GET_CALCULATION_EXECUTION_CODE) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            GetCalculationExecutionCodeResponse res = sdk.sdk.getCalculationExecutionCode(req);

            if (res.getCalculationExecutionCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalculationExecutionStatus

Gets the status of a current calculation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCalculationExecutionStatusRequest;
import org.openapis.openapi.models.operations.GetCalculationExecutionStatusResponse;
import org.openapis.openapi.models.operations.GetCalculationExecutionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetCalculationExecutionStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCalculationExecutionStatusRequest req = new GetCalculationExecutionStatusRequest(                new GetCalculationExecutionStatusRequest("sint");, GetCalculationExecutionStatusXAmzTargetEnum.AMAZON_ATHENA_GET_CALCULATION_EXECUTION_STATUS) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            GetCalculationExecutionStatusResponse res = sdk.sdk.getCalculationExecutionStatus(req);

            if (res.getCalculationExecutionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataCatalog

Returns the specified data catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataCatalogRequest;
import org.openapis.openapi.models.operations.GetDataCatalogResponse;
import org.openapis.openapi.models.operations.GetDataCatalogXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDataCatalogInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataCatalogRequest req = new GetDataCatalogRequest(                new GetDataCatalogInput("dolorum");, GetDataCatalogXAmzTargetEnum.AMAZON_ATHENA_GET_DATA_CATALOG) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            GetDataCatalogResponse res = sdk.sdk.getDataCatalog(req);

            if (res.getDataCatalogOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDatabase

Returns a database object for the specified database and data catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDatabaseRequest;
import org.openapis.openapi.models.operations.GetDatabaseResponse;
import org.openapis.openapi.models.operations.GetDatabaseXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetDatabaseInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDatabaseRequest req = new GetDatabaseRequest(                new GetDatabaseInput("facere", "ea");, GetDatabaseXAmzTargetEnum.AMAZON_ATHENA_GET_DATABASE) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "accusamus";
                xAmzDate = "non";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            GetDatabaseResponse res = sdk.sdk.getDatabase(req);

            if (res.getDatabaseOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamedQuery

Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamedQueryRequest;
import org.openapis.openapi.models.operations.GetNamedQueryResponse;
import org.openapis.openapi.models.operations.GetNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetNamedQueryInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNamedQueryRequest req = new GetNamedQueryRequest(                new GetNamedQueryInput("quidem");, GetNamedQueryXAmzTargetEnum.AMAZON_ATHENA_GET_NAMED_QUERY) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
            }};            

            GetNamedQueryResponse res = sdk.sdk.getNamedQuery(req);

            if (res.getNamedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNotebookMetadata

Retrieves notebook metadata for the specified notebook ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNotebookMetadataRequest;
import org.openapis.openapi.models.operations.GetNotebookMetadataResponse;
import org.openapis.openapi.models.operations.GetNotebookMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetNotebookMetadataInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNotebookMetadataRequest req = new GetNotebookMetadataRequest(                new GetNotebookMetadataInput("nisi");, GetNotebookMetadataXAmzTargetEnum.AMAZON_ATHENA_GET_NOTEBOOK_METADATA) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
            }};            

            GetNotebookMetadataResponse res = sdk.sdk.getNotebookMetadata(req);

            if (res.getNotebookMetadataOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPreparedStatement

Retrieves the prepared statement with the specified name from the specified workgroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPreparedStatementRequest;
import org.openapis.openapi.models.operations.GetPreparedStatementResponse;
import org.openapis.openapi.models.operations.GetPreparedStatementXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPreparedStatementInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPreparedStatementRequest req = new GetPreparedStatementRequest(                new GetPreparedStatementInput("id", "labore");, GetPreparedStatementXAmzTargetEnum.AMAZON_ATHENA_GET_PREPARED_STATEMENT) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetPreparedStatementResponse res = sdk.sdk.getPreparedStatement(req);

            if (res.getPreparedStatementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryExecution

Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryExecutionRequest;
import org.openapis.openapi.models.operations.GetQueryExecutionResponse;
import org.openapis.openapi.models.operations.GetQueryExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQueryExecutionInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryExecutionRequest req = new GetQueryExecutionRequest(                new GetQueryExecutionInput("magnam");, GetQueryExecutionXAmzTargetEnum.AMAZON_ATHENA_GET_QUERY_EXECUTION) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetQueryExecutionResponse res = sdk.sdk.getQueryExecution(req);

            if (res.getQueryExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryResults

<p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with query results, recent queries, and output files</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryResultsRequest;
import org.openapis.openapi.models.operations.GetQueryResultsResponse;
import org.openapis.openapi.models.operations.GetQueryResultsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQueryResultsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryResultsRequest req = new GetQueryResultsRequest(                new GetQueryResultsInput("reiciendis") {{
                                maxResults = 652103L;
                                nextToken = "ad";
                            }};, GetQueryResultsXAmzTargetEnum.AMAZON_ATHENA_GET_QUERY_RESULTS) {{
                maxResults = "eum";
                nextToken = "dolor";
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
            }};            

            GetQueryResultsResponse res = sdk.sdk.getQueryResults(req);

            if (res.getQueryResultsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQueryRuntimeStatistics

Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Query execution runtime statistics are returned only when <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. Stage-level input and output row count and data size statistics are not shown when a query has row-level filters defined in Lake Formation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQueryRuntimeStatisticsRequest;
import org.openapis.openapi.models.operations.GetQueryRuntimeStatisticsResponse;
import org.openapis.openapi.models.operations.GetQueryRuntimeStatisticsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetQueryRuntimeStatisticsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetQueryRuntimeStatisticsRequest req = new GetQueryRuntimeStatisticsRequest(                new GetQueryRuntimeStatisticsInput("maxime");, GetQueryRuntimeStatisticsXAmzTargetEnum.AMAZON_ATHENA_GET_QUERY_RUNTIME_STATISTICS) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            GetQueryRuntimeStatisticsResponse res = sdk.sdk.getQueryRuntimeStatistics(req);

            if (res.getQueryRuntimeStatisticsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSession

Gets the full details of a previously created session, including the session status and configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionRequest;
import org.openapis.openapi.models.operations.GetSessionResponse;
import org.openapis.openapi.models.operations.GetSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSessionRequest req = new GetSessionRequest(                new GetSessionRequest("nihil");, GetSessionXAmzTargetEnum.AMAZON_ATHENA_GET_SESSION) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "sed";
                xAmzDate = "saepe";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "consequuntur";
            }};            

            GetSessionResponse res = sdk.sdk.getSession(req);

            if (res.getSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSessionStatus

Gets the current status of a session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionStatusRequest;
import org.openapis.openapi.models.operations.GetSessionStatusResponse;
import org.openapis.openapi.models.operations.GetSessionStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSessionStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSessionStatusRequest req = new GetSessionStatusRequest(                new GetSessionStatusRequest("natus");, GetSessionStatusXAmzTargetEnum.AMAZON_ATHENA_GET_SESSION_STATUS) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            GetSessionStatusResponse res = sdk.sdk.getSessionStatus(req);

            if (res.getSessionStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTableMetadata

Returns table metadata for the specified catalog, database, and table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTableMetadataRequest;
import org.openapis.openapi.models.operations.GetTableMetadataResponse;
import org.openapis.openapi.models.operations.GetTableMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetTableMetadataInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTableMetadataRequest req = new GetTableMetadataRequest(                new GetTableMetadataInput("odit", "ea", "accusantium");, GetTableMetadataXAmzTargetEnum.AMAZON_ATHENA_GET_TABLE_METADATA) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            GetTableMetadataResponse res = sdk.sdk.getTableMetadata(req);

            if (res.getTableMetadataOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkGroup

Returns information about the workgroup with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkGroupRequest;
import org.openapis.openapi.models.operations.GetWorkGroupResponse;
import org.openapis.openapi.models.operations.GetWorkGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetWorkGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWorkGroupRequest req = new GetWorkGroupRequest(                new GetWorkGroupInput("pariatur");, GetWorkGroupXAmzTargetEnum.AMAZON_ATHENA_GET_WORK_GROUP) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "perferendis";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "amet";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "cumque";
            }};            

            GetWorkGroupResponse res = sdk.sdk.getWorkGroup(req);

            if (res.getWorkGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importNotebook

Imports a single <code>ipynb</code> file to a Spark enabled workgroup. The maximum file size that can be imported is 10 megabytes. If an <code>ipynb</code> file with the same name already exists in the workgroup, throws an error.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportNotebookRequest;
import org.openapis.openapi.models.operations.ImportNotebookResponse;
import org.openapis.openapi.models.operations.ImportNotebookXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportNotebookInput;
import org.openapis.openapi.models.shared.NotebookTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportNotebookRequest req = new ImportNotebookRequest(                new ImportNotebookInput("hic", "libero", NotebookTypeEnum.IPYNB, "nobis") {{
                                clientRequestToken = "dolores";
                            }};, ImportNotebookXAmzTargetEnum.AMAZON_ATHENA_IMPORT_NOTEBOOK) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "totam";
                xAmzCredential = "dignissimos";
                xAmzDate = "eaque";
                xAmzSecurityToken = "quis";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "eos";
            }};            

            ImportNotebookResponse res = sdk.sdk.importNotebook(req);

            if (res.importNotebookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApplicationDPUSizes

Returns the supported DPU sizes for the supported application runtimes (for example, <code>Athena notebook version 1</code>). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListApplicationDPUSizesRequest;
import org.openapis.openapi.models.operations.ListApplicationDPUSizesResponse;
import org.openapis.openapi.models.operations.ListApplicationDPUSizesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListApplicationDPUSizesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListApplicationDPUSizesRequest req = new ListApplicationDPUSizesRequest(                new ListApplicationDPUSizesInput() {{
                                maxResults = 170986L;
                                nextToken = "minus";
                            }};, ListApplicationDPUSizesXAmzTargetEnum.AMAZON_ATHENA_LIST_APPLICATION_DPU_SIZES) {{
                maxResults = "quam";
                nextToken = "dolor";
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            ListApplicationDPUSizesResponse res = sdk.sdk.listApplicationDPUSizes(req);

            if (res.listApplicationDPUSizesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCalculationExecutions

Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCalculationExecutionsRequest;
import org.openapis.openapi.models.operations.ListCalculationExecutionsResponse;
import org.openapis.openapi.models.operations.ListCalculationExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CalculationExecutionStateEnum;
import org.openapis.openapi.models.shared.ListCalculationExecutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCalculationExecutionsRequest req = new ListCalculationExecutionsRequest(                new ListCalculationExecutionsRequest("porro") {{
                                maxResults = 164694L;
                                nextToken = "blanditiis";
                                stateFilter = CalculationExecutionStateEnum.CANCELING;
                            }};, ListCalculationExecutionsXAmzTargetEnum.AMAZON_ATHENA_LIST_CALCULATION_EXECUTIONS) {{
                maxResults = "eaque";
                nextToken = "occaecati";
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListCalculationExecutionsResponse res = sdk.sdk.listCalculationExecutions(req);

            if (res.listCalculationExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataCatalogs

<p>Lists the data catalogs in the current Amazon Web Services account.</p> <note> <p>In the Athena console, data catalogs are listed as "data sources" on the <b>Data sources</b> page under the <b>Data source name</b> column.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataCatalogsRequest;
import org.openapis.openapi.models.operations.ListDataCatalogsResponse;
import org.openapis.openapi.models.operations.ListDataCatalogsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDataCatalogsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataCatalogsRequest req = new ListDataCatalogsRequest(                new ListDataCatalogsInput() {{
                                maxResults = 864282L;
                                nextToken = "provident";
                            }};, ListDataCatalogsXAmzTargetEnum.AMAZON_ATHENA_LIST_DATA_CATALOGS) {{
                maxResults = "nobis";
                nextToken = "libero";
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            ListDataCatalogsResponse res = sdk.sdk.listDataCatalogs(req);

            if (res.listDataCatalogsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDatabases

Lists the databases in the specified data catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDatabasesRequest;
import org.openapis.openapi.models.operations.ListDatabasesResponse;
import org.openapis.openapi.models.operations.ListDatabasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDatabasesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDatabasesRequest req = new ListDatabasesRequest(                new ListDatabasesInput("ipsum") {{
                                maxResults = 944373L;
                                nextToken = "excepturi";
                            }};, ListDatabasesXAmzTargetEnum.AMAZON_ATHENA_LIST_DATABASES) {{
                maxResults = "cum";
                nextToken = "voluptate";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            ListDatabasesResponse res = sdk.sdk.listDatabases(req);

            if (res.listDatabasesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEngineVersions

Returns a list of engine versions that are available to choose from, including the Auto option.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEngineVersionsRequest;
import org.openapis.openapi.models.operations.ListEngineVersionsResponse;
import org.openapis.openapi.models.operations.ListEngineVersionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEngineVersionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEngineVersionsRequest req = new ListEngineVersionsRequest(                new ListEngineVersionsInput() {{
                                maxResults = 434417L;
                                nextToken = "odio";
                            }};, ListEngineVersionsXAmzTargetEnum.AMAZON_ATHENA_LIST_ENGINE_VERSIONS) {{
                maxResults = "quaerat";
                nextToken = "accusamus";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            ListEngineVersionsResponse res = sdk.sdk.listEngineVersions(req);

            if (res.listEngineVersionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExecutors

Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExecutorsRequest;
import org.openapis.openapi.models.operations.ListExecutorsResponse;
import org.openapis.openapi.models.operations.ListExecutorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ExecutorStateEnum;
import org.openapis.openapi.models.shared.ListExecutorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExecutorsRequest req = new ListExecutorsRequest(                new ListExecutorsRequest("ab") {{
                                executorStateFilter = ExecutorStateEnum.TERMINATED;
                                maxResults = 679393L;
                                nextToken = "iusto";
                            }};, ListExecutorsXAmzTargetEnum.AMAZON_ATHENA_LIST_EXECUTORS) {{
                maxResults = "voluptate";
                nextToken = "dolorum";
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "necessitatibus";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "ipsum";
            }};            

            ListExecutorsResponse res = sdk.sdk.listExecutors(req);

            if (res.listExecutorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNamedQueries

<p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNamedQueriesRequest;
import org.openapis.openapi.models.operations.ListNamedQueriesResponse;
import org.openapis.openapi.models.operations.ListNamedQueriesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListNamedQueriesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNamedQueriesRequest req = new ListNamedQueriesRequest(                new ListNamedQueriesInput() {{
                                maxResults = 663078L;
                                nextToken = "saepe";
                                workGroup = "eius";
                            }};, ListNamedQueriesXAmzTargetEnum.AMAZON_ATHENA_LIST_NAMED_QUERIES) {{
                maxResults = "aspernatur";
                nextToken = "perferendis";
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "optio";
                xAmzCredential = "accusamus";
                xAmzDate = "ad";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "deserunt";
            }};            

            ListNamedQueriesResponse res = sdk.sdk.listNamedQueries(req);

            if (res.listNamedQueriesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotebookMetadata

Displays the notebook files for the specified workgroup in paginated format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotebookMetadataRequest;
import org.openapis.openapi.models.operations.ListNotebookMetadataResponse;
import org.openapis.openapi.models.operations.ListNotebookMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.FilterDefinition;
import org.openapis.openapi.models.shared.ListNotebookMetadataInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNotebookMetadataRequest req = new ListNotebookMetadataRequest(                new ListNotebookMetadataInput("minima") {{
                                filters = new FilterDefinition() {{
                                    name = "Dr. Jimmie Murphy";
                                }};;
                                maxResults = 273542L;
                                nextToken = "vel";
                            }};, ListNotebookMetadataXAmzTargetEnum.AMAZON_ATHENA_LIST_NOTEBOOK_METADATA) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
            }};            

            ListNotebookMetadataResponse res = sdk.sdk.listNotebookMetadata(req);

            if (res.listNotebookMetadataOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotebookSessions

Lists, in descending order, the sessions that have been created in a notebook that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code> or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotebookSessionsRequest;
import org.openapis.openapi.models.operations.ListNotebookSessionsResponse;
import org.openapis.openapi.models.operations.ListNotebookSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListNotebookSessionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNotebookSessionsRequest req = new ListNotebookSessionsRequest(                new ListNotebookSessionsRequest("ipsum") {{
                                maxResults = 788740L;
                                nextToken = "tenetur";
                            }};, ListNotebookSessionsXAmzTargetEnum.AMAZON_ATHENA_LIST_NOTEBOOK_SESSIONS) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "accusamus";
                xAmzDate = "numquam";
                xAmzSecurityToken = "enim";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "sapiente";
            }};            

            ListNotebookSessionsResponse res = sdk.sdk.listNotebookSessions(req);

            if (res.listNotebookSessionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPreparedStatements

Lists the prepared statements in the specified workgroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPreparedStatementsRequest;
import org.openapis.openapi.models.operations.ListPreparedStatementsResponse;
import org.openapis.openapi.models.operations.ListPreparedStatementsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPreparedStatementsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPreparedStatementsRequest req = new ListPreparedStatementsRequest(                new ListPreparedStatementsInput("nihil") {{
                                maxResults = 25662L;
                                nextToken = "expedita";
                            }};, ListPreparedStatementsXAmzTargetEnum.AMAZON_ATHENA_LIST_PREPARED_STATEMENTS) {{
                maxResults = "neque";
                nextToken = "sed";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "libero";
                xAmzCredential = "voluptas";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "quam";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "incidunt";
            }};            

            ListPreparedStatementsResponse res = sdk.sdk.listPreparedStatements(req);

            if (res.listPreparedStatementsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listQueryExecutions

<p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListQueryExecutionsRequest;
import org.openapis.openapi.models.operations.ListQueryExecutionsResponse;
import org.openapis.openapi.models.operations.ListQueryExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListQueryExecutionsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListQueryExecutionsRequest req = new ListQueryExecutionsRequest(                new ListQueryExecutionsInput() {{
                                maxResults = 586784L;
                                nextToken = "maxime";
                                workGroup = "pariatur";
                            }};, ListQueryExecutionsXAmzTargetEnum.AMAZON_ATHENA_LIST_QUERY_EXECUTIONS) {{
                maxResults = "soluta";
                nextToken = "dicta";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
            }};            

            ListQueryExecutionsResponse res = sdk.sdk.listQueryExecutions(req);

            if (res.listQueryExecutionsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSessions

Lists the sessions in a workgroup that are in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>, or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed later.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSessionsRequest;
import org.openapis.openapi.models.operations.ListSessionsResponse;
import org.openapis.openapi.models.operations.ListSessionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSessionsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SessionStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSessionsRequest req = new ListSessionsRequest(                new ListSessionsRequest("quam") {{
                                maxResults = 565421L;
                                nextToken = "temporibus";
                                stateFilter = SessionStateEnum.CREATED;
                            }};, ListSessionsXAmzTargetEnum.AMAZON_ATHENA_LIST_SESSIONS) {{
                maxResults = "neque";
                nextToken = "fugit";
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "odio";
                xAmzCredential = "sunt";
                xAmzDate = "ullam";
                xAmzSecurityToken = "nam";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "voluptatem";
            }};            

            ListSessionsResponse res = sdk.sdk.listSessions(req);

            if (res.listSessionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTableMetadata

Lists the metadata for the tables in the specified data catalog database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTableMetadataRequest;
import org.openapis.openapi.models.operations.ListTableMetadataResponse;
import org.openapis.openapi.models.operations.ListTableMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTableMetadataInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTableMetadataRequest req = new ListTableMetadataRequest(                new ListTableMetadataInput("soluta", "nobis") {{
                                expression = "et";
                                maxResults = 903720L;
                                nextToken = "ipsum";
                            }};, ListTableMetadataXAmzTargetEnum.AMAZON_ATHENA_LIST_TABLE_METADATA) {{
                maxResults = "veritatis";
                nextToken = "nobis";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "cupiditate";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolore";
            }};            

            ListTableMetadataResponse res = sdk.sdk.listTableMetadata(req);

            if (res.listTableMetadataOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags associated with an Athena workgroup or data catalog resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceInput("adipisci") {{
                                maxResults = 677263L;
                                nextToken = "architecto";
                            }};, ListTagsForResourceXAmzTargetEnum.AMAZON_ATHENA_LIST_TAGS_FOR_RESOURCE) {{
                maxResults = "quae";
                nextToken = "aut";
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "doloribus";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkGroups

Lists available workgroups for the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkGroupsRequest;
import org.openapis.openapi.models.operations.ListWorkGroupsResponse;
import org.openapis.openapi.models.operations.ListWorkGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWorkGroupsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkGroupsRequest req = new ListWorkGroupsRequest(                new ListWorkGroupsInput() {{
                                maxResults = 703495L;
                                nextToken = "cupiditate";
                            }};, ListWorkGroupsXAmzTargetEnum.AMAZON_ATHENA_LIST_WORK_GROUPS) {{
                maxResults = "qui";
                nextToken = "quae";
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
            }};            

            ListWorkGroupsResponse res = sdk.sdk.listWorkGroups(req);

            if (res.listWorkGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startCalculationExecution

Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartCalculationExecutionRequest;
import org.openapis.openapi.models.operations.StartCalculationExecutionResponse;
import org.openapis.openapi.models.operations.StartCalculationExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartCalculationExecutionRequest;
import org.openapis.openapi.models.shared.StartCalculationExecutionRequestCalculationConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartCalculationExecutionRequest req = new StartCalculationExecutionRequest(                new StartCalculationExecutionRequest("ipsum") {{
                                calculationConfiguration = new StartCalculationExecutionRequestCalculationConfiguration() {{
                                    codeBlock = "delectus";
                                }};;
                                clientRequestToken = "voluptate";
                                codeBlock = "consectetur";
                                description = "vero";
                            }};, StartCalculationExecutionXAmzTargetEnum.AMAZON_ATHENA_START_CALCULATION_EXECUTION) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "hic";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "similique";
            }};            

            StartCalculationExecutionResponse res = sdk.sdk.startCalculationExecution(req);

            if (res.startCalculationExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startQueryExecution

Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartQueryExecutionRequest;
import org.openapis.openapi.models.operations.StartQueryExecutionResponse;
import org.openapis.openapi.models.operations.StartQueryExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AclConfiguration;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionOptionEnum;
import org.openapis.openapi.models.shared.QueryExecutionContext;
import org.openapis.openapi.models.shared.ResultConfiguration;
import org.openapis.openapi.models.shared.ResultReuseByAgeConfiguration;
import org.openapis.openapi.models.shared.ResultReuseConfiguration;
import org.openapis.openapi.models.shared.S3AclOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartQueryExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartQueryExecutionRequest req = new StartQueryExecutionRequest(                new StartQueryExecutionInput("vero") {{
                                clientRequestToken = "ducimus";
                                executionParameters = new String[]{{
                                    add("quibusdam"),
                                    add("illum"),
                                }};
                                queryExecutionContext = new QueryExecutionContext() {{
                                    catalog = "sequi";
                                    database = "natus";
                                }};;
                                resultConfiguration = new ResultConfiguration() {{
                                    aclConfiguration = new AclConfiguration(S3AclOptionEnum.BUCKET_OWNER_FULL_CONTROL);;
                                    encryptionConfiguration = new EncryptionConfiguration(EncryptionOptionEnum.CSE_KMS) {{
                                        kmsKey = "aut";
                                    }};;
                                    expectedBucketOwner = "voluptatibus";
                                    outputLocation = "exercitationem";
                                }};;
                                resultReuseConfiguration = new ResultReuseConfiguration() {{
                                    resultReuseByAgeConfiguration = new ResultReuseByAgeConfiguration(false) {{
                                        maxAgeInMinutes = 862310L;
                                    }};;
                                }};;
                                workGroup = "fugit";
                            }};, StartQueryExecutionXAmzTargetEnum.AMAZON_ATHENA_START_QUERY_EXECUTION) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "doloribus";
                xAmzDate = "iusto";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "alias";
            }};            

            StartQueryExecutionResponse res = sdk.sdk.startQueryExecution(req);

            if (res.startQueryExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSession

Creates a session for running calculations within a workgroup. The session is ready when it reaches an <code>IDLE</code> state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSessionRequest;
import org.openapis.openapi.models.operations.StartSessionResponse;
import org.openapis.openapi.models.operations.StartSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.EngineConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSessionRequest req = new StartSessionRequest(                new StartSessionRequest(                new EngineConfiguration(269479L) {{
                                                additionalConfigs = new java.util.HashMap<String, String>() {{
                                                    put("ea", "aspernatur");
                                                    put("vel", "possimus");
                                                }};
                                                coordinatorDpuSize = 297842L;
                                                defaultExecutorDpuSize = 189848L;
                                            }};, "ex") {{
                                clientRequestToken = "laudantium";
                                description = "dicta";
                                notebookVersion = "dolor";
                                sessionIdleTimeoutInMinutes = 980700L;
                            }};, StartSessionXAmzTargetEnum.AMAZON_ATHENA_START_SESSION) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "ex";
                xAmzCredential = "nulla";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "sapiente";
            }};            

            StartSessionResponse res = sdk.sdk.startSession(req);

            if (res.startSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopCalculationExecution

<p>Requests the cancellation of a calculation. A <code>StopCalculationExecution</code> call on a calculation that is already in a terminal state (for example, <code>STOPPED</code>, <code>FAILED</code>, or <code>COMPLETED</code>) succeeds but has no effect.</p> <note> <p>Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopCalculationExecutionRequest;
import org.openapis.openapi.models.operations.StopCalculationExecutionResponse;
import org.openapis.openapi.models.operations.StopCalculationExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopCalculationExecutionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopCalculationExecutionRequest req = new StopCalculationExecutionRequest(                new StopCalculationExecutionRequest("saepe");, StopCalculationExecutionXAmzTargetEnum.AMAZON_ATHENA_STOP_CALCULATION_EXECUTION) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "corporis";
                xAmzDate = "veniam";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "magnam";
            }};            

            StopCalculationExecutionResponse res = sdk.sdk.stopCalculationExecution(req);

            if (res.stopCalculationExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopQueryExecution

<p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopQueryExecutionRequest;
import org.openapis.openapi.models.operations.StopQueryExecutionResponse;
import org.openapis.openapi.models.operations.StopQueryExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopQueryExecutionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopQueryExecutionRequest req = new StopQueryExecutionRequest(                new StopQueryExecutionInput("quo");, StopQueryExecutionXAmzTargetEnum.AMAZON_ATHENA_STOP_QUERY_EXECUTION) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aspernatur";
                xAmzDate = "minima";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "a";
                xAmzSignedHeaders = "libero";
            }};            

            StopQueryExecutionResponse res = sdk.sdk.stopQueryExecution(req);

            if (res.stopQueryExecutionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceInput("aut",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "impedit";
                                                    value = "aliquam";
                                                }}),
                                                add(new Tag() {{
                                                    key = "fugit";
                                                    value = "accusamus";
                                                }}),
                                                add(new Tag() {{
                                                    key = "inventore";
                                                    value = "non";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.AMAZON_ATHENA_TAG_RESOURCE) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "laborum";
                xAmzDate = "placeat";
                xAmzSecurityToken = "velit";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "autem";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateSession

Terminates an active session. A <code>TerminateSession</code> call on a session that is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in the session when <code>TerminateSession</code> is called are forcefully stopped, but may display as <code>FAILED</code> instead of <code>STOPPED</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateSessionRequest;
import org.openapis.openapi.models.operations.TerminateSessionResponse;
import org.openapis.openapi.models.operations.TerminateSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TerminateSessionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TerminateSessionRequest req = new TerminateSessionRequest(                new TerminateSessionRequest("quas");, TerminateSessionXAmzTargetEnum.AMAZON_ATHENA_TERMINATE_SESSION) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
            }};            

            TerminateSessionResponse res = sdk.sdk.terminateSession(req);

            if (res.terminateSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from a data catalog or workgroup resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceInput("provident",                 new String[]{{
                                                add("molestiae"),
                                            }});, UntagResourceXAmzTargetEnum.AMAZON_ATHENA_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataCatalog

Updates the data catalog that has the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataCatalogRequest;
import org.openapis.openapi.models.operations.UpdateDataCatalogResponse;
import org.openapis.openapi.models.operations.UpdateDataCatalogXAmzTargetEnum;
import org.openapis.openapi.models.shared.DataCatalogTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDataCatalogInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataCatalogRequest req = new UpdateDataCatalogRequest(                new UpdateDataCatalogInput("quidem", DataCatalogTypeEnum.HIVE) {{
                                description = "ut";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "assumenda");
                                    put("eos", "praesentium");
                                }};
                            }};, UpdateDataCatalogXAmzTargetEnum.AMAZON_ATHENA_UPDATE_DATA_CATALOG) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "id";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
            }};            

            UpdateDataCatalogResponse res = sdk.sdk.updateDataCatalog(req);

            if (res.updateDataCatalogOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNamedQuery

Updates a <a>NamedQuery</a> object. The database or workgroup cannot be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNamedQueryRequest;
import org.openapis.openapi.models.operations.UpdateNamedQueryResponse;
import org.openapis.openapi.models.operations.UpdateNamedQueryXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateNamedQueryInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNamedQueryRequest req = new UpdateNamedQueryRequest(                new UpdateNamedQueryInput("quo", "fuga", "eius") {{
                                description = "eos";
                            }};, UpdateNamedQueryXAmzTargetEnum.AMAZON_ATHENA_UPDATE_NAMED_QUERY) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "ab";
                xAmzCredential = "cupiditate";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsam";
            }};            

            UpdateNamedQueryResponse res = sdk.sdk.updateNamedQuery(req);

            if (res.updateNamedQueryOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNotebook

Updates the contents of a Spark notebook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNotebookRequest;
import org.openapis.openapi.models.operations.UpdateNotebookResponse;
import org.openapis.openapi.models.operations.UpdateNotebookXAmzTargetEnum;
import org.openapis.openapi.models.shared.NotebookTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateNotebookInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNotebookRequest req = new UpdateNotebookRequest(                new UpdateNotebookInput("sequi", "quo", NotebookTypeEnum.IPYNB) {{
                                clientRequestToken = "esse";
                                sessionId = "recusandae";
                            }};, UpdateNotebookXAmzTargetEnum.AMAZON_ATHENA_UPDATE_NOTEBOOK) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quod";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "totam";
            }};            

            UpdateNotebookResponse res = sdk.sdk.updateNotebook(req);

            if (res.updateNotebookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNotebookMetadata

Updates the metadata for a notebook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNotebookMetadataRequest;
import org.openapis.openapi.models.operations.UpdateNotebookMetadataResponse;
import org.openapis.openapi.models.operations.UpdateNotebookMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateNotebookMetadataInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNotebookMetadataRequest req = new UpdateNotebookMetadataRequest(                new UpdateNotebookMetadataInput("aliquam", "odio") {{
                                clientRequestToken = "occaecati";
                            }};, UpdateNotebookMetadataXAmzTargetEnum.AMAZON_ATHENA_UPDATE_NOTEBOOK_METADATA) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dolores";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "porro";
            }};            

            UpdateNotebookMetadataResponse res = sdk.sdk.updateNotebookMetadata(req);

            if (res.updateNotebookMetadataOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePreparedStatement

Updates a prepared statement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePreparedStatementRequest;
import org.openapis.openapi.models.operations.UpdatePreparedStatementResponse;
import org.openapis.openapi.models.operations.UpdatePreparedStatementXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePreparedStatementInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePreparedStatementRequest req = new UpdatePreparedStatementRequest(                new UpdatePreparedStatementInput("quas", "praesentium", "consequuntur") {{
                                description = "deleniti";
                            }};, UpdatePreparedStatementXAmzTargetEnum.AMAZON_ATHENA_UPDATE_PREPARED_STATEMENT) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "mollitia";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "atque";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "minima";
            }};            

            UpdatePreparedStatementResponse res = sdk.sdk.updatePreparedStatement(req);

            if (res.updatePreparedStatementOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWorkGroup

Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only <code>ConfigurationUpdates</code> can be specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWorkGroupRequest;
import org.openapis.openapi.models.operations.UpdateWorkGroupResponse;
import org.openapis.openapi.models.operations.UpdateWorkGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AclConfiguration;
import org.openapis.openapi.models.shared.CustomerContentEncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionOptionEnum;
import org.openapis.openapi.models.shared.EngineVersion;
import org.openapis.openapi.models.shared.ResultConfigurationUpdates;
import org.openapis.openapi.models.shared.S3AclOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWorkGroupInput;
import org.openapis.openapi.models.shared.WorkGroupConfigurationUpdates;
import org.openapis.openapi.models.shared.WorkGroupStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWorkGroupRequest req = new UpdateWorkGroupRequest(                new UpdateWorkGroupInput("fugit") {{
                                configurationUpdates = new WorkGroupConfigurationUpdates() {{
                                    additionalConfiguration = "sapiente";
                                    bytesScannedCutoffPerQuery = 159870L;
                                    customerContentEncryptionConfiguration = new CustomerContentEncryptionConfiguration("ratione");;
                                    enableMinimumEncryptionConfiguration = false;
                                    enforceWorkGroupConfiguration = false;
                                    engineVersion = new EngineVersion() {{
                                        effectiveEngineVersion = "explicabo";
                                        selectedEngineVersion = "saepe";
                                    }};;
                                    executionRole = "occaecati";
                                    publishCloudWatchMetricsEnabled = false;
                                    removeBytesScannedCutoffPerQuery = false;
                                    removeCustomerContentEncryptionConfiguration = false;
                                    requesterPaysEnabled = false;
                                    resultConfigurationUpdates = new ResultConfigurationUpdates() {{
                                        aclConfiguration = new AclConfiguration(S3AclOptionEnum.BUCKET_OWNER_FULL_CONTROL);;
                                        encryptionConfiguration = new EncryptionConfiguration(EncryptionOptionEnum.SSE_KMS) {{
                                            kmsKey = "et";
                                        }};;
                                        expectedBucketOwner = "esse";
                                        outputLocation = "eveniet";
                                        removeAclConfiguration = false;
                                        removeEncryptionConfiguration = false;
                                        removeExpectedBucketOwner = false;
                                        removeOutputLocation = false;
                                    }};;
                                }};;
                                description = "accusamus";
                                state = WorkGroupStateEnum.ENABLED;
                            }};, UpdateWorkGroupXAmzTargetEnum.AMAZON_ATHENA_UPDATE_WORK_GROUP) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quod";
                xAmzCredential = "nam";
                xAmzDate = "vero";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateWorkGroupResponse res = sdk.sdk.updateWorkGroup(req);

            if (res.updateWorkGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
