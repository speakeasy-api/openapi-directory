import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentsPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentsPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
