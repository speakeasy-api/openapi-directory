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

    req := operations.CreateMonitorRequest{
        Headers: operations.CreateMonitorHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateMonitorRequestBody{
            ClientToken: "nulla",
            MaxCityNetworksToMonitor: 423655,
            MonitorName: "fuga",
            Resources: []string{
                "eum",
                "iusto",
                "ullam",
            },
            Tags: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateMonitor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMonitorOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->