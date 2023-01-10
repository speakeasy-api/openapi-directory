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
    
    req := operations.CountClosedWorkflowExecutionsRequest{
        Headers: operations.CountClosedWorkflowExecutionsHeaders{
            XAmzAlgorithm: "illo",
            XAmzContentSha256: "aut",
            XAmzCredential: "omnis",
            XAmzDate: "eos",
            XAmzSecurityToken: "dolore",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "dolor",
            XAmzTarget: "SimpleWorkflowService.CountClosedWorkflowExecutions",
        },
        Request: shared.CountClosedWorkflowExecutionsInput{
            CloseStatusFilter: &shared.CloseStatusFilter{
                Status: "COMPLETED",
            },
            CloseTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "1983-08-15T04:51:46Z",
                OldestDate: "1997-06-05T21:11:32Z",
            },
            Domain: "iste",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "voluptatibus",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "1980-04-04T16:05:40Z",
                OldestDate: "1983-07-12T21:04:12Z",
            },
            TagFilter: &shared.TagFilter{
                Tag: "debitis",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "quam",
                Version: "excepturi",
            },
        },
    }
    
    res, err := s.CountClosedWorkflowExecutions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowExecutionCount != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->