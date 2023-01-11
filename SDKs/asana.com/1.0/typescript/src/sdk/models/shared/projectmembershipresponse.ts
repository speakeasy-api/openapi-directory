import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { UserCompact } from "./usercompact";


export enum ProjectMembershipResponseWriteAccessEnum {
    FullWrite = "full_write",
    CommentOnly = "comment_only"
}


// ProjectMembershipResponse
/** 
 * With the introduction of “comment-only” projects in Asana, a user’s membership in a project comes with associated permissions. These permissions (whether a user has full access to the project or comment-only access) are accessible through the project memberships endpoints described here.
**/
export class ProjectMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=write_access" })
  writeAccess?: ProjectMembershipResponseWriteAccessEnum;
}
