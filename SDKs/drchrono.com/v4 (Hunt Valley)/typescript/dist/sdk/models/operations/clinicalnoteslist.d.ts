import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNotesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNotesListRequest extends SpeakeasyBase {
    cursor?: string;
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class ClinicalNotesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.ClinicalNote[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ClinicalNotesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    clinicalNotesList200ApplicationJSONObject?: ClinicalNotesList200ApplicationJSON;
}
