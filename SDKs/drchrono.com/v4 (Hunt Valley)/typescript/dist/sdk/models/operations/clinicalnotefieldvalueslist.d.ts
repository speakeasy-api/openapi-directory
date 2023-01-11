import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteFieldValuesListQueryParams extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
export declare class ClinicalNoteFieldValuesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ClinicalNoteFieldValuesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.SoapNoteLineItemFieldValue[];
    next?: string;
    previous?: string;
}
export declare class ClinicalNoteFieldValuesListRequest extends SpeakeasyBase {
    queryParams: ClinicalNoteFieldValuesListQueryParams;
    security: ClinicalNoteFieldValuesListSecurity;
}
export declare class ClinicalNoteFieldValuesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    clinicalNoteFieldValuesList200ApplicationJSONObject?: ClinicalNoteFieldValuesList200ApplicationJson;
}
