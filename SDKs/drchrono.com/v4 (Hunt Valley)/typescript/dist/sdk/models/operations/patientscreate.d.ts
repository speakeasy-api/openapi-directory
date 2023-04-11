import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientsCreateRequest extends SpeakeasyBase {
    chartId?: string;
    dateOfBirth?: string;
    doctor?: number;
    email?: string;
    ethnicity?: string;
    firstName?: string;
    gender?: string;
    lastName?: string;
    preferredLanguage?: string;
    race?: string;
    since?: string;
}
export declare class PatientsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patient?: shared.Patient;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
