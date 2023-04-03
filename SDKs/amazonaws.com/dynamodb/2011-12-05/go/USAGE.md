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

    req := operations.BatchGetItemRequest{
        BatchGetItemInput: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "provident": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "quibusdam",
                        "unde",
                        "nulla",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "illum",
                                Bs: []string{
                                    "error",
                                    "deserunt",
                                },
                                N: "suscipit",
                                Ns: []string{
                                    "magnam",
                                    "debitis",
                                },
                                S: "ipsa",
                                Ss: []string{
                                    "tempora",
                                    "suscipit",
                                    "molestiae",
                                    "minus",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "placeat",
                                Bs: []string{
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                                N: "recusandae",
                                Ns: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                                S: "perferendis",
                                Ss: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "quo",
                                Bs: []string{
                                    "at",
                                },
                                N: "at",
                                Ns: []string{
                                    "molestiae",
                                    "quod",
                                    "quod",
                                    "esse",
                                },
                                S: "totam",
                                Ss: []string{
                                    "dolorum",
                                    "dicta",
                                    "nam",
                                    "officia",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "occaecati",
                                Bs: []string{
                                    "deleniti",
                                },
                                N: "hic",
                                Ns: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                                S: "modi",
                                Ss: []string{
                                    "impedit",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "cum",
                                Bs: []string{
                                    "ipsum",
                                    "excepturi",
                                },
                                N: "aspernatur",
                                Ns: []string{
                                    "ad",
                                },
                                S: "natus",
                                Ss: []string{
                                    "iste",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "dolor",
                                Bs: []string{
                                    "laboriosam",
                                    "hic",
                                    "saepe",
                                },
                                N: "fuga",
                                Ns: []string{
                                    "corporis",
                                    "iste",
                                },
                                S: "iure",
                                Ss: []string{
                                    "quidem",
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                            },
                        },
                    },
                },
                "est": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "laborum",
                        "dolores",
                        "dolorem",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "explicabo",
                                Bs: []string{
                                    "enim",
                                    "omnis",
                                    "nemo",
                                    "minima",
                                },
                                N: "excepturi",
                                Ns: []string{
                                    "iure",
                                },
                                S: "culpa",
                                Ss: []string{
                                    "sapiente",
                                    "architecto",
                                    "mollitia",
                                    "dolorem",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "culpa",
                                Bs: []string{
                                    "repellat",
                                },
                                N: "mollitia",
                                Ns: []string{
                                    "numquam",
                                    "commodi",
                                    "quam",
                                },
                                S: "molestiae",
                                Ss: []string{
                                    "error",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "quia",
                                Bs: []string{
                                    "vitae",
                                    "laborum",
                                },
                                N: "animi",
                                Ns: []string{
                                    "odit",
                                    "quo",
                                },
                                S: "sequi",
                                Ss: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "quasi",
                                Bs: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                                N: "reiciendis",
                                Ns: []string{
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                    "voluptatibus",
                                },
                                S: "ipsa",
                                Ss: []string{
                                    "voluptate",
                                    "cum",
                                    "perferendis",
                                },
                            },
                        },
                    },
                },
                "doloremque": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "ut",
                        "maiores",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "corporis",
                                Bs: []string{
                                    "iusto",
                                    "dicta",
                                },
                                N: "harum",
                                Ns: []string{
                                    "accusamus",
                                    "commodi",
                                },
                                S: "repudiandae",
                                Ss: []string{
                                    "ipsum",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "quidem",
                                Bs: []string{
                                    "excepturi",
                                    "pariatur",
                                    "modi",
                                },
                                N: "praesentium",
                                Ns: []string{
                                    "voluptates",
                                    "quasi",
                                    "repudiandae",
                                },
                                S: "sint",
                                Ss: []string{
                                    "itaque",
                                },
                            },
                        },
                    },
                },
            },
        },
        RequestItems: "incidunt",
        XAmzAlgorithm: "enim",
        XAmzContentSha256: "consequatur",
        XAmzCredential: "est",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "explicabo",
        XAmzSignature: "deserunt",
        XAmzSignedHeaders: "distinctio",
        XAmzTarget: "DynamoDB_20111205.BatchGetItem",
    }

    ctx := context.Background()
    res, err := s.BatchGetItem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetItemOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->