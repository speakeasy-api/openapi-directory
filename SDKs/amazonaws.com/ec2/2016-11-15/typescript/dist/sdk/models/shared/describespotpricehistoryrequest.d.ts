import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceTypeEnum } from "./instancetypeenum";
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 */
export declare class DescribeSpotPriceHistoryRequestFilters extends SpeakeasyBase {
    name?: string;
    values?: string[];
}
/**
 * Contains the parameters for DescribeSpotPriceHistory.
 */
export declare class DescribeSpotPriceHistoryRequest extends SpeakeasyBase {
    availabilityZone?: string;
    dryRun?: boolean;
    endTime?: Date;
    filters?: DescribeSpotPriceHistoryRequestFilters[];
    instanceTypes?: InstanceTypeEnum[];
    maxResults?: number;
    nextToken?: string;
    productDescriptions?: string[];
    startTime?: Date;
}
