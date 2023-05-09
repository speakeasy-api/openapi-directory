# SDK

## Overview

<fullname>Amazon DynamoDB</fullname> <p>Amazon DynamoDB Streams provides API actions for accessing streams and processing stream records. To learn more about application development with Streams, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html">Capturing Table Activity with DynamoDB Streams</a> in the Amazon DynamoDB Developer Guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/dynamodb/>
### Available Operations

* [describeStream](#describestream) - <p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p> <note> <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p> </note> <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code> are present, then that shard is closed and can no longer receive more data.</p>
* [getRecords](#getrecords) - <p>Retrieves the stream records from a given shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.</p> <note> <p> <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first.</p> </note>
* [getShardIterator](#getsharditerator) - <p>Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent <code>GetRecords</code> request to read the stream records from the shard.</p> <note> <p>A shard iterator expires 15 minutes after it is returned to the requester.</p> </note>
* [listStreams](#liststreams) - <p>Returns an array of stream ARNs associated with the current account and endpoint. If the <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the streams ARNs for that table.</p> <note> <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p> </note>

## describeStream

<p>Returns information about a stream, including the current status of the stream, its Amazon Resource Name (ARN), the composition of its shards, and its corresponding DynamoDB table.</p> <note> <p>You can call <code>DescribeStream</code> at a maximum rate of 10 times per second.</p> </note> <p>Each shard in the stream has a <code>SequenceNumberRange</code> associated with it. If the <code>SequenceNumberRange</code> has a <code>StartingSequenceNumber</code> but no <code>EndingSequenceNumber</code>, then the shard is still open (able to receive more stream records). If both <code>StartingSequenceNumber</code> and <code>EndingSequenceNumber</code> are present, then that shard is closed and can no longer receive more data.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeStreamRequest;
import org.openapis.openapi.models.operations.DescribeStreamResponse;
import org.openapis.openapi.models.operations.DescribeStreamXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeStreamInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeStreamRequest req = new DescribeStreamRequest(                new DescribeStreamInput("iure") {{
                                exclusiveStartShardId = "magnam";
                                limit = 891773L;
                            }};, DescribeStreamXAmzTargetEnum.DYNAMO_DB_STREAMS20120810_DESCRIBE_STREAM) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
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

## getRecords

<p>Retrieves the stream records from a given shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.</p> <note> <p> <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecordsRequest;
import org.openapis.openapi.models.operations.GetRecordsResponse;
import org.openapis.openapi.models.operations.GetRecordsXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetRecordsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecordsRequest req = new GetRecordsRequest(                new GetRecordsInput("iusto") {{
                                limit = 568045L;
                            }};, GetRecordsXAmzTargetEnum.DYNAMO_DB_STREAMS20120810_GET_RECORDS) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "temporibus";
                xAmzDate = "ab";
                xAmzSecurityToken = "quis";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetRecordsResponse res = sdk.sdk.getRecords(req);

            if (res.getRecordsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShardIterator

<p>Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent <code>GetRecords</code> request to read the stream records from the shard.</p> <note> <p>A shard iterator expires 15 minutes after it is returned to the requester.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShardIteratorRequest;
import org.openapis.openapi.models.operations.GetShardIteratorResponse;
import org.openapis.openapi.models.operations.GetShardIteratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetShardIteratorInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ShardIteratorTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetShardIteratorRequest req = new GetShardIteratorRequest(                new GetShardIteratorInput("ipsam", ShardIteratorTypeEnum.AFTER_SEQUENCE_NUMBER, "sapiente") {{
                                sequenceNumber = "quo";
                            }};, GetShardIteratorXAmzTargetEnum.DYNAMO_DB_STREAMS20120810_GET_SHARD_ITERATOR) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            GetShardIteratorResponse res = sdk.sdk.getShardIterator(req);

            if (res.getShardIteratorOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listStreams

<p>Returns an array of stream ARNs associated with the current account and endpoint. If the <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the streams ARNs for that table.</p> <note> <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListStreamsRequest;
import org.openapis.openapi.models.operations.ListStreamsResponse;
import org.openapis.openapi.models.operations.ListStreamsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListStreamsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListStreamsRequest req = new ListStreamsRequest(                new ListStreamsInput() {{
                                exclusiveStartStreamArn = "totam";
                                limit = 780529L;
                                tableName = "dolorum";
                            }};, ListStreamsXAmzTargetEnum.DYNAMO_DB_STREAMS20120810_LIST_STREAMS) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
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
