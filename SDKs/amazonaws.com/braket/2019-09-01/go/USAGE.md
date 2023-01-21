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
    
    req := operations.CancelQuantumTaskRequest{
        PathParams: operations.CancelQuantumTaskPathParams{
            QuantumTaskArn: "sit",
        },
        Headers: operations.CancelQuantumTaskHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.CancelQuantumTaskRequestBody{
            ClientToken: "fugit",
        },
    }
    
    res, err := s.CancelQuantumTask(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelQuantumTaskResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->