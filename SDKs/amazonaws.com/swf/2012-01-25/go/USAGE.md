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
            XAmzAlgorithm: "nostrum",
            XAmzContentSha256: "repudiandae",
            XAmzCredential: "dicta",
            XAmzDate: "vero",
            XAmzSecurityToken: "ea",
            XAmzSignature: "delectus",
            XAmzSignedHeaders: "nam",
            XAmzTarget: "SimpleWorkflowService.CountClosedWorkflowExecutions",
        },
        Request: shared.CountClosedWorkflowExecutionsInput{
            CloseStatusFilter: &shared.CloseStatusFilter{
                Status: "CONTINUED_AS_NEW",
            },
            CloseTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2004-05-19T05:47:13Z",
                OldestDate: "2003-11-01T03:28:06Z",
            },
            Domain: "dicta",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "laudantium",
            },
            StartTimeFilter: &shared.CountClosedWorkflowExecutionsInputStartTimeFilter{
                LatestDate: "1991-06-30T10:57:41Z",
                OldestDate: "1971-09-30T18:40:33Z",
            },
            TagFilter: &shared.TagFilter{
                Tag: "facilis",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "fugit",
                Version: "aut",
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