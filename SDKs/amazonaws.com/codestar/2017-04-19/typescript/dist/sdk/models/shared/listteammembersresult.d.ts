import { SpeakeasyBase } from "../../../internal/utils";
import { TeamMember } from "./teammember";
/**
 * Success
 */
export declare class ListTeamMembersResult extends SpeakeasyBase {
    nextToken?: string;
    teamMembers: TeamMember[];
}
