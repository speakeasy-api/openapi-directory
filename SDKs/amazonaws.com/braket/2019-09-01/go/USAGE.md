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
            QuantumTaskArn: "quia",
        },
        Headers: operations.CancelQuantumTaskHeaders{
            XAmzAlgorithm: "ab",
            XAmzContentSha256: "nemo",
            XAmzCredential: "eveniet",
            XAmzDate: "id",
            XAmzSecurityToken: "placeat",
            XAmzSignature: "error",
            XAmzSignedHeaders: "odio",
        },
        Request: operations.CancelQuantumTaskRequestBody{
            ClientToken: "qui",
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