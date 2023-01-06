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
    
    req := operations.GetAcceptTransitGatewayPeeringAttachmentRequest{
        QueryParams: operations.GetAcceptTransitGatewayPeeringAttachmentQueryParams{
            Action: "AcceptTransitGatewayPeeringAttachment",
            DryRun: false,
            TransitGatewayAttachmentID: "ut",
            Version: "2016-11-15",
        },
        Headers: operations.GetAcceptTransitGatewayPeeringAttachmentHeaders{
            XAmzAlgorithm: "fuga",
            XAmzContentSha256: "sed",
            XAmzCredential: "sed",
            XAmzDate: "et",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "non",
            XAmzSignedHeaders: "cupiditate",
        },
    }
    
    res, err := s.GetAcceptTransitGatewayPeeringAttachment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->