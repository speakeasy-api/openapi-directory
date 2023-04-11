import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AmendmentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AmendmentsReadRequest extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    id: string;
    patient?: number;
}
export declare class AmendmentsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    patientAmendment?: shared.PatientAmendment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
