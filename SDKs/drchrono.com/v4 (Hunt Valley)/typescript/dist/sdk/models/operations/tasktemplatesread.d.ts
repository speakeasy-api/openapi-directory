import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskTemplatesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskTemplatesReadQueryParams extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskTemplatesReadRequest extends SpeakeasyBase {
    pathParams: TaskTemplatesReadPathParams;
    queryParams: TaskTemplatesReadQueryParams;
    security: TaskTemplatesReadSecurity;
}
export declare class TaskTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskTemplate?: shared.TaskTemplate;
}
