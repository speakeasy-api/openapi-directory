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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateCampaignRequestBody{
            ConnectInstanceID: "illum",
            DialerConfig: operations.CreateCampaignRequestBodyDialerConfig{
                PredictiveDialerConfig: &shared.PredictiveDialerConfig{
                    BandwidthAllocation: 4236.55,
                },
                ProgressiveDialerConfig: &shared.ProgressiveDialerConfig{
                    BandwidthAllocation: 6235.64,
                },
            },
            Name: "deserunt",
            OutboundCallConfig: operations.CreateCampaignRequestBodyOutboundCallConfig{
                AnswerMachineDetectionConfig: &shared.AnswerMachineDetectionConfig{
                    EnableAnswerMachineDetection: false,
                },
                ConnectContactFlowID: "suscipit",
                ConnectQueueID: "iure",
                ConnectSourcePhoneNumber: "magnam",
            },
            Tags: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
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