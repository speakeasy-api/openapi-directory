import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuoteReopenRequest extends SpeakeasyBase {
    /**
     * Id of Quote to reopen
     */
    id: number;
}
export declare class QuoteReopenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quoteReopen200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
