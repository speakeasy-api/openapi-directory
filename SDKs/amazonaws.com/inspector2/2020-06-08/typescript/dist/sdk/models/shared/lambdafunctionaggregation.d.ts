import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunctionSortByEnum } from "./lambdafunctionsortbyenum";
import { MapFilter } from "./mapfilter";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * The details that define a findings aggregation based on AWS Lambda functions.
 */
export declare class LambdaFunctionAggregation extends SpeakeasyBase {
    functionNames?: StringFilter[];
    functionTags?: MapFilter[];
    resourceIds?: StringFilter[];
    runtimes?: StringFilter[];
    sortBy?: LambdaFunctionSortByEnum;
    sortOrder?: SortOrderEnum;
}
