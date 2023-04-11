import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientLabResultsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientLabResultsUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
