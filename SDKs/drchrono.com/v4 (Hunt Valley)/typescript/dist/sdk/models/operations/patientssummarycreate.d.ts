import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientsSummaryCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsSummaryCreateRequest extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patient?: shared.Patient;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
