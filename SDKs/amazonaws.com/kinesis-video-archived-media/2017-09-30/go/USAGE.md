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
    
    req := operations.GetClipRequest{
        Headers: operations.GetClipHeaders{
            XAmzAlgorithm: "ut",
            XAmzContentSha256: "optio",
            XAmzCredential: "ut",
            XAmzDate: "velit",
            XAmzSecurityToken: "velit",
            XAmzSignature: "totam",
            XAmzSignedHeaders: "doloribus",
        },
        Request: operations.GetClipRequestBody{
            ClipFragmentSelector: operations.GetClipRequestBodyClipFragmentSelector{
                FragmentSelectorType: "PRODUCER_TIMESTAMP",
                TimestampRange: &shared.ClipTimestampRange{
                    EndTimestamp: "1995-01-21T20:44:43Z",
                    StartTimestamp: "1979-10-28T05:11:44Z",
                },
            },
            StreamARN: "quae",
            StreamName: "soluta",
        },
    }
    
    res, err := s.GetClip(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClipOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->