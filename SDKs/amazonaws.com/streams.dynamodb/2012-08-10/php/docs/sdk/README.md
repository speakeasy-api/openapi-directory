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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStreamRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeStreamInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeStreamXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeStreamRequest();
    $request->describeStreamInput = new DescribeStreamInput();
    $request->describeStreamInput->exclusiveStartShardId = 'deserunt';
    $request->describeStreamInput->limit = 384382;
    $request->describeStreamInput->streamArn = 'iure';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = DescribeStreamXAmzTargetEnum::DYNAMO_DB_STREAMS20120810_DESCRIBE_STREAM;

    $response = $sdk->sdk->describeStream($request);

    if ($response->describeStreamOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecords

<p>Retrieves the stream records from a given shard.</p> <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard iterator specifies the position in the shard from which you want to start reading stream records sequentially. If there are no stream records available in the portion of the shard that the iterator points to, <code>GetRecords</code> returns an empty list. Note that it might take multiple calls to get to a portion of the shard that contains stream records.</p> <note> <p> <code>GetRecords</code> can retrieve a maximum of 1 MB of data or 1000 stream records, whichever comes first.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRecordsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRecordsInput;
use \OpenAPI\OpenAPI\Models\Operations\GetRecordsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecordsRequest();
    $request->getRecordsInput = new GetRecordsInput();
    $request->getRecordsInput->limit = 791725;
    $request->getRecordsInput->shardIterator = 'placeat';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = GetRecordsXAmzTargetEnum::DYNAMO_DB_STREAMS20120810_GET_RECORDS;

    $response = $sdk->sdk->getRecords($request);

    if ($response->getRecordsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getShardIterator

<p>Returns a shard iterator. A shard iterator provides information about how to retrieve the stream records from within a shard. Use the shard iterator in a subsequent <code>GetRecords</code> request to read the stream records from the shard.</p> <note> <p>A shard iterator expires 15 minutes after it is returned to the requester.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetShardIteratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetShardIteratorInput;
use \OpenAPI\OpenAPI\Models\Shared\ShardIteratorTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetShardIteratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetShardIteratorRequest();
    $request->getShardIteratorInput = new GetShardIteratorInput();
    $request->getShardIteratorInput->sequenceNumber = 'quis';
    $request->getShardIteratorInput->shardId = 'veritatis';
    $request->getShardIteratorInput->shardIteratorType = ShardIteratorTypeEnum::AT_SEQUENCE_NUMBER;
    $request->getShardIteratorInput->streamArn = 'perferendis';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = GetShardIteratorXAmzTargetEnum::DYNAMO_DB_STREAMS20120810_GET_SHARD_ITERATOR;

    $response = $sdk->sdk->getShardIterator($request);

    if ($response->getShardIteratorOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStreams

<p>Returns an array of stream ARNs associated with the current account and endpoint. If the <code>TableName</code> parameter is present, then <code>ListStreams</code> will return only the streams ARNs for that table.</p> <note> <p>You can call <code>ListStreams</code> at a maximum rate of 5 times per second.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStreamsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListStreamsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStreamsRequest();
    $request->listStreamsInput = new ListStreamsInput();
    $request->listStreamsInput->exclusiveStartStreamArn = 'maiores';
    $request->listStreamsInput->limit = 473608;
    $request->listStreamsInput->tableName = 'quod';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = ListStreamsXAmzTargetEnum::DYNAMO_DB_STREAMS20120810_LIST_STREAMS;

    $response = $sdk->sdk->listStreams($request);

    if ($response->listStreamsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
