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

    req := operations.GetPersonalizedRankingRequest{
        Headers: operations.GetPersonalizedRankingHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.GetPersonalizedRankingRequestBody{
            CampaignArn: "nulla",
            Context: map[string]string{
                "fuga": "facilis",
                "eum": "iusto",
            },
            FilterArn: "ullam",
            FilterValues: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
            InputList: []string{
                "similique",
                "reprehenderit",
            },
            UserID: "molestiae",
        },
    }

    ctx := context.Background()
    res, err := s.GetPersonalizedRanking(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPersonalizedRankingResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->