# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/kinesisvideo/2017-09-30/go
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

    req := operations.CreateSignalingChannelRequest{
        RequestBody: operations.CreateSignalingChannelRequestBody{
            ChannelName: "corrupti",
            ChannelType: "FULL_MESH",
            SingleMasterConfiguration: &operations.CreateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: 715190,
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "unde",
                    Value: "nulla",
                },
                shared.Tag{
                    Key: "corrupti",
                    Value: "illum",
                },
                shared.Tag{
                    Key: "vel",
                    Value: "error",
                },
                shared.Tag{
                    Key: "deserunt",
                    Value: "suscipit",
                },
            },
        },
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
    }

    ctx := context.Background()
    res, err := s.CreateSignalingChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSignalingChannelOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateSignalingChannel` - <p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
* `CreateStream` - <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
* `DeleteSignalingChannel` - Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.
* `DeleteStream` - <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
* `DescribeEdgeConfiguration` - Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.
* `DescribeImageGenerationConfiguration` - Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.
* `DescribeMappedResourceConfiguration` - <p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>
* `DescribeMediaStorageConfiguration` - Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.
* `DescribeNotificationConfiguration` - Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.
* `DescribeSignalingChannel` - Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
* `DescribeStream` - Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 
* `GetDataEndpoint` - <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
* `GetSignalingChannelEndpoint` - <p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>
* `ListSignalingChannels` - Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.
* `ListStreams` - Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 
* `ListTagsForResource` - Returns a list of tags associated with the specified signaling channel.
* `ListTagsForStream` - <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
* `StartEdgeConfigurationUpdate` - <p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>
* `TagResource` - Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.
* `TagStream` - <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>
* `UntagResource` - Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
* `UntagStream` - <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
* `UpdateDataRetention` - <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
* `UpdateImageGenerationConfiguration` - Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.
* `UpdateMediaStorageConfiguration` - <p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>
* `UpdateNotificationConfiguration` - Updates the notification information for a stream.
* `UpdateSignalingChannel` - <p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>
* `UpdateStream` - <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
