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

    req := operations.AddAssociationRequest{
        AddAssociationRequest: shared.AddAssociationRequest{
            AssociationType: "DerivedFrom",
            DestinationArn: "provident",
            SourceArn: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
        XAmzTarget: "SageMaker.AddAssociation",
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