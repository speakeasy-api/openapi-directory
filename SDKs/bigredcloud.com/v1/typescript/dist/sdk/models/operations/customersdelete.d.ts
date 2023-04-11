import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomersDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Customer to remove.
     */
    id: number;
    /**
     * Timestamp of Customer to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class CustomersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customersDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
