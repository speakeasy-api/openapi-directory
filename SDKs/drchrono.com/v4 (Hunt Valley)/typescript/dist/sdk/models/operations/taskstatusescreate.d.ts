import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskStatusesCreateQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskStatusesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskStatusesCreateRequest extends SpeakeasyBase {
    queryParams: TaskStatusesCreateQueryParams;
    security: TaskStatusesCreateSecurity;
}
export declare class TaskStatusesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskStatus?: shared.TaskStatus;
}
