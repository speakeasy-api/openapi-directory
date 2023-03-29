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

    req := operations.CreateLinkRequest{
        Headers: operations.CreateLinkHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateLinkRequestBody{
            LabelTemplate: "nulla",
            ResourceTypes: []shared.ResourceTypeEnum{
                "AWS::Logs::LogGroup",
                "AWS::Logs::LogGroup",
            },
            SinkIdentifier: "eum",
            Tags: map[string]string{
                "ullam": "saepe",
                "inventore": "sapiente",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateLink(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLinkOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->