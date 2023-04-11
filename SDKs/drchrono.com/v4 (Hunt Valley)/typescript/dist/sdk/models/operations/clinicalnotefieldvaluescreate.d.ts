import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteFieldValuesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteFieldValuesCreateRequest extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    doctor?: number;
    since?: string;
}
export declare class ClinicalNoteFieldValuesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    soapNoteLineItemFieldValue?: shared.SoapNoteLineItemFieldValue;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
