import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyValueHistoryErrorCodeEnum } from "./batchgetassetpropertyvaluehistoryerrorcodeenum";
/**
 * A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed.
 */
export declare class BatchGetAssetPropertyValueHistoryErrorEntry extends SpeakeasyBase {
    entryId: string;
    errorCode: BatchGetAssetPropertyValueHistoryErrorCodeEnum;
    errorMessage: string;
}
