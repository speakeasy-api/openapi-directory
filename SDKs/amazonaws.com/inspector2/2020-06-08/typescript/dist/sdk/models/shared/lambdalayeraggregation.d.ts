import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaLayerSortByEnum } from "./lambdalayersortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * The details that define a findings aggregation based on an AWS Lambda function's layers.
 */
export declare class LambdaLayerAggregation extends SpeakeasyBase {
    functionNames?: StringFilter[];
    layerArns?: StringFilter[];
    resourceIds?: StringFilter[];
    sortBy?: LambdaLayerSortByEnum;
    sortOrder?: SortOrderEnum;
}
