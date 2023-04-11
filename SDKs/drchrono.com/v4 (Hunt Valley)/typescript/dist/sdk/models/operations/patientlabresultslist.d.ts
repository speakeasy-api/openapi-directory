import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientLabResultsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientLabResultsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    orderingDoctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PatientLabResultsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PatientLabResultSet[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientLabResultsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientLabResultsList200ApplicationJSONObject?: PatientLabResultsList200ApplicationJSON;
}
