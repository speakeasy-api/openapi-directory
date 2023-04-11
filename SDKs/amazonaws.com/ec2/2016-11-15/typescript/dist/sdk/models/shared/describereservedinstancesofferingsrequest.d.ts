import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
import { OfferingClassTypeEnum } from "./offeringclasstypeenum";
import { RIProductDescriptionEnum } from "./riproductdescriptionenum";
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 */
export declare class DescribeReservedInstancesOfferingsRequestFilters extends SpeakeasyBase {
    name?: string;
    values?: string[];
}
/**
 * <p>The tenancy of the instances covered by the reservation. A Reserved Instance with a tenancy of <code>dedicated</code> is applied to instances that run in a VPC on single-tenant hardware (i.e., Dedicated Instances).</p> <p> <b>Important:</b> The <code>host</code> value cannot be used with this parameter. Use the <code>default</code> or <code>dedicated</code> values only.</p> <p>Default: <code>default</code> </p>
 */
export declare enum DescribeReservedInstancesOfferingsRequestInstanceTenancyEnum {
    Default = "default",
    Dedicated = "dedicated",
    Host = "host"
}
/**
 * The Reserved Instance offering type. If you are using tools that predate the 2011-11-01 API version, you only have access to the <code>Medium Utilization</code> Reserved Instance offering type.
 */
export declare enum DescribeReservedInstancesOfferingsRequestOfferingTypeEnum {
    HeavyUtilization = "Heavy Utilization",
    MediumUtilization = "Medium Utilization",
    LightUtilization = "Light Utilization",
    NoUpfront = "No Upfront",
    PartialUpfront = "Partial Upfront",
    AllUpfront = "All Upfront"
}
/**
 * Contains the parameters for DescribeReservedInstancesOfferings.
 */
export declare class DescribeReservedInstancesOfferingsRequest extends SpeakeasyBase {
    availabilityZone?: string;
    dryRun?: boolean;
    filters?: DescribeReservedInstancesOfferingsRequestFilters[];
    includeMarketplace?: boolean;
    instanceTenancy?: DescribeReservedInstancesOfferingsRequestInstanceTenancyEnum;
    instanceType?: InstanceTypeEnum;
    maxDuration?: number;
    maxInstanceCount?: number;
    maxResults?: number;
    minDuration?: number;
    nextToken?: string;
    offeringClass?: OfferingClassTypeEnum;
    offeringType?: DescribeReservedInstancesOfferingsRequestOfferingTypeEnum;
    productDescription?: RIProductDescriptionEnum;
    reservedInstancesOfferingIds?: string[];
}
