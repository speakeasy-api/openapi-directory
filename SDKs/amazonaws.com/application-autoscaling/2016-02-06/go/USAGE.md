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
    res, err := s.DeleteScalingPolicy(ctx, operations.DeleteScalingPolicyRequest{
        DeleteScalingPolicyRequest: shared.DeleteScalingPolicyRequest{
            PolicyName: "corrupti",
            ResourceID: "provident",
            ScalableDimension: shared.ScalableDimensionEnumCassandraTableReadCapacityUnits,
            ServiceNamespace: shared.ServiceNamespaceEnumKafka,
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.DeleteScalingPolicyXAmzTargetEnumAnyScaleFrontendServiceDeleteScalingPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteScalingPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->