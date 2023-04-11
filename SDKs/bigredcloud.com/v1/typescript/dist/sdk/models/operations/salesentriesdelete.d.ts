import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesEntriesDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Sales Entry to remove.
     */
    id: number;
    /**
     * Timestamp of Sales Entry to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class SalesEntriesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesEntriesDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
