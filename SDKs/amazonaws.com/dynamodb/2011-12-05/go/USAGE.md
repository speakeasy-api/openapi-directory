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
            RequestItems: "occaecati",
        },
        Headers: operations.BatchGetItemHeaders{
            XAmzAlgorithm: "error",
            XAmzContentSha256: "aliquam",
            XAmzCredential: "eaque",
            XAmzDate: "non",
            XAmzSecurityToken: "earum",
            XAmzSignature: "voluptatem",
            XAmzSignedHeaders: "impedit",
            XAmzTarget: "DynamoDB_20111205.BatchGetItem",
        },
        Request: shared.BatchGetItemInput{
            RequestItems: map[string]shared.KeysAndAttributes{
                "ut": shared.KeysAndAttributes{
                    AttributesToGet: []string{
                        "ab",
                        "consequatur",
                    },
                    ConsistentRead: true,
                    Keys: []shared.Key{
                        shared.Key{
                            HashKeyElement: shared.AttributeValue{
                                B: "fuga",
                                BS: []string{
                                    "neque",
                                },
                                N: "necessitatibus",
                                NS: []string{
                                    "non",
                                    "sit",
                                },
                                S: "est",
                                SS: []string{
                                    "in",
                                },
                            },
                            RangeKeyElement: &shared.AttributeValue{
                                B: "mollitia",
                                BS: []string{
                                    "et",
                                },
                                N: "consequuntur",
                                NS: []string{
                                    "officia",
                                    "quidem",
                                    "quasi",
                                },
                                S: "odit",
                                SS: []string{
                                    "aperiam",
                                    "omnis",
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