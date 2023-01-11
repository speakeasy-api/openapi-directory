import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksListQueryParams extends SpeakeasyBase {
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
export declare class TasksListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class TasksList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Task[];
    next?: string;
    previous?: string;
}
export declare class TasksListRequest extends SpeakeasyBase {
    queryParams: TasksListQueryParams;
    security: TasksListSecurity;
}
export declare class TasksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tasksList200ApplicationJSONObject?: TasksList200ApplicationJson;
}
