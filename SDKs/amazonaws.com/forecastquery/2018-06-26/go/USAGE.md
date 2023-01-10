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
    
    req := operations.QueryForecastRequest{
        Headers: operations.QueryForecastHeaders{
            XAmzAlgorithm: "quo",
            XAmzContentSha256: "vero",
            XAmzCredential: "incidunt",
            XAmzDate: "vel",
            XAmzSecurityToken: "exercitationem",
            XAmzSignature: "laudantium",
            XAmzSignedHeaders: "sed",
            XAmzTarget: "AmazonForecastRuntime.QueryForecast",
        },
        Request: shared.QueryForecastRequest{
            EndDate: "dolore",
            Filters: map[string]string{
                "qui": "omnis",
            },
            ForecastArn: "modi",
            NextToken: "occaecati",
            StartDate: "dolor",
        },
    }
    
    res, err := s.QueryForecast(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryForecastResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->