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
    
    req := operations.GetPersonalizedRankingRequest{
        Headers: operations.GetPersonalizedRankingHeaders{
            XAmzAlgorithm: "odio",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "harum",
            XAmzDate: "est",
            XAmzSecurityToken: "sequi",
            XAmzSignature: "iure",
            XAmzSignedHeaders: "provident",
        },
        Request: operations.GetPersonalizedRankingRequestBody{
            CampaignArn: "eum",
            Context: map[string]string{
                "quia": "repellendus",
            },
            FilterArn: "cupiditate",
            FilterValues: map[string]string{
                "molestiae": "nesciunt",
                "consectetur": "iure",
                "sit": "sit",
            },
            InputList: []string{
                "est",
                "at",
            },
            UserID: "ut",
        },
    }
    
    res, err := s.GetPersonalizedRanking(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonalizedRankingResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->