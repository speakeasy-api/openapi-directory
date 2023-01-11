import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { UserCompact } from "./usercompact";
export declare enum ProjectMembershipResponseWriteAccessEnum {
    FullWrite = "full_write",
    CommentOnly = "comment_only"
}
/**
 * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
**/
export declare class ProjectMembershipResponse extends SpeakeasyBase {
    gid?: string;
    project?: ProjectCompact;
    resourceType?: string;
    user?: UserCompact;
    writeAccess?: ProjectMembershipResponseWriteAccessEnum;
}
