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
            XAmzAlgorithm: "ipsum",
            XAmzContentSha256: "omnis",
            XAmzCredential: "error",
            XAmzDate: "reprehenderit",
            XAmzSecurityToken: "explicabo",
            XAmzSignature: "aut",
            XAmzSignedHeaders: "eum",
        },
        Request: operations.AddEventSourceRequestBody{
            BatchSize: 6380244943489637684,
            EventSource: "ratione",
            FunctionName: "labore",
            Parameters: map[string]string{
                "saepe": "libero",
                "nobis": "ut",
            },
            Role: "accusamus",
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