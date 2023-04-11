import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientsSummaryDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsSummaryDeleteRequest extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    id: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
