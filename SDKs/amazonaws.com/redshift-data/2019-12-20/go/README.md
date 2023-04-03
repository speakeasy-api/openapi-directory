# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/redshift-data/2019-12-20/go
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

    req := operations.BatchExecuteStatementRequest{
        BatchExecuteStatementInput: shared.BatchExecuteStatementInput{
            ClientToken: "corrupti",
            ClusterIdentifier: "provident",
            Database: "distinctio",
            DbUser: "quibusdam",
            SecretArn: "unde",
            Sqls: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            StatementName: "deserunt",
            WithEvent: false,
            WorkgroupName: "suscipit",
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
        XAmzTarget: "RedshiftData.BatchExecuteStatement",
    }

    ctx := context.Background()
    res, err := s.BatchExecuteStatement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchExecuteStatement` - <p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition language (DDL). Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `CancelStatement` - <p>Cancels a running query. To be canceled, a query must be running. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `DescribeStatement` - <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information includes when the query started, when it finished, the query status, the number of rows returned, and the SQL statement. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `DescribeTable` - <p>Describes the detailed information about a table from metadata in the cluster. The information includes its columns. A token is returned to page through the column list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `ExecuteStatement` - <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition language (DDL). This statement must be a single SQL statement. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `GetStatementResult` - <p>Fetches the temporarily cached result of an SQL statement. A token is returned to page through the statement results. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `ListDatabases` - <p>List the databases in a cluster. A token is returned to page through the database list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `ListSchemas` - <p>Lists the schemas in a database. A token is returned to page through the schema list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `ListStatements` - <p>List of SQL statements. By default, only finished statements are shown. A token is returned to page through the statement list. </p> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
* `ListTables` - <p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then all tables in the database are returned. A token is returned to page through the table list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret. When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p> </li> <li> <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required. When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
