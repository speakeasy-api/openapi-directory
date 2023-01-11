import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientRiskAssessmentsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientRiskAssessmentsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientRiskAssessmentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientRiskAssessmentsReadRequest extends SpeakeasyBase {
    pathParams: PatientRiskAssessmentsReadPathParams;
    queryParams: PatientRiskAssessmentsReadQueryParams;
    security: PatientRiskAssessmentsReadSecurity;
}
export declare class PatientRiskAssessmentsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientRiskAssessment?: shared.PatientRiskAssessment;
    statusCode: number;
}
