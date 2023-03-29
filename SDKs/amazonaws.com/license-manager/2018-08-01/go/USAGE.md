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

    req := operations.AcceptGrantRequest{
        Headers: operations.AcceptGrantHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSLicenseManager.AcceptGrant",
        },
        Request: shared.AcceptGrantRequest{
            GrantArn: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptGrant(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptGrantResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->