import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientLabResultsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientLabResultsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientLabResultSet?: shared.PatientLabResultSet;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
