import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientVaccineRecordsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientVaccineRecordsReadRequest extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientVaccineRecord?: shared.PatientVaccineRecord;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
