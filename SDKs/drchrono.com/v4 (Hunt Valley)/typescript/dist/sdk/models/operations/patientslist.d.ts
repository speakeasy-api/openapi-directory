import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsListRequest extends SpeakeasyBase {
    chartId?: string;
    cursor?: string;
    dateOfBirth?: string;
    doctor?: number;
    email?: string;
    ethnicity?: string;
    firstName?: string;
    gender?: string;
    lastName?: string;
    pageSize?: number;
    preferredLanguage?: string;
    race?: string;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PatientsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.Patient[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientsList200ApplicationJSONObject?: PatientsList200ApplicationJSON;
}
