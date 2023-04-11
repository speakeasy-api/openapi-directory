import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingClassTypeEnum } from "./offeringclasstypeenum";
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 */
export declare class DescribeReservedInstancesRequestFilters extends SpeakeasyBase {
    name?: string;
    values?: string[];
}
/**
 * The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API version, you only have access to the <code>Medium Utilization</code> Reserved Instance offering type.
 */
export declare enum DescribeReservedInstancesRequestOfferingTypeEnum {
    HeavyUtilization = "Heavy Utilization",
    MediumUtilization = "Medium Utilization",
    LightUtilization = "Light Utilization",
    NoUpfront = "No Upfront",
    PartialUpfront = "Partial Upfront",
    AllUpfront = "All Upfront"
}
/**
 * Contains the parameters for DescribeReservedInstances.
 */
export declare class DescribeReservedInstancesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    filters?: DescribeReservedInstancesRequestFilters[];
    offeringClass?: OfferingClassTypeEnum;
    offeringType?: DescribeReservedInstancesRequestOfferingTypeEnum;
    reservedInstancesIds?: string[];
}
