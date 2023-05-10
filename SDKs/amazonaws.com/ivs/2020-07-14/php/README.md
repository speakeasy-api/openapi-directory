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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetChannelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetChannelRequest();
    $request->requestBody = new BatchGetChannelRequestBody();
    $request->requestBody->arns = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->batchGetChannel($request);

    if ($response->batchGetChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchGetChannel](docs/sdk/README.md#batchgetchannel) - Performs <a>GetChannel</a> on multiple ARNs simultaneously.
* [batchGetStreamKey](docs/sdk/README.md#batchgetstreamkey) - Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.
* [createChannel](docs/sdk/README.md#createchannel) - Creates a new channel and an associated stream key to start streaming.
* [createRecordingConfiguration](docs/sdk/README.md#createrecordingconfiguration) - <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p> <p> <b>Known issue:</b> In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the <code>state</code> of the recording configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)</p> <p> <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</p>
* [createStreamKey](docs/sdk/README.md#createstreamkey) - <p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>
* [deleteChannel](docs/sdk/README.md#deletechannel) - <p>Deletes the specified channel and its associated stream keys.</p> <p>If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call <a>StopStream</a>, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html"> Using EventBridge with Amazon IVS</a>.) </p>
* [deletePlaybackKeyPair](docs/sdk/README.md#deleteplaybackkeypair) - Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [deleteRecordingConfiguration](docs/sdk/README.md#deleterecordingconfiguration) - <p>Deletes the recording configuration for the specified ARN.</p> <p>If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use <a>UpdateChannel</a> to set the <code>recordingConfigurationArn</code> field to an empty string, then use DeleteRecordingConfiguration.</p>
* [deleteStreamKey](docs/sdk/README.md#deletestreamkey) - Deletes the stream key for the specified ARN, so it can no longer be used to stream.
* [getChannel](docs/sdk/README.md#getchannel) - Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.
* [getPlaybackKeyPair](docs/sdk/README.md#getplaybackkeypair) - Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [getRecordingConfiguration](docs/sdk/README.md#getrecordingconfiguration) - Gets the recording configuration for the specified ARN.
* [getStream](docs/sdk/README.md#getstream) - Gets information about the active (live) stream on a specified channel.
* [getStreamKey](docs/sdk/README.md#getstreamkey) - Gets stream-key information for a specified ARN.
* [getStreamSession](docs/sdk/README.md#getstreamsession) - Gets metadata on a specified stream.
* [importPlaybackKeyPair](docs/sdk/README.md#importplaybackkeypair) - Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [listChannels](docs/sdk/README.md#listchannels) - Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).
* [listPlaybackKeyPairs](docs/sdk/README.md#listplaybackkeypairs) - Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [listRecordingConfigurations](docs/sdk/README.md#listrecordingconfigurations) - Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.
* [listStreamKeys](docs/sdk/README.md#liststreamkeys) - Gets summary information about stream keys for the specified channel.
* [listStreamSessions](docs/sdk/README.md#liststreamsessions) - Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.
* [listStreams](docs/sdk/README.md#liststreams) - Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Gets information about Amazon Web Services tags for the specified ARN.
* [putMetadata](docs/sdk/README.md#putmetadata) - Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.
* [stopStream](docs/sdk/README.md#stopstream) - <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> <note> <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the <code>streamKey</code> attached to the channel.</p> </note>
* [tagResource](docs/sdk/README.md#tagresource) - Adds or updates tags for the Amazon Web Services resource with the specified ARN.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the resource with the specified ARN.
* [updateChannel](docs/sdk/README.md#updatechannel) - Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
