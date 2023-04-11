import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompactInput } from "./usercompact";
/**
 * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
 */
export declare enum TaskRequestApprovalStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    ChangesRequested = "changes_requested"
}
/**
 * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
 */
export declare enum TaskRequestAssigneeStatusEnum {
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
export declare class TaskRequestExternal extends SpeakeasyBase {
    data?: string;
    gid?: string;
}
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 */
export declare enum TaskRequestResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
/**
 * The *task* is the basic object around which many operations in Asana are centered.
 */
export declare class TaskRequestInput extends SpeakeasyBase {
    /**
     * *Conditional* Reflects the approval status of this task. This field is kept in sync with `completed`, meaning `pending` translates to false while `approved`, `rejected`, and `changes_requested` translate to true. If you set completed to true, this field will be set to `approved`.
     */
    approvalStatus?: TaskRequestApprovalStatusEnum;
    /**
     * Gid of a user.
     */
    assignee?: string;
    /**
     * The *assignee section* is a subdivision of a project that groups tasks together in the assignee's "My Tasks" list. It can either be a header above a list of tasks in a list view or a column in a board view of "My Tasks."
     *
     * @remarks
     * The `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user's "My Tasks" list.
     */
    assigneeSection?: string;
    /**
     * *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
     */
    assigneeStatus?: TaskRequestAssigneeStatusEnum;
    /**
     * True if the task is currently marked complete, false if not.
     */
    completed?: boolean;
    completedBy?: UserCompactInput;
    /**
     * An object where each key is a Custom Field GID and each value is an enum GID, string, number, object, or array.
     */
    customFields?: Record<string, string>;
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
    external?: TaskRequestExternal;
    /**
     * *Create-Only* An array of strings identifying users. These can either be the string "me", an email, or the gid of a user. In order to change followers on an existing task use `addFollowers` and `removeFollowers`.
     */
    followers?: string[];
    /**
     * [Opt In](/docs/input-output-options). The notes of the text with formatting as HTML.
     */
    htmlNotes?: string;
    /**
     * True if the task is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * Free-form textual information associated with the task (i.e. its description).
     */
    notes?: string;
    /**
     * Gid of a task.
     */
    parent?: string;
    /**
     * *Create-Only* Array of project gids. In order to change projects on an existing task use `addProject` and `removeProject`.
     */
    projects?: string[];
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    resourceSubtype?: TaskRequestResourceSubtypeEnum;
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
     * *Create-Only* Array of tag gids. In order to change tags on an existing task use `addTag` and `removeTag`.
     */
    tags?: string[];
    /**
     * Gid of a workspace.
     */
    workspace?: string;
}
