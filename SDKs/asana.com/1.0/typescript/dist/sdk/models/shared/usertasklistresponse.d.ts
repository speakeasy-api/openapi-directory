import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export declare class UserTaskListResponseOwner extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export declare class UserTaskListResponseWorkspace extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A user task list represents the tasks assigned to a particular user. It provides API access to a user’s “My Tasks” view in Asana.
**/
export declare class UserTaskListResponse extends SpeakeasyBase {
    gid?: string;
    name?: string;
    owner?: UserTaskListResponseOwner;
    resourceType?: string;
    workspace?: UserTaskListResponseWorkspace;
}
