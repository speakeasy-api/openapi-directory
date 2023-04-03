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

* `createParticipantToken` - <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
* `createStage` - Creates a new stage (and optionally participant tokens).
* `deleteStage` - Shuts down and deletes the specified stage (disconnecting all participants).
* `disconnectParticipant` - Disconnects a specified participant and revokes the participant permanently from a specified stage.
* `getStage` - Gets information for the specified stage.
* `listStages` - Gets summary information about all stages in your account, in the AWS region where the API request is processed.
* `listTagsForResource` - Gets information about AWS tags for the specified ARN.
* `tagResource` - Adds or updates tags for the AWS resource with the specified ARN.
* `untagResource` - Removes tags from the resource with the specified ARN.
* `updateStage` - Updates a stage’s configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
