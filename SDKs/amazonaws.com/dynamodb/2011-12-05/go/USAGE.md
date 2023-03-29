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
            RequestItems: "unde",
        },
        Headers: operations.BatchGetItemHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
            XAmzTarget: "DynamoDB_20111205.BatchGetItem",
        },
        Request: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "facilis": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "iusto",
                        "ullam",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "inventore",
                                Bs: []string{
                                    "enim",
                                    "eum",
                                    "voluptatum",
                                    "autem",
                                },
                                N: "vel",
                                Ns: []string{
                                    "deleniti",
                                    "similique",
                                    "reprehenderit",
                                },
                                S: "molestiae",
                                Ss: []string{
                                    "quasi",
                                    "laboriosam",
                                    "dicta",
                                    "est",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "voluptatem",
                                Bs: []string{
                                    "fugiat",
                                    "a",
                                },
                                N: "omnis",
                                Ns: []string{
                                    "accusamus",
                                },
                                S: "accusamus",
                                Ss: []string{
                                    "rem",
                                    "quibusdam",
                                    "et",
                                    "praesentium",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "occaecati",
                                Bs: []string{
                                    "soluta",
                                    "sed",
                                    "quisquam",
                                    "rerum",
                                },
                                N: "culpa",
                                Ns: []string{
                                    "sed",
                                },
                                S: "rerum",
                                Ss: []string{
                                    "occaecati",
                                    "odit",
                                    "esse",
                                    "rem",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "voluptatem",
                                Bs: []string{
                                    "est",
                                },
                                N: "id",
                                Ns: []string{
                                    "numquam",
                                    "similique",
                                },
                                S: "dolores",
                                Ss: []string{
                                    "quia",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "et",
                                Bs: []string{
                                    "laborum",
                                },
                                N: "modi",
                                Ns: []string{
                                    "iure",
                                    "earum",
                                    "ut",
                                },
                                S: "soluta",
                                Ss: []string{
                                    "ea",
                                    "laborum",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "iusto",
                                Bs: []string{
                                    "optio",
                                    "aspernatur",
                                    "inventore",
                                    "ut",
                                },
                                N: "libero",
                                Ns: []string{
                                    "libero",
                                    "ipsum",
                                    "non",
                                },
                                S: "ea",
                                Ss: []string{
                                    "placeat",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "ipsam",
                                Bs: []string{
                                    "commodi",
                                    "quia",
                                    "similique",
                                },
                                N: "eaque",
                                Ns: []string{
                                    "harum",
                                    "doloribus",
                                },
                                S: "a",
                                Ss: []string{
                                    "et",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "non",
                                Bs: []string{
                                    "neque",
                                    "asperiores",
                                    "et",
                                },
                                N: "culpa",
                                Ns: []string{
                                    "esse",
                                    "totam",
                                },
                                S: "voluptatum",
                                Ss: []string{
                                    "fuga",
                                },
                            },
                        },
                    },
                },
                "nesciunt": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "aut",
                        "cum",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "ipsam",
                                Bs: []string{
                                    "omnis",
                                },
                                N: "adipisci",
                                Ns: []string{
                                    "consequatur",
                                    "distinctio",
                                    "qui",
                                    "perferendis",
                                },
                                S: "aspernatur",
                                Ss: []string{
                                    "quo",
                                    "tempore",
                                    "explicabo",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "aut",
                                Bs: []string{
                                    "debitis",
                                    "totam",
                                    "molestias",
                                    "reiciendis",
                                },
                                N: "illo",
                                Ns: []string{
                                    "qui",
                                    "quod",
                                    "sit",
                                },
                                S: "eaque",
                                Ss: []string{
                                    "veniam",
                                    "reiciendis",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "sed",
                                Bs: []string{
                                    "exercitationem",
                                    "deleniti",
                                },
                                N: "sed",
                                Ns: []string{
                                    "voluptatem",
                                    "aut",
                                    "esse",
                                },
                                S: "sint",
                                Ss: []string{
                                    "numquam",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "eligendi",
                                Bs: []string{
                                    "similique",
                                    "et",
                                    "ut",
                                },
                                N: "molestias",
                                Ns: []string{
                                    "sint",
                                    "explicabo",
                                    "et",
                                },
                                S: "in",
                                Ss: []string{
                                    "non",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "minima",
                                Bs: []string{
                                    "aut",
                                    "libero",
                                },
                                N: "voluptas",
                                Ns: []string{
                                    "est",
                                },
                                S: "porro",
                                Ss: []string{
                                    "nostrum",
                                    "voluptatem",
                                    "sit",
                                    "in",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "officia",
                                Bs: []string{
                                    "voluptatem",
                                    "dolorem",
                                    "eum",
                                },
                                N: "quis",
                                Ns: []string{
                                    "ratione",
                                },
                                S: "cum",
                                Ss: []string{
                                    "enim",
                                    "nihil",
                                    "id",
                                },
                            },
                        },
                    },
                },
                "quis": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "et",
                        "dolore",
                        "possimus",
                        "in",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "deserunt",
                                Bs: []string{
                                    "sunt",
                                    "rerum",
                                    "modi",
                                    "necessitatibus",
                                },
                                N: "tenetur",
                                Ns: []string{
                                    "ducimus",
                                    "ducimus",
                                    "nulla",
                                },
                                S: "reiciendis",
                                Ss: []string{
                                    "fugit",
                                    "ullam",
                                    "voluptas",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "vel",
                                Bs: []string{
                                    "qui",
                                    "cum",
                                },
                                N: "aut",
                                Ns: []string{
                                    "culpa",
                                },
                                S: "enim",
                                Ss: []string{
                                    "delectus",
                                    "eligendi",
                                    "officia",
                                    "est",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "distinctio",
                                Bs: []string{
                                    "provident",
                                    "a",
                                    "incidunt",
                                },
                                N: "facilis",
                                Ns: []string{
                                    "nihil",
                                    "dolorum",
                                },
                                S: "id",
                                Ss: []string{
                                    "sit",
                                    "rem",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "corporis",
                                Bs: []string{
                                    "distinctio",
                                    "quis",
                                    "nostrum",
                                },
                                N: "eum",
                                Ns: []string{
                                    "placeat",
                                    "molestiae",
                                    "debitis",
                                },
                                S: "dolores",
                                Ss: []string{
                                    "ullam",
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