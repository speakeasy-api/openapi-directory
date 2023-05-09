<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.DeleteRecommendationPreferences(ctx, operations.DeleteRecommendationPreferencesRequest{
        DeleteRecommendationPreferencesRequest: shared.DeleteRecommendationPreferencesRequest{
            RecommendationPreferenceNames: []shared.RecommendationPreferenceNameEnum{
                shared.RecommendationPreferenceNameEnumInferredWorkloadTypes,
                shared.RecommendationPreferenceNameEnumExternalMetricsPreference,
                shared.RecommendationPreferenceNameEnumExternalMetricsPreference,
            },
            ResourceType: shared.ResourceTypeEnumLambdaFunction,
            Scope: &shared.Scope{
                Name: shared.ScopeNameEnumResourceArn.ToPointer(),
                Value: sdk.String("corrupti"),
            },
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.DeleteRecommendationPreferencesXAmzTargetEnumComputeOptimizerServiceDeleteRecommendationPreferences,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRecommendationPreferencesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->