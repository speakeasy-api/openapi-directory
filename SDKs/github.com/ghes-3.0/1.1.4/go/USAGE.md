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
            Org: "natus",
            RepositoryID: 8643140321872946841,
            RunnerGroupID: 1926702589155937415,
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