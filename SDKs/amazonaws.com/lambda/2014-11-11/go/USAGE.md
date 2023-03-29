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

    req := operations.AddEventSourceRequest{
        Headers: operations.AddEventSourceHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AddEventSourceRequestBody{
            BatchSize: 847252,
            EventSource: "nihil",
            FunctionName: "fuga",
            Parameters: map[string]string{
                "eum": "iusto",
                "ullam": "saepe",
                "inventore": "sapiente",
            },
            Role: "enim",
        },
    }

    ctx := context.Background()
    res, err := s.AddEventSource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSourceConfiguration != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->