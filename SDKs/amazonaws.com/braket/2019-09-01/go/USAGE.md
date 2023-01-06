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
            QuantumTaskArn: "quisquam",
        },
        Headers: operations.CancelQuantumTaskHeaders{
            XAmzAlgorithm: "ipsum",
            XAmzContentSha256: "dolor",
            XAmzCredential: "nihil",
            XAmzDate: "error",
            XAmzSecurityToken: "sunt",
            XAmzSignature: "quia",
            XAmzSignedHeaders: "sed",
        },
        Request: operations.CancelQuantumTaskRequestBody{
            ClientToken: "dolores",
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