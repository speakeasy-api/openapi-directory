import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QuoteGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultQuoteDto?: shared.PageResultQuoteDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
