import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientFlagTypesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientFlagTypesCreateRequest extends SpeakeasyBase {
    doctor?: number;
}
export declare class PatientFlagTypesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientFlagType?: shared.PatientFlagType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
