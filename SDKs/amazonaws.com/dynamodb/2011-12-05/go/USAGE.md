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
    res, err := s.BatchGetItem(ctx, operations.BatchGetItemRequest{
        BatchGetItemInput: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "provident": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "quibusdam",
                        "unde",
                        "nulla",
                    },
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("illum"),
                                Bs: []string{
                                    "error",
                                    "deserunt",
                                },
                                N: sdk.String("suscipit"),
                                Ns: []string{
                                    "magnam",
                                    "debitis",
                                },
                                S: sdk.String("ipsa"),
                                Ss: []string{
                                    "tempora",
                                    "suscipit",
                                    "molestiae",
                                    "minus",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("placeat"),
                                Bs: []string{
                                    "iusto",
                                    "excepturi",
                                    "nisi",
                                },
                                N: sdk.String("recusandae"),
                                Ns: []string{
                                    "ab",
                                    "quis",
                                    "veritatis",
                                    "deserunt",
                                },
                                S: sdk.String("perferendis"),
                                Ss: []string{
                                    "repellendus",
                                    "sapiente",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("quo"),
                                Bs: []string{
                                    "at",
                                },
                                N: sdk.String("at"),
                                Ns: []string{
                                    "molestiae",
                                    "quod",
                                    "quod",
                                    "esse",
                                },
                                S: sdk.String("totam"),
                                Ss: []string{
                                    "dolorum",
                                    "dicta",
                                    "nam",
                                    "officia",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("occaecati"),
                                Bs: []string{
                                    "deleniti",
                                },
                                N: sdk.String("hic"),
                                Ns: []string{
                                    "totam",
                                    "beatae",
                                    "commodi",
                                    "molestiae",
                                },
                                S: sdk.String("modi"),
                                Ss: []string{
                                    "impedit",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("cum"),
                                Bs: []string{
                                    "ipsum",
                                    "excepturi",
                                },
                                N: sdk.String("aspernatur"),
                                Ns: []string{
                                    "ad",
                                },
                                S: sdk.String("natus"),
                                Ss: []string{
                                    "iste",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("dolor"),
                                Bs: []string{
                                    "laboriosam",
                                    "hic",
                                    "saepe",
                                },
                                N: sdk.String("fuga"),
                                Ns: []string{
                                    "corporis",
                                    "iste",
                                },
                                S: sdk.String("iure"),
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
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("explicabo"),
                                Bs: []string{
                                    "enim",
                                    "omnis",
                                    "nemo",
                                    "minima",
                                },
                                N: sdk.String("excepturi"),
                                Ns: []string{
                                    "iure",
                                },
                                S: sdk.String("culpa"),
                                Ss: []string{
                                    "sapiente",
                                    "architecto",
                                    "mollitia",
                                    "dolorem",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("culpa"),
                                Bs: []string{
                                    "repellat",
                                },
                                N: sdk.String("mollitia"),
                                Ns: []string{
                                    "numquam",
                                    "commodi",
                                    "quam",
                                },
                                S: sdk.String("molestiae"),
                                Ss: []string{
                                    "error",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("quia"),
                                Bs: []string{
                                    "vitae",
                                    "laborum",
                                },
                                N: sdk.String("animi"),
                                Ns: []string{
                                    "odit",
                                    "quo",
                                },
                                S: sdk.String("sequi"),
                                Ss: []string{
                                    "ipsam",
                                    "id",
                                    "possimus",
                                    "aut",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("quasi"),
                                Bs: []string{
                                    "temporibus",
                                    "laborum",
                                    "quasi",
                                },
                                N: sdk.String("reiciendis"),
                                Ns: []string{
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                    "voluptatibus",
                                },
                                S: sdk.String("ipsa"),
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
                    ConsistentRead: sdk.Bool(false),
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: sdk.String("corporis"),
                                Bs: []string{
                                    "iusto",
                                    "dicta",
                                },
                                N: sdk.String("harum"),
                                Ns: []string{
                                    "accusamus",
                                    "commodi",
                                },
                                S: sdk.String("repudiandae"),
                                Ss: []string{
                                    "ipsum",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: sdk.String("quidem"),
                                Bs: []string{
                                    "excepturi",
                                    "pariatur",
                                    "modi",
                                },
                                N: sdk.String("praesentium"),
                                Ns: []string{
                                    "voluptates",
                                    "quasi",
                                    "repudiandae",
                                },
                                S: sdk.String("sint"),
                                Ss: []string{
                                    "itaque",
                                },
                            },
                        },
                    },
                },
            },
        },
        RequestItems: sdk.String("incidunt"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.BatchGetItemXAmzTargetEnumDynamoDb20111205BatchGetItem,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetItemOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->