import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientRiskAssessmentsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientRiskAssessmentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientRiskAssessmentsCreateRequest extends SpeakeasyBase {
    queryParams: PatientRiskAssessmentsCreateQueryParams;
    security: PatientRiskAssessmentsCreateSecurity;
}
export declare class PatientRiskAssessmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientRiskAssessment?: shared.PatientRiskAssessment;
    statusCode: number;
}
