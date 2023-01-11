import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";
import { UserCompact } from "./usercompact";
import { CustomFieldResponse } from "./customfieldresponse";
import { AsanaResource } from "./asanaresource";
import { Like } from "./like";
import { TagCompact } from "./tagcompact";
export declare enum TaskResponseApprovalStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    ChangesRequested = "changes_requested"
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export declare class TaskResponseAssignee extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * The *assignee section* is a subdivision of a project that groups tasks together in the assignee's "My Tasks" list. It can either be a header above a list of tasks in a list view or a column in a board view of "My Tasks."
 * The `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user's "My Tasks" list.
**/
export declare class TaskResponseAssigneeSection extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare enum TaskResponseAssigneeStatusEnum {
    Today = "today",
    Upcoming = "upcoming",
    Later = "later",
    New = "new",
    Inbox = "inbox"
}
/**
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
**/
export declare class TaskResponseExternal extends SpeakeasyBase {
    data?: string;
    gid?: string;
}
export declare class TaskResponseMemberships extends SpeakeasyBase {
    project?: ProjectCompact;
    section?: SectionCompact;
}
/**
 * The parent of this task, or `null` if this is not a subtask. This property cannot be modified using a PUT request but you can change it with the `setParent` endpoint. You can create subtasks by using the subtasks endpoint.
**/
export declare class TaskResponseParent extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare enum TaskResponseResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
/**
 * *Create-only*. The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
export declare class TaskResponseWorkspace extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * The *task* is the basic object around which many operations in Asana are centered.
**/
export declare class TaskResponse extends SpeakeasyBase {
    approvalStatus?: TaskResponseApprovalStatusEnum;
    assignee?: TaskResponseAssignee;
    assigneeSection?: TaskResponseAssigneeSection;
    assigneeStatus?: TaskResponseAssigneeStatusEnum;
    completed?: boolean;
    completedAt?: Date;
    completedBy?: UserCompact;
    createdAt?: Date;
    customFields?: CustomFieldResponse[];
    dependencies?: AsanaResource[];
    dependents?: AsanaResource[];
    dueAt?: Date;
    dueOn?: Date;
    external?: TaskResponseExternal;
    followers?: UserCompact[];
    gid?: string;
    hearted?: boolean;
    hearts?: Like[];
    htmlNotes?: string;
    isRenderedAsSeparator?: boolean;
    liked?: boolean;
    likes?: Like[];
    memberships?: TaskResponseMemberships[];
    modifiedAt?: Date;
    name?: string;
    notes?: string;
    numHearts?: number;
    numLikes?: number;
    numSubtasks?: number;
    parent?: TaskResponseParent;
    permalinkUrl?: string;
    projects?: ProjectCompact[];
    resourceSubtype?: TaskResponseResourceSubtypeEnum;
    resourceType?: string;
    startOn?: Date;
    tags?: TagCompact[];
    workspace?: TaskResponseWorkspace;
}
