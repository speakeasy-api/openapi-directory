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

    req := operations.CreateLinkRequest{
        RequestBody: operations.CreateLinkRequestBody{
            LabelTemplate: "corrupti",
            ResourceTypes: []shared.ResourceTypeEnum{
                "AWS::XRay::Trace",
                "AWS::XRay::Trace",
                "AWS::Logs::LogGroup",
            },
            SinkIdentifier: "nulla",
            Tags: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
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