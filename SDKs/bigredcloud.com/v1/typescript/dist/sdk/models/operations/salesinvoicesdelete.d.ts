import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesInvoicesDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Sales Invoice to remove.
     */
    id: number;
    /**
     * Timestamp of Sales Invoice to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class SalesInvoicesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesInvoicesDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
