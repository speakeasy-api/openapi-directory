import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsReadRequest extends SpeakeasyBase {
    chartId?: string;
    dateOfBirth?: string;
    doctor?: number;
    email?: string;
    ethnicity?: string;
    firstName?: string;
    gender?: string;
    id: string;
    lastName?: string;
    preferredLanguage?: string;
    race?: string;
    since?: string;
}
export declare class PatientsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patient?: shared.Patient;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
