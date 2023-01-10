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
    
    req := operations.CreateByteMatchSetRequest{
        Headers: operations.CreateByteMatchSetHeaders{
            XAmzAlgorithm: "nesciunt",
            XAmzContentSha256: "velit",
            XAmzCredential: "at",
            XAmzDate: "repellat",
            XAmzSecurityToken: "placeat",
            XAmzSignature: "accusantium",
            XAmzSignedHeaders: "sunt",
            XAmzTarget: "AWSWAF_20150824.CreateByteMatchSet",
        },
        Request: shared.CreateByteMatchSetRequest{
            ChangeToken: "et",
            Name: "id",
        },
    }
    
    res, err := s.CreateByteMatchSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateByteMatchSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->