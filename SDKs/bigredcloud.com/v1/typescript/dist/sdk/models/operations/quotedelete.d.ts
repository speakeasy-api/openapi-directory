import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuoteDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Quote to remove.
     */
    id: number;
    /**
     * Timestamp of Quote to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class QuoteDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quoteDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
