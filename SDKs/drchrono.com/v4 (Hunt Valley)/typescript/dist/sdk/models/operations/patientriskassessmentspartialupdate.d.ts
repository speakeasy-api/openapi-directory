import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientRiskAssessmentsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientRiskAssessmentsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientRiskAssessmentsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
