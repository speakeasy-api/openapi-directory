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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchExecuteStatementRequest{
        Headers: operations.BatchExecuteStatementHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "RedshiftData.BatchExecuteStatement",
        },
        Request: shared.BatchExecuteStatementInput{
            ClientToken: "nihil",
            ClusterIdentifier: "fuga",
            Database: "facilis",
            DbUser: "eum",
            SecretArn: "iusto",
            Sqls: []string{
                "saepe",
                "inventore",
            },
            StatementName: "sapiente",
            WithEvent: false,
            WorkgroupName: "enim",
        },
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