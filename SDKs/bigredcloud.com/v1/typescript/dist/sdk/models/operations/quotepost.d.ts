import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuotePostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quotePost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
