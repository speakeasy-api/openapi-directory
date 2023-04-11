import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PaymentsDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Payment to remove.
     */
    id: number;
    /**
     * Timestamp of Payment to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class PaymentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    paymentsDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
