import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuoteProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quoteProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
