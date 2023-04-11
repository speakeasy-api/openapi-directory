import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientMessagesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientMessagesCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientMessagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientMessage?: shared.PatientMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
