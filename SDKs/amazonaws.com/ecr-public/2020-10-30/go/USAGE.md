<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchCheckLayerAvailabilityRequest{
        Headers: operations.BatchCheckLayerAvailabilityHeaders{
            XAmzAlgorithm: "adipisci",
            XAmzContentSha256: "dolorem",
            XAmzCredential: "quas",
            XAmzDate: "eum",
            XAmzSecurityToken: "distinctio",
            XAmzSignature: "nostrum",
            XAmzSignedHeaders: "sed",
            XAmzTarget: "SpencerFrontendService.BatchCheckLayerAvailability",
        },
        Request: shared.BatchCheckLayerAvailabilityRequest{
            LayerDigests: []string{
                "totam",
                "sit",
            },
            RegistryID: "et",
            RepositoryName: "et",
        },
    }
    
    res, err := s.BatchCheckLayerAvailability(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCheckLayerAvailabilityResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->