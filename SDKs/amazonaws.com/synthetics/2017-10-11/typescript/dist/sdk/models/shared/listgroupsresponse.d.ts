import { SpeakeasyBase } from "../../../internal/utils";
import { GroupSummary } from "./groupsummary";
/**
 * Success
 */
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups?: GroupSummary[];
    nextToken?: string;
}
