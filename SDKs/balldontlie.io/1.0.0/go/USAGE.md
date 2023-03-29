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

    req := operations.AllGamesExampleParametersRequest{
        QueryParams: operations.AllGamesExampleParametersQueryParams{
            Seasons: "2018",
            TeamIds: "1",
        },
    }

    ctx := context.Background()
    res, err := s.Games.AllGamesExampleParameters(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->