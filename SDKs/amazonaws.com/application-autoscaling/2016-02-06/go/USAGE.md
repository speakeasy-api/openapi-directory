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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AnyScaleFrontendService.DeleteScalingPolicy",
        },
        Request: shared.DeleteScalingPolicyRequest{
            PolicyName: "illum",
            ResourceID: "vel",
            ScalableDimension: "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits",
            ServiceNamespace: "lambda",
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