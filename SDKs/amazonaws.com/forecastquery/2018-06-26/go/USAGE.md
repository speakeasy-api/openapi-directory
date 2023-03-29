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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AmazonForecastRuntime.QueryForecast",
        },
        Request: shared.QueryForecastRequest{
            EndDate: "nihil",
            Filters: map[string]string{
                "facilis": "eum",
                "iusto": "ullam",
                "saepe": "inventore",
            },
            ForecastArn: "sapiente",
            NextToken: "enim",
            StartDate: "eum",
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