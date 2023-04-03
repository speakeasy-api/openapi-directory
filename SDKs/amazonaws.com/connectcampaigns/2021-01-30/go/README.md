# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/connectcampaigns/2021-01-30/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.CreateCampaignRequest{
        RequestBody: operations.CreateCampaignRequestBody{
            ConnectInstanceID: "corrupti",
            DialerConfig: operations.CreateCampaignRequestBodyDialerConfig{
                PredictiveDialerConfig: &shared.PredictiveDialerConfig{
                    BandwidthAllocation: 5928.45,
                },
                ProgressiveDialerConfig: &shared.ProgressiveDialerConfig{
                    BandwidthAllocation: 7151.9,
                },
            },
            Name: "quibusdam",
            OutboundCallConfig: operations.CreateCampaignRequestBodyOutboundCallConfig{
                AnswerMachineDetectionConfig: &shared.AnswerMachineDetectionConfig{
                    EnableAnswerMachineDetection: false,
                },
                ConnectContactFlowID: "unde",
                ConnectQueueID: "nulla",
                ConnectSourcePhoneNumber: "corrupti",
            },
            Tags: map[string]string{
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
        },
        XAmzAlgorithm: "delectus",
        XAmzContentSha256: "tempora",
        XAmzCredential: "suscipit",
        XAmzDate: "molestiae",
        XAmzSecurityToken: "minus",
        XAmzSignature: "placeat",
        XAmzSignedHeaders: "voluptatum",
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateCampaign` - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* `DeleteCampaign` - Deletes a campaign from the specified Amazon Connect account.
* `DeleteConnectInstanceConfig` - Deletes a connect instance config from the specified AWS account.
* `DeleteInstanceOnboardingJob` - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* `DescribeCampaign` - Describes the specific campaign.
* `GetCampaignState` - Get state of a campaign for the specified Amazon Connect account.
* `GetCampaignStateBatch` - Get state of campaigns for the specified Amazon Connect account.
* `GetConnectInstanceConfig` - Get the specific Connect instance config.
* `GetInstanceOnboardingJobStatus` - Get the specific instance onboarding job status.
* `ListCampaigns` - Provides summary information about the campaigns under the specified Amazon Connect account.
* `ListTagsForResource` - List tags for a resource.
* `PauseCampaign` - Pauses a campaign for the specified Amazon Connect account.
* `PutDialRequestBatch` - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* `ResumeCampaign` - Stops a campaign for the specified Amazon Connect account.
* `StartCampaign` - Starts a campaign for the specified Amazon Connect account.
* `StartInstanceOnboardingJob` - Onboard the specific Amazon Connect instance to Connect Campaigns.
* `StopCampaign` - Stops a campaign for the specified Amazon Connect account.
* `TagResource` - Tag a resource.
* `UntagResource` - Untag a resource.
* `UpdateCampaignDialerConfig` - Updates the dialer config of a campaign. This API is idempotent.
* `UpdateCampaignName` - Updates the name of a campaign. This API is idempotent.
* `UpdateCampaignOutboundCallConfig` - Updates the outbound call config of a campaign. This API is idempotent.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
