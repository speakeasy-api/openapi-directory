<!-- Start SDK Example Usage -->
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
    res, err := s.BatchExecuteStatement(ctx, operations.BatchExecuteStatementRequest{
        BatchExecuteStatementInput: shared.BatchExecuteStatementInput{
            ClientToken: sdk.String("corrupti"),
            ClusterIdentifier: sdk.String("provident"),
            Database: "distinctio",
            DbUser: sdk.String("quibusdam"),
            SecretArn: sdk.String("unde"),
            Sqls: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            StatementName: sdk.String("deserunt"),
            WithEvent: sdk.Bool(false),
            WorkgroupName: sdk.String("suscipit"),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.BatchExecuteStatementXAmzTargetEnumRedshiftDataBatchExecuteStatement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->