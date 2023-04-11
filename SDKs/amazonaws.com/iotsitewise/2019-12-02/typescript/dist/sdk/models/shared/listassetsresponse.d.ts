import { SpeakeasyBase } from "../../../internal/utils";
import { AssetSummary } from "./assetsummary";
/**
 * Success
 */
export declare class ListAssetsResponse extends SpeakeasyBase {
    assetSummaries: AssetSummary[];
    nextToken?: string;
}
