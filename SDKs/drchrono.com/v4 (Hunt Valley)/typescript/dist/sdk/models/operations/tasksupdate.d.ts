import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TasksUpdateQueryParams extends SpeakeasyBase {
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
export declare class TasksUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TasksUpdateRequest extends SpeakeasyBase {
    pathParams: TasksUpdatePathParams;
    queryParams: TasksUpdateQueryParams;
    security: TasksUpdateSecurity;
}
export declare class TasksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
