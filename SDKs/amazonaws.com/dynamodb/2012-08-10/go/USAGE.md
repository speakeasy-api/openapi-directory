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
            XAmzTarget: "DynamoDB_20120810.BatchExecuteStatement",
        },
        Request: shared.BatchExecuteStatementInput{
            Statements: []shared.BatchStatementRequest{
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "rerum",
                            BOOL: false,
                            BS: []string{
                                "voluptatum",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{
                                
                                },
                            },
                            M: map[string]shared.AttributeValue{
                                "dolorem": shared.AttributeValue{
                                
                                },
                                "et": shared.AttributeValue{
                                
                                },
                                "voluptate": shared.AttributeValue{
                                
                                },
                            },
                            N: "iste",
                            NS: []string{
                                "totam",
                            },
                            NULL: true,
                            S: "illum",
                            SS: []string{
                                "vel",
                            },
                        },
                    },
                    Statement: "odio",
                },
            },
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