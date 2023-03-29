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

    req := operations.DeleteScalingPolicyRequest{
        Headers: operations.DeleteScalingPolicyHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AnyScaleFrontendService.DeleteScalingPolicy",
        },
        Request: shared.DeleteScalingPolicyRequest{
            PolicyName: "nihil",
            ResourceID: "fuga",
            ScalableDimension: "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits",
            ServiceNamespace: "rds",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteScalingPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScalingPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->