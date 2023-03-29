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

    req := operations.CreateExtendedSourceServerRequest{
        Headers: operations.CreateExtendedSourceServerHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateExtendedSourceServerRequestBody{
            SourceServerArn: "nulla",
            Tags: map[string]string{
                "fuga": "facilis",
                "eum": "iusto",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateExtendedSourceServer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExtendedSourceServerResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->