import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyValueHistoryErrorCodeEnum } from "./batchgetassetpropertyvaluehistoryerrorcodeenum";
/**
 * The error information, such as the error code and the timestamp.
 */
export declare class BatchGetAssetPropertyValueHistoryErrorInfo extends SpeakeasyBase {
    errorCode: BatchGetAssetPropertyValueHistoryErrorCodeEnum;
    errorTimestamp: Date;
}
