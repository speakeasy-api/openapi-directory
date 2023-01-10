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
            XAmzAlgorithm: "veniam",
            XAmzContentSha256: "quidem",
            XAmzCredential: "et",
            XAmzDate: "nemo",
            XAmzSecurityToken: "cumque",
            XAmzSignature: "ipsam",
            XAmzSignedHeaders: "consequatur",
            XAmzTarget: "FmrsService.CancelTaskExecution",
        },
        Request: shared.CancelTaskExecutionRequest{
            TaskExecutionArn: "ullam",
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