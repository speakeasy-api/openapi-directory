# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/kinesisvideo/>
### Available Operations

* [createSignalingChannel](#createsignalingchannel) - <p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
* [createStream](#createstream) - <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
* [deleteSignalingChannel](#deletesignalingchannel) - Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.
* [deleteStream](#deletestream) - <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
* [describeEdgeConfiguration](#describeedgeconfiguration) - Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.
* [describeImageGenerationConfiguration](#describeimagegenerationconfiguration) - Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.
* [describeMappedResourceConfiguration](#describemappedresourceconfiguration) - <p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>
* [describeMediaStorageConfiguration](#describemediastorageconfiguration) - Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.
* [describeNotificationConfiguration](#describenotificationconfiguration) - Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.
* [describeSignalingChannel](#describesignalingchannel) - Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
* [describeStream](#describestream) - Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 
* [getDataEndpoint](#getdataendpoint) - <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
* [getSignalingChannelEndpoint](#getsignalingchannelendpoint) - <p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>
* [listSignalingChannels](#listsignalingchannels) - Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.
* [listStreams](#liststreams) - Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 
* [listTagsForResource](#listtagsforresource) - Returns a list of tags associated with the specified signaling channel.
* [listTagsForStream](#listtagsforstream) - <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
* [startEdgeConfigurationUpdate](#startedgeconfigurationupdate) - <p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>
* [tagResource](#tagresource) - Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.
* [tagStream](#tagstream) - <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>
* [untagResource](#untagresource) - Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
* [untagStream](#untagstream) - <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
* [updateDataRetention](#updatedataretention) - <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
* [updateImageGenerationConfiguration](#updateimagegenerationconfiguration) - Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.
* [updateMediaStorageConfiguration](#updatemediastorageconfiguration) - <p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>
* [updateNotificationConfiguration](#updatenotificationconfiguration) - Updates the notification information for a stream.
* [updateSignalingChannel](#updatesignalingchannel) - <p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>
* [updateStream](#updatestream) - <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>

## createSignalingChannel

<p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequestBodyChannelTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSignalingChannelRequestBodySingleMasterConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSignalingChannelRequest();
    $request->requestBody = new CreateSignalingChannelRequestBody();
    $request->requestBody->channelName = 'suscipit';
    $request->requestBody->channelType = CreateSignalingChannelRequestBodyChannelTypeEnum::SINGLE_MASTER;
    $request->requestBody->singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration();
    $request->requestBody->singleMasterConfiguration->messageTtlSeconds = 297534;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->createSignalingChannel($request);

    if ($response->createSignalingChannelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createStream

<p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateStreamRequest();
    $request->requestBody = new CreateStreamRequestBody();
    $request->requestBody->dataRetentionInHours = 528895;
    $request->requestBody->deviceName = 'iusto';
    $request->requestBody->kmsKeyId = 'excepturi';
    $request->requestBody->mediaType = 'nisi';
    $request->requestBody->streamName = 'recusandae';
    $request->requestBody->tags = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->createStream($request);

    if ($response->createStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSignalingChannel

Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSignalingChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSignalingChannelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSignalingChannelRequest();
    $request->requestBody = new DeleteSignalingChannelRequestBody();
    $request->requestBody->channelARN = 'quod';
    $request->requestBody->currentVersion = 'esse';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->deleteSignalingChannel($request);

    if ($response->deleteSignalingChannelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteStream

<p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteStreamRequest();
    $request->requestBody = new DeleteStreamRequestBody();
    $request->requestBody->currentVersion = 'fugit';
    $request->requestBody->streamARN = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->deleteStream($request);

    if ($response->deleteStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEdgeConfiguration

Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEdgeConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEdgeConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEdgeConfigurationRequest();
    $request->requestBody = new DescribeEdgeConfigurationRequestBody();
    $request->requestBody->streamARN = 'qui';
    $request->requestBody->streamName = 'impedit';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->describeEdgeConfiguration($request);

    if ($response->describeEdgeConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeImageGenerationConfiguration

Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageGenerationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeImageGenerationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeImageGenerationConfigurationRequest();
    $request->requestBody = new DescribeImageGenerationConfigurationRequestBody();
    $request->requestBody->streamARN = 'natus';
    $request->requestBody->streamName = 'sed';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';

    $response = $sdk->sdk->describeImageGenerationConfiguration($request);

    if ($response->describeImageGenerationConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMappedResourceConfiguration

<p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMappedResourceConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMappedResourceConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMappedResourceConfigurationRequest();
    $request->maxResults = 'in';
    $request->nextToken = 'corporis';
    $request->requestBody = new DescribeMappedResourceConfigurationRequestBody();
    $request->requestBody->maxResults = 613064;
    $request->requestBody->nextToken = 'iure';
    $request->requestBody->streamARN = 'saepe';
    $request->requestBody->streamName = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->describeMappedResourceConfiguration($request);

    if ($response->describeMappedResourceConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeMediaStorageConfiguration

Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMediaStorageConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeMediaStorageConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeMediaStorageConfigurationRequest();
    $request->requestBody = new DescribeMediaStorageConfigurationRequestBody();
    $request->requestBody->channelARN = 'dolorem';
    $request->requestBody->channelName = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->describeMediaStorageConfiguration($request);

    if ($response->describeMediaStorageConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeNotificationConfiguration

Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotificationConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNotificationConfigurationRequest();
    $request->requestBody = new DescribeNotificationConfigurationRequestBody();
    $request->requestBody->streamARN = 'accusantium';
    $request->requestBody->streamName = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->describeNotificationConfiguration($request);

    if ($response->describeNotificationConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSignalingChannel

Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSignalingChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSignalingChannelRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSignalingChannelRequest();
    $request->requestBody = new DescribeSignalingChannelRequestBody();
    $request->requestBody->channelARN = 'consequuntur';
    $request->requestBody->channelName = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->describeSignalingChannel($request);

    if ($response->describeSignalingChannelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeStream

Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStreamRequest();
    $request->requestBody = new DescribeStreamRequestBody();
    $request->requestBody->streamARN = 'error';
    $request->requestBody->streamName = 'quia';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'animi';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'quo';

    $response = $sdk->sdk->describeStream($request);

    if ($response->describeStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataEndpoint

<p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataEndpointRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetDataEndpointRequestBodyAPINameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataEndpointRequest();
    $request->requestBody = new GetDataEndpointRequestBody();
    $request->requestBody->apiName = GetDataEndpointRequestBodyAPINameEnum::GET_MEDIA;
    $request->requestBody->streamARN = 'tenetur';
    $request->requestBody->streamName = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getDataEndpoint($request);

    if ($response->getDataEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSignalingChannelEndpoint

<p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSignalingChannelEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSignalingChannelEndpointRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ChannelProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelRoleEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSignalingChannelEndpointRequest();
    $request->requestBody = new GetSignalingChannelEndpointRequestBody();
    $request->requestBody->channelARN = 'quasi';
    $request->requestBody->singleMasterChannelEndpointConfiguration = new GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration();
    $request->requestBody->singleMasterChannelEndpointConfiguration->protocols = [
        ChannelProtocolEnum::WEBRTC,
        ChannelProtocolEnum::WEBRTC,
        ChannelProtocolEnum::HTTPS,
        ChannelProtocolEnum::HTTPS,
    ];
    $request->requestBody->singleMasterChannelEndpointConfiguration->role = ChannelRoleEnum::VIEWER;
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->getSignalingChannelEndpoint($request);

    if ($response->getSignalingChannelEndpointOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSignalingChannels

Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSignalingChannelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSignalingChannelsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListSignalingChannelsRequestBodyChannelNameCondition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSignalingChannelsRequest();
    $request->maxResults = 'ut';
    $request->nextToken = 'maiores';
    $request->requestBody = new ListSignalingChannelsRequestBody();
    $request->requestBody->channelNameCondition = new ListSignalingChannelsRequestBodyChannelNameCondition();
    $request->requestBody->channelNameCondition->comparisonOperator = ComparisonOperatorEnum::BEGINS_WITH;
    $request->requestBody->channelNameCondition->comparisonValue = 'dicta';
    $request->requestBody->maxResults = 359444;
    $request->requestBody->nextToken = 'dolore';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->listSignalingChannels($request);

    if ($response->listSignalingChannelsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreams

Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequestBodyStreamNameCondition;
use \OpenAPI\OpenAPI\Models\Shared\ComparisonOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamsRequest();
    $request->maxResults = 'quae';
    $request->nextToken = 'ipsum';
    $request->requestBody = new ListStreamsRequestBody();
    $request->requestBody->maxResults = 692472;
    $request->requestBody->nextToken = 'molestias';
    $request->requestBody->streamNameCondition = new ListStreamsRequestBodyStreamNameCondition();
    $request->requestBody->streamNameCondition->comparisonOperator = ComparisonOperatorEnum::BEGINS_WITH;
    $request->requestBody->streamNameCondition->comparisonValue = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->listStreams($request);

    if ($response->listStreamsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of tags associated with the specified signaling channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->requestBody = new ListTagsForResourceRequestBody();
    $request->requestBody->nextToken = 'sint';
    $request->requestBody->resourceARN = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForStream

<p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForStreamRequest();
    $request->requestBody = new ListTagsForStreamRequestBody();
    $request->requestBody->nextToken = 'deserunt';
    $request->requestBody->streamARN = 'distinctio';
    $request->requestBody->streamName = 'quibusdam';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->listTagsForStream($request);

    if ($response->listTagsForStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startEdgeConfigurationUpdate

<p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartEdgeConfigurationUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartEdgeConfigurationUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartEdgeConfigurationUpdateRequestBodyEdgeConfig;
use \OpenAPI\OpenAPI\Models\Shared\DeletionConfig;
use \OpenAPI\OpenAPI\Models\Shared\LocalSizeConfig;
use \OpenAPI\OpenAPI\Models\Shared\StrategyOnFullSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecorderConfig;
use \OpenAPI\OpenAPI\Models\Shared\MediaSourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\MediaUriTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScheduleConfig;
use \OpenAPI\OpenAPI\Models\Shared\UploaderConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartEdgeConfigurationUpdateRequest();
    $request->requestBody = new StartEdgeConfigurationUpdateRequestBody();
    $request->requestBody->edgeConfig = new StartEdgeConfigurationUpdateRequestBodyEdgeConfig();
    $request->requestBody->edgeConfig->deletionConfig = new DeletionConfig();
    $request->requestBody->edgeConfig->deletionConfig->deleteAfterUpload = false;
    $request->requestBody->edgeConfig->deletionConfig->edgeRetentionInHours = 164940;
    $request->requestBody->edgeConfig->deletionConfig->localSizeConfig = new LocalSizeConfig();
    $request->requestBody->edgeConfig->deletionConfig->localSizeConfig->maxLocalMediaSizeInMB = 828940;
    $request->requestBody->edgeConfig->deletionConfig->localSizeConfig->strategyOnFullSize = StrategyOnFullSizeEnum::DELETE_OLDEST_MEDIA;
    $request->requestBody->edgeConfig->hubDeviceArn = 'alias';
    $request->requestBody->edgeConfig->recorderConfig = new RecorderConfig();
    $request->requestBody->edgeConfig->recorderConfig->mediaSourceConfig = new MediaSourceConfig();
    $request->requestBody->edgeConfig->recorderConfig->mediaSourceConfig->mediaUriSecretArn = 'fugit';
    $request->requestBody->edgeConfig->recorderConfig->mediaSourceConfig->mediaUriType = MediaUriTypeEnum::FILE_URI;
    $request->requestBody->edgeConfig->recorderConfig->scheduleConfig = new ScheduleConfig();
    $request->requestBody->edgeConfig->recorderConfig->scheduleConfig->durationInSeconds = 569618;
    $request->requestBody->edgeConfig->recorderConfig->scheduleConfig->scheduleExpression = 'tempora';
    $request->requestBody->edgeConfig->uploaderConfig = new UploaderConfig();
    $request->requestBody->edgeConfig->uploaderConfig->scheduleConfig = new ScheduleConfig();
    $request->requestBody->edgeConfig->uploaderConfig->scheduleConfig->durationInSeconds = 703737;
    $request->requestBody->edgeConfig->uploaderConfig->scheduleConfig->scheduleExpression = 'tempore';
    $request->requestBody->streamARN = 'labore';
    $request->requestBody->streamName = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->startEdgeConfigurationUpdate($request);

    if ($response->startEdgeConfigurationUpdateOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->resourceARN = 'sint';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagStream

<p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagStreamRequest();
    $request->requestBody = new TagStreamRequestBody();
    $request->requestBody->streamARN = 'maiores';
    $request->requestBody->streamName = 'rerum';
    $request->requestBody->tags = [
        'magnam' => 'cumque',
    ];
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->tagStream($request);

    if ($response->tagStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceARN = 'enim';
    $request->requestBody->tagKeyList = [
        'delectus',
        'quidem',
        'provident',
        'nam',
    ];
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagStream

<p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagStreamRequest();
    $request->requestBody = new UntagStreamRequestBody();
    $request->requestBody->streamARN = 'vel';
    $request->requestBody->streamName = 'natus';
    $request->requestBody->tagKeyList = [
        'molestiae',
        'perferendis',
        'nihil',
    ];
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->untagStream($request);

    if ($response->untagStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataRetention

<p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataRetentionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataRetentionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataRetentionRequestBodyOperationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataRetentionRequest();
    $request->requestBody = new UpdateDataRetentionRequestBody();
    $request->requestBody->currentVersion = 'nobis';
    $request->requestBody->dataRetentionChangeInHours = 428769;
    $request->requestBody->operation = UpdateDataRetentionRequestBodyOperationEnum::DECREASE_DATA_RETENTION;
    $request->requestBody->streamARN = 'aspernatur';
    $request->requestBody->streamName = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->updateDataRetention($request);

    if ($response->updateDataRetentionOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateImageGenerationConfiguration

Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImageGenerationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImageGenerationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateImageGenerationConfigurationRequestBodyImageGenerationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ImageGenerationDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImageSelectorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateImageGenerationConfigurationRequest();
    $request->requestBody = new UpdateImageGenerationConfigurationRequestBody();
    $request->requestBody->imageGenerationConfiguration = new UpdateImageGenerationConfigurationRequestBodyImageGenerationConfiguration();
    $request->requestBody->imageGenerationConfiguration->destinationConfig = new ImageGenerationDestinationConfig();
    $request->requestBody->imageGenerationConfiguration->destinationConfig->destinationRegion = 'accusantium';
    $request->requestBody->imageGenerationConfiguration->destinationConfig->uri = 'https://wide-eyed-perspective.biz';
    $request->requestBody->imageGenerationConfiguration->format = FormatEnum::JPEG;
    $request->requestBody->imageGenerationConfiguration->formatConfig = [
        'necessitatibus' => 'odit',
    ];
    $request->requestBody->imageGenerationConfiguration->heightPixels = 367562;
    $request->requestBody->imageGenerationConfiguration->imageSelectorType = ImageSelectorTypeEnum::SERVER_TIMESTAMP;
    $request->requestBody->imageGenerationConfiguration->samplingInterval = 435865;
    $request->requestBody->imageGenerationConfiguration->status = ConfigurationStatusEnum::DISABLED;
    $request->requestBody->imageGenerationConfiguration->widthPixels = 891924;
    $request->requestBody->streamARN = 'eius';
    $request->requestBody->streamName = 'maxime';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->updateImageGenerationConfiguration($request);

    if ($response->updateImageGenerationConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMediaStorageConfiguration

<p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaStorageConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaStorageConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaStorageConfigurationRequestBodyMediaStorageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\MediaStorageConfigurationStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMediaStorageConfigurationRequest();
    $request->requestBody = new UpdateMediaStorageConfigurationRequestBody();
    $request->requestBody->channelARN = 'expedita';
    $request->requestBody->mediaStorageConfiguration = new UpdateMediaStorageConfigurationRequestBodyMediaStorageConfiguration();
    $request->requestBody->mediaStorageConfiguration->status = MediaStorageConfigurationStatusEnum::ENABLED;
    $request->requestBody->mediaStorageConfiguration->streamARN = 'repellat';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';

    $response = $sdk->sdk->updateMediaStorageConfiguration($request);

    if ($response->updateMediaStorageConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotificationConfiguration

Updates the notification information for a stream.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationConfigurationRequestBodyNotificationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\NotificationDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigurationStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotificationConfigurationRequest();
    $request->requestBody = new UpdateNotificationConfigurationRequestBody();
    $request->requestBody->notificationConfiguration = new UpdateNotificationConfigurationRequestBodyNotificationConfiguration();
    $request->requestBody->notificationConfiguration->destinationConfig = new NotificationDestinationConfig();
    $request->requestBody->notificationConfiguration->destinationConfig->uri = 'https://daring-camel.net';
    $request->requestBody->notificationConfiguration->status = ConfigurationStatusEnum::DISABLED;
    $request->requestBody->streamARN = 'pariatur';
    $request->requestBody->streamName = 'maxime';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->updateNotificationConfiguration($request);

    if ($response->updateNotificationConfigurationOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSignalingChannel

<p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSignalingChannelRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSignalingChannelRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSignalingChannelRequestBodySingleMasterConfiguration;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSignalingChannelRequest();
    $request->requestBody = new UpdateSignalingChannelRequestBody();
    $request->requestBody->channelARN = 'quidem';
    $request->requestBody->currentVersion = 'ipsam';
    $request->requestBody->singleMasterConfiguration = new UpdateSignalingChannelRequestBodySingleMasterConfiguration();
    $request->requestBody->singleMasterConfiguration->messageTtlSeconds = 453543;
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->updateSignalingChannel($request);

    if ($response->updateSignalingChannelOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateStream

<p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateStreamRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateStreamRequest();
    $request->requestBody = new UpdateStreamRequestBody();
    $request->requestBody->currentVersion = 'fugiat';
    $request->requestBody->deviceName = 'amet';
    $request->requestBody->mediaType = 'aut';
    $request->requestBody->streamARN = 'cumque';
    $request->requestBody->streamName = 'corporis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->updateStream($request);

    if ($response->updateStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
