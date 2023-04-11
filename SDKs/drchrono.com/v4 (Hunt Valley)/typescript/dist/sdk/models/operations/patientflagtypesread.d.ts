import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientFlagTypesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientFlagTypesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class PatientFlagTypesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientFlagType?: shared.PatientFlagType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
