import { SpeakeasyBase } from "../../../internal/utils";
import { GroupSummary } from "./groupsummary";
/**
 * Success
 */
export declare class ListAssociatedGroupsResponse extends SpeakeasyBase {
    groups?: GroupSummary[];
    nextToken?: string;
}
