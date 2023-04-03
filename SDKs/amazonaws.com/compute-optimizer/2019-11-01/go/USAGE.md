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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.DeleteRecommendationPreferencesRequest{
        DeleteRecommendationPreferencesRequest: shared.DeleteRecommendationPreferencesRequest{
            RecommendationPreferenceNames: []shared.RecommendationPreferenceNameEnum{
                "InferredWorkloadTypes",
                "ExternalMetricsPreference",
                "ExternalMetricsPreference",
            },
            ResourceType: "LambdaFunction",
            Scope: &shared.Scope{
                Name: "ResourceArn",
                Value: "corrupti",
            },
        },
        XAmzAlgorithm: "illum",
        XAmzContentSha256: "vel",
        XAmzCredential: "error",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "magnam",
        XAmzTarget: "ComputeOptimizerService.DeleteRecommendationPreferences",
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