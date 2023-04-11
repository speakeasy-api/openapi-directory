import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteFieldTypesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteFieldTypesReadRequest extends SpeakeasyBase {
    clinicalNoteTemplate?: number;
    doctor?: number;
    id: string;
}
export declare class ClinicalNoteFieldTypesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    soapNoteLineItemFieldType?: shared.SoapNoteLineItemFieldType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
