import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientLabResultsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientLabResultsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientLabResultSet?: shared.PatientLabResultSet;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
