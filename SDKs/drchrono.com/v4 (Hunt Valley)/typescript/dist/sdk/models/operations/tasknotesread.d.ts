import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskNotesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskNotesReadQueryParams extends SpeakeasyBase {
    since?: string;
    task?: number;
}
export declare class TaskNotesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskNotesReadRequest extends SpeakeasyBase {
    pathParams: TaskNotesReadPathParams;
    queryParams: TaskNotesReadQueryParams;
    security: TaskNotesReadSecurity;
}
export declare class TaskNotesReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskNote?: shared.TaskNote;
}
