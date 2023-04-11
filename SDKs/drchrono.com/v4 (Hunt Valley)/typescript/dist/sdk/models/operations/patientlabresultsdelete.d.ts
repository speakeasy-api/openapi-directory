import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientLabResultsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientLabResultsDeleteRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
