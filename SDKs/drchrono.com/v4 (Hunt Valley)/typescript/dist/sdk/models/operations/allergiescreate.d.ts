import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AllergiesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AllergiesCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class AllergiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientAllergy?: shared.PatientAllergy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
