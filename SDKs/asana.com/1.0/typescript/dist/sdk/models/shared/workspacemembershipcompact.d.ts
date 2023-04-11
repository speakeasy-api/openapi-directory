import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";
/**
 * This object determines if a user is a member of a workspace.
 */
export declare class WorkspaceMembershipCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    user?: UserCompact;
    workspace?: WorkspaceCompact;
}
