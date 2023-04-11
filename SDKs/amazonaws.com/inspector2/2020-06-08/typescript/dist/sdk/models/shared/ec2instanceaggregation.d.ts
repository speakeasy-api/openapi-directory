import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceSortByEnum } from "./ec2instancesortbyenum";
import { MapFilter } from "./mapfilter";
import { SortOrderEnum } from "./sortorderenum";
import { StringFilter } from "./stringfilter";
/**
 * The details that define an aggregation based on Amazon EC2 instances.
 */
export declare class Ec2InstanceAggregation extends SpeakeasyBase {
    amis?: StringFilter[];
    instanceIds?: StringFilter[];
    instanceTags?: MapFilter[];
    operatingSystems?: StringFilter[];
    sortBy?: Ec2InstanceSortByEnum;
    sortOrder?: SortOrderEnum;
}
