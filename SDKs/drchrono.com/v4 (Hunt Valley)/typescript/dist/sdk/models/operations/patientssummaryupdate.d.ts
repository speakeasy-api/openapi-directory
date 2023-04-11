import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientsSummaryUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsSummaryUpdateRequest extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    id: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
