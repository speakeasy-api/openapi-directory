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
    
    req := operations.AcceptCertificateTransferRequest{
        PathParams: operations.AcceptCertificateTransferPathParams{
            CertificateID: "quis",
        },
        QueryParams: operations.AcceptCertificateTransferQueryParams{
            SetAsActive: false,
        },
        Headers: operations.AcceptCertificateTransferHeaders{
            XAmzAlgorithm: "fugit",
            XAmzContentSha256: "aut",
            XAmzCredential: "id",
            XAmzDate: "sequi",
            XAmzSecurityToken: "dicta",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "molestiae",
        },
    }
    
    res, err := s.AcceptCertificateTransfer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->