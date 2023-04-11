import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyAggregatesErrorCodeEnum } from "./batchgetassetpropertyaggregateserrorcodeenum";
/**
 * Contains the error code and the timestamp for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.
 */
export declare class BatchGetAssetPropertyAggregatesErrorInfo extends SpeakeasyBase {
    errorCode: BatchGetAssetPropertyAggregatesErrorCodeEnum;
    errorTimestamp: Date;
}
