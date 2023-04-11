import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcrContainerSortByEnum } from "./awsecrcontainersortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * An aggregation of information about Amazon ECR containers.
 */
export declare class AwsEcrContainerAggregation extends SpeakeasyBase {
    architectures?: StringFilter[];
    imageShas?: StringFilter[];
    imageTags?: StringFilter[];
    repositories?: StringFilter[];
    resourceIds?: StringFilter[];
    sortBy?: AwsEcrContainerSortByEnum;
    sortOrder?: SortOrderEnum;
}
