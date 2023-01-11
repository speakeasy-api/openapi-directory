import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskStatusesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    since?: string;
}
export declare class TaskStatusesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class TaskStatusesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskStatus[];
    next?: string;
    previous?: string;
}
export declare class TaskStatusesListRequest extends SpeakeasyBase {
    queryParams: TaskStatusesListQueryParams;
    security: TaskStatusesListSecurity;
}
export declare class TaskStatusesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskStatusesList200ApplicationJSONObject?: TaskStatusesList200ApplicationJson;
}
