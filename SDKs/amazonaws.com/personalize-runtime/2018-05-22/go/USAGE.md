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
            XAmzAlgorithm: "sapiente",
            XAmzContentSha256: "molestiae",
            XAmzCredential: "aut",
            XAmzDate: "illo",
            XAmzSecurityToken: "sapiente",
            XAmzSignature: "quisquam",
            XAmzSignedHeaders: "ad",
        },
        Request: operations.GetPersonalizedRankingRequestBody{
            CampaignArn: "incidunt",
            Context: map[string]string{
                "suscipit": "officiis",
                "cum": "totam",
            },
            FilterArn: "mollitia",
            FilterValues: map[string]string{
                "quos": "beatae",
            },
            InputList: []string{
                "dolor",
                "veritatis",
                "dicta",
            },
            UserID: "consequatur",
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