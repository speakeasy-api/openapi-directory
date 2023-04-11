import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientRiskAssessmentsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientRiskAssessmentsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class PatientRiskAssessmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
