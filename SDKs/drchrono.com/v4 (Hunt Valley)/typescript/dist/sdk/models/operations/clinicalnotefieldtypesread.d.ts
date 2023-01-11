import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteFieldTypesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClinicalNoteFieldTypesReadQueryParams extends SpeakeasyBase {
    clinicalNoteTemplate?: number;
    doctor?: number;
}
export declare class ClinicalNoteFieldTypesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClinicalNoteFieldTypesReadRequest extends SpeakeasyBase {
    pathParams: ClinicalNoteFieldTypesReadPathParams;
    queryParams: ClinicalNoteFieldTypesReadQueryParams;
    security: ClinicalNoteFieldTypesReadSecurity;
}
export declare class ClinicalNoteFieldTypesReadResponse extends SpeakeasyBase {
    contentType: string;
    soapNoteLineItemFieldType?: shared.SoapNoteLineItemFieldType;
    statusCode: number;
}
