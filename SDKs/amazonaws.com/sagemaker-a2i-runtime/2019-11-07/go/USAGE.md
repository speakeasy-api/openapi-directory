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
    
    req := operations.DeleteHumanLoopRequest{
        PathParams: operations.DeleteHumanLoopPathParams{
            HumanLoopName: "exercitationem",
        },
        Headers: operations.DeleteHumanLoopHeaders{
            XAmzAlgorithm: "hic",
            XAmzContentSha256: "doloribus",
            XAmzCredential: "porro",
            XAmzDate: "est",
            XAmzSecurityToken: "deserunt",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "sit",
        },
    }
    
    res, err := s.DeleteHumanLoop(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteHumanLoopResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->