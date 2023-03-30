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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "SimpleWorkflowService.CountClosedWorkflowExecutions",
        },
        Request: shared.CountClosedWorkflowExecutionsInput{
            CloseStatusFilter: &shared.CloseStatusFilter{
                Status: "CANCELED",
            },
            CloseTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2022-08-14T09:37:38.486Z",
                OldestDate: "2022-08-06T06:00:46.424Z",
            },
            Domain: "eum",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "iusto",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2022-12-11T09:38:31.578Z",
                OldestDate: "2022-05-08T12:06:50.100Z",
            },
            TagFilter: &shared.TagFilter{
                Tag: "inventore",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "sapiente",
                Version: "enim",
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