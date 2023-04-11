import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientInterventionsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientInterventionsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
/**
 * Paginated Result
 */
export declare class PatientInterventionsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PatientIntervention[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientInterventionsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientInterventionsList200ApplicationJSONObject?: PatientInterventionsList200ApplicationJSON;
}
