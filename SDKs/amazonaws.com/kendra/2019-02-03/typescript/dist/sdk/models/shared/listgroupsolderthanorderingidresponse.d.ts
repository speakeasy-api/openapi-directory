import { SpeakeasyBase } from "../../../internal/utils";
import { GroupSummary } from "./groupsummary";
/**
 * Success
 */
export declare class ListGroupsOlderThanOrderingIdResponse extends SpeakeasyBase {
    groupsSummaries?: GroupSummary[];
    nextToken?: string;
}
