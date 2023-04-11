import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDetectKeyPhrasesItemResult } from "./batchdetectkeyphrasesitemresult";
import { BatchItemError } from "./batchitemerror";
/**
 * Success
 */
export declare class BatchDetectKeyPhrasesResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectKeyPhrasesItemResult[];
}
