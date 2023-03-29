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

    req := operations.CreateDataIntegrationRequest{
        Headers: operations.CreateDataIntegrationHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateDataIntegrationRequestBody{
            ClientToken: "nulla",
            Description: "nihil",
            KmsKey: "fuga",
            Name: "facilis",
            ScheduleConfig: &operations.CreateDataIntegrationRequestBodyScheduleConfig{
                FirstExecutionFrom: "eum",
                Object: "iusto",
                ScheduleExpression: "ullam",
            },
            SourceURI: "saepe",
            Tags: map[string]string{
                "sapiente": "enim",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateDataIntegration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDataIntegrationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->