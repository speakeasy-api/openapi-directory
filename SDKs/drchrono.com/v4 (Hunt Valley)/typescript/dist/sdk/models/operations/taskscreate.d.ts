import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TasksCreateQueryParams extends SpeakeasyBase {
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
export declare class TasksCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TasksCreateRequest extends SpeakeasyBase {
    queryParams: TasksCreateQueryParams;
    security: TasksCreateSecurity;
}
export declare class TasksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    task?: shared.Task;
}
