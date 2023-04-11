import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStatusEnum } from "./querystatusenum";
export declare class DescribeQueriesRequest extends SpeakeasyBase {
    logGroupName?: string;
    maxResults?: number;
    /**
     * The token for the next set of items to return. The token expires after 24 hours.
     */
    nextToken?: string;
    status?: QueryStatusEnum;
}
