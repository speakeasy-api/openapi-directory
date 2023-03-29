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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateAssistantRequestBody{
            ClientToken: "nulla",
            Description: "nihil",
            Name: "fuga",
            ServerSideEncryptionConfiguration: &operations.CreateAssistantRequestBodyServerSideEncryptionConfiguration{
                KmsKeyID: "facilis",
            },
            Tags: map[string]string{
                "iusto": "ullam",
                "saepe": "inventore",
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