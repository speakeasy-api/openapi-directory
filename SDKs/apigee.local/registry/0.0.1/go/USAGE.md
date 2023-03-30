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
            Location: "unde",
            Project: "deserunt",
        },
        QueryParams: operations.RegistryCreateAPIQueryParams{
            APIID: "porro",
        },
        Request: shared.APIInput{
            Annotations: map[string]string{
                "id": "vero",
                "perspiciatis": "nulla",
                "nihil": "fuga",
                "facilis": "eum",
            },
            Availability: "iusto",
            Description: "ullam",
            DisplayName: "saepe",
            Labels: map[string]string{
                "sapiente": "enim",
            },
            Name: "eum",
            RecommendedDeployment: "voluptatum",
            RecommendedVersion: "autem",
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