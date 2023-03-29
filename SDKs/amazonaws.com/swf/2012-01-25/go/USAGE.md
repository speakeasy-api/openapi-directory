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
                LatestDate: "2022-08-13T22:08:13.583Z",
                OldestDate: "2022-08-05T18:31:21.521Z",
            },
            Domain: "eum",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "iusto",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2022-12-10T22:09:06.676Z",
                OldestDate: "2022-05-08T00:37:25.198Z",
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