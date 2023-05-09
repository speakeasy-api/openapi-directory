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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateCampaign(ctx, operations.CreateCampaignRequest{
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
            Name: "Stuart Stiedemann",
            OutboundCallConfig: operations.CreateCampaignRequestBodyOutboundCallConfig{
                AnswerMachineDetectionConfig: &shared.AnswerMachineDetectionConfig{
                    EnableAnswerMachineDetection: false,
                },
                ConnectContactFlowID: sdk.String("vel"),
                ConnectQueueID: sdk.String("error"),
                ConnectSourcePhoneNumber: sdk.String("deserunt"),
            },
            Tags: map[string]string{
                "iure": "magnam",
                "debitis": "ipsa",
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
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

### [SDK](docs/sdk/README.md)

* [CreateCampaign](docs/sdk/README.md#createcampaign) - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* [DeleteCampaign](docs/sdk/README.md#deletecampaign) - Deletes a campaign from the specified Amazon Connect account.
* [DeleteConnectInstanceConfig](docs/sdk/README.md#deleteconnectinstanceconfig) - Deletes a connect instance config from the specified AWS account.
* [DeleteInstanceOnboardingJob](docs/sdk/README.md#deleteinstanceonboardingjob) - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* [DescribeCampaign](docs/sdk/README.md#describecampaign) - Describes the specific campaign.
* [GetCampaignState](docs/sdk/README.md#getcampaignstate) - Get state of a campaign for the specified Amazon Connect account.
* [GetCampaignStateBatch](docs/sdk/README.md#getcampaignstatebatch) - Get state of campaigns for the specified Amazon Connect account.
* [GetConnectInstanceConfig](docs/sdk/README.md#getconnectinstanceconfig) - Get the specific Connect instance config.
* [GetInstanceOnboardingJobStatus](docs/sdk/README.md#getinstanceonboardingjobstatus) - Get the specific instance onboarding job status.
* [ListCampaigns](docs/sdk/README.md#listcampaigns) - Provides summary information about the campaigns under the specified Amazon Connect account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - List tags for a resource.
* [PauseCampaign](docs/sdk/README.md#pausecampaign) - Pauses a campaign for the specified Amazon Connect account.
* [PutDialRequestBatch](docs/sdk/README.md#putdialrequestbatch) - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* [ResumeCampaign](docs/sdk/README.md#resumecampaign) - Stops a campaign for the specified Amazon Connect account.
* [StartCampaign](docs/sdk/README.md#startcampaign) - Starts a campaign for the specified Amazon Connect account.
* [StartInstanceOnboardingJob](docs/sdk/README.md#startinstanceonboardingjob) - Onboard the specific Amazon Connect instance to Connect Campaigns.
* [StopCampaign](docs/sdk/README.md#stopcampaign) - Stops a campaign for the specified Amazon Connect account.
* [TagResource](docs/sdk/README.md#tagresource) - Tag a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Untag a resource.
* [UpdateCampaignDialerConfig](docs/sdk/README.md#updatecampaigndialerconfig) - Updates the dialer config of a campaign. This API is idempotent.
* [UpdateCampaignName](docs/sdk/README.md#updatecampaignname) - Updates the name of a campaign. This API is idempotent.
* [UpdateCampaignOutboundCallConfig](docs/sdk/README.md#updatecampaignoutboundcallconfig) - Updates the outbound call config of a campaign. This API is idempotent.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
