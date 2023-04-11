import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientCommunicationsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientCommunicationsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientCommunicationsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientCommunication?: shared.PatientCommunication;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
