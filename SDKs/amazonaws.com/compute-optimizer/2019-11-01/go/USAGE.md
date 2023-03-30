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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "ComputeOptimizerService.DeleteRecommendationPreferences",
        },
        Request: shared.DeleteRecommendationPreferencesRequest{
            RecommendationPreferenceNames: []shared.RecommendationPreferenceNameEnum{
                "InferredWorkloadTypes",
                "InferredWorkloadTypes",
                "InferredWorkloadTypes",
                "InferredWorkloadTypes",
            },
            ResourceType: "EbsVolume",
            Scope: &shared.Scope{
                Name: "Organization",
                Value: "debitis",
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