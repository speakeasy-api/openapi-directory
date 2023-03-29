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
            Project: "unde",
        },
        QueryParams: operations.RegistryCreateAPIQueryParams{
            APIID: "deserunt",
        },
        Request: shared.APIInput{
            Annotations: map[string]interface{}{
                "nulla": "id",
                "vero": "perspiciatis",
                "nulla": "nihil",
            },
            Availability: "fuga",
            Description: "facilis",
            DisplayName: "eum",
            Labels: map[string]interface{}{
                "ullam": "saepe",
                "inventore": "sapiente",
            },
            Name: "enim",
            RecommendedVersion: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.RegistryCreateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.API != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->