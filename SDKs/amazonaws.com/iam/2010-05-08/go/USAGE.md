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
    
    req := operations.GetAddClientIDToOpenIDConnectProviderRequest{
        QueryParams: operations.GetAddClientIDToOpenIDConnectProviderQueryParams{
            Action: "AddClientIDToOpenIDConnectProvider",
            ClientID: "aperiam",
            OpenIDConnectProviderArn: "earum",
            Version: "2010-05-08",
        },
        Headers: operations.GetAddClientIDToOpenIDConnectProviderHeaders{
            XAmzAlgorithm: "earum",
            XAmzContentSha256: "est",
            XAmzCredential: "error",
            XAmzDate: "ipsa",
            XAmzSecurityToken: "sint",
            XAmzSignature: "saepe",
            XAmzSignedHeaders: "qui",
        },
    }
    
    res, err := s.GetAddClientIDToOpenIDConnectProvider(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->