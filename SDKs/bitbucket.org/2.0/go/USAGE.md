<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest{
        PathParams: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDPathParams{
            LogUUID: "molestiae",
            PipelineUUID: "possimus",
            RepoSlug: "voluptatum",
            StepUUID: "facere",
            Workspace: "accusamus",
        },
    }
    
    res, err := s.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->