<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AddEventSourceRequest{
        Headers: operations.AddEventSourceHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.AddEventSourceRequestBody{
            BatchSize: 6044372234677422456,
            EventSource: "fugit",
            FunctionName: "et",
            Parameters: map[string]string{
                "rerum": "dicta",
            },
            Role: "debitis",
        },
    }
    
    res, err := s.AddEventSource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSourceConfiguration != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->