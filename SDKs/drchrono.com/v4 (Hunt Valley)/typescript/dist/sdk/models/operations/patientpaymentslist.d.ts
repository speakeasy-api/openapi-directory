import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPaymentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPaymentsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PatientPaymentsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CashPayment[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientPaymentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientPaymentsList200ApplicationJSONObject?: PatientPaymentsList200ApplicationJSON;
}
