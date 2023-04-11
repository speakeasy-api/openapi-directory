import { SpeakeasyBase } from "../../../internal/utils";
import { QueryInfo } from "./queryinfo";
/**
 * Success
 */
export declare class DescribeQueriesResponse extends SpeakeasyBase {
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
    queries?: QueryInfo[];
}
