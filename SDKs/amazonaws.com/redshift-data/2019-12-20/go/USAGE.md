<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchExecuteStatementRequest{
        Headers: operations.BatchExecuteStatementHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "omnis",
            XAmzCredential: "iusto",
            XAmzDate: "adipisci",
            XAmzSecurityToken: "aut",
            XAmzSignature: "porro",
            XAmzSignedHeaders: "qui",
            XAmzTarget: "RedshiftData.BatchExecuteStatement",
        },
        Request: shared.BatchExecuteStatementInput{
            ClusterIdentifier: "qui",
            Database: "officia",
            DbUser: "quia",
            SecretArn: "laborum",
            Sqls: []string{
                "corporis",
                "ut",
                "qui",
            },
            StatementName: "aut",
            WithEvent: false,
        },
    }
    
    res, err := s.BatchExecuteStatement(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchExecuteStatementOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->