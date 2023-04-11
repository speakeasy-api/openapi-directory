import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";
/**
 * Success
 */
export declare class GetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
    assetPropertyValueHistory: AssetPropertyValue[];
    nextToken?: string;
}
