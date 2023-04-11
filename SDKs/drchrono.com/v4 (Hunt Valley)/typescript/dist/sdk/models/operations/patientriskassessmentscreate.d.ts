import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientRiskAssessmentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientRiskAssessmentsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientRiskAssessmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientRiskAssessment?: shared.PatientRiskAssessment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
