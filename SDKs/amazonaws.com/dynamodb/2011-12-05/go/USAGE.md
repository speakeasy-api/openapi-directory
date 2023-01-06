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
    
    req := operations.BatchGetItemRequest{
        QueryParams: operations.BatchGetItemQueryParams{
            RequestItems: "iste",
        },
        Headers: operations.BatchGetItemHeaders{
            XAmzAlgorithm: "vitae",
            XAmzContentSha256: "totam",
            XAmzCredential: "dolores",
            XAmzDate: "illum",
            XAmzSecurityToken: "debitis",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "odio",
            XAmzTarget: "DynamoDB_20111205.BatchGetItem",
        },
        Request: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "aspernatur": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "totam",
                        "commodi",
                        "quis",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "odit",
                                BS: []string{
                                    "voluptas",
                                    "omnis",
                                    "aut",
                                },
                                N: "illo",
                                NS: []string{
                                    "officiis",
                                    "autem",
                                    "consectetur",
                                },
                                S: "nobis",
                                SS: []string{
                                    "qui",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "recusandae",
                                BS: []string{
                                    "ipsum",
                                    "eveniet",
                                },
                                N: "modi",
                                NS: []string{
                                    "inventore",
                                },
                                S: "ut",
                                SS: []string{
                                    "aut",
                                    "reprehenderit",
                                    "tempore",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "maiores",
                                BS: []string{
                                    "dolor",
                                    "beatae",
                                    "veritatis",
                                },
                                N: "in",
                                NS: []string{
                                    "omnis",
                                    "ipsum",
                                    "ex",
                                },
                                S: "dolores",
                                SS: []string{
                                    "vel",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "rerum",
                                BS: []string{
                                    "voluptas",
                                    "quam",
                                },
                                N: "reprehenderit",
                                NS: []string{
                                    "qui",
                                },
                                S: "unde",
                                SS: []string{
                                    "autem",
                                    "qui",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "ut",
                                BS: []string{
                                    "ab",
                                    "neque",
                                    "ullam",
                                },
                                N: "et",
                                NS: []string{
                                    "esse",
                                    "architecto",
                                    "quam",
                                },
                                S: "velit",
                                SS: []string{
                                    "soluta",
                                    "sunt",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "voluptates",
                                BS: []string{
                                    "et",
                                    "optio",
                                    "qui",
                                },
                                N: "earum",
                                NS: []string{
                                    "omnis",
                                },
                                S: "ut",
                                SS: []string{
                                    "dolor",
                                    "commodi",
                                    "error",
                                },
                            },
                        },
                    },
                },
                "reprehenderit": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "nostrum",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "sed",
                                BS: []string{
                                    "soluta",
                                },
                                N: "aut",
                                NS: []string{
                                    "consequuntur",
                                    "laudantium",
                                    "autem",
                                },
                                S: "ipsa",
                                SS: []string{
                                    "doloremque",
                                    "perferendis",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "atque",
                                BS: []string{
                                    "quisquam",
                                },
                                N: "explicabo",
                                NS: []string{
                                    "maxime",
                                },
                                S: "eum",
                                SS: []string{
                                    "et",
                                    "rerum",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "reiciendis",
                                BS: []string{
                                    "cumque",
                                    "minima",
                                    "necessitatibus",
                                },
                                N: "est",
                                NS: []string{
                                    "eum",
                                    "labore",
                                    "et",
                                },
                                S: "impedit",
                                SS: []string{
                                    "expedita",
                                    "vel",
                                    "qui",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "modi",
                                BS: []string{
                                    "tempora",
                                },
                                N: "deserunt",
                                NS: []string{
                                    "sunt",
                                    "sit",
                                    "autem",
                                },
                                S: "quis",
                                SS: []string{
                                    "vel",
                                    "placeat",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "qui",
                                BS: []string{
                                    "quis",
                                    "adipisci",
                                },
                                N: "porro",
                                NS: []string{
                                    "et",
                                    "accusamus",
                                    "numquam",
                                },
                                S: "laborum",
                                SS: []string{
                                    "ut",
                                    "laborum",
                                    "fugit",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "quis",
                                BS: []string{
                                    "soluta",
                                    "aperiam",
                                },
                                N: "consequuntur",
                                NS: []string{
                                    "mollitia",
                                },
                                S: "inventore",
                                SS: []string{
                                    "ipsa",
                                },
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.BatchGetItem(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetItemOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->