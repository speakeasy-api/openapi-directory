import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuotePostGenerateSaleInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quotePostGenerateSaleInvoice200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
