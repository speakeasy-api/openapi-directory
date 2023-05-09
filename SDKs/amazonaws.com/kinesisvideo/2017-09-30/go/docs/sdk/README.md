# SDK

## Overview

<p/>

Amazon Web Services documentation
<https://docs.aws.amazon.com/kinesisvideo/>
### Available Operations

* [CreateSignalingChannel](#createsignalingchannel) - <p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
* [CreateStream](#createstream) - <p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>
* [DeleteSignalingChannel](#deletesignalingchannel) - Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.
* [DeleteStream](#deletestream) - <p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>
* [DescribeEdgeConfiguration](#describeedgeconfiguration) - Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.
* [DescribeImageGenerationConfiguration](#describeimagegenerationconfiguration) - Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.
* [DescribeMappedResourceConfiguration](#describemappedresourceconfiguration) - <p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>
* [DescribeMediaStorageConfiguration](#describemediastorageconfiguration) - Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.
* [DescribeNotificationConfiguration](#describenotificationconfiguration) - Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.
* [DescribeSignalingChannel](#describesignalingchannel) - Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.
* [DescribeStream](#describestream) - Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 
* [GetDataEndpoint](#getdataendpoint) - <p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>
* [GetSignalingChannelEndpoint](#getsignalingchannelendpoint) - <p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>
* [ListSignalingChannels](#listsignalingchannels) - Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.
* [ListStreams](#liststreams) - Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 
* [ListTagsForResource](#listtagsforresource) - Returns a list of tags associated with the specified signaling channel.
* [ListTagsForStream](#listtagsforstream) - <p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
* [StartEdgeConfigurationUpdate](#startedgeconfigurationupdate) - <p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>
* [TagResource](#tagresource) - Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.
* [TagStream](#tagstream) - <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>
* [UntagResource](#untagresource) - Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
* [UntagStream](#untagstream) - <p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>
* [UpdateDataRetention](#updatedataretention) - <p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>
* [UpdateImageGenerationConfiguration](#updateimagegenerationconfiguration) - Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.
* [UpdateMediaStorageConfiguration](#updatemediastorageconfiguration) - <p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>
* [UpdateNotificationConfiguration](#updatenotificationconfiguration) - Updates the notification information for a stream.
* [UpdateSignalingChannel](#updatesignalingchannel) - <p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>
* [UpdateStream](#updatestream) - <p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>

## CreateSignalingChannel

<p>Creates a signaling channel. </p> <p> <code>CreateSignalingChannel</code> is an asynchronous operation.</p>

### Example Usage

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
    res, err := s.SDK.CreateSignalingChannel(ctx, operations.CreateSignalingChannelRequest{
        RequestBody: operations.CreateSignalingChannelRequestBody{
            ChannelName: "molestiae",
            ChannelType: operations.CreateSignalingChannelRequestBodyChannelTypeEnumFullMesh.ToPointer(),
            SingleMasterConfiguration: &operations.CreateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: sdk.Int64(812169),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iusto",
                    Value: "excepturi",
                },
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSignalingChannelOutput != nil {
        // handle response
    }
}
```

## CreateStream

<p>Creates a new Kinesis video stream. </p> <p>When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version. </p> <p> <code>CreateStream</code> is an asynchronous operation.</p> <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p> <p>You must have permissions for the <code>KinesisVideo:CreateStream</code> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateStream(ctx, operations.CreateStreamRequest{
        RequestBody: operations.CreateStreamRequestBody{
            DataRetentionInHours: sdk.Int64(778157),
            DeviceName: sdk.String("odit"),
            KmsKeyID: sdk.String("at"),
            MediaType: sdk.String("at"),
            StreamName: "maiores",
            Tags: map[string]string{
                "quod": "quod",
                "esse": "totam",
            },
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateStreamOutput != nil {
        // handle response
    }
}
```

## DeleteSignalingChannel

Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteSignalingChannel(ctx, operations.DeleteSignalingChannelRequest{
        RequestBody: operations.DeleteSignalingChannelRequestBody{
            ChannelARN: "deleniti",
            CurrentVersion: sdk.String("hic"),
        },
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("beatae"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSignalingChannelOutput != nil {
        // handle response
    }
}
```

## DeleteStream

<p>Deletes a Kinesis video stream and the data contained in the stream. </p> <p>This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.</p> <p> </p> <p> To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p>This operation requires permission for the <code>KinesisVideo:DeleteStream</code> action.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStream(ctx, operations.DeleteStreamRequest{
        RequestBody: operations.DeleteStreamRequestBody{
            CurrentVersion: sdk.String("impedit"),
            StreamARN: "cum",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteStreamOutput != nil {
        // handle response
    }
}
```

## DescribeEdgeConfiguration

Describes a stream’s edge configuration that was set using the <code>StartEdgeConfigurationUpdate</code> API. Use this API to get the status of the configuration if the configuration is in sync with the Edge Agent.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEdgeConfiguration(ctx, operations.DescribeEdgeConfigurationRequest{
        RequestBody: operations.DescribeEdgeConfigurationRequestBody{
            StreamARN: sdk.String("sed"),
            StreamName: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEdgeConfigurationOutput != nil {
        // handle response
    }
}
```

## DescribeImageGenerationConfiguration

Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeImageGenerationConfiguration(ctx, operations.DescribeImageGenerationConfigurationRequest{
        RequestBody: operations.DescribeImageGenerationConfigurationRequestBody{
            StreamARN: sdk.String("corporis"),
            StreamName: sdk.String("iste"),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeImageGenerationConfigurationOutput != nil {
        // handle response
    }
}
```

## DescribeMappedResourceConfiguration

<p>Returns the most current information about the stream. Either streamName or streamARN should be provided in the input.</p> <p>Returns the most current information about the stream. The <code>streamName</code> or <code>streamARN</code> should be provided in the input.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMappedResourceConfiguration(ctx, operations.DescribeMappedResourceConfigurationRequest{
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("laborum"),
        RequestBody: operations.DescribeMappedResourceConfigurationRequestBody{
            MaxResults: sdk.Int64(170909),
            NextToken: sdk.String("dolorem"),
            StreamARN: sdk.String("corporis"),
            StreamName: sdk.String("explicabo"),
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMappedResourceConfigurationOutput != nil {
        // handle response
    }
}
```

## DescribeMediaStorageConfiguration

Returns the most current information about the channel. Specify the <code>ChannelName</code> or <code>ChannelARN</code> in the input.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeMediaStorageConfiguration(ctx, operations.DescribeMediaStorageConfigurationRequest{
        RequestBody: operations.DescribeMediaStorageConfigurationRequestBody{
            ChannelARN: sdk.String("iure"),
            ChannelName: sdk.String("culpa"),
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeMediaStorageConfigurationOutput != nil {
        // handle response
    }
}
```

## DescribeNotificationConfiguration

Gets the <code>NotificationConfiguration</code> for a given Kinesis video stream.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeNotificationConfiguration(ctx, operations.DescribeNotificationConfigurationRequest{
        RequestBody: operations.DescribeNotificationConfigurationRequestBody{
            StreamARN: sdk.String("repellat"),
            StreamName: sdk.String("mollitia"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeNotificationConfigurationOutput != nil {
        // handle response
    }
}
```

## DescribeSignalingChannel

Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeSignalingChannel(ctx, operations.DescribeSignalingChannelRequest{
        RequestBody: operations.DescribeSignalingChannelRequestBody{
            ChannelARN: sdk.String("quia"),
            ChannelName: sdk.String("quis"),
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSignalingChannelOutput != nil {
        // handle response
    }
}
```

## DescribeStream

Returns the most current information about the specified stream. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeStream(ctx, operations.DescribeStreamRequest{
        RequestBody: operations.DescribeStreamRequestBody{
            StreamARN: sdk.String("tenetur"),
            StreamName: sdk.String("ipsam"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeStreamOutput != nil {
        // handle response
    }
}
```

## GetDataEndpoint

<p>Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write to it (using the <code>PutMedia</code> operation). </p> <note> <p>The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.</p> </note> <p>In the request, specify the stream either by <code>StreamName</code> or <code>StreamARN</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDataEndpoint(ctx, operations.GetDataEndpointRequest{
        RequestBody: operations.GetDataEndpointRequestBody{
            APIName: operations.GetDataEndpointRequestBodyAPINameEnumPutMedia,
            StreamARN: sdk.String("reiciendis"),
            StreamName: sdk.String("voluptatibus"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDataEndpointOutput != nil {
        // handle response
    }
}
```

## GetSignalingChannelEndpoint

<p>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter, which consists of the <code>Protocols</code> and <code>Role</code> properties.</p> <p> <code>Protocols</code> is used to determine the communication mechanism. For example, if you specify <code>WSS</code> as the protocol, this API produces a secure websocket endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS endpoint. </p> <p> <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A <code>VIEWER</code> role results in this API generating an endpoint that a client can use to communicate only with a <code>MASTER</code>. </p>

### Example Usage

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
    res, err := s.SDK.GetSignalingChannelEndpoint(ctx, operations.GetSignalingChannelEndpointRequest{
        RequestBody: operations.GetSignalingChannelEndpointRequestBody{
            ChannelARN: "cum",
            SingleMasterChannelEndpointConfiguration: &operations.GetSignalingChannelEndpointRequestBodySingleMasterChannelEndpointConfiguration{
                Protocols: []shared.ChannelProtocolEnum{
                    shared.ChannelProtocolEnumWss,
                },
                Role: shared.ChannelRoleEnumMaster.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("dolore"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSignalingChannelEndpointOutput != nil {
        // handle response
    }
}
```

## ListSignalingChannels

Returns an array of <code>ChannelInfo</code> objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a <code>ChannelNameCondition</code>.

### Example Usage

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
    res, err := s.SDK.ListSignalingChannels(ctx, operations.ListSignalingChannelsRequest{
        MaxResults: sdk.String("harum"),
        NextToken: sdk.String("enim"),
        RequestBody: operations.ListSignalingChannelsRequestBody{
            ChannelNameCondition: &operations.ListSignalingChannelsRequestBodyChannelNameCondition{
                ComparisonOperator: shared.ComparisonOperatorEnumBeginsWith.ToPointer(),
                ComparisonValue: sdk.String("accusamus"),
            },
            MaxResults: sdk.Int64(414263),
            NextToken: sdk.String("repudiandae"),
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("molestias"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSignalingChannelsOutput != nil {
        // handle response
    }
}
```

## ListStreams

Returns an array of <code>StreamInfo</code> objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a <code>StreamNameCondition</code>. 

### Example Usage

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
    res, err := s.SDK.ListStreams(ctx, operations.ListStreamsRequest{
        MaxResults: sdk.String("praesentium"),
        NextToken: sdk.String("rem"),
        RequestBody: operations.ListStreamsRequestBody{
            MaxResults: sdk.Int64(916723),
            NextToken: sdk.String("quasi"),
            StreamNameCondition: &operations.ListStreamsRequestBodyStreamNameCondition{
                ComparisonOperator: shared.ComparisonOperatorEnumBeginsWith.ToPointer(),
                ComparisonValue: sdk.String("repudiandae"),
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListStreamsOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns a list of tags associated with the specified signaling channel.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        RequestBody: operations.ListTagsForResourceRequestBody{
            NextToken: sdk.String("quibusdam"),
            ResourceARN: "explicabo",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceOutput != nil {
        // handle response
    }
}
```

## ListTagsForStream

<p>Returns a list of tags associated with the specified stream.</p> <p>In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForStream(ctx, operations.ListTagsForStreamRequest{
        RequestBody: operations.ListTagsForStreamRequestBody{
            NextToken: sdk.String("cupiditate"),
            StreamARN: sdk.String("quos"),
            StreamName: sdk.String("perferendis"),
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForStreamOutput != nil {
        // handle response
    }
}
```

## StartEdgeConfigurationUpdate

<p>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The <code>SyncStatus</code> will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. </p> <p>If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to <code>SYNCING</code>. You will have to wait for the sync status to reach a terminal state such as: <code>IN_SYNC</code>, or <code>SYNC_FAILED</code>, before using this API again. If you invoke this API during the syncing process, a <code>ResourceInUseException</code> will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the <code>SYNC_FAILED</code> state.</p>

### Example Usage

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
    res, err := s.SDK.StartEdgeConfigurationUpdate(ctx, operations.StartEdgeConfigurationUpdateRequest{
        RequestBody: operations.StartEdgeConfigurationUpdateRequestBody{
            EdgeConfig: operations.StartEdgeConfigurationUpdateRequestBodyEdgeConfig{
                DeletionConfig: &shared.DeletionConfig{
                    DeleteAfterUpload: sdk.Bool(false),
                    EdgeRetentionInHours: sdk.Int64(270008),
                    LocalSizeConfig: &shared.LocalSizeConfig{
                        MaxLocalMediaSizeInMB: sdk.Int64(703737),
                        StrategyOnFullSize: shared.StrategyOnFullSizeEnumDenyNewMedia.ToPointer(),
                    },
                },
                HubDeviceArn: sdk.String("labore"),
                RecorderConfig: &shared.RecorderConfig{
                    MediaSourceConfig: shared.MediaSourceConfig{
                        MediaURISecretArn: "delectus",
                        MediaURIType: shared.MediaURITypeEnumRtspURI,
                    },
                    ScheduleConfig: &shared.ScheduleConfig{
                        DurationInSeconds: 248753,
                        ScheduleExpression: "eligendi",
                    },
                },
                UploaderConfig: &shared.UploaderConfig{
                    ScheduleConfig: shared.ScheduleConfig{
                        DurationInSeconds: 576157,
                        ScheduleExpression: "aliquid",
                    },
                },
            },
            StreamARN: sdk.String("provident"),
            StreamName: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartEdgeConfigurationUpdateOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more tags to a signaling channel. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>.

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            ResourceARN: "in",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "maiores",
                    Value: "rerum",
                },
                shared.Tag{
                    Key: "dicta",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "cumque",
                    Value: "facere",
                },
                shared.Tag{
                    Key: "ea",
                    Value: "aliquid",
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceOutput != nil {
        // handle response
    }
}
```

## TagStream

<p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Billing and Cost Management and Cost Management User Guide</i>. </p> <p>You must provide either the <code>StreamName</code> or the <code>StreamARN</code>.</p> <p>This operation requires permission for the <code>KinesisVideo:TagStream</code> action.</p> <p>A Kinesis video stream can support up to 50 tags.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagStream(ctx, operations.TagStreamRequest{
        RequestBody: operations.TagStreamRequestBody{
            StreamARN: sdk.String("quidem"),
            StreamName: sdk.String("provident"),
            Tags: map[string]string{
                "id": "blanditiis",
                "deleniti": "sapiente",
                "amet": "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("nihil"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagStreamOutput != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        RequestBody: operations.UntagResourceRequestBody{
            ResourceARN: "magnam",
            TagKeyList: []string{
                "id",
                "labore",
                "labore",
            },
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceOutput != nil {
        // handle response
    }
}
```

## UntagStream

<p>Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.</p> <p>In the request, you must provide the <code>StreamName</code> or <code>StreamARN</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagStream(ctx, operations.UntagStreamRequest{
        RequestBody: operations.UntagStreamRequestBody{
            StreamARN: sdk.String("magnam"),
            StreamName: sdk.String("et"),
            TagKeyList: []string{
                "ullam",
                "provident",
                "quos",
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagStreamOutput != nil {
        // handle response
    }
}
```

## UpdateDataRetention

<p> Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the <code>Operation</code> parameter in the request body. In the request, you must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p> <note> <p>The retention period that you specify replaces the current value.</p> </note> <p>This operation requires permission for the <code>KinesisVideo:UpdateDataRetention</code> action.</p> <p>Changing the data retention period affects the data in the stream as follows:</p> <ul> <li> <p>If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.</p> </li> <li> <p>If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDataRetention(ctx, operations.UpdateDataRetentionRequest{
        RequestBody: operations.UpdateDataRetentionRequestBody{
            CurrentVersion: "dolor",
            DataRetentionChangeInHours: 896547,
            Operation: operations.UpdateDataRetentionRequestBodyOperationEnumIncreaseDataRetention,
            StreamARN: sdk.String("nemo"),
            StreamName: sdk.String("quasi"),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDataRetentionOutput != nil {
        // handle response
    }
}
```

## UpdateImageGenerationConfiguration

Updates the <code>StreamInfo</code> and <code>ImageProcessingConfiguration</code> fields.

### Example Usage

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
    res, err := s.SDK.UpdateImageGenerationConfiguration(ctx, operations.UpdateImageGenerationConfigurationRequest{
        RequestBody: operations.UpdateImageGenerationConfigurationRequestBody{
            ImageGenerationConfiguration: &operations.UpdateImageGenerationConfigurationRequestBodyImageGenerationConfiguration{
                DestinationConfig: &shared.ImageGenerationDestinationConfig{
                    DestinationRegion: "in",
                    URI: "http://burly-trachoma.info",
                },
                Format: shared.FormatEnumPng.ToPointer(),
                FormatConfig: map[string]string{
                    "repellat": "quibusdam",
                    "sed": "saepe",
                },
                HeightPixels: sdk.Int64(868126),
                ImageSelectorType: shared.ImageSelectorTypeEnumServerTimestamp.ToPointer(),
                SamplingInterval: sdk.Int64(162493),
                Status: shared.ConfigurationStatusEnumDisabled.ToPointer(),
                WidthPixels: sdk.Int64(615560),
            },
            StreamARN: sdk.String("magni"),
            StreamName: sdk.String("sunt"),
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateImageGenerationConfigurationOutput != nil {
        // handle response
    }
}
```

## UpdateMediaStorageConfiguration

<p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are two signaling modes that can specified :</p> <ul> <li> <p>If the <code>StorageStatus</code> is disabled, no data will be stored, and the <code>StreamARN</code> parameter will not be needed. </p> </li> <li> <p>If the <code>StorageStatus</code> is enabled, the data will be stored in the <code>StreamARN</code> provided. </p> </li> </ul>

### Example Usage

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
    res, err := s.SDK.UpdateMediaStorageConfiguration(ctx, operations.UpdateMediaStorageConfigurationRequest{
        RequestBody: operations.UpdateMediaStorageConfigurationRequestBody{
            ChannelARN: "ea",
            MediaStorageConfiguration: operations.UpdateMediaStorageConfigurationRequestBodyMediaStorageConfiguration{
                Status: shared.MediaStorageConfigurationStatusEnumEnabled.ToPointer(),
                StreamARN: sdk.String("ab"),
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("autem"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateMediaStorageConfigurationOutput != nil {
        // handle response
    }
}
```

## UpdateNotificationConfiguration

Updates the notification information for a stream.

### Example Usage

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
    res, err := s.SDK.UpdateNotificationConfiguration(ctx, operations.UpdateNotificationConfigurationRequest{
        RequestBody: operations.UpdateNotificationConfigurationRequestBody{
            NotificationConfiguration: &operations.UpdateNotificationConfigurationRequestBodyNotificationConfiguration{
                DestinationConfig: &shared.NotificationDestinationConfig{
                    URI: "https://half-wedge.com",
                },
                Status: shared.ConfigurationStatusEnumDisabled.ToPointer(),
            },
            StreamARN: sdk.String("amet"),
            StreamName: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNotificationConfigurationOutput != nil {
        // handle response
    }
}
```

## UpdateSignalingChannel

<p>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. </p> <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous <code>MessageTtlSeconds</code> value.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSignalingChannel(ctx, operations.UpdateSignalingChannelRequest{
        RequestBody: operations.UpdateSignalingChannelRequestBody{
            ChannelARN: "totam",
            CurrentVersion: "dignissimos",
            SingleMasterConfiguration: &operations.UpdateSignalingChannelRequestBodySingleMasterConfiguration{
                MessageTTLSeconds: sdk.Int64(54338),
            },
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSignalingChannelOutput != nil {
        // handle response
    }
}
```

## UpdateStream

<p>Updates stream metadata, such as the device name and media type.</p> <p>You must provide the stream name or the Amazon Resource Name (ARN) of the stream.</p> <p>To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the <code>DescribeStream</code> API. </p> <p> <code>UpdateStream</code> is an asynchronous operation, and takes time to complete.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateStream(ctx, operations.UpdateStreamRequest{
        RequestBody: operations.UpdateStreamRequestBody{
            CurrentVersion: "dolor",
            DeviceName: sdk.String("vero"),
            MediaType: sdk.String("nostrum"),
            StreamARN: sdk.String("hic"),
            StreamName: sdk.String("recusandae"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateStreamOutput != nil {
        // handle response
    }
}
```
