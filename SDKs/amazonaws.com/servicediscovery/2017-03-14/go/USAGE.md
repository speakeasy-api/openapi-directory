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

    req := operations.CreateHTTPNamespaceRequest{
        Headers: operations.CreateHTTPNamespaceHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Route53AutoNaming_v20170314.CreateHttpNamespace",
        },
        Request: shared.CreateHTTPNamespaceRequest{
            CreatorRequestID: "nihil",
            Description: "fuga",
            Name: "facilis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "ullam",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "inventore",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateHTTPNamespace(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHTTPNamespaceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->