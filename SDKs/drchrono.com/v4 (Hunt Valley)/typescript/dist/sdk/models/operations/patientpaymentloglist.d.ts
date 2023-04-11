import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientPaymentLogListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientPaymentLogListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    office?: number;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PatientPaymentLogList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.CashPaymentLog[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientPaymentLogListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientPaymentLogList200ApplicationJSONObject?: PatientPaymentLogList200ApplicationJSON;
}
