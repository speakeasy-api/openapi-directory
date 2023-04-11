import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for DescribeSpotFleetInstances.
 */
export declare class DescribeSpotFleetInstancesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    maxResults?: number;
    nextToken?: string;
    spotFleetRequestId: string;
}
