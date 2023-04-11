import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CashPaymentsPostResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashPaymentsPost200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
