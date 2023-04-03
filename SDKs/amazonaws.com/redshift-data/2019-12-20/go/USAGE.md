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