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
            XAmzAlgorithm: "dolor",
            XAmzContentSha256: "sit",
            XAmzCredential: "non",
            XAmzDate: "sed",
            XAmzSecurityToken: "cumque",
            XAmzSignature: "architecto",
            XAmzSignedHeaders: "accusantium",
        },
        Request: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "non",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "et",
                TLSPolicy: "REQUIRE",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "2018-09-28T20:49:02Z",
                ReputationMetricsEnabled: true,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: true,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "reiciendis",
                    Value: "et",
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: "minus",
                },
                shared.Tag{
                    Key: "ea",
                    Value: "quaerat",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "dolorem",
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