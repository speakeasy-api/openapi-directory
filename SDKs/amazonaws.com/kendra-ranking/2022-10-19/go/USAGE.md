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

    req := operations.CreateRescoreExecutionPlanRequest{
        Headers: operations.CreateRescoreExecutionPlanHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan",
        },
        Request: shared.CreateRescoreExecutionPlanRequest{
            CapacityUnits: &shared.CapacityUnitsConfiguration{
                RescoreCapacityUnits: 847252,
            },
            ClientToken: "vel",
            Description: "error",
            Name: "deserunt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
        },
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