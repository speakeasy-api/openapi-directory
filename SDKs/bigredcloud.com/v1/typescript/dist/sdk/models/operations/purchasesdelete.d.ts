import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PurchasesDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Purchase to remove.
     */
    id: number;
    /**
     * Timestamp of Purchase to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class PurchasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    purchasesDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
