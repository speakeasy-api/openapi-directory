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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "SimpleWorkflowService.CountClosedWorkflowExecutions",
        },
        Request: shared.CountClosedWorkflowExecutionsInput{
            CloseStatusFilter: &shared.CloseStatusFilter{
                Status: "COMPLETED",
            },
            CloseTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2011-08-12T10:11:12Z",
                OldestDate: "2003-05-13T04:57:12Z",
            },
            Domain: "rerum",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "dicta",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: "2004-06-02T10:14:12Z",
                OldestDate: "1981-07-21T06:30:48Z",
            },
            TagFilter: &shared.TagFilter{
                Tag: "et",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "ut",
                Version: "dolorem",
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