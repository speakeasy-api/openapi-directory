import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional options for streaming.
 */
export declare class KafkaStreamingSourceOptions extends SpeakeasyBase {
    addRecordTimestamp?: string;
    assign?: string;
    bootstrapServers?: string;
    classification?: string;
    connectionName?: string;
    delimiter?: string;
    emitConsumerLagMetrics?: string;
    endingOffsets?: string;
    includeHeaders?: boolean;
    maxOffsetsPerTrigger?: number;
    minPartitions?: number;
    numRetries?: number;
    pollTimeoutMs?: number;
    retryIntervalMs?: number;
    securityProtocol?: string;
    startingOffsets?: string;
    subscribePattern?: string;
    topicName?: string;
}
