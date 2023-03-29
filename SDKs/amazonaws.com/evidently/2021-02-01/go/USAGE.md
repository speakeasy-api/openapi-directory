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
            Project: "unde",
        },
        Headers: operations.BatchEvaluateFeatureHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.BatchEvaluateFeatureRequestBody{
            Requests: []shared.EvaluationRequest{
                shared.EvaluationRequest{
                    EntityID: "fuga",
                    EvaluationContext: "facilis",
                    Feature: "eum",
                },
                shared.EvaluationRequest{
                    EntityID: "iusto",
                    EvaluationContext: "ullam",
                    Feature: "saepe",
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