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

    req := operations.CreateConfigurationSetRequest{
        Headers: operations.CreateConfigurationSetHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "illum",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "vel",
                TLSPolicy: "OPTIONAL",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "2022-08-06T08:22:17.083Z",
                ReputationMetricsEnabled: false,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: false,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "debitis",
                    Value: "ipsa",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "delectus",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateConfigurationSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->