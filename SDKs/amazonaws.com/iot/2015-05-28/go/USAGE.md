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
            CertificateID: "ut",
        },
        QueryParams: operations.AcceptCertificateTransferQueryParams{
            SetAsActive: false,
        },
        Headers: operations.AcceptCertificateTransferHeaders{
            XAmzAlgorithm: "blanditiis",
            XAmzContentSha256: "voluptatibus",
            XAmzCredential: "sint",
            XAmzDate: "aut",
            XAmzSecurityToken: "fugiat",
            XAmzSignature: "adipisci",
            XAmzSignedHeaders: "sunt",
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