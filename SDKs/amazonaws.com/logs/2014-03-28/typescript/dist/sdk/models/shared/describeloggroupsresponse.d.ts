import { SpeakeasyBase } from "../../../internal/utils";
import { LogGroup } from "./loggroup";
/**
 * Success
 */
export declare class DescribeLogGroupsResponse extends SpeakeasyBase {
    logGroups?: LogGroup[];
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
}
