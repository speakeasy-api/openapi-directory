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
                LatestDate: "2022-05-18T09:34:54.894Z",
                OldestDate: "2022-03-26T09:37:56.283Z",
            },
            Domain: "iure",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "magnam",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2022-10-30T21:34:57.850Z",
                OldestDate: "2022-03-08T10:35:32.561Z",
            },
            TagFilter: &shared.TagFilter{
                Tag: "suscipit",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "molestiae",
                Version: "minus",
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