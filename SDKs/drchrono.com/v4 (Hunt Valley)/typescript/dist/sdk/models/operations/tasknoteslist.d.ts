import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaskNotesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class TaskNotesListRequest extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    since?: string;
    task?: number;
}
/**
 * Paginated Result
 */
export declare class TaskNotesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.TaskNote[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class TaskNotesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskNotesList200ApplicationJSONObject?: TaskNotesList200ApplicationJSON;
}
