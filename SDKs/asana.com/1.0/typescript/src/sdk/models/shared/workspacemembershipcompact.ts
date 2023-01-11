import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";



// WorkspaceMembershipCompact
/** 
 * This object determines if a user is a member of a workspace.
**/
export class WorkspaceMembershipCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: WorkspaceCompact;
}
