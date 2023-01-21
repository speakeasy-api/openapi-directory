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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AmazonForecastRuntime.QueryForecast",
        },
        Request: shared.QueryForecastRequest{
            EndDate: "fugit",
            Filters: map[string]string{
                "nihil": "rerum",
            },
            ForecastArn: "dicta",
            NextToken: "debitis",
            StartDate: "voluptatum",
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