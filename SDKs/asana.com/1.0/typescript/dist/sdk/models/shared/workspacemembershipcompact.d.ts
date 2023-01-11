import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";
/**
 * This object determines if a user is a member of a workspace.
**/
export declare class WorkspaceMembershipCompact extends SpeakeasyBase {
    gid?: string;
    resourceType?: string;
    user?: UserCompact;
    workspace?: WorkspaceCompact;
}
