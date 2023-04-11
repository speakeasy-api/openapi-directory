import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientLabResultsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientLabResultsPartialUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
