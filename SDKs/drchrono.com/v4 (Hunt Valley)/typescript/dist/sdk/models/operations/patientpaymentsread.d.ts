import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPaymentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPaymentsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class PatientPaymentsReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashPayment?: shared.CashPayment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
