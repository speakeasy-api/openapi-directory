import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AllergiesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AllergiesReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class AllergiesReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientAllergy?: shared.PatientAllergy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
