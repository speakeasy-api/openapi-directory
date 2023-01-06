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
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "in",
            XAmzCredential: "ut",
            XAmzDate: "sit",
            XAmzSecurityToken: "fuga",
            XAmzSignature: "eveniet",
            XAmzSignedHeaders: "culpa",
        },
        Request: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "quisquam",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: "repudiandae",
                TLSPolicy: "REQUIRE",
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: "2020-06-17T02:27:44Z",
                ReputationMetricsEnabled: false,
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: true,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "enim",
                    Value: "est",
                },
                shared.Tag{
                    Key: "recusandae",
                    Value: "neque",
                },
            },
            TrackingOptions: &operations.CreateConfigurationSetRequestBodyTrackingOptions{
                CustomRedirectDomain: "quia",
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