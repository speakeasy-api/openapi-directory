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

    req := operations.DeleteRecommendationPreferencesRequest{
        Headers: operations.DeleteRecommendationPreferencesHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "ComputeOptimizerService.DeleteRecommendationPreferences",
        },
        Request: shared.DeleteRecommendationPreferencesRequest{
            RecommendationPreferenceNames: []shared.RecommendationPreferenceNameEnum{
                "InferredWorkloadTypes",
                "InferredWorkloadTypes",
            },
            ResourceType: "EbsVolume",
            Scope: &shared.Scope{
                Name: "AccountId",
                Value: "ullam",
            },
        },
    }

    ctx := context.Background()
    res, err := s.DeleteRecommendationPreferences(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRecommendationPreferencesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->