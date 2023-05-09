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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequest;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBody;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBodyChannelTypeEnum;
import org.openapis.openapi.models.operations.CreateSignalingChannelRequestBodySingleMasterConfiguration;
import org.openapis.openapi.models.operations.CreateSignalingChannelResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSignalingChannelRequest req = new CreateSignalingChannelRequest(                new CreateSignalingChannelRequestBody("nisi") {{
                                channelType = CreateSignalingChannelRequestBodyChannelTypeEnum.FULL_MESH;
                                singleMasterConfiguration = new CreateSignalingChannelRequestBodySingleMasterConfiguration() {{
                                    messageTtlSeconds = 836079L;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("deserunt", "perferendis") {{
                                        key = "quis";
                                        value = "veritatis";
                                    }}),
                                }};
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "repellendus";
                xAmzCredential = "sapiente";
                xAmzDate = "quo";
                xAmzSecurityToken = "odit";
                xAmzSignature = "at";
                xAmzSignedHeaders = "at";
            }};            

            CreateSignalingChannelResponse res = sdk.sdk.createSignalingChannel(req);

            if (res.createSignalingChannelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createStream

<p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStreamRequest;
import org.openapis.openapi.models.operations.CreateStreamRequestBody;
import org.openapis.openapi.models.operations.CreateStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateStreamRequest req = new CreateStreamRequest(                new CreateStreamRequestBody("molestiae") {{
                                dataRetentionInHours = 799159L;
                                deviceName = "quod";
                                kmsKeyId = "esse";
                                mediaType = "totam";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("dolorum", "dicta");
                                    put("nam", "officia");
                                    put("occaecati", "fugit");
                                    put("deleniti", "hic");
                                }};
                            }};) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            CreateStreamResponse res = sdk.sdk.createStream(req);

            if (res.createStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSignalingChannel

Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSignalingChannelRequest;
import org.openapis.openapi.models.operations.DeleteSignalingChannelRequestBody;
import org.openapis.openapi.models.operations.DeleteSignalingChannelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSignalingChannelRequest req = new DeleteSignalingChannelRequest(                new DeleteSignalingChannelRequestBody("cum") {{
                                currentVersion = "esse";
                            }};) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ad";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "sed";
            }};            

            DeleteSignalingChannelResponse res = sdk.sdk.deleteSignalingChannel(req);

            if (res.deleteSignalingChannelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStream

<p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStreamRequest;
import org.openapis.openapi.models.operations.DeleteStreamRequestBody;
import org.openapis.openapi.models.operations.DeleteStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteStreamRequest req = new DeleteStreamRequest(                new DeleteStreamRequestBody("dolor") {{
                                currentVersion = "natus";
                            }};) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            DeleteStreamResponse res = sdk.sdk.deleteStream(req);

            if (res.deleteStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEdgeConfiguration

Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEdgeConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeEdgeConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeEdgeConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEdgeConfigurationRequest req = new DescribeEdgeConfigurationRequest(                new DescribeEdgeConfigurationRequestBody() {{
                                streamARN = "saepe";
                                streamName = "quidem";
                            }};) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            DescribeEdgeConfigurationResponse res = sdk.sdk.describeEdgeConfiguration(req);

            if (res.describeEdgeConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImageGenerationConfiguration

Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImageGenerationConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeImageGenerationConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeImageGenerationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImageGenerationConfigurationRequest req = new DescribeImageGenerationConfigurationRequest(                new DescribeImageGenerationConfigurationRequestBody() {{
                                streamARN = "corporis";
                                streamName = "explicabo";
                            }};) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            DescribeImageGenerationConfigurationResponse res = sdk.sdk.describeImageGenerationConfiguration(req);

            if (res.describeImageGenerationConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMappedResourceConfiguration

<p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMappedResourceConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeMappedResourceConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeMappedResourceConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMappedResourceConfigurationRequest req = new DescribeMappedResourceConfigurationRequest(                new DescribeMappedResourceConfigurationRequestBody() {{
                                maxResults = 634274L;
                                nextToken = "doloribus";
                                streamARN = "sapiente";
                                streamName = "architecto";
                            }};) {{
                maxResults = "mollitia";
                nextToken = "dolorem";
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            DescribeMappedResourceConfigurationResponse res = sdk.sdk.describeMappedResourceConfiguration(req);

            if (res.describeMappedResourceConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeMediaStorageConfiguration

Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeMediaStorageConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeMediaStorageConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeMediaStorageConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeMediaStorageConfigurationRequest req = new DescribeMediaStorageConfigurationRequest(                new DescribeMediaStorageConfigurationRequestBody() {{
                                channelARN = "molestiae";
                                channelName = "velit";
                            }};) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "quia";
                xAmzCredential = "quis";
                xAmzDate = "vitae";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "enim";
            }};            

            DescribeMediaStorageConfigurationResponse res = sdk.sdk.describeMediaStorageConfiguration(req);

            if (res.describeMediaStorageConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeNotificationConfiguration

Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeNotificationConfigurationRequestBody;
import org.openapis.openapi.models.operations.DescribeNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeNotificationConfigurationRequest req = new DescribeNotificationConfigurationRequest(                new DescribeNotificationConfigurationRequestBody() {{
                                streamARN = "quo";
                                streamName = "sequi";
                            }};) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "id";
                xAmzDate = "possimus";
                xAmzSecurityToken = "aut";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "error";
            }};            

            DescribeNotificationConfigurationResponse res = sdk.sdk.describeNotificationConfiguration(req);

            if (res.describeNotificationConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSignalingChannel

Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSignalingChannelRequest;
import org.openapis.openapi.models.operations.DescribeSignalingChannelRequestBody;
import org.openapis.openapi.models.operations.DescribeSignalingChannelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSignalingChannelRequest req = new DescribeSignalingChannelRequest(                new DescribeSignalingChannelRequestBody() {{
                                channelARN = "laborum";
                                channelName = "quasi";
                            }};) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "vero";
                xAmzDate = "nihil";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ipsa";
            }};            

            DescribeSignalingChannelResponse res = sdk.sdk.describeSignalingChannel(req);

            if (res.describeSignalingChannelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeStream

Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStreamRequest;
import org.openapis.openapi.models.operations.DescribeStreamRequestBody;
import org.openapis.openapi.models.operations.DescribeStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStreamRequest req = new DescribeStreamRequest(                new DescribeStreamRequestBody() {{
                                streamARN = "voluptate";
                                streamName = "cum";
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            DescribeStreamResponse res = sdk.sdk.describeStream(req);

            if (res.describeStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataEndpoint

<p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataEndpointRequest;
import org.openapis.openapi.models.operations.GetDataEndpointRequestBody;
import org.openapis.openapi.models.operations.GetDataEndpointRequestBodyAPINameEnum;
import org.openapis.openapi.models.operations.GetDataEndpointResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataEndpointRequest req = new GetDataEndpointRequest(                new GetDataEndpointRequestBody(GetDataEndpointRequestBodyAPINameEnum.GET_MEDIA_FOR_FRAGMENT_LIST) {{
                                streamARN = "dicta";
                                streamName = "harum";
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            GetDataEndpointResponse res = sdk.sdk.getDataEndpoint(req);

            if (res.getDataEndpointOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSignalingChannelEndpoint

<p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSignalingChannelEndpointRequest;
import org.openapis.openapi.models.operations.GetSignalingChannelEndpointRequestBody;
import org.openapis.openapi.models.operations.GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration;
import org.openapis.openapi.models.operations.GetSignalingChannelEndpointResponse;
import org.openapis.openapi.models.shared.ChannelProtocolEnum;
import org.openapis.openapi.models.shared.ChannelRoleEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSignalingChannelEndpointRequest req = new GetSignalingChannelEndpointRequest(                new GetSignalingChannelEndpointRequestBody("excepturi") {{
                                singleMasterChannelEndpointConfiguration = new GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration() {{
                                    protocols = new org.openapis.openapi.models.shared.ChannelProtocolEnum[]{{
                                        add(ChannelProtocolEnum.WSS),
                                        add(ChannelProtocolEnum.HTTPS),
                                        add(ChannelProtocolEnum.HTTPS),
                                        add(ChannelProtocolEnum.WEBRTC),
                                    }};
                                    role = ChannelRoleEnum.MASTER;
                                }};;
                            }};) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            GetSignalingChannelEndpointResponse res = sdk.sdk.getSignalingChannelEndpoint(req);

            if (res.getSignalingChannelEndpointOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSignalingChannels

Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSignalingChannelsRequest;
import org.openapis.openapi.models.operations.ListSignalingChannelsRequestBody;
import org.openapis.openapi.models.operations.ListSignalingChannelsRequestBodyChannelNameCondition;
import org.openapis.openapi.models.operations.ListSignalingChannelsResponse;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSignalingChannelsRequest req = new ListSignalingChannelsRequest(                new ListSignalingChannelsRequestBody() {{
                                channelNameCondition = new ListSignalingChannelsRequestBodyChannelNameCondition() {{
                                    comparisonOperator = ComparisonOperatorEnum.BEGINS_WITH;
                                    comparisonValue = "quibusdam";
                                }};;
                                maxResults = 131797L;
                                nextToken = "deserunt";
                            }};) {{
                maxResults = "distinctio";
                nextToken = "quibusdam";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            ListSignalingChannelsResponse res = sdk.sdk.listSignalingChannels(req);

            if (res.listSignalingChannelsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStreams

Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStreamsRequest;
import org.openapis.openapi.models.operations.ListStreamsRequestBody;
import org.openapis.openapi.models.operations.ListStreamsRequestBodyStreamNameCondition;
import org.openapis.openapi.models.operations.ListStreamsResponse;
import org.openapis.openapi.models.shared.ComparisonOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStreamsRequest req = new ListStreamsRequest(                new ListStreamsRequestBody() {{
                                maxResults = 828940L;
                                nextToken = "ipsam";
                                streamNameCondition = new ListStreamsRequestBodyStreamNameCondition() {{
                                    comparisonOperator = ComparisonOperatorEnum.BEGINS_WITH;
                                    comparisonValue = "alias";
                                }};;
                            }};) {{
                maxResults = "fugit";
                nextToken = "dolorum";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            ListStreamsResponse res = sdk.sdk.listStreams(req);

            if (res.listStreamsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of tags associated with the specified signaling channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceRequestBody;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("eligendi") {{
                                nextToken = "sint";
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sint";
                xAmzSecurityToken = "officia";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "debitis";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForStream

<p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForStreamRequest;
import org.openapis.openapi.models.operations.ListTagsForStreamRequestBody;
import org.openapis.openapi.models.operations.ListTagsForStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForStreamRequest req = new ListTagsForStreamRequest(                new ListTagsForStreamRequestBody() {{
                                nextToken = "dolorum";
                                streamARN = "in";
                                streamName = "in";
                            }};) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            ListTagsForStreamResponse res = sdk.sdk.listTagsForStream(req);

            if (res.listTagsForStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startEdgeConfigurationUpdate

<p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartEdgeConfigurationUpdateRequest;
import org.openapis.openapi.models.operations.StartEdgeConfigurationUpdateRequestBody;
import org.openapis.openapi.models.operations.StartEdgeConfigurationUpdateRequestBodyEdgeConfig;
import org.openapis.openapi.models.operations.StartEdgeConfigurationUpdateResponse;
import org.openapis.openapi.models.shared.DeletionConfig;
import org.openapis.openapi.models.shared.LocalSizeConfig;
import org.openapis.openapi.models.shared.MediaSourceConfig;
import org.openapis.openapi.models.shared.MediaUriTypeEnum;
import org.openapis.openapi.models.shared.RecorderConfig;
import org.openapis.openapi.models.shared.ScheduleConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StrategyOnFullSizeEnum;
import org.openapis.openapi.models.shared.UploaderConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartEdgeConfigurationUpdateRequest req = new StartEdgeConfigurationUpdateRequest(                new StartEdgeConfigurationUpdateRequestBody(                new StartEdgeConfigurationUpdateRequestBodyEdgeConfig() {{
                                                deletionConfig = new DeletionConfig() {{
                                                    deleteAfterUpload = false;
                                                    edgeRetentionInHours = 396506L;
                                                    localSizeConfig = new LocalSizeConfig() {{
                                                        maxLocalMediaSizeInMB = 675439L;
                                                        strategyOnFullSize = StrategyOnFullSizeEnum.DENY_NEW_MEDIA;
                                                    }};;
                                                }};;
                                                hubDeviceArn = "non";
                                                recorderConfig = new RecorderConfig(                new MediaSourceConfig("occaecati", MediaUriTypeEnum.RTSP_URI);) {{
                                                    scheduleConfig = new ScheduleConfig(881736L, "delectus");;
                                                }};;
                                                uploaderConfig = new UploaderConfig(                new ScheduleConfig(692532L, "provident"););;
                                            }};) {{
                                streamARN = "nam";
                                streamName = "id";
                            }};) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            StartEdgeConfigurationUpdateResponse res = sdk.sdk.startEdgeConfigurationUpdate(req);

            if (res.startEdgeConfigurationUpdateOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("omnis",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("magnam", "distinctio") {{
                                                    key = "perferendis";
                                                    value = "nihil";
                                                }}),
                                                add(new Tag("labore", "suscipit") {{
                                                    key = "id";
                                                    value = "labore";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagStream

<p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagStreamRequest;
import org.openapis.openapi.models.operations.TagStreamRequestBody;
import org.openapis.openapi.models.operations.TagStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagStreamRequest req = new TagStreamRequest(                new TagStreamRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ullam", "provident");
                                                put("quos", "sint");
                                                put("accusantium", "mollitia");
                                            }}) {{
                                streamARN = "reiciendis";
                                streamName = "mollitia";
                            }};) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            TagStreamResponse res = sdk.sdk.tagStream(req);

            if (res.tagStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody("doloribus",                 new String[]{{
                                                add("eius"),
                                                add("maxime"),
                                                add("deleniti"),
                                                add("facilis"),
                                            }});) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "architecto";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "nihil";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagStream

<p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagStreamRequest;
import org.openapis.openapi.models.operations.UntagStreamRequestBody;
import org.openapis.openapi.models.operations.UntagStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagStreamRequest req = new UntagStreamRequest(                new UntagStreamRequestBody(                new String[]{{
                                                add("sed"),
                                                add("saepe"),
                                                add("pariatur"),
                                                add("accusantium"),
                                            }}) {{
                                streamARN = "consequuntur";
                                streamName = "praesentium";
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            UntagStreamResponse res = sdk.sdk.untagStream(req);

            if (res.untagStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataRetention

<p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataRetentionRequest;
import org.openapis.openapi.models.operations.UpdateDataRetentionRequestBody;
import org.openapis.openapi.models.operations.UpdateDataRetentionRequestBodyOperationEnum;
import org.openapis.openapi.models.operations.UpdateDataRetentionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataRetentionRequest req = new UpdateDataRetentionRequest(                new UpdateDataRetentionRequestBody("excepturi", 139972L, UpdateDataRetentionRequestBodyOperationEnum.INCREASE_DATA_RETENTION) {{
                                streamARN = "accusantium";
                                streamName = "ab";
                            }};) {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            UpdateDataRetentionResponse res = sdk.sdk.updateDataRetention(req);

            if (res.updateDataRetentionOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateImageGenerationConfiguration

Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateImageGenerationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateImageGenerationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateImageGenerationConfigurationRequestBodyImageGenerationConfiguration;
import org.openapis.openapi.models.operations.UpdateImageGenerationConfigurationResponse;
import org.openapis.openapi.models.shared.ConfigurationStatusEnum;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.ImageGenerationDestinationConfig;
import org.openapis.openapi.models.shared.ImageSelectorTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateImageGenerationConfigurationRequest req = new UpdateImageGenerationConfigurationRequest(                new UpdateImageGenerationConfigurationRequestBody() {{
                                imageGenerationConfiguration = new UpdateImageGenerationConfigurationRequestBodyImageGenerationConfiguration() {{
                                    destinationConfig = new ImageGenerationDestinationConfig("nemo", "voluptatibus");;
                                    format = FormatEnum.JPEG;
                                    formatConfig = new java.util.HashMap<String, String>() {{
                                        put("amet", "aut");
                                        put("cumque", "corporis");
                                        put("hic", "libero");
                                        put("nobis", "dolores");
                                    }};
                                    heightPixels = 339404L;
                                    imageSelectorType = ImageSelectorTypeEnum.PRODUCER_TIMESTAMP;
                                    samplingInterval = 489549L;
                                    status = ConfigurationStatusEnum.ENABLED;
                                    widthPixels = 338985L;
                                }};;
                                streamARN = "nesciunt";
                                streamName = "eos";
                            }};) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
            }};            

            UpdateImageGenerationConfigurationResponse res = sdk.sdk.updateImageGenerationConfiguration(req);

            if (res.updateImageGenerationConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMediaStorageConfiguration

<p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMediaStorageConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateMediaStorageConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateMediaStorageConfigurationRequestBodyMediaStorageConfiguration;
import org.openapis.openapi.models.operations.UpdateMediaStorageConfigurationResponse;
import org.openapis.openapi.models.shared.MediaStorageConfigurationStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMediaStorageConfigurationRequest req = new UpdateMediaStorageConfigurationRequest(                new UpdateMediaStorageConfigurationRequestBody("recusandae",                 new UpdateMediaStorageConfigurationRequestBodyMediaStorageConfiguration() {{
                                                status = MediaStorageConfigurationStatusEnum.DISABLED;
                                                streamARN = "facilis";
                                            }};);) {{
                xAmzAlgorithm = "perspiciatis";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "porro";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "error";
                xAmzSignedHeaders = "eaque";
            }};            

            UpdateMediaStorageConfigurationResponse res = sdk.sdk.updateMediaStorageConfiguration(req);

            if (res.updateMediaStorageConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNotificationConfiguration

Updates the notification information for a stream.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNotificationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateNotificationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateNotificationConfigurationRequestBodyNotificationConfiguration;
import org.openapis.openapi.models.operations.UpdateNotificationConfigurationResponse;
import org.openapis.openapi.models.shared.ConfigurationStatusEnum;
import org.openapis.openapi.models.shared.NotificationDestinationConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNotificationConfigurationRequest req = new UpdateNotificationConfigurationRequest(                new UpdateNotificationConfigurationRequestBody() {{
                                notificationConfiguration = new UpdateNotificationConfigurationRequestBodyNotificationConfiguration() {{
                                    destinationConfig = new NotificationDestinationConfig("rerum");;
                                    status = ConfigurationStatusEnum.ENABLED;
                                }};;
                                streamARN = "asperiores";
                                streamName = "earum";
                            }};) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            UpdateNotificationConfigurationResponse res = sdk.sdk.updateNotificationConfiguration(req);

            if (res.updateNotificationConfigurationOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSignalingChannel

<p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSignalingChannelRequest;
import org.openapis.openapi.models.operations.UpdateSignalingChannelRequestBody;
import org.openapis.openapi.models.operations.UpdateSignalingChannelRequestBodySingleMasterConfiguration;
import org.openapis.openapi.models.operations.UpdateSignalingChannelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSignalingChannelRequest req = new UpdateSignalingChannelRequest(                new UpdateSignalingChannelRequestBody("delectus", "quaerat") {{
                                singleMasterConfiguration = new UpdateSignalingChannelRequestBodySingleMasterConfiguration() {{
                                    messageTtlSeconds = 554242L;
                                }};;
                            }};) {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolorem";
                xAmzDate = "dolor";
                xAmzSecurityToken = "qui";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "hic";
            }};            

            UpdateSignalingChannelResponse res = sdk.sdk.updateSignalingChannel(req);

            if (res.updateSignalingChannelOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStream

<p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStreamRequest;
import org.openapis.openapi.models.operations.UpdateStreamRequestBody;
import org.openapis.openapi.models.operations.UpdateStreamResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateStreamRequest req = new UpdateStreamRequest(                new UpdateStreamRequestBody("cum") {{
                                deviceName = "voluptate";
                                mediaType = "dignissimos";
                                streamARN = "reiciendis";
                                streamName = "amet";
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
            }};            

            UpdateStreamResponse res = sdk.sdk.updateStream(req);

            if (res.updateStreamOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
