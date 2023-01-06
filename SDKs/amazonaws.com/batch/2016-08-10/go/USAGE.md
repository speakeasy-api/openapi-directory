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
        Headers: operations.CancelJobHeaders{
            XAmzAlgorithm: "est",
            XAmzContentSha256: "veniam",
            XAmzCredential: "qui",
            XAmzDate: "doloribus",
            XAmzSecurityToken: "ad",
            XAmzSignature: "minus",
            XAmzSignedHeaders: "sit",
        },
        Request: operations.CancelJobRequestBody{
            JobID: "est",
            Reason: "voluptas",
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