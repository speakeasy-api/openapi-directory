import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteTemplatesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteTemplatesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class ClinicalNoteTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    soapNoteCustomReport?: shared.SoapNoteCustomReport;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
