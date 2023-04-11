import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The parameters for using a Amazon SQS stream as a source.
 */
export declare class UpdatePipeSourceSqsQueueParameters extends SpeakeasyBase {
    batchSize?: number;
    maximumBatchingWindowInSeconds?: number;
}
