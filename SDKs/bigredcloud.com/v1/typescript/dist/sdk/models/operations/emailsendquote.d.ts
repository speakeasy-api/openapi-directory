import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EmailSendQuoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    emailSendQuote200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
