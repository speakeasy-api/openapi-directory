import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteFieldValuesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteFieldValuesReadRequest extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    doctor?: number;
    id: string;
    since?: string;
}
export declare class ClinicalNoteFieldValuesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    soapNoteLineItemFieldValue?: shared.SoapNoteLineItemFieldValue;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
