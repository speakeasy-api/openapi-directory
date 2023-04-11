import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CashPaymentsDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Cash Receipt to remove.
     */
    id: number;
    /**
     * Timestamp of Cash Receipt to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class CashPaymentsDeleteResponse extends SpeakeasyBase {
    /**
     * OK
     */
    cashPaymentsDelete200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
