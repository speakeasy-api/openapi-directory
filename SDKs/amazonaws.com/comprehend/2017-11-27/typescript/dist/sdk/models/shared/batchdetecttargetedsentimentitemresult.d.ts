import { SpeakeasyBase } from "../../../internal/utils";
import { TargetedSentimentEntity } from "./targetedsentimententity";
/**
 * Analysis results for one of the documents in the batch.
 */
export declare class BatchDetectTargetedSentimentItemResult extends SpeakeasyBase {
    entities?: TargetedSentimentEntity[];
    index?: number;
}
