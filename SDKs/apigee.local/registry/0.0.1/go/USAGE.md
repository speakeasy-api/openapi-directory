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
        PathParams: operations.RegistryCreateAPIPathParams{
            Location: "corrupti",
            Project: "provident",
        },
        QueryParams: operations.RegistryCreateAPIQueryParams{
            APIID: "distinctio",
        },
        Request: shared.APIInput{
            Annotations: map[string]string{
                "unde": "nulla",
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
            },
            Availability: "iure",
            Description: "magnam",
            DisplayName: "debitis",
            Labels: map[string]string{
                "delectus": "tempora",
            },
            Name: "suscipit",
            RecommendedDeployment: "molestiae",
            RecommendedVersion: "minus",
        },
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