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
            XAmzAlgorithm: "eligendi",
            XAmzContentSha256: "quo",
            XAmzCredential: "et",
            XAmzDate: "eligendi",
            XAmzSecurityToken: "soluta",
            XAmzSignature: "enim",
            XAmzSignedHeaders: "commodi",
        },
        Request: operations.GetMediaRequestBody{
            StartSelector: operations.GetMediaRequestBodyStartSelector{
                AfterFragmentNumber: "quia",
                ContinuationToken: "vel",
                StartSelectorType: "NOW",
                StartTimestamp: "1972-05-21T01:46:38Z",
            },
            StreamARN: "laudantium",
            StreamName: "corporis",
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