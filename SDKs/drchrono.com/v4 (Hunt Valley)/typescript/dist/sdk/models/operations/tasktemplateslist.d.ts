import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskTemplatesListQueryParams extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    cursor?: string;
    pageSize?: number;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class TaskTemplatesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskTemplate[];
    next?: string;
    previous?: string;
}
export declare class TaskTemplatesListRequest extends SpeakeasyBase {
    queryParams: TaskTemplatesListQueryParams;
    security: TaskTemplatesListSecurity;
}
export declare class TaskTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskTemplatesList200ApplicationJSONObject?: TaskTemplatesList200ApplicationJson;
}
