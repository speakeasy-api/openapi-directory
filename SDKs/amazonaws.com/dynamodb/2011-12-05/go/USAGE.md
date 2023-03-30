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

    req := operations.BatchGetItemRequest{
        QueryParams: operations.BatchGetItemQueryParams{
            RequestItems: "corrupti",
        },
        Headers: operations.BatchGetItemHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
            XAmzTarget: "DynamoDB_20111205.BatchGetItem",
        },
        Request: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "error": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "suscipit",
                        "iure",
                        "magnam",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "ipsa",
                                Bs: []string{
                                    "tempora",
                                    "suscipit",
                                    "molestiae",
                                    "minus",
                                },
                                N: "placeat",
                                Ns: []string{
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                                S: "recusandae",
                                Ss: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "perferendis",
                                Bs: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                                N: "quo",
                                Ns: []string{
                                    "at",
                                },
                                S: "at",
                                Ss: []string{
                                    "molestiae",
                                    "quod",
                                    "quod",
                                    "esse",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "totam",
                                Bs: []string{
                                    "dolorum",
                                    "dicta",
                                    "nam",
                                    "officia",
                                },
                                N: "occaecati",
                                Ns: []string{
                                    "deleniti",
                                },
                                S: "hic",
                                Ss: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "modi",
                                Bs: []string{
                                    "impedit",
                                },
                                N: "cum",
                                Ns: []string{
                                    "ipsum",
                                    "excepturi",
                                },
                                S: "aspernatur",
                                Ss: []string{
                                    "ad",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "natus",
                                Bs: []string{
                                    "iste",
                                },
                                N: "dolor",
                                Ns: []string{
                                    "laboriosam",
                                    "hic",
                                    "saepe",
                                },
                                S: "fuga",
                                Ss: []string{
                                    "corporis",
                                    "iste",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "iure",
                                Bs: []string{
                                    "quidem",
                                    "architecto",
                                    "ipsa",
                                    "reiciendis",
                                },
                                N: "est",
                                Ns: []string{
                                    "laborum",
                                    "dolores",
                                    "dolorem",
                                },
                                S: "corporis",
                                Ss: []string{
                                    "nobis",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "enim",
                                Bs: []string{
                                    "nemo",
                                    "minima",
                                    "excepturi",
                                },
                                N: "accusantium",
                                Ns: []string{
                                    "culpa",
                                    "doloribus",
                                },
                                S: "sapiente",
                                Ss: []string{
                                    "mollitia",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "dolorem",
                                Bs: []string{
                                    "consequuntur",
                                    "repellat",
                                    "mollitia",
                                },
                                N: "occaecati",
                                Ns: []string{
                                    "commodi",
                                    "quam",
                                },
                                S: "molestiae",
                                Ss: []string{
                                    "error",
                                },
                            },
                        },
                    },
                },
                "quia": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "vitae",
                        "laborum",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "enim",
                                Bs: []string{
                                    "quo",
                                },
                                N: "sequi",
                                Ns: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                                S: "quasi",
                                Ss: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "reiciendis",
                                Bs: []string{
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                    "voluptatibus",
                                },
                                N: "ipsa",
                                Ns: []string{
                                    "voluptate",
                                    "cum",
                                    "perferendis",
                                },
                                S: "doloremque",
                                Ss: []string{
                                    "ut",
                                    "maiores",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "dicta",
                                Bs: []string{
                                    "dolore",
                                    "iusto",
                                },
                                N: "dicta",
                                Ns: []string{
                                    "enim",
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
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "incidunt",
                                Bs: []string{
                                    "consequatur",
                                    "est",
                                },
                                N: "quibusdam",
                                Ns: []string{
                                    "deserunt",
                                },
                                S: "distinctio",
                                Ss: []string{
                                    "labore",
                                    "modi",
                                    "qui",
                                    "aliquid",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "cupiditate",
                                Bs: []string{
                                    "perferendis",
                                    "magni",
                                    "assumenda",
                                },
                                N: "ipsam",
                                Ns: []string{
                                    "fugit",
                                },
                                S: "dolorum",
                                Ss: []string{
                                    "tempora",
                                    "facilis",
                                    "tempore",
                                },
                            },
                        },
                    },
                },
            },
        },
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