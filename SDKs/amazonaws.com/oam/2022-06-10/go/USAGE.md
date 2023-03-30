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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateLinkRequestBody{
            LabelTemplate: "illum",
            ResourceTypes: []shared.ResourceTypeEnum{
                "AWS::Logs::LogGroup",
                "AWS::Logs::LogGroup",
            },
            SinkIdentifier: "suscipit",
            Tags: map[string]string{
                "magnam": "debitis",
                "ipsa": "delectus",
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