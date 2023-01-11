import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskTemplatesCreateQueryParams extends SpeakeasyBase {
    assigneeGroup?: number;
    assigneeUser?: number;
    category?: number;
    since?: string;
    status?: number;
}
export declare class TaskTemplatesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskTemplatesCreateRequest extends SpeakeasyBase {
    queryParams: TaskTemplatesCreateQueryParams;
    security: TaskTemplatesCreateSecurity;
}
export declare class TaskTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskTemplate?: shared.TaskTemplate;
}
