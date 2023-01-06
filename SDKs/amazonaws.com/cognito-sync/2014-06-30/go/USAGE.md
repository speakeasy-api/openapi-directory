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
    
    req := operations.BulkPublishRequest{
        PathParams: operations.BulkPublishPathParams{
            IdentityPoolID: "expedita",
        },
        Headers: operations.BulkPublishHeaders{
            XAmzAlgorithm: "itaque",
            XAmzContentSha256: "qui",
            XAmzCredential: "voluptatum",
            XAmzDate: "eius",
            XAmzSecurityToken: "modi",
            XAmzSignature: "adipisci",
            XAmzSignedHeaders: "suscipit",
        },
    }
    
    res, err := s.BulkPublish(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkPublishResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->