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
    
    req := operations.GetMediaRequest{
        Headers: operations.GetMediaHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.GetMediaRequestBody{
            StartSelector: operations.GetMediaRequestBodyStartSelector{
                AfterFragmentNumber: "voluptas",
                ContinuationToken: "fugit",
                StartSelectorType: "FRAGMENT_NUMBER",
                StartTimestamp: "2003-05-13T04:57:12Z",
            },
            StreamARN: "rerum",
            StreamName: "dicta",
        },
    }
    
    res, err := s.GetMedia(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMediaOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->