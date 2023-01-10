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
    
    req := operations.CancelJobRequest{
        PathParams: operations.CancelJobPathParams{
            ID: "est",
        },
        Headers: operations.CancelJobHeaders{
            XAmzAlgorithm: "at",
            XAmzContentSha256: "harum",
            XAmzCredential: "magnam",
            XAmzDate: "earum",
            XAmzSecurityToken: "qui",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "odio",
        },
    }
    
    res, err := s.CancelJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->