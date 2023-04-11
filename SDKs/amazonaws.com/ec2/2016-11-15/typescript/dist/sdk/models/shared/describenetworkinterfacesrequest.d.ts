import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 */
export declare class DescribeNetworkInterfacesRequestFilters extends SpeakeasyBase {
    name?: string;
    values?: string[];
}
/**
 * Contains the parameters for DescribeNetworkInterfaces.
 */
export declare class DescribeNetworkInterfacesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    filters?: DescribeNetworkInterfacesRequestFilters[];
    maxResults?: number;
    networkInterfaceIds?: string[];
    nextToken?: string;
}
