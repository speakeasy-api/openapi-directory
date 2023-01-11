import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskNotesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskNotesUpdateQueryParams extends SpeakeasyBase {
    since?: string;
    task?: number;
}
export declare class TaskNotesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskNotesUpdateRequest extends SpeakeasyBase {
    pathParams: TaskNotesUpdatePathParams;
    queryParams: TaskNotesUpdateQueryParams;
    security: TaskNotesUpdateSecurity;
}
export declare class TaskNotesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
