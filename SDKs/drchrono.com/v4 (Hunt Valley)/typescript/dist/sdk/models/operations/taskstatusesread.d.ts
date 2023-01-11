import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskStatusesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskStatusesReadQueryParams extends SpeakeasyBase {
    since?: string;
}
export declare class TaskStatusesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskStatusesReadRequest extends SpeakeasyBase {
    pathParams: TaskStatusesReadPathParams;
    queryParams: TaskStatusesReadQueryParams;
    security: TaskStatusesReadSecurity;
}
export declare class TaskStatusesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskStatus?: shared.TaskStatus;
}
