import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesRepDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Sale Rep to remove.
     */
    id: number;
    /**
     * Timestamp of Sale Rep to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class SalesRepDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesRepDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
