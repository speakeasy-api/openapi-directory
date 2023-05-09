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
    res, err := s.BatchEvaluateFeature(ctx, operations.BatchEvaluateFeatureRequest{
        RequestBody: operations.BatchEvaluateFeatureRequestBody{
            Requests: []shared.EvaluationRequest{
                shared.EvaluationRequest{
                    EntityID: "provident",
                    EvaluationContext: sdk.String("distinctio"),
                    Feature: "quibusdam",
                },
                shared.EvaluationRequest{
                    EntityID: "unde",
                    EvaluationContext: sdk.String("nulla"),
                    Feature: "corrupti",
                },
                shared.EvaluationRequest{
                    EntityID: "illum",
                    EvaluationContext: sdk.String("vel"),
                    Feature: "error",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("delectus"),
        Project: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchEvaluateFeatureResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->