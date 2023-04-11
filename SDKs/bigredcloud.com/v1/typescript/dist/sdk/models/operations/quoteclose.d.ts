import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuoteCloseRequest extends SpeakeasyBase {
    /**
     * Id of Quote to close
     */
    id: number;
}
export declare class QuoteCloseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quoteClose200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
