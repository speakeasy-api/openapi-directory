import { SpeakeasyBase } from "../../../internal/utils";
import { DeadLetterConfig } from "./deadletterconfig";
import { DynamoDBStreamStartPositionEnum } from "./dynamodbstreamstartpositionenum";
import { OnPartialBatchItemFailureStreamsEnum } from "./onpartialbatchitemfailurestreamsenum";
/**
 * The parameters for using a DynamoDB stream as a source.
 */
export declare class PipeSourceDynamoDBStreamParameters extends SpeakeasyBase {
    batchSize?: number;
    deadLetterConfig?: DeadLetterConfig;
    maximumBatchingWindowInSeconds?: number;
    maximumRecordAgeInSeconds?: number;
    maximumRetryAttempts?: number;
    onPartialBatchItemFailure?: OnPartialBatchItemFailureStreamsEnum;
    parallelizationFactor?: number;
    startingPosition: DynamoDBStreamStartPositionEnum;
}
