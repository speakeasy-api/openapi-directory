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
    res, err := s.Registry.RegistryCreateAPI(ctx, operations.RegistryCreateAPIRequest{
        APIInput: shared.APIInput{
            Annotations: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Availability: sdk.String("illum"),
            Description: sdk.String("vel"),
            DisplayName: sdk.String("error"),
            Labels: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Name: sdk.String("Laurie Kreiger"),
            RecommendedDeployment: sdk.String("voluptatum"),
            RecommendedVersion: sdk.String("iusto"),
        },
        APIID: sdk.String("excepturi"),
        Location: "nisi",
        Project: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->