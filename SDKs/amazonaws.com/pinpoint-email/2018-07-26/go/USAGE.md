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

    req := operations.CreateConfigurationSetRequest{
        RequestBody: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "corrupti",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "provident",
                TLSPolicy: "OPTIONAL",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "2021-03-11T23:22:42.658Z",
                ReputationMetricsEnabled: false,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: false,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "magnam",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "debitis",
            },
        },
        XAmzAlgorithm: "ipsa",
        XAmzContentSha256: "delectus",
        XAmzCredential: "tempora",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "minus",
        XAmzSignedHeaders: "placeat",
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