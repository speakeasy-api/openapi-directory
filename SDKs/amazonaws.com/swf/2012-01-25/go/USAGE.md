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

    req := operations.CountClosedWorkflowExecutionsRequest{
        Headers: operations.CountClosedWorkflowExecutionsHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "SimpleWorkflowService.CountClosedWorkflowExecutions",
        },
        Request: shared.CountClosedWorkflowExecutionsInput{
            CloseStatusFilter: &shared.CloseStatusFilter{
                Status: "TIMED_OUT",
            },
            CloseTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2022-10-26T11:38:21.298Z",
                OldestDate: "2022-08-14T12:26:14.440Z",
            },
            Domain: "deserunt",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "suscipit",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2022-10-21T09:35:28.731Z",
                OldestDate: "2022-12-11T12:27:07.533Z",
            },
            TagFilter: &shared.TagFilter{
                Tag: "debitis",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "ipsa",
                Version: "delectus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CountClosedWorkflowExecutions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowExecutionCount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->