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
    
    req := operations.CancelTaskExecutionRequest{
        Headers: operations.CancelTaskExecutionHeaders{
            XAmzAlgorithm: "quaerat",
            XAmzContentSha256: "earum",
            XAmzCredential: "quas",
            XAmzDate: "repellendus",
            XAmzSecurityToken: "ut",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "quisquam",
            XAmzTarget: "FmrsService.CancelTaskExecution",
        },
        Request: shared.CancelTaskExecutionRequest{
            TaskExecutionArn: "voluptas",
        },
    }
    
    res, err := s.CancelTaskExecution(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelTaskExecutionResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->