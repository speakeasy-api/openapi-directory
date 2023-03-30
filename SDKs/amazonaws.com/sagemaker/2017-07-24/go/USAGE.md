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

    req := operations.AddAssociationRequest{
        Headers: operations.AddAssociationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "SageMaker.AddAssociation",
        },
        Request: shared.AddAssociationRequest{
            AssociationType: "Produced",
            DestinationArn: "vel",
            SourceArn: "error",
        },
    }

    ctx := context.Background()
    res, err := s.AddAssociation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAssociationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->