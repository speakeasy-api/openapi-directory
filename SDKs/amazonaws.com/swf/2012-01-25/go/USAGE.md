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

    req := operations.CountClosedWorkflowExecutionsRequest{
        CountClosedWorkflowExecutionsInput: shared.CountClosedWorkflowExecutionsInput{
            CloseStatusFilter: &shared.CloseStatusFilter{
                Status: "TERMINATED",
            },
            CloseTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2021-07-27T21:52:56.087Z",
                OldestDate: "2021-03-11T23:22:42.658Z",
            },
            Domain: "nulla",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "corrupti",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2021-09-24T02:21:06.409Z",
                OldestDate: "2021-09-16T11:56:06.019Z",
            },
            TagFilter: &shared.TagFilter{
                Tag: "suscipit",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "iure",
                Version: "magnam",
            },
        },
        XAmzAlgorithm: "debitis",
        XAmzContentSha256: "ipsa",
        XAmzCredential: "delectus",
        XAmzDate: "tempora",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "molestiae",
        XAmzSignedHeaders: "minus",
        XAmzTarget: "SimpleWorkflowService.CountClosedWorkflowExecutions",
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