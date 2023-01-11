import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteTemplatesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class ClinicalNoteTemplatesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ClinicalNoteTemplatesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.SoapNoteCustomReport[];
    next?: string;
    previous?: string;
}
export declare class ClinicalNoteTemplatesListRequest extends SpeakeasyBase {
    queryParams: ClinicalNoteTemplatesListQueryParams;
    security: ClinicalNoteTemplatesListSecurity;
}
export declare class ClinicalNoteTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    clinicalNoteTemplatesList200ApplicationJSONObject?: ClinicalNoteTemplatesList200ApplicationJson;
}
