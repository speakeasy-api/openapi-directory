<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteScalingPolicyRequest{
        Headers: operations.DeleteScalingPolicyHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "qui",
            XAmzCredential: "inventore",
            XAmzDate: "omnis",
            XAmzSecurityToken: "veritatis",
            XAmzSignature: "minus",
            XAmzSignedHeaders: "quia",
            XAmzTarget: "AnyScaleFrontendService.DeleteScalingPolicy",
        },
        Request: shared.DeleteScalingPolicyRequest{
            PolicyName: "vitae",
            ResourceID: "quia",
            ScalableDimension: "elasticache:replication-group:NodeGroups",
            ServiceNamespace: "cassandra",
        },
    }
    
    res, err := s.DeleteScalingPolicy(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScalingPolicyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->