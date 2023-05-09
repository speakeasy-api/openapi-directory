<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateConfigurationSet(ctx, operations.CreateConfigurationSetRequest{
        RequestBody: operations.CreateConfigurationSetRequestBody{
            ConfigurationSetName: "corrupti",
            DeliveryOptions: &operations.CreateConfigurationSetRequestBodyDeliveryOptions{
                SendingPoolName: sdk.String("provident"),
                TLSPolicy: shared.TLSPolicyEnumOptional.ToPointer(),
            },
            ReputationOptions: &operations.CreateConfigurationSetRequestBodyReputationOptions{
                LastFreshStart: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
                ReputationMetricsEnabled: sdk.Bool(false),
            },
            SendingOptions: &operations.CreateConfigurationSetRequestBodySendingOptions{
                SendingEnabled: sdk.Bool(false),
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
                CustomRedirectDomain: sdk.String("debitis"),
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConfigurationSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->