import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyValueErrorCodeEnum } from "./batchgetassetpropertyvalueerrorcodeenum";
/**
 * The error information, such as the error code and the timestamp.
 */
export declare class BatchGetAssetPropertyValueErrorInfo extends SpeakeasyBase {
    errorCode: BatchGetAssetPropertyValueErrorCodeEnum;
    errorTimestamp: Date;
}
