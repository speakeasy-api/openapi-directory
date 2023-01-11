import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskCategoriesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskCategoriesReadQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskCategoriesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskCategoriesReadRequest extends SpeakeasyBase {
    pathParams: TaskCategoriesReadPathParams;
    queryParams: TaskCategoriesReadQueryParams;
    security: TaskCategoriesReadSecurity;
}
export declare class TaskCategoriesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskCategory?: shared.TaskCategory;
}
