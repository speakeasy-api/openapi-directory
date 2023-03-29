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

    req := operations.AssociateAPIRequest{
        PathParams: operations.AssociateAPIPathParams{
            DomainName: "unde",
        },
        Headers: operations.AssociateAPIHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.AssociateAPIRequestBody{
            APIID: "nihil",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateAPI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAPIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->