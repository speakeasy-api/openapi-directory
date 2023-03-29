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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchCheckLayerAvailabilityRequest{
        Headers: operations.BatchCheckLayerAvailabilityHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "SpencerFrontendService.BatchCheckLayerAvailability",
        },
        Request: shared.BatchCheckLayerAvailabilityRequest{
            LayerDigests: []string{
                "fuga",
                "facilis",
            },
            RegistryID: "eum",
            RepositoryName: "iusto",
        },
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