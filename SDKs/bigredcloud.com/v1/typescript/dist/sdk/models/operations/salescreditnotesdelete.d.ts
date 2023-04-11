import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesCreditNotesDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Sales Credit Note to remove.
     */
    id: number;
    /**
     * Timestamp of Sales Credit Note to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class SalesCreditNotesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesCreditNotesDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
