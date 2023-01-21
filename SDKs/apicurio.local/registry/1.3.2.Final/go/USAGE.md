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
    
    req := operations.CreateArtifactRuleRequest{
        PathParams: operations.CreateArtifactRulePathParams{
            ArtifactID: "sit",
        },
        Request: shared.Rule{
            Config: "voluptas",
            Type: "COMPATIBILITY",
        },
    }
    
    res, err := s.ArtifactRules.CreateArtifactRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->