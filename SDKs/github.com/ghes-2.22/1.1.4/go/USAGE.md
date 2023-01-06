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
    
    req := operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest{
        PathParams: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams{
            Org: "iusto",
            RepositoryID: 3192593213012958408,
            RunnerGroupID: 6603543126000972647,
        },
    }
    
    res, err := s.Actions.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->