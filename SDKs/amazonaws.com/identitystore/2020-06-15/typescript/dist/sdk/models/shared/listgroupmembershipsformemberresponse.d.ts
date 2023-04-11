import { SpeakeasyBase } from "../../../internal/utils";
import { GroupMembership } from "./groupmembership";
/**
 * Success
 */
export declare class ListGroupMembershipsForMemberResponse extends SpeakeasyBase {
    groupMemberships: GroupMembership[];
    nextToken?: string;
}
