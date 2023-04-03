# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createCampaign` - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* `deleteCampaign` - Deletes a campaign from the specified Amazon Connect account.
* `deleteConnectInstanceConfig` - Deletes a connect instance config from the specified AWS account.
* `deleteInstanceOnboardingJob` - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* `describeCampaign` - Describes the specific campaign.
* `getCampaignState` - Get state of a campaign for the specified Amazon Connect account.
* `getCampaignStateBatch` - Get state of campaigns for the specified Amazon Connect account.
* `getConnectInstanceConfig` - Get the specific Connect instance config.
* `getInstanceOnboardingJobStatus` - Get the specific instance onboarding job status.
* `listCampaigns` - Provides summary information about the campaigns under the specified Amazon Connect account.
* `listTagsForResource` - List tags for a resource.
* `pauseCampaign` - Pauses a campaign for the specified Amazon Connect account.
* `putDialRequestBatch` - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* `resumeCampaign` - Stops a campaign for the specified Amazon Connect account.
* `startCampaign` - Starts a campaign for the specified Amazon Connect account.
* `startInstanceOnboardingJob` - Onboard the specific Amazon Connect instance to Connect Campaigns.
* `stopCampaign` - Stops a campaign for the specified Amazon Connect account.
* `tagResource` - Tag a resource.
* `untagResource` - Untag a resource.
* `updateCampaignDialerConfig` - Updates the dialer config of a campaign. This API is idempotent.
* `updateCampaignName` - Updates the name of a campaign. This API is idempotent.
* `updateCampaignOutboundCallConfig` - Updates the outbound call config of a campaign. This API is idempotent.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
