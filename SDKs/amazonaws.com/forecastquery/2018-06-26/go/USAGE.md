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
            XAmzAlgorithm: "praesentium",
            XAmzContentSha256: "cum",
            XAmzCredential: "sunt",
            XAmzDate: "odit",
            XAmzSecurityToken: "alias",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "nisi",
            XAmzTarget: "AmazonForecastRuntime.QueryForecast",
        },
        Request: shared.QueryForecastRequest{
            EndDate: "dolore",
            Filters: map[string]string{
                "est": "et",
            },
            ForecastArn: "ea",
            NextToken: "qui",
            StartDate: "similique",
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