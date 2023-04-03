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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateHTTPNamespaceRequest{
        CreateHTTPNamespaceRequest: shared.CreateHTTPNamespaceRequest{
            CreatorRequestID: "corrupti",
            Description: "provident",
            Name: "distinctio",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
            },
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
        XAmzTarget: "Route53AutoNaming_v20170314.CreateHttpNamespace",
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