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
    
    req := operations.CancelKeyDeletionRequest{
        Headers: operations.CancelKeyDeletionHeaders{
            XAmzAlgorithm: "aut",
            XAmzContentSha256: "officiis",
            XAmzCredential: "aliquid",
            XAmzDate: "natus",
            XAmzSecurityToken: "voluptate",
            XAmzSignature: "consectetur",
            XAmzSignedHeaders: "tempore",
            XAmzTarget: "TrentService.CancelKeyDeletion",
        },
        Request: shared.CancelKeyDeletionRequest{
            KeyID: "voluptatibus",
        },
    }
    
    res, err := s.CancelKeyDeletion(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelKeyDeletionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->