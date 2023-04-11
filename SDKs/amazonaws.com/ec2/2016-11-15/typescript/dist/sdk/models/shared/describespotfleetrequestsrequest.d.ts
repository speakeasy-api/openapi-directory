import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DescribeSpotFleetRequests.
 */
export declare class DescribeSpotFleetRequestsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    spotFleetRequestIds?: string[];
}
