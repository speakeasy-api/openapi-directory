import { SpeakeasyBase } from "../../../internal/utils";
import { DeadLetterConfig } from "./deadletterconfig";
import { OnPartialBatchItemFailureStreamsEnum } from "./onpartialbatchitemfailurestreamsenum";
/**
 * The parameters for using a DynamoDB stream as a source.
 */
export declare class UpdatePipeSourceDynamoDBStreamParameters extends SpeakeasyBase {
    batchSize?: number;
    deadLetterConfig?: DeadLetterConfig;
    maximumBatchingWindowInSeconds?: number;
    maximumRecordAgeInSeconds?: number;
    maximumRetryAttempts?: number;
    onPartialBatchItemFailure?: OnPartialBatchItemFailureStreamsEnum;
    parallelizationFactor?: number;
}
