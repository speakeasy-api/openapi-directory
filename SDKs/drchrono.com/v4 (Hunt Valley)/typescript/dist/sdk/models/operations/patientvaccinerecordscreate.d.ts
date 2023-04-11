import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientVaccineRecordsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientVaccineRecordsCreateRequest extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientVaccineRecord?: shared.PatientVaccineRecord;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
