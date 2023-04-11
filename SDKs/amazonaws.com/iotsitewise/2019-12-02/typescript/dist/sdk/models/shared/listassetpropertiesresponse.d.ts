import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertySummary } from "./assetpropertysummary";
/**
 * Success
 */
export declare class ListAssetPropertiesResponse extends SpeakeasyBase {
    assetPropertySummaries: AssetPropertySummary[];
    nextToken?: string;
}
