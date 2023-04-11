import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientRiskAssessmentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientRiskAssessmentsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientRiskAssessmentsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientRiskAssessment?: shared.PatientRiskAssessment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
