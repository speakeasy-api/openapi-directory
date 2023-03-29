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
    s := sdk.New()

    req := operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest{
        PathParams: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDPathParams{
            LogUUID: "unde",
            PipelineUUID: "deserunt",
            RepoSlug: "porro",
            StepUUID: "nulla",
            Workspace: "id",
        },
    }

    ctx := context.Background()
    res, err := s.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->