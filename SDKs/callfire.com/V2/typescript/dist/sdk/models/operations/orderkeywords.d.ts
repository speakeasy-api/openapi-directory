import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderKeywordsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class OrderKeywordsRequest extends SpeakeasyBase {
    /**
     * Request object which contains a list of keywords to buy
     */
    keywordPurchaseRequest?: shared.KeywordPurchaseRequest;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
}
export declare class OrderKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    resourceId?: shared.ResourceId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
