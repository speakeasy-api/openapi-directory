import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters results by the task's resource_subtype
 */
export declare enum SearchTasksForWorkspaceResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone"
}
/**
 * One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`
 */
export declare enum SearchTasksForWorkspaceSortByEnum {
    DueDate = "due_date",
    CreatedAt = "created_at",
    CompletedAt = "completed_at",
    Likes = "likes",
    ModifiedAt = "modified_at"
}
export declare class SearchTasksForWorkspaceRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of user identifiers
     */
    assignedByAny?: string;
    /**
     * Comma-separated list of user identifiers
     */
    assignedByNot?: string;
    /**
     * Comma-separated list of user identifiers
     */
    assigneeAny?: string;
    /**
     * Comma-separated list of user identifiers
     */
    assigneeNot?: string;
    /**
     * Comma-separated list of user identifiers
     */
    commentedOnByNot?: string;
    /**
     * Filter to completed tasks
     */
    completed?: boolean;
    /**
     * ISO 8601 datetime string
     */
    completedAtAfter?: Date;
    /**
     * ISO 8601 datetime string
     */
    completedAtBefore?: Date;
    /**
     * ISO 8601 date string or `null`
     */
    completedOn?: Date;
    /**
     * ISO 8601 date string
     */
    completedOnAfter?: Date;
    /**
     * ISO 8601 date string
     */
    completedOnBefore?: Date;
    /**
     * ISO 8601 datetime string
     */
    createdAtAfter?: Date;
    /**
     * ISO 8601 datetime string
     */
    createdAtBefore?: Date;
    /**
     * Comma-separated list of user identifiers
     */
    createdByAny?: string;
    /**
     * Comma-separated list of user identifiers
     */
    createdByNot?: string;
    /**
     * ISO 8601 date string or `null`
     */
    createdOn?: Date;
    /**
     * ISO 8601 date string
     */
    createdOnAfter?: Date;
    /**
     * ISO 8601 date string
     */
    createdOnBefore?: Date;
    /**
     * ISO 8601 datetime string
     */
    dueAtAfter?: Date;
    /**
     * ISO 8601 datetime string
     */
    dueAtBefore?: Date;
    /**
     * ISO 8601 date string or `null`
     */
    dueOn?: Date;
    /**
     * ISO 8601 date string
     */
    dueOnAfter?: Date;
    /**
     * ISO 8601 date string
     */
    dueOnBefore?: Date;
    /**
     * Comma-separated list of user identifiers
     */
    followersNot?: string;
    /**
     * Filter to tasks with attachments
     */
    hasAttachment?: boolean;
    /**
     * Filter to tasks with incomplete dependencies
     */
    isBlocked?: boolean;
    /**
     * Filter to incomplete tasks with dependents
     */
    isBlocking?: boolean;
    /**
     * Filter to subtasks
     */
    isSubtask?: boolean;
    /**
     * Comma-separated list of user identifiers
     */
    likedByNot?: string;
    /**
     * ISO 8601 datetime string
     */
    modifiedAtAfter?: Date;
    /**
     * ISO 8601 datetime string
     */
    modifiedAtBefore?: Date;
    /**
     * ISO 8601 date string or `null`
     */
    modifiedOn?: Date;
    /**
     * ISO 8601 date string
     */
    modifiedOnAfter?: Date;
    /**
     * ISO 8601 date string
     */
    modifiedOnBefore?: Date;
    /**
     * Defines fields to return.
     *
     * @remarks
     * Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
     * The id of included objects will always be returned, regardless of the field options.
     */
    optFields?: string[];
    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    optPretty?: boolean;
    /**
     * Comma-separated list of portfolio IDs
     */
    portfoliosAny?: string;
    /**
     * Comma-separated list of project IDs
     */
    projectsAll?: string;
    /**
     * Comma-separated list of project IDs
     */
    projectsAny?: string;
    /**
     * Comma-separated list of project IDs
     */
    projectsNot?: string;
    /**
     * Filters results by the task's resource_subtype
     */
    resourceSubtype?: SearchTasksForWorkspaceResourceSubtypeEnum;
    /**
     * Comma-separated list of section or column IDs
     */
    sectionsAll?: string;
    /**
     * Comma-separated list of section or column IDs
     */
    sectionsAny?: string;
    /**
     * Comma-separated list of section or column IDs
     */
    sectionsNot?: string;
    /**
     * Default `false`
     */
    sortAscending?: boolean;
    /**
     * One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`
     */
    sortBy?: SearchTasksForWorkspaceSortByEnum;
    /**
     * ISO 8601 date string or `null`
     */
    startOn?: Date;
    /**
     * ISO 8601 date string
     */
    startOnAfter?: Date;
    /**
     * ISO 8601 date string
     */
    startOnBefore?: Date;
    /**
     * Comma-separated list of tag IDs
     */
    tagsAll?: string;
    /**
     * Comma-separated list of tag IDs
     */
    tagsAny?: string;
    /**
     * Comma-separated list of tag IDs
     */
    tagsNot?: string;
    /**
     * Comma-separated list of team IDs
     */
    teamsAny?: string;
    /**
     * Performs full-text search on both task name and description
     */
    text?: string;
    /**
     * Globally unique identifier for the workspace or organization.
     */
    workspaceGid: string;
}
/**
 * Successfully retrieved the section's tasks.
 */
export declare class SearchTasksForWorkspace200ApplicationJSON extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class SearchTasksForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved the section's tasks.
     */
    searchTasksForWorkspace200ApplicationJSONObject?: SearchTasksForWorkspace200ApplicationJSON;
}
