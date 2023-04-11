import { SpeakeasyBase } from "../../../internal/utils";
import { DeadLetterConfig } from "./deadletterconfig";
import { KinesisStreamStartPositionEnum } from "./kinesisstreamstartpositionenum";
import { OnPartialBatchItemFailureStreamsEnum } from "./onpartialbatchitemfailurestreamsenum";
/**
 * The parameters for using a Kinesis stream as a source.
 */
export declare class PipeSourceKinesisStreamParameters extends SpeakeasyBase {
    batchSize?: number;
    deadLetterConfig?: DeadLetterConfig;
    maximumBatchingWindowInSeconds?: number;
    maximumRecordAgeInSeconds?: number;
    maximumRetryAttempts?: number;
    onPartialBatchItemFailure?: OnPartialBatchItemFailureStreamsEnum;
    parallelizationFactor?: number;
    startingPosition: KinesisStreamStartPositionEnum;
    startingPositionTimestamp?: Date;
}
