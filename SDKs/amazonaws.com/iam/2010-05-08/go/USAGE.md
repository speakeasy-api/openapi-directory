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
            ClientID: "dolorem",
            OpenIDConnectProviderArn: "in",
            Version: "2010-05-08",
        },
        Headers: operations.GetAddClientIDToOpenIDConnectProviderHeaders{
            XAmzAlgorithm: "quos",
            XAmzContentSha256: "id",
            XAmzCredential: "repellat",
            XAmzDate: "repellendus",
            XAmzSecurityToken: "numquam",
            XAmzSignature: "aspernatur",
            XAmzSignedHeaders: "ad",
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