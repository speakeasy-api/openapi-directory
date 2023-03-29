<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateByteMatchSetRequest{
        Headers: operations.CreateByteMatchSetHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSWAF_20150824.CreateByteMatchSet",
        },
        Request: shared.CreateByteMatchSetRequest{
            ChangeToken: "nihil",
            Name: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.CreateByteMatchSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateByteMatchSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->