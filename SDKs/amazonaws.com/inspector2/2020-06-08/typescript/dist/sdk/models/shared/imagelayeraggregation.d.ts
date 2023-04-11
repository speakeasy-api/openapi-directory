import { SpeakeasyBase } from "../../../internal/utils";
import { ImageLayerSortByEnum } from "./imagelayersortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * The details that define an aggregation based on container image layers.
 */
export declare class ImageLayerAggregation extends SpeakeasyBase {
    layerHashes?: StringFilter[];
    repositories?: StringFilter[];
    resourceIds?: StringFilter[];
    sortBy?: ImageLayerSortByEnum;
    sortOrder?: SortOrderEnum;
}
