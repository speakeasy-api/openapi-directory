import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TasksListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TasksListRequest extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    cursor?: string;
    dueAtDate?: string;
    dueAtRange?: string;
    dueAtSince?: string;
    dueAtUnknown?: string;
    pageSize?: number;
    since?: string;
    status?: number;
}
/**
 * Paginated Result
 */
export declare class TasksList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.Task[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class TasksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tasksList200ApplicationJSONObject?: TasksList200ApplicationJSON;
}
