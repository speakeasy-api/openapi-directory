import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1QuotesIdRequest extends SpeakeasyBase {
    /**
     * Id of Sale Rep to return.
     */
    id: number;
}
export declare class GetV1QuotesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    quoteDto?: shared.QuoteDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
