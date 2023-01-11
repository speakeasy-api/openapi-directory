import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskCategoriesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskCategoriesUpdateQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskCategoriesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskCategoriesUpdateRequest extends SpeakeasyBase {
    pathParams: TaskCategoriesUpdatePathParams;
    queryParams: TaskCategoriesUpdateQueryParams;
    security: TaskCategoriesUpdateSecurity;
}
export declare class TaskCategoriesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
