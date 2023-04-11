import { SpeakeasyBase } from "../../../internal/utils";
import { AsanaResource } from "./asanaresource";
import { CustomFieldResponse } from "./customfieldresponse";
import { Like } from "./like";
import { ProjectCompact } from "./projectcompact";
import { SectionCompact } from "./sectioncompact";
import { TagCompact } from "./tagcompact";
import { UserCompact } from "./usercompact";
/**
 * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
 */
export declare enum TaskResponseApprovalStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    ChangesRequested = "changes_requested"
}
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export declare class TaskResponseAssignee extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *section* is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
 */
export declare class TaskResponseAssigneeSection extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the section (i.e. the text displayed as the section header).
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
 */
export declare enum TaskResponseAssigneeStatusEnum {
    Today = "today",
    Upcoming = "upcoming",
    Later = "later",
    New = "new",
    Inbox = "inbox"
}
/**
 * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
 *
 * @remarks
 * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
 */
export declare class TaskResponseExternal extends SpeakeasyBase {
    data?: string;
    gid?: string;
}
export declare class TaskResponseMemberships extends SpeakeasyBase {
    project?: ProjectCompact;
    section?: SectionCompact;
}
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 */
export declare enum TaskResponseParentResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
/**
 * The *task* is the basic object around which many operations in Asana are centered.
 */
export declare class TaskResponseParent extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    resourceSubtype?: TaskResponseParentResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 */
export declare enum TaskResponseResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export declare class TaskResponseWorkspace extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the workspace.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * The *task* is the basic object around which many operations in Asana are centered.
 */
export declare class TaskResponse extends SpeakeasyBase {
    /**
     * This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value.
     */
    actualTimeMinutes?: number;
    /**
     * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
     */
    approvalStatus?: TaskResponseApprovalStatusEnum;
    assignee?: TaskResponseAssignee;
    assigneeSection?: TaskResponseAssigneeSection;
    /**
     * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
     */
    assigneeStatus?: TaskResponseAssigneeStatusEnum;
    /**
     * True if the task is currently marked complete, false if not.
     */
    completed?: boolean;
    /**
     * The time at which this task was completed, or null if the task is incomplete.
     */
    completedAt?: Date;
    completedBy?: UserCompact;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    /**
     * Array of custom field values applied to the task. These represent the custom field values recorded on this project for a particular custom field. For example, these custom field values will contain an `enum_value` property for custom fields of type `enum`, a `text_value` property for custom fields of type `text`, and so on. Please note that the `gid` returned on each custom field value *is identical* to the `gid` of the custom field, which allows referencing the custom field metadata through the `/custom_fields/custom_field-gid` endpoint.
     */
    customFields?: CustomFieldResponse[];
    /**
     * [Opt In](/docs/input-output-options). Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
     */
    dependencies?: AsanaResource[];
    /**
     * [Opt In](/docs/input-output-options). Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
     */
    dependents?: AsanaResource[];
    /**
     * The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
     */
    dueAt?: Date;
    /**
     * The localized date on which this task is due, or null if the task has no due date. This takes a date with `YYYY-MM-DD` format and should not be used together with `due_at`.
     */
    dueOn?: Date;
    /**
     * *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
     *
     * @remarks
     * The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
     */
    external?: TaskResponseExternal;
    /**
     * Array of users following this task.
     */
    followers?: UserCompact[];
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
     */
    hearted?: boolean;
    /**
     * *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
     */
    hearts?: Like[];
    /**
     * [Opt In](/docs/input-output-options). The notes of the text with formatting as HTML.
     */
    htmlNotes?: string;
    /**
     * [Opt In](/docs/input-output-options). In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to [sections](/docs/asana-sections) without being true `section` objects. If a `task` object is rendered this way in any context it will have the property `is_rendered_as_separator` set to `true`.
     */
    isRenderedAsSeparator?: boolean;
    /**
     * True if the task is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * Array of likes for users who have liked this task.
     */
    likes?: Like[];
    /**
     * *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the `addProject` and `removeProject` endpoints. Note that over time, more types of memberships may be added to this property.
     */
    memberships?: TaskResponseMemberships[];
    /**
     * The time at which this task was last modified.
     *
     * @remarks
     *
     * *Note: This does not currently reflect any changes in
     * associations such as projects or comments that may have been
     * added or removed from the task.*
     */
    modifiedAt?: Date;
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * Free-form textual information associated with the task (i.e. its description).
     */
    notes?: string;
    /**
     * *Deprecated - please use likes instead* The number of users who have hearted this task.
     */
    numHearts?: number;
    /**
     * The number of users who have liked this task.
     */
    numLikes?: number;
    /**
     * [Opt In](/docs/input-output-options). The number of subtasks on this task.
     *
     * @remarks
     *
     */
    numSubtasks?: number;
    parent?: TaskResponseParent;
    /**
     * A url that points directly to the object within Asana.
     */
    permalinkUrl?: string;
    /**
     * *Create-only.* Array of projects this task is associated with. At task creation time, this array can be used to add the task to many projects at once. After task creation, these associations can be modified using the addProject and removeProject endpoints.
     */
    projects?: ProjectCompact[];
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    resourceSubtype?: TaskResponseResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with `start_on`.
     *
     * @remarks
     * *Note: `due_at` must be present in the request when setting or unsetting the `start_at` parameter.*
     */
    startAt?: Date;
    /**
     * The day on which work begins for the task , or null if the task has no start date. This takes a date with `YYYY-MM-DD` format and should not be used together with `start_at`.
     *
     * @remarks
     * *Note: `due_on` or `due_at` must be present in the request when setting or unsetting the `start_on` parameter.*
     */
    startOn?: Date;
    /**
     * Array of tags associated with this task. In order to change tags on an existing task use `addTag` and `removeTag`.
     */
    tags?: TagCompact[];
    workspace?: TaskResponseWorkspace;
}
