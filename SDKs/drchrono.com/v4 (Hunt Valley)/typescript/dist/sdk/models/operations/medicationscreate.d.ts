import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MedicationsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MedicationsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class MedicationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    patientDrug?: shared.PatientDrug;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
