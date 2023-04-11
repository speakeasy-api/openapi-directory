import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDetectEntitiesItemResult } from "./batchdetectentitiesitemresult";
import { BatchItemError } from "./batchitemerror";
/**
 * Success
 */
export declare class BatchDetectEntitiesResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectEntitiesItemResult[];
}
