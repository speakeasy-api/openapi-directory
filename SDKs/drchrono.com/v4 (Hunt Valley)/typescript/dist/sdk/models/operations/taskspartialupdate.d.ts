import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TasksPartialUpdateQueryParams extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    dueAtDate?: string;
    dueAtRange?: string;
    dueAtSince?: string;
    dueAtUnknown?: string;
    since?: string;
    status?: number;
}
export declare class TasksPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TasksPartialUpdateRequest extends SpeakeasyBase {
    pathParams: TasksPartialUpdatePathParams;
    queryParams: TasksPartialUpdateQueryParams;
    security: TasksPartialUpdateSecurity;
}
export declare class TasksPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
