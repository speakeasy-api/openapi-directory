import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
/**
 * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
 */
export declare class ProjectMembershipCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    user?: UserCompact;
}
