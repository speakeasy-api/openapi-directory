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

    req := operations.AssociateResourceRequest{
        PathParams: operations.AssociateResourcePathParams{
            GroupIdentifier: "unde",
        },
        Headers: operations.AssociateResourceHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.AssociateResourceRequestBody{
            ResourceArn: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->