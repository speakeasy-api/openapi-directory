import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPaymentLogReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPaymentLogReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    office?: number;
    since?: string;
}
export declare class PatientPaymentLogReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashPaymentLog?: shared.CashPaymentLog;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
