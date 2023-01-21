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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "voluptas",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "fugit",
                TLSPolicy: "REQUIRE",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "2003-05-13T04:57:12Z",
                ReputationMetricsEnabled: true,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: false,
            },
            SuppressionOptions: &operations.CreateConfigurationSetRequestBodySuppressionOptions{
                SuppressedReasons: []shared.SuppressionListReasonEnum{
                    "BOUNCE",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ut",
                    Value: "dolorem",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "et",
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