import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserTaskListResponseOwner
/** 
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export class UserTaskListResponseOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// UserTaskListResponseWorkspace
/** 
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export class UserTaskListResponseWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// UserTaskListResponse
/** 
 * A user task list represents the tasks assigned to a particular user. It provides API access to a user’s “My Tasks” view in Asana.
**/
export class UserTaskListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: UserTaskListResponseOwner;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: UserTaskListResponseWorkspace;
}
