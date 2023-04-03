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

    req := operations.RegistryCreateAPIRequest{
        APIInput: shared.APIInput{
            Annotations: map[string]string{
                "provident": "distinctio",
                "quibusdam": "unde",
                "nulla": "corrupti",
            },
            Availability: "illum",
            Description: "vel",
            DisplayName: "error",
            Labels: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Name: "tempora",
            RecommendedDeployment: "suscipit",
            RecommendedVersion: "molestiae",
        },
        APIID: "minus",
        Location: "placeat",
        Project: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.Registry.RegistryCreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->