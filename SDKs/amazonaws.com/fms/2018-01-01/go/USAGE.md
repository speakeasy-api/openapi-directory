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
    
    req := operations.AssociateAdminAccountRequest{
        Headers: operations.AssociateAdminAccountHeaders{
            XAmzAlgorithm: "facilis",
            XAmzContentSha256: "consequatur",
            XAmzCredential: "molestiae",
            XAmzDate: "laudantium",
            XAmzSecurityToken: "tempore",
            XAmzSignature: "est",
            XAmzSignedHeaders: "eum",
            XAmzTarget: "AWSFMS_20180101.AssociateAdminAccount",
        },
        Request: shared.AssociateAdminAccountRequest{
            AdminAccount: "ut",
        },
    }
    
    res, err := s.AssociateAdminAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->