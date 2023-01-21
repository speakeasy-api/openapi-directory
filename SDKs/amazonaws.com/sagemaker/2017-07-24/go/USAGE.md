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
    
    req := operations.AddAssociationRequest{
        Headers: operations.AddAssociationHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "SageMaker.AddAssociation",
        },
        Request: shared.AddAssociationRequest{
            AssociationType: "ContributedTo",
            DestinationArn: "et",
            SourceArn: "nihil",
        },
    }
    
    res, err := s.AddAssociation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAssociationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->