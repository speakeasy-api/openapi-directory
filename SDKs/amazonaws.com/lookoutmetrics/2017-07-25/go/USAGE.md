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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "debitis",
            XAmzCredential: "in",
            XAmzDate: "at",
            XAmzSecurityToken: "vero",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "nisi",
        },
        Request: operations.ActivateAnomalyDetectorRequestBody{
            AnomalyDetectorArn: "qui",
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