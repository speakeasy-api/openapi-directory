import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientVaccineRecordsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientVaccineRecordsPartialUpdateRequest extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
