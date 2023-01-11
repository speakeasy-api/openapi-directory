import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientRiskAssessmentsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class PatientRiskAssessmentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class PatientRiskAssessmentsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientRiskAssessment[];
    next?: string;
    previous?: string;
}
export declare class PatientRiskAssessmentsListRequest extends SpeakeasyBase {
    queryParams: PatientRiskAssessmentsListQueryParams;
    security: PatientRiskAssessmentsListSecurity;
}
export declare class PatientRiskAssessmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patientRiskAssessmentsList200ApplicationJSONObject?: PatientRiskAssessmentsList200ApplicationJson;
}
