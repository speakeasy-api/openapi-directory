import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientInterventionsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientInterventionsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientInterventionsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientIntervention?: shared.PatientIntervention;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
