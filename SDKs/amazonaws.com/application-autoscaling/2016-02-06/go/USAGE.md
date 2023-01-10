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
            XAmzAlgorithm: "vitae",
            XAmzContentSha256: "fugit",
            XAmzCredential: "non",
            XAmzDate: "aut",
            XAmzSecurityToken: "autem",
            XAmzSignature: "dolores",
            XAmzSignedHeaders: "aperiam",
            XAmzTarget: "AnyScaleFrontendService.DeleteScalingPolicy",
        },
        Request: shared.DeleteScalingPolicyRequest{
            PolicyName: "culpa",
            ResourceID: "quaerat",
            ScalableDimension: "rds:cluster:ReadReplicaCount",
            ServiceNamespace: "custom-resource",
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