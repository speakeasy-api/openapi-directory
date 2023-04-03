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

    req := operations.CreateArtifactRuleRequest{
        Rule: shared.Rule{
            Config: "corrupti",
            Type: "VALIDITY",
        },
        ArtifactID: "provident",
    }

    ctx := context.Background()
    res, err := s.ArtifactRules.CreateArtifactRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->