import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClinicalNoteFieldValuesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ClinicalNoteFieldValuesPartialUpdateQueryParams extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    doctor?: number;
    since?: string;
}
export declare class ClinicalNoteFieldValuesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ClinicalNoteFieldValuesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ClinicalNoteFieldValuesPartialUpdatePathParams;
    queryParams: ClinicalNoteFieldValuesPartialUpdateQueryParams;
    security: ClinicalNoteFieldValuesPartialUpdateSecurity;
}
export declare class ClinicalNoteFieldValuesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
