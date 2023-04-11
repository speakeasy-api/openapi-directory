import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTasksRequest extends SpeakeasyBase {
    /**
     * The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified.
     *
     * @remarks
     * *Note: If you specify `assignee`, you must also specify the `workspace` to filter on.*
     */
    assignee?: string;
    /**
     * Only return tasks that are either incomplete or that have been completed since this time.
     */
    completedSince?: Date;
    /**
     * Results per page.
     *
     * @remarks
     * The number of objects to return per page. The value must be between 1 and 100.
     */
    limit?: number;
    /**
     * Only return tasks that have been modified since the given time.
     *
     * @remarks
     *
     * *Note: A task is considered “modified” if any of its properties
     * change, or associations between it and other objects are modified
     * (e.g.  a task being added to a project). A task is not considered
     * modified just because another object it is associated with (e.g. a
     * subtask) is modified. Actions that count as modifying the task
     * include assigning, renaming, completing, and adding stories.*
     */
    modifiedSince?: Date;
    /**
     * Offset token.
     *
     * @remarks
     * An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results.
     * 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     */
    offset?: string;
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
     * The project to filter tasks on.
     */
    project?: string;
    /**
     * The section to filter tasks on.
     *
     * @remarks
     * *Note: Currently, this is only supported in board views.*
     */
    section?: string;
    /**
     * The workspace to filter tasks on.
     *
     * @remarks
     * *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*
     */
    workspace?: string;
}
/**
 * Successfully retrieved requested tasks.
 */
export declare class GetTasks200ApplicationJSON extends SpeakeasyBase {
    data?: shared.TaskCompact[];
}
export declare class GetTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully retrieved requested tasks.
     */
    getTasks200ApplicationJSONObject?: GetTasks200ApplicationJSON;
}
