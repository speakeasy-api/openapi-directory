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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.GetClipRequestBody{
            ClipFragmentSelector: operations.GetClipRequestBodyClipFragmentSelector{
                FragmentSelectorType: "SERVER_TIMESTAMP",
                TimestampRange: &shared.ClipTimestampRange{
                    EndTimestamp: "2011-08-12T10:11:12Z",
                    StartTimestamp: "2003-05-13T04:57:12Z",
                },
            },
            StreamARN: "rerum",
            StreamName: "dicta",
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