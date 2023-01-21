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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "RedshiftData.BatchExecuteStatement",
        },
        Request: shared.BatchExecuteStatementInput{
            ClusterIdentifier: "fugit",
            Database: "et",
            DbUser: "nihil",
            SecretArn: "rerum",
            Sqls: []string{
                "debitis",
                "voluptatum",
                "et",
            },
            StatementName: "ut",
            WithEvent: true,
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