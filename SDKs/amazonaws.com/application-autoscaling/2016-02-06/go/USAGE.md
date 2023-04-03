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

    req := operations.DeleteScalingPolicyRequest{
        DeleteScalingPolicyRequest: shared.DeleteScalingPolicyRequest{
            PolicyName: "corrupti",
            ResourceID: "provident",
            ScalableDimension: "cassandra:table:ReadCapacityUnits",
            ServiceNamespace: "kafka",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "AnyScaleFrontendService.DeleteScalingPolicy",
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