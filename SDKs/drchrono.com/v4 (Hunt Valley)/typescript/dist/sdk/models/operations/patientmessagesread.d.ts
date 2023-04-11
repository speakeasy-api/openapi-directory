import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientMessagesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientMessagesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class PatientMessagesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientMessage?: shared.PatientMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
