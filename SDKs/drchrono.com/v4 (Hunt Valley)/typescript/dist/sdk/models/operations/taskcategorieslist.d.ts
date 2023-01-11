import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskCategoriesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    since?: string;
}
export declare class TaskCategoriesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class TaskCategoriesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskCategory[];
    next?: string;
    previous?: string;
}
export declare class TaskCategoriesListRequest extends SpeakeasyBase {
    queryParams: TaskCategoriesListQueryParams;
    security: TaskCategoriesListSecurity;
}
export declare class TaskCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskCategoriesList200ApplicationJSONObject?: TaskCategoriesList200ApplicationJson;
}
