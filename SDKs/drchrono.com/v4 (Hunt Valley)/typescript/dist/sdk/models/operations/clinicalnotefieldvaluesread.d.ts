import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteFieldValuesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClinicalNoteFieldValuesReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    doctor?: number;
    since?: string;
}
export declare class ClinicalNoteFieldValuesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClinicalNoteFieldValuesReadRequest extends SpeakeasyBase {
    pathParams: ClinicalNoteFieldValuesReadPathParams;
    queryParams: ClinicalNoteFieldValuesReadQueryParams;
    security: ClinicalNoteFieldValuesReadSecurity;
}
export declare class ClinicalNoteFieldValuesReadResponse extends SpeakeasyBase {
    contentType: string;
    soapNoteLineItemFieldValue?: shared.SoapNoteLineItemFieldValue;
    statusCode: number;
}
