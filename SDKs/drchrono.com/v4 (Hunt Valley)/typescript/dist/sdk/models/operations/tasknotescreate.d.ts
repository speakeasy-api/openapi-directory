import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskNotesCreateQueryParams extends SpeakeasyBase {
    since?: string;
    task?: number;
}
export declare class TaskNotesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskNotesCreateRequest extends SpeakeasyBase {
    queryParams: TaskNotesCreateQueryParams;
    security: TaskNotesCreateSecurity;
}
export declare class TaskNotesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskNote?: shared.TaskNote;
}
