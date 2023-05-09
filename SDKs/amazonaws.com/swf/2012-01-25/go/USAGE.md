<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CountClosedWorkflowExecutions(ctx, operations.CountClosedWorkflowExecutionsRequest{
        CountClosedWorkflowExecutionsInput: shared.CountClosedWorkflowExecutionsInput{
            CloseStatusFilter: &shared.CloseStatusFilter{
                Status: shared.CloseStatusEnumTerminated,
            },
            CloseTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
                OldestDate: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
            },
            Domain: "nulla",
            ExecutionFilter: &shared.WorkflowExecutionFilter{
                WorkflowID: "corrupti",
            },
            StartTimeFilter: &shared.ExecutionTimeFilter{
                LatestDate: types.MustTimeFromString("2021-09-24T02:21:06.409Z"),
                OldestDate: types.MustTimeFromString("2021-09-16T11:56:06.019Z"),
            },
            TagFilter: &shared.TagFilter{
                Tag: "suscipit",
            },
            TypeFilter: &shared.WorkflowTypeFilter{
                Name: "Dr. Valerie Toy",
                Version: sdk.String("suscipit"),
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("placeat"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("nisi"),
        XAmzTarget: operations.CountClosedWorkflowExecutionsXAmzTargetEnumSimpleWorkflowServiceCountClosedWorkflowExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WorkflowExecutionCount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->