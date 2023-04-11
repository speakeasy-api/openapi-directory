import { SpeakeasyBase } from "../../../internal/utils";
import { AssetInfo } from "./assetinfo";
/**
 * Success
 */
export declare class ListAssetsOutput extends SpeakeasyBase {
    assets?: AssetInfo[];
    /**
     * The pagination token.
     */
    nextToken?: string;
}
