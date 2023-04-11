import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKeywordLeaseSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetKeywordLeaseRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * Keyword text that a lease is desired for
     */
    keyword: string;
}
export declare class GetKeywordLeaseResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    keywordLease?: shared.KeywordLease;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
