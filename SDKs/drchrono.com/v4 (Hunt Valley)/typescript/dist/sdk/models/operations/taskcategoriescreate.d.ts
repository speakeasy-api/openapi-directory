import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskCategoriesCreateQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskCategoriesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskCategoriesCreateRequest extends SpeakeasyBase {
    queryParams: TaskCategoriesCreateQueryParams;
    security: TaskCategoriesCreateSecurity;
}
export declare class TaskCategoriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskCategory?: shared.TaskCategory;
}
