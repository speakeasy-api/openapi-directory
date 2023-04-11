import { SpeakeasyBase } from "../../../internal/utils";
import { StartingPositionEnum } from "./startingpositionenum";
/**
 * Additional options for the Amazon Kinesis streaming data source.
 */
export declare class KinesisStreamingSourceOptions extends SpeakeasyBase {
    addIdleTimeBetweenReads?: boolean;
    addRecordTimestamp?: string;
    avoidEmptyBatches?: boolean;
    classification?: string;
    delimiter?: string;
    describeShardInterval?: number;
    emitConsumerLagMetrics?: string;
    endpointUrl?: string;
    idleTimeBetweenReadsInMs?: number;
    maxFetchRecordsPerShard?: number;
    maxFetchTimeInMs?: number;
    maxRecordPerRead?: number;
    maxRetryIntervalMs?: number;
    numRetries?: number;
    retryIntervalMs?: number;
    roleArn?: string;
    roleSessionName?: string;
    startingPosition?: StartingPositionEnum;
    streamArn?: string;
    streamName?: string;
}
