import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatientFlagTypesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientFlagTypesUpdateRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class PatientFlagTypesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
