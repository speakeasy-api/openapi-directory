import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientsSummaryReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsSummaryReadRequest extends SpeakeasyBase {
    dateOfBirth?: string;
    doctor?: number;
    firstName?: string;
    gender?: string;
    id: string;
    lastName?: string;
    since?: string;
}
export declare class PatientsSummaryReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patient?: shared.Patient;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
