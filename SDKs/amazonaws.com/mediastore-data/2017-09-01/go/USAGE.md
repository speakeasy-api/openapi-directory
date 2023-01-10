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
    
    req := operations.DeleteObjectRequest{
        PathParams: operations.DeleteObjectPathParams{
            Path: "quibusdam",
        },
        Headers: operations.DeleteObjectHeaders{
            XAmzAlgorithm: "nihil",
            XAmzContentSha256: "sint",
            XAmzCredential: "dolorem",
            XAmzDate: "porro",
            XAmzSecurityToken: "nemo",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "ut",
        },
    }
    
    res, err := s.DeleteObject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteObjectResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->