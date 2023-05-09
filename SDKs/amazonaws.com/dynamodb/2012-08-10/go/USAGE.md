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
            ReturnConsumedCapacity: shared.ReturnConsumedCapacityEnumTotal.ToPointer(),
            Statements: []shared.BatchStatementRequest{
                shared.BatchStatementRequest{
                    ConsistentRead: sdk.Bool(false),
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("quibusdam"),
                            Bool: sdk.Bool(false),
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
                            N: sdk.String("magnam"),
                            Ns: []string{
                                "ipsa",
                                "delectus",
                                "tempora",
                                "suscipit",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("molestiae"),
                            Ss: []string{
                                "placeat",
                                "voluptatum",
                                "iusto",
                                "excepturi",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("nisi"),
                            Bool: sdk.Bool(false),
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
                            N: sdk.String("repellendus"),
                            Ns: []string{
                                "quo",
                                "odit",
                                "at",
                                "at",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("maiores"),
                            Ss: []string{
                                "quod",
                                "quod",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("esse"),
                            Bool: sdk.Bool(false),
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
                            N: sdk.String("hic"),
                            Ns: []string{
                                "totam",
                                "beatae",
                                "commodi",
                                "molestiae",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("modi"),
                            Ss: []string{
                                "impedit",
                            },
                        },
                    },
                    Statement: "cum",
                },
                shared.BatchStatementRequest{
                    ConsistentRead: sdk.Bool(false),
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("ipsum"),
                            Bool: sdk.Bool(false),
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
                            N: sdk.String("dolor"),
                            Ns: []string{
                                "laboriosam",
                                "hic",
                                "saepe",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("fuga"),
                            Ss: []string{
                                "corporis",
                                "iste",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("iure"),
                            Bool: sdk.Bool(false),
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
                            N: sdk.String("corporis"),
                            Ns: []string{
                                "nobis",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("enim"),
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
                    ConsistentRead: sdk.Bool(false),
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: sdk.String("culpa"),
                            Bool: sdk.Bool(false),
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
                            N: sdk.String("mollitia"),
                            Ns: []string{
                                "numquam",
                                "commodi",
                                "quam",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("molestiae"),
                            Ss: []string{
                                "error",
                            },
                        },
                        shared.AttributeValue{
                            B: sdk.String("quia"),
                            Bool: sdk.Bool(false),
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
                            N: sdk.String("sequi"),
                            Ns: []string{
                                "ipsam",
                                "id",
                                "possimus",
                                "aut",
                            },
                            Null: sdk.Bool(false),
                            S: sdk.String("quasi"),
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
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.BatchExecuteStatementXAmzTargetEnumDynamoDb20120810BatchExecuteStatement,
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