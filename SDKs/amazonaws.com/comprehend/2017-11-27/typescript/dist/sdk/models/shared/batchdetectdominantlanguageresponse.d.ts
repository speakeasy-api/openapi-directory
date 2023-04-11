import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDetectDominantLanguageItemResult } from "./batchdetectdominantlanguageitemresult";
import { BatchItemError } from "./batchitemerror";
/**
 * Success
 */
export declare class BatchDetectDominantLanguageResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectDominantLanguageItemResult[];
}
