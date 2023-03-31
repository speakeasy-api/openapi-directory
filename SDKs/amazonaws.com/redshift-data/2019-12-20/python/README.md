# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/amazonaws.com/redshift-data/2019-12-20/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchExecuteStatementRequest(
    batch_execute_statement_input=shared.BatchExecuteStatementInput(
        client_token="corrupti",
        cluster_identifier="provident",
        database="distinctio",
        db_user="quibusdam",
        secret_arn="unde",
        sqls=[
            "corrupti",
            "illum",
            "vel",
            "error",
        ],
        statement_name="deserunt",
        with_event=False,
        workgroup_name="suscipit",
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
    x_amz_target="RedshiftData.BatchExecuteStatement",
)
    
res = s.batch_execute_statement(req)

if res.batch_execute_statement_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `batch_execute_statement` - <p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition language (DDL). Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `cancel_statement` - <p>Cancels a running query. To be canceled, a query must be running. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `describe_statement` - <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information includes when the query started, when it finished, the query status, the number of rows returned, and the SQL statement. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `describe_table` - <p>Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `execute_statement` - <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition language (DDL). This statement must be a single SQL statement. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `get_statement_result` - <p>Fetches the temporarily cached result of an SQL statement. A token is returned to page through the statement results. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `list_databases` - <p>List the databases in a cluster. A token is returned to page through the database list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `list_schemas` - <p>Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `list_statements` - <p>List of SQL statements. By default, only finished statements are shown. A token is returned to page through the statement list. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `list_tables` - <p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
