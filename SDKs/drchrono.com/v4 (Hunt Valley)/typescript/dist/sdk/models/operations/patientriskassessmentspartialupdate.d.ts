import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientRiskAssessmentsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientRiskAssessmentsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientRiskAssessmentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientRiskAssessmentsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientRiskAssessmentsPartialUpdatePathParams;
    queryParams: PatientRiskAssessmentsPartialUpdateQueryParams;
    security: PatientRiskAssessmentsPartialUpdateSecurity;
}
export declare class PatientRiskAssessmentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
