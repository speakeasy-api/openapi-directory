import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientCommunicationsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientCommunicationsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientCommunicationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientCommunication?: shared.PatientCommunication;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
