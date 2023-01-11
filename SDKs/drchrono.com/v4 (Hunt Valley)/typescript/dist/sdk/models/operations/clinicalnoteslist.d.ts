import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNotesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
export declare class ClinicalNotesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ClinicalNotesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.ClinicalNote[];
    next?: string;
    previous?: string;
}
export declare class ClinicalNotesListRequest extends SpeakeasyBase {
    queryParams: ClinicalNotesListQueryParams;
    security: ClinicalNotesListSecurity;
}
export declare class ClinicalNotesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    clinicalNotesList200ApplicationJSONObject?: ClinicalNotesList200ApplicationJson;
}
