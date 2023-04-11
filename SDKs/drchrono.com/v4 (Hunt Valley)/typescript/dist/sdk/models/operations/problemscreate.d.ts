import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProblemsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ProblemsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class ProblemsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientProblem?: shared.PatientProblem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
