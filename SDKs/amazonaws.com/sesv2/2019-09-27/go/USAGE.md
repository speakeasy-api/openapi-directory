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
            XAmzAlgorithm: "nam",
            XAmzContentSha256: "non",
            XAmzCredential: "doloremque",
            XAmzDate: "qui",
            XAmzSecurityToken: "quaerat",
            XAmzSignature: "natus",
            XAmzSignedHeaders: "illo",
        },
        Request: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "optio",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "reprehenderit",
                TLSPolicy: "REQUIRE",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "2000-05-10T08:14:20Z",
                ReputationMetricsEnabled: false,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: true,
            },
            SuppressionOptions: &operations.CreateConfigurationSetRequestBodySuppressionOptions{
                SuppressedReasons: []shared.SuppressionListReasonEnum{
                    "BOUNCE",
                    "COMPLAINT",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "esse",
                },
                shared.Tag{
                    Key: "architecto",
                    Value: "est",
                },
                shared.Tag{
                    Key: "aliquam",
                    Value: "aut",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "corporis",
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