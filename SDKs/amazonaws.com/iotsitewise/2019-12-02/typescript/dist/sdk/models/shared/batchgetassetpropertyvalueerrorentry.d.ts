import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyValueErrorCodeEnum } from "./batchgetassetpropertyvalueerrorcodeenum";
/**
 * Contains error information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.
 */
export declare class BatchGetAssetPropertyValueErrorEntry extends SpeakeasyBase {
    entryId: string;
    errorCode: BatchGetAssetPropertyValueErrorCodeEnum;
    errorMessage: string;
}
