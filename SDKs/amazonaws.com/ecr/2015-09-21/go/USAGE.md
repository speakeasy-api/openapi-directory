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
            XAmzAlgorithm: "debitis",
            XAmzContentSha256: "ut",
            XAmzCredential: "tenetur",
            XAmzDate: "aspernatur",
            XAmzSecurityToken: "minus",
            XAmzSignature: "molestiae",
            XAmzSignedHeaders: "rerum",
            XAmzTarget: "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability",
        },
        Request: shared.BatchCheckLayerAvailabilityRequest{
            LayerDigests: []string{
                "illo",
                "quas",
            },
            RegistryID: "in",
            RepositoryName: "ipsum",
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