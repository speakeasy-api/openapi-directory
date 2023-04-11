import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuotePostCreateQuoteWithGeneratingReferenceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quotePostCreateQuoteWithGeneratingReference200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
