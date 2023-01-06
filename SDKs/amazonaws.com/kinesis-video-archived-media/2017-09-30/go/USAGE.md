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
            XAmzAlgorithm: "earum",
            XAmzContentSha256: "quas",
            XAmzCredential: "repellendus",
            XAmzDate: "ut",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "quisquam",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.GetClipRequestBody{
            ClipFragmentSelector: operations.GetClipRequestBodyClipFragmentSelector{
                FragmentSelectorType: "SERVER_TIMESTAMP",
                TimestampRange: &shared.ClipTimestampRange{
                    EndTimestamp: "2003-02-16T04:36:04Z",
                    StartTimestamp: "1974-03-09T13:35:54Z",
                },
            },
            StreamARN: "totam",
            StreamName: "nemo",
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