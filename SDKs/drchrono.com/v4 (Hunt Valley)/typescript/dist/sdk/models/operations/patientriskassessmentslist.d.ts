import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientRiskAssessmentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientRiskAssessmentsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
/**
 * Paginated Result
 */
export declare class PatientRiskAssessmentsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PatientRiskAssessment[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientRiskAssessmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientRiskAssessmentsList200ApplicationJSONObject?: PatientRiskAssessmentsList200ApplicationJSON;
}
