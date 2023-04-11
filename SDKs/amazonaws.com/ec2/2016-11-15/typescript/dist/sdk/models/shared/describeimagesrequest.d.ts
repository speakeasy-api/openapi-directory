import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.</p> <p>If you specify multiple filters, the filters are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters.</p>
 */
export declare class DescribeImagesRequestFilters extends SpeakeasyBase {
    name?: string;
    values?: string[];
}
export declare class DescribeImagesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    executableUsers?: string[];
    filters?: DescribeImagesRequestFilters[];
    imageIds?: string[];
    includeDeprecated?: boolean;
    maxResults?: number;
    nextToken?: string;
    owners?: string[];
}
