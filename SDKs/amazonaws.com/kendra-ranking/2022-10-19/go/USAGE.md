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

    req := operations.CreateRescoreExecutionPlanRequest{
        CreateRescoreExecutionPlanRequest: shared.CreateRescoreExecutionPlanRequest{
            CapacityUnits: &shared.CapacityUnitsConfiguration{
                RescoreCapacityUnits: 548814,
            },
            ClientToken: "provident",
            Description: "distinctio",
            Name: "quibusdam",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nulla",
                    Value: "corrupti",
                },
                shared.Tag{
                    Key: "illum",
                    Value: "vel",
                },
                shared.Tag{
                    Key: "error",
                    Value: "deserunt",
                },
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
        XAmzTarget: "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan",
    }

    ctx := context.Background()
    res, err := s.CreateRescoreExecutionPlan(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRescoreExecutionPlanResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->