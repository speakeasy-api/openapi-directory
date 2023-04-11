import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyAggregatesErrorCodeEnum } from "./batchgetassetpropertyaggregateserrorcodeenum";
/**
 * Contains error information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.
 */
export declare class BatchGetAssetPropertyAggregatesErrorEntry extends SpeakeasyBase {
    entryId: string;
    errorCode: BatchGetAssetPropertyAggregatesErrorCodeEnum;
    errorMessage: string;
}
