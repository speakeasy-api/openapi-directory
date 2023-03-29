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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "SageMaker.AddAssociation",
        },
        Request: shared.AddAssociationRequest{
            AssociationType: "AssociatedWith",
            DestinationArn: "fuga",
            SourceArn: "facilis",
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