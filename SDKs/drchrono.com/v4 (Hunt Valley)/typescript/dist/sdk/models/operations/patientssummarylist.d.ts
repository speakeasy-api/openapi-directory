import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientsSummaryListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsSummaryListRequest extends SpeakeasyBase {
    cursor?: string;
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PatientsSummaryList200ApplicationJSON extends SpeakeasyBase {
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
export declare class PatientsSummaryListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientsSummaryList200ApplicationJSONObject?: PatientsSummaryList200ApplicationJSON;
}
