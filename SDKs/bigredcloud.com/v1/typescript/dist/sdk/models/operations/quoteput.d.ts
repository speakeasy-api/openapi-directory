import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuotePutRequest extends SpeakeasyBase {
    /**
     * Information of Quote to update.
     */
    quoteDto: shared.QuoteDto;
    /**
     * Id of Quote to update.
     */
    id: number;
}
export declare class QuotePutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quotePut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
