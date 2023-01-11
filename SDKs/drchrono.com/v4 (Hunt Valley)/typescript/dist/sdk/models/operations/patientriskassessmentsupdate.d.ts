import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientRiskAssessmentsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientRiskAssessmentsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientRiskAssessmentsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientRiskAssessmentsUpdateRequest extends SpeakeasyBase {
    pathParams: PatientRiskAssessmentsUpdatePathParams;
    queryParams: PatientRiskAssessmentsUpdateQueryParams;
    security: PatientRiskAssessmentsUpdateSecurity;
}
export declare class PatientRiskAssessmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
