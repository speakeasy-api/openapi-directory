import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";
/**
 * Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.
 */
export declare class BatchGetAssetPropertyValueSuccessEntry extends SpeakeasyBase {
    /**
     * Contains asset property value information.
     */
    assetPropertyValue?: AssetPropertyValue;
    entryId: string;
}
