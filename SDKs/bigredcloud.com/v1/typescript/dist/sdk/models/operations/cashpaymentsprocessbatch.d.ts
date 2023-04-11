import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CashPaymentsProcessBatchResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashPaymentsProcessBatch200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
