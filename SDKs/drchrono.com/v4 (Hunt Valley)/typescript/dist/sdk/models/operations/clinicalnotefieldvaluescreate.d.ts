import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteFieldValuesCreateQueryParams extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    doctor?: number;
    since?: string;
}
export declare class ClinicalNoteFieldValuesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClinicalNoteFieldValuesCreateRequest extends SpeakeasyBase {
    queryParams: ClinicalNoteFieldValuesCreateQueryParams;
    security: ClinicalNoteFieldValuesCreateSecurity;
}
export declare class ClinicalNoteFieldValuesCreateResponse extends SpeakeasyBase {
    contentType: string;
    soapNoteLineItemFieldValue?: shared.SoapNoteLineItemFieldValue;
    statusCode: number;
}
