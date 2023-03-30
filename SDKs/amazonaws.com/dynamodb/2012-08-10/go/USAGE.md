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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "DynamoDB_20120810.BatchExecuteStatement",
        },
        Request: shared.BatchExecuteStatementInput{
            ReturnConsumedCapacity: "NONE",
            Statements: []shared.BatchStatementRequest{
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "deserunt",
                            Bool: false,
                            Bs: []string{
                                "iure",
                                "magnam",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "delectus": shared.AttributeValue{},
                            },
                            N: "tempora",
                            Ns: []string{
                                "molestiae",
                                "minus",
                            },
                            Null: false,
                            S: "placeat",
                            Ss: []string{
                                "iusto",
                                "excepturi",
                                "nisi",
                            },
                        },
                        shared.AttributeValue{
                            B: "recusandae",
                            Bool: false,
                            Bs: []string{
                                "ab",
                                "quis",
                                "veritatis",
                                "deserunt",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "repellendus": shared.AttributeValue{},
                                "sapiente": shared.AttributeValue{},
                            },
                            N: "quo",
                            Ns: []string{
                                "at",
                            },
                            Null: false,
                            S: "at",
                            Ss: []string{
                                "molestiae",
                                "quod",
                                "quod",
                                "esse",
                            },
                        },
                        shared.AttributeValue{
                            B: "totam",
                            Bool: false,
                            Bs: []string{
                                "dolorum",
                                "dicta",
                                "nam",
                                "officia",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "deleniti": shared.AttributeValue{},
                            },
                            N: "hic",
                            Ns: []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                            Null: false,
                            S: "modi",
                            Ss: []string{
                                "impedit",
                            },
                        },
                    },
                    Statement: "cum",
                },
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "ipsum",
                            Bool: false,
                            Bs: []string{
                                "aspernatur",
                                "perferendis",
                                "ad",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "iste": shared.AttributeValue{},
                            },
                            N: "dolor",
                            Ns: []string{
                                "laboriosam",
                                "hic",
                                "saepe",
                            },
                            Null: false,
                            S: "fuga",
                            Ss: []string{
                                "corporis",
                                "iste",
                            },
                        },
                        shared.AttributeValue{
                            B: "iure",
                            Bool: false,
                            Bs: []string{
                                "quidem",
                                "architecto",
                                "ipsa",
                                "reiciendis",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "laborum": shared.AttributeValue{},
                                "dolores": shared.AttributeValue{},
                                "dolorem": shared.AttributeValue{},
                            },
                            N: "corporis",
                            Ns: []string{
                                "nobis",
                            },
                            Null: false,
                            S: "enim",
                            Ss: []string{
                                "nemo",
                                "minima",
                                "excepturi",
                            },
                        },
                    },
                    Statement: "accusantium",
                },
            },
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