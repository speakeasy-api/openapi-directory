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
            RequestItems: "sit",
        },
        Headers: operations.BatchGetItemHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
            XAmzTarget: "DynamoDB_20111205.BatchGetItem",
        },
        Request: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "nihil": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "dicta",
                        "debitis",
                        "voluptatum",
                    },
                    ConsistentRead: false,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "dolorem",
                                BS: []string{
                                    "voluptate",
                                    "iste",
                                },
                                N: "vitae",
                                NS: []string{
                                    "dolores",
                                    "illum",
                                    "debitis",
                                },
                                S: "vel",
                                SS: []string{
                                    "dolore",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "id",
                                BS: []string{
                                    "accusantium",
                                },
                                N: "totam",
                                NS: []string{
                                    "quis",
                                    "est",
                                },
                                S: "aut",
                                SS: []string{
                                    "non",
                                    "voluptas",
                                },
                            },
                        },
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "omnis",
                                BS: []string{
                                    "illo",
                                },
                                N: "sed",
                                NS: []string{
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