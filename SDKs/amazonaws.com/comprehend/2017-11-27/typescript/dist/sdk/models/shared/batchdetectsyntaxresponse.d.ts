import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDetectSyntaxItemResult } from "./batchdetectsyntaxitemresult";
import { BatchItemError } from "./batchitemerror";
/**
 * Success
 */
export declare class BatchDetectSyntaxResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectSyntaxItemResult[];
}
