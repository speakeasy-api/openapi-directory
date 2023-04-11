import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientVaccineRecordsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientVaccineRecordsListRequest extends SpeakeasyBase {
    cursor?: string;
    cvxCode?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PatientVaccineRecordsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PatientVaccineRecord[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientVaccineRecordsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientVaccineRecordsList200ApplicationJSONObject?: PatientVaccineRecordsList200ApplicationJSON;
}
