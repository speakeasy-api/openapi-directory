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

    req := operations.QueryForecastRequest{
        Headers: operations.QueryForecastHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AmazonForecastRuntime.QueryForecast",
        },
        Request: shared.QueryForecastRequest{
            EndDate: "illum",
            Filters: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
            ForecastArn: "magnam",
            NextToken: "debitis",
            StartDate: "ipsa",
        },
    }

    ctx := context.Background()
    res, err := s.QueryForecast(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryForecastResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->