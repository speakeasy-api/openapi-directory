import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { UserCompact } from "./usercompact";
/**
 * Whether the user has full access to the project or has comment-only access.
 */
export declare enum ProjectMembershipResponseWriteAccessEnum {
    FullWrite = "full_write",
    CommentOnly = "comment_only"
}
/**
 * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
 */
export declare class ProjectMembershipResponse extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    project?: ProjectCompact;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    user?: UserCompact;
    /**
     * Whether the user has full access to the project or has comment-only access.
     */
    writeAccess?: ProjectMembershipResponseWriteAccessEnum;
}
