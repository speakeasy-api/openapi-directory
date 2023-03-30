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

    req := operations.CreateAssistantRequest{
        Headers: operations.CreateAssistantHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateAssistantRequestBody{
            ClientToken: "illum",
            Description: "vel",
            Name: "error",
            ServerSideEncryptionConfiguration: &operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration{
                KmsKeyID: "deserunt",
            },
            Tags: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            Type: "AGENT",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAssistant(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssistantResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->