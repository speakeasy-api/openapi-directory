import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPaymentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPaymentsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientPaymentsCreateResponse extends SpeakeasyBase {
    /**
     * Created
     */
    cashPayment?: shared.CashPayment;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
