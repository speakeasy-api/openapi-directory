import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNotesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClinicalNotesReadQueryParams extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    office?: number;
    patient?: number;
    since?: string;
}
export declare class ClinicalNotesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClinicalNotesReadRequest extends SpeakeasyBase {
    pathParams: ClinicalNotesReadPathParams;
    queryParams: ClinicalNotesReadQueryParams;
    security: ClinicalNotesReadSecurity;
}
export declare class ClinicalNotesReadResponse extends SpeakeasyBase {
    clinicalNote?: shared.ClinicalNote;
    contentType: string;
    statusCode: number;
}
