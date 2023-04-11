import { SpeakeasyBase } from "../../../internal/utils";
import { LocationTypeEnum } from "./locationtypeenum";
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 */
export declare class DescribeInstanceTypeOfferingsRequestFilters extends SpeakeasyBase {
    name?: string;
    values?: string[];
}
export declare class DescribeInstanceTypeOfferingsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    filters?: DescribeInstanceTypeOfferingsRequestFilters[];
    locationType?: LocationTypeEnum;
    maxResults?: number;
    nextToken?: string;
}
