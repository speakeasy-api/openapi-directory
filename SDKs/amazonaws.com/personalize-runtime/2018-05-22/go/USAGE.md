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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.GetPersonalizedRankingRequestBody{
            CampaignArn: "voluptas",
            Context: map[string]string{
                "et": "nihil",
            },
            FilterArn: "rerum",
            FilterValues: map[string]string{
                "debitis": "voluptatum",
                "et": "ut",
                "dolorem": "et",
            },
            InputList: []string{
                "iste",
            },
            UserID: "vitae",
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