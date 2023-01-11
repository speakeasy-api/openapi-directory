import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskNotesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaskNotesPartialUpdateQueryParams extends SpeakeasyBase {
    since?: string;
    task?: number;
}
export declare class TaskNotesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class TaskNotesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: TaskNotesPartialUpdatePathParams;
    queryParams: TaskNotesPartialUpdateQueryParams;
    security: TaskNotesPartialUpdateSecurity;
}
export declare class TaskNotesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
