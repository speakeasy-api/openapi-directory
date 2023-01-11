import { SpeakeasyBase } from "../../../internal/utils";
import { TeamCompact } from "./teamcompact";
import { UserCompact } from "./usercompact";
/**
 * This object represents a user's connection to a team.
**/
export declare class TeamMembershipCompact extends SpeakeasyBase {
    gid?: string;
    isGuest?: boolean;
    resourceType?: string;
    team?: TeamCompact;
    user?: UserCompact;
}
