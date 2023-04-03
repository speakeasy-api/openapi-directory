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

    req := operations.CreateAssistantRequest{
        RequestBody: operations.CreateAssistantRequestBody{
            ClientToken: "corrupti",
            Description: "provident",
            Name: "distinctio",
            ServerSideEncryptionConfiguration: &operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration{
                KmsKeyID: "quibusdam",
            },
            Tags: map[string]string{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
            Type: "AGENT",
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
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