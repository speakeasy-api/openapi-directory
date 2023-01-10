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
            XAmzAlgorithm: "inventore",
            XAmzContentSha256: "est",
            XAmzCredential: "dolor",
            XAmzDate: "animi",
            XAmzSecurityToken: "rerum",
            XAmzSignature: "sit",
            XAmzSignedHeaders: "et",
            XAmzTarget: "RedshiftData.BatchExecuteStatement",
        },
        Request: shared.BatchExecuteStatementInput{
            ClusterIdentifier: "eos",
            Database: "accusantium",
            DbUser: "minima",
            SecretArn: "qui",
            Sqls: []string{
                "est",
            },
            StatementName: "tempora",
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