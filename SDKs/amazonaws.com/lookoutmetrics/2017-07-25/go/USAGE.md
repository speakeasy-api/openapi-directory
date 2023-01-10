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
    
    req := operations.ActivateAnomalyDetectorRequest{
        Headers: operations.ActivateAnomalyDetectorHeaders{
            XAmzAlgorithm: "aliquid",
            XAmzContentSha256: "quasi",
            XAmzCredential: "impedit",
            XAmzDate: "tempora",
            XAmzSecurityToken: "consequatur",
            XAmzSignature: "eos",
            XAmzSignedHeaders: "non",
        },
        Request: operations.ActivateAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "nesciunt",
        },
    }
    
    res, err := s.ActivateAnomalyDetector(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivateAnomalyDetectorResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->