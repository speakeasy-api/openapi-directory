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
    
    req := operations.CreateConfigurationSetRequest{
        Headers: operations.CreateConfigurationSetHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "deleniti",
            XAmzCredential: "minima",
            XAmzDate: "rem",
            XAmzSecurityToken: "omnis",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "error",
        },
        Request: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "magni",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "sed",
                TLSPolicy: "OPTIONAL",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "1976-02-06T19:03:58Z",
                ReputationMetricsEnabled: true,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: true,
            },
            SuppressionOptions: &operations.CreateConfigurationSetRequestBodySuppressionOptions{
                SuppressedReasons: []shared.SuppressionListReasonEnum{
                    "BOUNCE",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aliquid",
                    Value: "ipsum",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "ad",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "atque",
            },
        },
    }
    
    res, err := s.CreateConfigurationSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->