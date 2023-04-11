import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";
/**
 * Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.
 */
export declare class BatchGetAssetPropertyValueHistorySuccessEntry extends SpeakeasyBase {
    assetPropertyValueHistory: AssetPropertyValue[];
    entryId: string;
}
