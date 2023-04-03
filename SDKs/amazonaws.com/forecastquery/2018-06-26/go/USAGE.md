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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.QueryForecastRequest{
        QueryForecastRequest: shared.QueryForecastRequest{
            EndDate: "corrupti",
            Filters: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
            ForecastArn: "vel",
            NextToken: "error",
            StartDate: "deserunt",
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
        XAmzTarget: "AmazonForecastRuntime.QueryForecast",
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