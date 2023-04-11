import { SpeakeasyBase } from "../../../internal/utils";
import { TeamCompact } from "./teamcompact";
import { UserCompact } from "./usercompact";
/**
 * This object represents a user's connection to a team.
 */
export declare class TeamMembershipResponse extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Describes if the user is a guest in the team.
     */
    isGuest?: boolean;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    team?: TeamCompact;
    user?: UserCompact;
}
