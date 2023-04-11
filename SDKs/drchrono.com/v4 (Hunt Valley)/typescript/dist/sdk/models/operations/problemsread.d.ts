import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProblemsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ProblemsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class ProblemsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientProblem?: shared.PatientProblem;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
