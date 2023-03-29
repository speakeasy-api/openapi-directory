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
            XAmzTarget: "DynamoDB_20120810.BatchExecuteStatement",
        },
        Request: shared.BatchExecuteStatementInput{
            ReturnConsumedCapacity: "TOTAL",
            Statements: []shared.BatchStatementRequest{
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "eum",
                            Bool: false,
                            Bs: []string{
                                "ullam",
                                "saepe",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "enim": shared.AttributeValue{},
                                "eum": shared.AttributeValue{},
                                "voluptatum": shared.AttributeValue{},
                                "autem": shared.AttributeValue{},
                            },
                            N: "vel",
                            Ns: []string{
                                "deleniti",
                                "similique",
                                "reprehenderit",
                            },
                            Null: false,
                            S: "molestiae",
                            Ss: []string{
                                "quasi",
                                "laboriosam",
                                "dicta",
                                "est",
                            },
                        },
                        shared.AttributeValue{
                            B: "voluptatem",
                            Bool: false,
                            Bs: []string{
                                "fugiat",
                                "a",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "accusamus": shared.AttributeValue{},
                            },
                            N: "accusamus",
                            Ns: []string{
                                "rem",
                                "quibusdam",
                                "et",
                                "praesentium",
                            },
                            Null: false,
                            S: "occaecati",
                            Ss: []string{
                                "soluta",
                                "sed",
                                "quisquam",
                                "rerum",
                            },
                        },
                        shared.AttributeValue{
                            B: "culpa",
                            Bool: false,
                            Bs: []string{
                                "sed",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "occaecati": shared.AttributeValue{},
                                "odit": shared.AttributeValue{},
                                "esse": shared.AttributeValue{},
                                "rem": shared.AttributeValue{},
                            },
                            N: "voluptatem",
                            Ns: []string{
                                "est",
                            },
                            Null: false,
                            S: "id",
                            Ss: []string{
                                "numquam",
                                "similique",
                            },
                        },
                    },
                    Statement: "dolores",
                },
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "quia",
                            Bool: false,
                            Bs: []string{
                                "voluptatem",
                                "laborum",
                                "modi",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "earum": shared.AttributeValue{},
                                "ut": shared.AttributeValue{},
                            },
                            N: "soluta",
                            Ns: []string{
                                "ea",
                                "laborum",
                            },
                            Null: false,
                            S: "iusto",
                            Ss: []string{
                                "optio",
                                "aspernatur",
                                "inventore",
                                "ut",
                            },
                        },
                    },
                    Statement: "libero",
                },
                shared.BatchStatementRequest{
                    ConsistentRead: false,
                    Parameters: []shared.AttributeValue{
                        shared.AttributeValue{
                            B: "libero",
                            Bool: false,
                            Bs: []string{
                                "non",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "placeat": shared.AttributeValue{},
                            },
                            N: "ipsam",
                            Ns: []string{
                                "commodi",
                                "quia",
                                "similique",
                            },
                            Null: false,
                            S: "eaque",
                            Ss: []string{
                                "harum",
                                "doloribus",
                            },
                        },
                        shared.AttributeValue{
                            B: "a",
                            Bool: false,
                            Bs: []string{
                                "et",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "neque": shared.AttributeValue{},
                                "asperiores": shared.AttributeValue{},
                                "et": shared.AttributeValue{},
                            },
                            N: "culpa",
                            Ns: []string{
                                "esse",
                                "totam",
                            },
                            Null: false,
                            S: "voluptatum",
                            Ss: []string{
                                "fuga",
                            },
                        },
                        shared.AttributeValue{
                            B: "nesciunt",
                            Bool: false,
                            Bs: []string{
                                "aut",
                                "cum",
                            },
                            L: []shared.AttributeValue{
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                                shared.AttributeValue{},
                            },
                            M: map[string]shared.AttributeValue{
                                "eos": shared.AttributeValue{},
                                "omnis": shared.AttributeValue{},
                            },
                            N: "adipisci",
                            Ns: []string{
                                "consequatur",
                                "distinctio",
                                "qui",
                                "perferendis",
                            },
                            Null: false,
                            S: "aspernatur",
                            Ss: []string{
                                "quo",
                                "tempore",
                                "explicabo",
                            },
                        },
                    },
                    Statement: "aut",
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