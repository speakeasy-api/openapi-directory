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
            Org: "id",
            RepositoryID: 8355713134491425632,
            RunnerGroupID: 2975788572303005670,
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