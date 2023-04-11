import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomersGetQuotesRequest extends SpeakeasyBase {
    /**
     * Id of Customer to return quotes.
     */
    itemId: number;
}
export declare class CustomersGetQuotesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quoteDtos?: shared.QuoteDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
