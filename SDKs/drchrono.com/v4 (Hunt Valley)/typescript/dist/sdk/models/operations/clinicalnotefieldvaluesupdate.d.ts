import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteFieldValuesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClinicalNoteFieldValuesUpdateQueryParams extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    doctor?: number;
    since?: string;
}
export declare class ClinicalNoteFieldValuesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClinicalNoteFieldValuesUpdateRequest extends SpeakeasyBase {
    pathParams: ClinicalNoteFieldValuesUpdatePathParams;
    queryParams: ClinicalNoteFieldValuesUpdateQueryParams;
    security: ClinicalNoteFieldValuesUpdateSecurity;
}
export declare class ClinicalNoteFieldValuesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
