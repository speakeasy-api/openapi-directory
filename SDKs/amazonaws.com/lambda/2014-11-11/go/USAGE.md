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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AddEventSourceRequestBody{
            BatchSize: 847252,
            EventSource: "vel",
            FunctionName: "error",
            Parameters: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            Role: "tempora",
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