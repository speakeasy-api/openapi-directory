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

    req := operations.CreateCampaignRequest{
        Headers: operations.CreateCampaignHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateCampaignRequestBody{
            ConnectInstanceID: "nulla",
            DialerConfig: operations.CreateCampaignRequestBodyDialerConfig{
                PredictiveDialerConfig: &shared.PredictiveDialerConfig{
                    BandwidthAllocation: 4236.55,
                },
                ProgressiveDialerConfig: &shared.ProgressiveDialerConfig{
                    BandwidthAllocation: 6235.64,
                },
            },
            Name: "facilis",
            OutboundCallConfig: operations.CreateCampaignRequestBodyOutboundCallConfig{
                AnswerMachineDetectionConfig: &shared.AnswerMachineDetectionConfig{
                    EnableAnswerMachineDetection: false,
                },
                ConnectContactFlowID: "eum",
                ConnectQueueID: "iusto",
                ConnectSourcePhoneNumber: "ullam",
            },
            Tags: map[string]string{
                "inventore": "sapiente",
                "enim": "eum",
                "voluptatum": "autem",
                "vel": "non",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateCampaign(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCampaignResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->