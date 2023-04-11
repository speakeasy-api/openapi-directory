import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDetectSentimentItemResult } from "./batchdetectsentimentitemresult";
import { BatchItemError } from "./batchitemerror";
/**
 * Success
 */
export declare class BatchDetectSentimentResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectSentimentItemResult[];
}
