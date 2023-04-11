import { SpeakeasyBase } from "../../../internal/utils";
import { AssetModelPropertySummary } from "./assetmodelpropertysummary";
/**
 * Success
 */
export declare class ListAssetModelPropertiesResponse extends SpeakeasyBase {
    assetModelPropertySummaries: AssetModelPropertySummary[];
    nextToken?: string;
}
