<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ArtifactRules.CreateArtifactRule(ctx, operations.CreateArtifactRuleRequest{
        Rule: shared.Rule{
            Config: "corrupti",
            Type: shared.RuleTypeEnumValidity.ToPointer(),
        },
        ArtifactID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->