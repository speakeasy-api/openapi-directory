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
            ReturnConsumedCapacity: "TOTAL",
            Statements: []shared.BatchStatementRequest{
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "quibusdam",
                            Bool: false,
                            Bs: []string{
                                "nulla",
                                "corrupti",
                                "illum",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "deserunt": shared.AttributeValue{},
                                "suscipit": shared.AttributeValue{},
                                "iure": shared.AttributeValue{},
                            },
                            N: "magnam",
                            Ns: []string{
                                "ipsa",
                                "delectus",
                                "tempora",
                                "suscipit",
                            },
                            Null: false,
                            S: "molestiae",
                            Ss: []string{
                                "placeat",
                                "voluptatum",
                                "iusto",
                                "excepturi",
                            },
                        },
                        shared.AttributeValue{
                            B: "nisi",
                            Bool: false,
                            Bs: []string{
                                "temporibus",
                                "ab",
                                "quis",
                                "veritatis",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "ipsam": shared.AttributeValue{},
                            },
                            N: "repellendus",
                            Ns: []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                            Null: false,
                            S: "maiores",
                            Ss: []string{
                                "quod",
                                "quod",
                            },
                        },
                        shared.AttributeValue{
                            B: "esse",
                            Bool: false,
                            Bs: []string{
                                "porro",
                                "dolorum",
                                "dicta",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "occaecati": shared.AttributeValue{},
                                "fugit": shared.AttributeValue{},
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
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "culpa",
                            Bool: false,
                            Bs: []string{
                                "sapiente",
                                "architecto",
                                "mollitia",
                                "dolorem",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "repellat": shared.AttributeValue{},
                            },
                            N: "mollitia",
                            Ns: []string{
                                "numquam",
                                "commodi",
                                "quam",
                            },
                            Null: false,
                            S: "molestiae",
                            Ss: []string{
                                "error",
                            },
                        },
                        shared.AttributeValue{
                            B: "quia",
                            Bool: false,
                            Bs: []string{
                                "vitae",
                                "laborum",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "odit": shared.AttributeValue{},
                                "quo": shared.AttributeValue{},
                            },
                            N: "sequi",
                            Ns: []string{
                                "ipsam",
                                "id",
                                "possimus",
                                "aut",
                            },
                            Null: false,
                            S: "quasi",
                            Ss: []string{
                                "temporibus",
                                "laborum",
                                "quasi",
                            },
                        },
                    },
                    Statement: "reiciendis",
                },
            },
        },
        XAmzAlgorithm: "voluptatibus",
        XAmzContentSha256: "vero",
        XAmzCredential: "nihil",
        XAmzDate: "praesentium",
        XAmzSecurityToken: "voluptatibus",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "omnis",
        XAmzTarget: "DynamoDB_20120810.BatchExecuteStatement",
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