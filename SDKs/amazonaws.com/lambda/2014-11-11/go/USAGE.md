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
            XAmzAlgorithm: "eum",
            XAmzContentSha256: "quaerat",
            XAmzCredential: "modi",
            XAmzDate: "officiis",
            XAmzSecurityToken: "doloremque",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "et",
        },
        Request: operations.AddEventSourceRequestBody{
            BatchSize: 2536117404804311014,
            EventSource: "praesentium",
            FunctionName: "labore",
            Parameters: map[string]string{
                "aut": "alias",
                "impedit": "aperiam",
                "voluptatem": "dolorum",
            },
            Role: "iusto",
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