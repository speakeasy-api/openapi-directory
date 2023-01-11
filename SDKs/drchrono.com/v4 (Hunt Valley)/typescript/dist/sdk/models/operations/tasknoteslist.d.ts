import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaskNotesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    since?: string;
    task?: number;
}
export declare class TaskNotesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class TaskNotesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.TaskNote[];
    next?: string;
    previous?: string;
}
export declare class TaskNotesListRequest extends SpeakeasyBase {
    queryParams: TaskNotesListQueryParams;
    security: TaskNotesListSecurity;
}
export declare class TaskNotesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskNotesList200ApplicationJSONObject?: TaskNotesList200ApplicationJson;
}
