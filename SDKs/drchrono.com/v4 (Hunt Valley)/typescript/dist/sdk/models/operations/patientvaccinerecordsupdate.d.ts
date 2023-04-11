import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientVaccineRecordsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientVaccineRecordsUpdateRequest extends SpeakeasyBase {
    cvxCode?: string;
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class PatientVaccineRecordsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
