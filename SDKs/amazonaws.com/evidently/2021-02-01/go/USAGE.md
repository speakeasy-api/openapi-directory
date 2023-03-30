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

    req := operations.BatchEvaluateFeatureRequest{
        PathParams: operations.BatchEvaluateFeaturePathParams{
            Project: "corrupti",
        },
        Headers: operations.BatchEvaluateFeatureHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.BatchEvaluateFeatureRequestBody{
            Requests: []shared.EvaluationRequest{
                shared.EvaluationRequest{
                    EntityID: "error",
                    EvaluationContext: "deserunt",
                    Feature: "suscipit",
                },
                shared.EvaluationRequest{
                    EntityID: "iure",
                    EvaluationContext: "magnam",
                    Feature: "debitis",
                },
            },
        },
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