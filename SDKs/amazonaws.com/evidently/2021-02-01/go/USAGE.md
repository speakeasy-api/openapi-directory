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

    req := operations.BatchEvaluateFeatureRequest{
        RequestBody: operations.BatchEvaluateFeatureRequestBody{
            Requests: []shared.EvaluationRequest{
                shared.EvaluationRequest{
                    EntityID: "provident",
                    EvaluationContext: "distinctio",
                    Feature: "quibusdam",
                },
                shared.EvaluationRequest{
                    EntityID: "unde",
                    EvaluationContext: "nulla",
                    Feature: "corrupti",
                },
                shared.EvaluationRequest{
                    EntityID: "illum",
                    EvaluationContext: "vel",
                    Feature: "error",
                },
            },
        },
        XAmzAlgorithm: "deserunt",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "iure",
        XAmzDate: "magnam",
        XAmzSecurityToken: "debitis",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "delectus",
        Project: "tempora",
    }

    ctx := context.Background()
    res, err := s.BatchEvaluateFeature(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchEvaluateFeatureResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->