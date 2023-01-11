import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class TasksReadQueryParams extends SpeakeasyBase {
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
export declare class TasksReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TasksReadRequest extends SpeakeasyBase {
    pathParams: TasksReadPathParams;
    queryParams: TasksReadQueryParams;
    security: TasksReadSecurity;
}
export declare class TasksReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
