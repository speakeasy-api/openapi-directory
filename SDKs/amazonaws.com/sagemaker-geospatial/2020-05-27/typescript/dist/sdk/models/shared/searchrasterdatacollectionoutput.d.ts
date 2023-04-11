import { SpeakeasyBase } from "../../../internal/utils";
import { ItemSource } from "./itemsource";
/**
 * Success
 */
export declare class SearchRasterDataCollectionOutput extends SpeakeasyBase {
    approximateResultCount: number;
    items?: ItemSource[];
    nextToken?: string;
}
