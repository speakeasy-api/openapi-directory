import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteFieldValuesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteFieldValuesPartialUpdateRequest extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    doctor?: number;
    id: string;
    since?: string;
}
export declare class ClinicalNoteFieldValuesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
