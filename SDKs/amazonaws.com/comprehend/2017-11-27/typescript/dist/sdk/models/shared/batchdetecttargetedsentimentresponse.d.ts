import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDetectTargetedSentimentItemResult } from "./batchdetecttargetedsentimentitemresult";
import { BatchItemError } from "./batchitemerror";
/**
 * Success
 */
export declare class BatchDetectTargetedSentimentResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectTargetedSentimentItemResult[];
}
