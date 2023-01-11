import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskCategoriesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskCategoriesPartialUpdateQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskCategoriesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskCategoriesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: TaskCategoriesPartialUpdatePathParams;
    queryParams: TaskCategoriesPartialUpdateQueryParams;
    security: TaskCategoriesPartialUpdateSecurity;
}
export declare class TaskCategoriesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
