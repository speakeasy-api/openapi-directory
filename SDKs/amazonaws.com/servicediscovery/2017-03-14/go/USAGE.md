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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "Route53AutoNaming_v20170314.CreateHttpNamespace",
        },
        Request: shared.CreateHTTPNamespaceRequest{
            CreatorRequestID: "illum",
            Description: "vel",
            Name: "error",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "suscipit",
                    Value: "iure",
                },
                shared.Tag{
                    Key: "magnam",
                    Value: "debitis",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "delectus",
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