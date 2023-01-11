import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteFieldTypesListQueryParams extends SpeakeasyBase {
    clinicalNoteTemplate?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class ClinicalNoteFieldTypesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ClinicalNoteFieldTypesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.SoapNoteLineItemFieldType[];
    next?: string;
    previous?: string;
}
export declare class ClinicalNoteFieldTypesListRequest extends SpeakeasyBase {
    queryParams: ClinicalNoteFieldTypesListQueryParams;
    security: ClinicalNoteFieldTypesListSecurity;
}
export declare class ClinicalNoteFieldTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    clinicalNoteFieldTypesList200ApplicationJSONObject?: ClinicalNoteFieldTypesList200ApplicationJson;
}
