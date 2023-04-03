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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchCheckLayerAvailabilityRequest{
        BatchCheckLayerAvailabilityRequest: shared.BatchCheckLayerAvailabilityRequest{
            LayerDigests: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            RegistryID: "unde",
            RepositoryName: "nulla",
        },
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "illum",
        XAmzCredential: "vel",
        XAmzDate: "error",
        XAmzSecurityToken: "deserunt",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "iure",
        XAmzTarget: "SpencerFrontendService.BatchCheckLayerAvailability",
    }

    ctx := context.Background()
    res, err := s.BatchCheckLayerAvailability(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCheckLayerAvailabilityResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->