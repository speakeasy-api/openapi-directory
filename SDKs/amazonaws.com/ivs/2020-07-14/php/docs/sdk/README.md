# SDK

## Overview

<p> <b>Introduction</b> </p> <p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP API and an Amazon Web Services EventBridge event stream for responses. JSON is used for both requests and responses, including errors.</p> <p>The API is an Amazon Web Services regional service. For a list of supported regions and Amazon IVS HTTPS service endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the <i>Amazon Web Services General Reference</i>.</p> <p> <i> <b>All API request parameters and URLs are case sensitive. </b> </i> </p> <p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document History</a>.</p> <p> <b>Allowed Header Values</b> </p> <ul> <li> <p> <code> <b>Accept:</b> </code> application/json</p> </li> <li> <p> <code> <b>Accept-Encoding:</b> </code> gzip, deflate</p> </li> <li> <p> <code> <b>Content-Type:</b> </code>application/json</p> </li> </ul> <p> <b>Resources</b> </p> <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html"> Getting Started with Amazon IVS</a>):</p> <ul> <li> <p> <b>Channel</b> — Stores configuration data related to your live stream. You first create a channel and then use the channel’s stream key to start your live stream. See the Channel endpoints for more information. </p> </li> <li> <p> <b>Stream key</b> — An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. See the StreamKey endpoints for more information. <i> <b>Treat the stream key like a secret, since it allows anyone to stream to the channel.</b> </i> </p> </li> <li> <p> <b>Playback key pair</b> — Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token. See the PlaybackKeyPair endpoints for more information.</p> </li> <li> <p> <b>Recording configuration</b> — Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration. See the Recording Configuration endpoints for more information.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an Amazon Web Services resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your Amazon Web Services resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html"> Access Tags</a>). </p> <p>The Amazon IVS API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording Configurations.</p> <p>At most 50 tags can be applied to a resource. </p> <p> <b>Authentication versus Authorization</b> </p> <p>Note the differences between these concepts:</p> <ul> <li> <p> <i>Authentication</i> is about verifying identity. You need to be authenticated to sign Amazon IVS API requests.</p> </li> <li> <p> <i>Authorization</i> is about granting permissions. Your IAM roles need to have permissions for Amazon IVS API requests. In addition, authorization is needed to view <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Amazon IVS private channels</a>. (Private channels are channels that are enabled for "playback authorization.")</p> </li> </ul> <p> <b>Authentication</b> </p> <p>All Amazon IVS API requests must be authenticated with a signature. The Amazon Web Services Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS API directly, it’s your responsibility to sign the requests.</p> <p>You generate a signature using valid Amazon Web Services credentials that have permission to perform the requested action. For example, you must sign PutMetadata requests with a signature generated from a user account that has the <code>ivs:PutMetadata</code> permission.</p> <p>For more information:</p> <ul> <li> <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services General Reference</i>.</p> </li> <li> <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on the Security page of the <i>Amazon IVS User Guide</i>.</p> </li> </ul> <p> <b>Amazon Resource Names (ARNs)</b> </p> <p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General Reference</i>.</p> <p> <b>Channel Endpoints</b> </p> <ul> <li> <p> <a>CreateChannel</a> — Creates a new channel and an associated stream key to start streaming.</p> </li> <li> <p> <a>GetChannel</a> — Gets the channel configuration for the specified channel ARN.</p> </li> <li> <p> <a>BatchGetChannel</a> — Performs <a>GetChannel</a> on multiple ARNs simultaneously.</p> </li> <li> <p> <a>ListChannels</a> — Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 Conflict Exception).</p> </li> <li> <p> <a>UpdateChannel</a> — Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.</p> </li> <li> <p> <a>DeleteChannel</a> — Deletes the specified channel.</p> </li> </ul> <p> <b>StreamKey Endpoints</b> </p> <ul> <li> <p> <a>CreateStreamKey</a> — Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> </li> <li> <p> <a>GetStreamKey</a> — Gets stream key information for the specified ARN.</p> </li> <li> <p> <a>BatchGetStreamKey</a> — Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p> </li> <li> <p> <a>ListStreamKeys</a> — Gets summary information about stream keys for the specified channel.</p> </li> <li> <p> <a>DeleteStreamKey</a> — Deletes the stream key for the specified ARN, so it can no longer be used to stream.</p> </li> </ul> <p> <b>Stream Endpoints</b> </p> <ul> <li> <p> <a>GetStream</a> — Gets information about the active (live) stream on a specified channel.</p> </li> <li> <p> <a>GetStreamSession</a> — Gets metadata on a specified stream.</p> </li> <li> <p> <a>ListStreams</a> — Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.</p> </li> <li> <p> <a>ListStreamSessions</a> — Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.</p> </li> <li> <p> <a>StopStream</a> — Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> </li> <li> <p> <a>PutMetadata</a> — Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed.</p> </li> </ul> <p> <b>PlaybackKeyPair Endpoints</b> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.</p> <ul> <li> <p> <a>ImportPlaybackKeyPair</a> — Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels (channels enabled for playback authorization).</p> </li> <li> <p> <a>GetPlaybackKeyPair</a> — Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels.</p> </li> <li> <p> <a>ListPlaybackKeyPairs</a> — Gets summary information about playback key pairs.</p> </li> <li> <p> <a>DeletePlaybackKeyPair</a> — Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>.</p> </li> </ul> <p> <b>RecordingConfiguration Endpoints</b> </p> <ul> <li> <p> <a>CreateRecordingConfiguration</a> — Creates a new recording configuration, used to enable recording to Amazon S3.</p> </li> <li> <p> <a>GetRecordingConfiguration</a> — Gets the recording-configuration metadata for the specified ARN.</p> </li> <li> <p> <a>ListRecordingConfigurations</a> — Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.</p> </li> <li> <p> <a>DeleteRecordingConfiguration</a> — Deletes the recording configuration for the specified ARN.</p> </li> </ul> <p> <b>Amazon Web Services Tags Endpoints</b> </p> <ul> <li> <p> <a>TagResource</a> — Adds or updates tags for the Amazon Web Services resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> <li> <p> <a>ListTagsForResource</a> — Gets information about Amazon Web Services tags for the specified ARN.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ivs/>
### Available Operations

* [batchGetChannel](#batchgetchannel) - Performs <a>GetChannel</a> on multiple ARNs simultaneously.
* [batchGetStreamKey](#batchgetstreamkey) - Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.
* [createChannel](#createchannel) - Creates a new channel and an associated stream key to start streaming.
* [createRecordingConfiguration](#createrecordingconfiguration) - <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p> <p> <b>Known issue:</b> In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the <code>state</code> of the recording configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)</p> <p> <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</p>
* [createStreamKey](#createstreamkey) - <p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>
* [deleteChannel](#deletechannel) - <p>Deletes the specified channel and its associated stream keys.</p> <p>If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call <a>StopStream</a>, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html"> Using EventBridge with Amazon IVS</a>.) </p>
* [deletePlaybackKeyPair](#deleteplaybackkeypair) - Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [deleteRecordingConfiguration](#deleterecordingconfiguration) - <p>Deletes the recording configuration for the specified ARN.</p> <p>If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use <a>UpdateChannel</a> to set the <code>recordingConfigurationArn</code> field to an empty string, then use DeleteRecordingConfiguration.</p>
* [deleteStreamKey](#deletestreamkey) - Deletes the stream key for the specified ARN, so it can no longer be used to stream.
* [getChannel](#getchannel) - Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.
* [getPlaybackKeyPair](#getplaybackkeypair) - Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [getRecordingConfiguration](#getrecordingconfiguration) - Gets the recording configuration for the specified ARN.
* [getStream](#getstream) - Gets information about the active (live) stream on a specified channel.
* [getStreamKey](#getstreamkey) - Gets stream-key information for a specified ARN.
* [getStreamSession](#getstreamsession) - Gets metadata on a specified stream.
* [importPlaybackKeyPair](#importplaybackkeypair) - Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [listChannels](#listchannels) - Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).
* [listPlaybackKeyPairs](#listplaybackkeypairs) - Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.
* [listRecordingConfigurations](#listrecordingconfigurations) - Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.
* [listStreamKeys](#liststreamkeys) - Gets summary information about stream keys for the specified channel.
* [listStreamSessions](#liststreamsessions) - Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.
* [listStreams](#liststreams) - Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.
* [listTagsForResource](#listtagsforresource) - Gets information about Amazon Web Services tags for the specified ARN.
* [putMetadata](#putmetadata) - Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.
* [stopStream](#stopstream) - <p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> <note> <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the <code>streamKey</code> attached to the channel.</p> </note>
* [tagResource](#tagresource) - Adds or updates tags for the Amazon Web Services resource with the specified ARN.
* [untagResource](#untagresource) - Removes tags from the resource with the specified ARN.
* [updateChannel](#updatechannel) - Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.

## batchGetChannel

Performs <a>GetChannel</a> on multiple ARNs simultaneously.

### Example Usage

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
        'iure',
        'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->batchGetChannel($request);

    if ($response->batchGetChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetStreamKey

Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetStreamKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetStreamKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetStreamKeyRequest();
    $request->requestBody = new BatchGetStreamKeyRequestBody();
    $request->requestBody->arns = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->batchGetStreamKey($request);

    if ($response->batchGetStreamKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createChannel

Creates a new channel and an associated stream key to start streaming.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequestBodyLatencyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateChannelRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateChannelRequest();
    $request->requestBody = new CreateChannelRequestBody();
    $request->requestBody->authorized = false;
    $request->requestBody->insecureIngest = false;
    $request->requestBody->latencyMode = CreateChannelRequestBodyLatencyModeEnum::NORMAL;
    $request->requestBody->name = 'Timmy Satterfield';
    $request->requestBody->recordingConfigurationArn = 'at';
    $request->requestBody->tags = [
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
        'dolorum' => 'dicta',
    ];
    $request->requestBody->type = CreateChannelRequestBodyTypeEnum::STANDARD;
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->createChannel($request);

    if ($response->createChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRecordingConfiguration

<p>Creates a new recording configuration, used to enable recording to Amazon S3.</p> <p> <b>Known issue:</b> In the us-east-1 region, if you use the Amazon Web Services CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the <code>state</code> of the recording configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)</p> <p> <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecordingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecordingConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecordingConfigurationRequestBodyDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\S3DestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\CreateRecordingConfigurationRequestBodyThumbnailConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RecordingModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRecordingConfigurationRequest();
    $request->requestBody = new CreateRecordingConfigurationRequestBody();
    $request->requestBody->destinationConfiguration = new CreateRecordingConfigurationRequestBodyDestinationConfiguration();
    $request->requestBody->destinationConfiguration->s3 = new S3DestinationConfiguration();
    $request->requestBody->destinationConfiguration->s3->bucketName = 'beatae';
    $request->requestBody->name = 'Tanya Gleason';
    $request->requestBody->recordingReconnectWindowSeconds = 736918;
    $request->requestBody->tags = [
        'ipsum' => 'excepturi',
        'aspernatur' => 'perferendis',
    ];
    $request->requestBody->thumbnailConfiguration = new CreateRecordingConfigurationRequestBodyThumbnailConfiguration();
    $request->requestBody->thumbnailConfiguration->recordingMode = RecordingModeEnum::DISABLED;
    $request->requestBody->thumbnailConfiguration->targetIntervalSeconds = 617636;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->createRecordingConfiguration($request);

    if ($response->createRecordingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStreamKey

<p>Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> <p>Note that <a>CreateChannel</a> creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use <a>DeleteStreamKey</a> and then CreateStreamKey.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamKeyRequest();
    $request->requestBody = new CreateStreamKeyRequestBody();
    $request->requestBody->channelArn = 'fuga';
    $request->requestBody->tags = [
        'corporis' => 'iste',
        'iure' => 'saepe',
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->createStreamKey($request);

    if ($response->createStreamKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteChannel

<p>Deletes the specified channel and its associated stream keys.</p> <p>If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call <a>StopStream</a>, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state is no longer Live), then call DeleteChannel. (See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/eventbridge.html"> Using EventBridge with Amazon IVS</a>.) </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteChannelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteChannelRequest();
    $request->requestBody = new DeleteChannelRequestBody();
    $request->requestBody->arn = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->deleteChannel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePlaybackKeyPair

Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePlaybackKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePlaybackKeyPairRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePlaybackKeyPairRequest();
    $request->requestBody = new DeletePlaybackKeyPairRequestBody();
    $request->requestBody->arn = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->deletePlaybackKeyPair($request);

    if ($response->deletePlaybackKeyPairResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRecordingConfiguration

<p>Deletes the recording configuration for the specified ARN.</p> <p>If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use <a>UpdateChannel</a> to set the <code>recordingConfigurationArn</code> field to an empty string, then use DeleteRecordingConfiguration.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRecordingConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRecordingConfigurationRequest();
    $request->requestBody = new DeleteRecordingConfigurationRequestBody();
    $request->requestBody->arn = 'mollitia';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->deleteRecordingConfiguration($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStreamKey

Deletes the stream key for the specified ARN, so it can no longer be used to stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStreamKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStreamKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStreamKeyRequest();
    $request->requestBody = new DeleteStreamKeyRequestBody();
    $request->requestBody->arn = 'commodi';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';

    $response = $sdk->sdk->deleteStreamKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getChannel

Gets the channel configuration for the specified channel ARN. See also <a>BatchGetChannel</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetChannelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChannelRequest();
    $request->requestBody = new GetChannelRequestBody();
    $request->requestBody->arn = 'laborum';
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'ipsam';

    $response = $sdk->sdk->getChannel($request);

    if ($response->getChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlaybackKeyPair

Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaybackKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPlaybackKeyPairRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlaybackKeyPairRequest();
    $request->requestBody = new GetPlaybackKeyPairRequestBody();
    $request->requestBody->arn = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getPlaybackKeyPair($request);

    if ($response->getPlaybackKeyPairResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecordingConfiguration

Gets the recording configuration for the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecordingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRecordingConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecordingConfigurationRequest();
    $request->requestBody = new GetRecordingConfigurationRequestBody();
    $request->requestBody->arn = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getRecordingConfiguration($request);

    if ($response->getRecordingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStream

Gets information about the active (live) stream on a specified channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStreamRequest();
    $request->requestBody = new GetStreamRequestBody();
    $request->requestBody->channelArn = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getStream($request);

    if ($response->getStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStreamKey

Gets stream-key information for a specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamKeyRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStreamKeyRequest();
    $request->requestBody = new GetStreamKeyRequestBody();
    $request->requestBody->arn = 'corporis';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getStreamKey($request);

    if ($response->getStreamKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStreamSession

Gets metadata on a specified stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStreamSessionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStreamSessionRequest();
    $request->requestBody = new GetStreamSessionRequestBody();
    $request->requestBody->channelArn = 'repudiandae';
    $request->requestBody->streamId = 'quae';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->getStreamSession($request);

    if ($response->getStreamSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importPlaybackKeyPair

Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportPlaybackKeyPairRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportPlaybackKeyPairRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportPlaybackKeyPairRequest();
    $request->requestBody = new ImportPlaybackKeyPairRequestBody();
    $request->requestBody->name = 'Grady Botsford';
    $request->requestBody->publicKeyMaterial = 'veritatis';
    $request->requestBody->tags = [
        'incidunt' => 'enim',
        'consequatur' => 'est',
        'quibusdam' => 'explicabo',
        'deserunt' => 'distinctio',
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';

    $response = $sdk->sdk->importPlaybackKeyPair($request);

    if ($response->importPlaybackKeyPairResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listChannels

Gets summary information about all channels in your account, in the Amazon Web Services region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListChannelsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListChannelsRequest();
    $request->requestBody = new ListChannelsRequestBody();
    $request->requestBody->filterByName = 'perferendis';
    $request->requestBody->filterByRecordingConfigurationArn = 'magni';
    $request->requestBody->maxResults = 828940;
    $request->requestBody->nextToken = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->maxResults = 'labore';
    $request->nextToken = 'delectus';

    $response = $sdk->sdk->listChannels($request);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPlaybackKeyPairs

Gets summary information about playback key pairs. For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the <i>Amazon IVS User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPlaybackKeyPairsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPlaybackKeyPairsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPlaybackKeyPairsRequest();
    $request->requestBody = new ListPlaybackKeyPairsRequestBody();
    $request->requestBody->maxResults = 433288;
    $request->requestBody->nextToken = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->maxResults = 'dolor';
    $request->nextToken = 'debitis';

    $response = $sdk->sdk->listPlaybackKeyPairs($request);

    if ($response->listPlaybackKeyPairsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecordingConfigurations

Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordingConfigurationsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordingConfigurationsRequest();
    $request->requestBody = new ListRecordingConfigurationsRequestBody();
    $request->requestBody->maxResults = 952749;
    $request->requestBody->nextToken = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->maxResults = 'cumque';
    $request->nextToken = 'facere';

    $response = $sdk->sdk->listRecordingConfigurations($request);

    if ($response->listRecordingConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreamKeys

Gets summary information about stream keys for the specified channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamKeysRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamKeysRequest();
    $request->requestBody = new ListStreamKeysRequestBody();
    $request->requestBody->channelArn = 'ea';
    $request->requestBody->maxResults = 396506;
    $request->requestBody->nextToken = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->maxResults = 'provident';
    $request->nextToken = 'nam';

    $response = $sdk->sdk->listStreamKeys($request);

    if ($response->listStreamKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreamSessions

Gets a summary of current and previous streams for a specified channel in your account, in the AWS region where the API request is processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamSessionsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamSessionsRequest();
    $request->requestBody = new ListStreamSessionsRequestBody();
    $request->requestBody->channelArn = 'id';
    $request->requestBody->maxResults = 501324;
    $request->requestBody->nextToken = 'deleniti';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';
    $request->maxResults = 'molestiae';
    $request->nextToken = 'perferendis';

    $response = $sdk->sdk->listStreamSessions($request);

    if ($response->listStreamSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreams

Gets summary information about live streams in your account, in the Amazon Web Services region where the API request is processed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequestBodyFilterBy;
use \OpenAPI\OpenAPI\Models\Shared\StreamHealthEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamsRequest();
    $request->requestBody = new ListStreamsRequestBody();
    $request->requestBody->filterBy = new ListStreamsRequestBodyFilterBy();
    $request->requestBody->filterBy->health = StreamHealthEnum::STARVING;
    $request->requestBody->maxResults = 301575;
    $request->requestBody->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->maxResults = 'vero';
    $request->nextToken = 'aspernatur';

    $response = $sdk->sdk->listStreams($request);

    if ($response->listStreamsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Gets information about Amazon Web Services tags for the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';
    $request->resourceArn = 'sint';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMetadata

Inserts metadata into the active stream of the specified channel. At most 5 requests per second per channel are allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) At most 155 requests per second per account are allowed. Also see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/metadata.html">Embedding Metadata within a Video Stream</a> in the <i>Amazon IVS User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutMetadataRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMetadataRequest();
    $request->requestBody = new PutMetadataRequestBody();
    $request->requestBody->channelArn = 'accusantium';
    $request->requestBody->metadata = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->putMetadata($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopStream

<p>Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> <note> <p>Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the <code>streamKey</code> attached to the channel.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopStreamRequest();
    $request->requestBody = new StopStreamRequestBody();
    $request->requestBody->channelArn = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->stopStream($request);

    if ($response->stopStreamResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or updates tags for the Amazon Web Services resource with the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'in' => 'architecto',
        'architecto' => 'repudiandae',
        'ullam' => 'expedita',
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->resourceArn = 'consequuntur';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the resource with the specified ARN.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->resourceArn = 'maxime';
    $request->tagKeys = [
        'excepturi',
        'odit',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateChannel

Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequestBodyLatencyModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateChannelRequestBodyTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateChannelRequest();
    $request->requestBody = new UpdateChannelRequestBody();
    $request->requestBody->arn = 'ea';
    $request->requestBody->authorized = false;
    $request->requestBody->insecureIngest = false;
    $request->requestBody->latencyMode = UpdateChannelRequestBodyLatencyModeEnum::NORMAL;
    $request->requestBody->name = 'Ebony Predovic';
    $request->requestBody->recordingConfigurationArn = 'autem';
    $request->requestBody->type = UpdateChannelRequestBodyTypeEnum::STANDARD;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->updateChannel($request);

    if ($response->updateChannelResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
