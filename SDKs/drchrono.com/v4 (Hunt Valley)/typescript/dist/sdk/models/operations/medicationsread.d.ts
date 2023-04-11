import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MedicationsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MedicationsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class MedicationsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientDrug?: shared.PatientDrug;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
