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
            XAmzAlgorithm: "corporis",
            XAmzContentSha256: "at",
            XAmzCredential: "nostrum",
            XAmzDate: "recusandae",
            XAmzSecurityToken: "iste",
            XAmzSignature: "at",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.GetMediaRequestBody{
            StartSelector: operations.GetMediaRequestBodyStartSelector{
                AfterFragmentNumber: "fugit",
                ContinuationToken: "repellat",
                StartSelectorType: "PRODUCER_TIMESTAMP",
                StartTimestamp: "2002-04-24T14:41:47Z",
            },
            StreamARN: "omnis",
            StreamName: "magni",
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