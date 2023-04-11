import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SuppliersDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Supplier to remove.
     */
    id: number;
    /**
     * Timestamp of Supplier to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class SuppliersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    suppliersDelete200ApplicationJSONObject?: Record<string, any>;
}
