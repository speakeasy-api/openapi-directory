import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetKeywordLeaseConfigSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetKeywordLeaseConfigRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * A Keyword to get KeywordConfig by
     */
    keyword: string;
}
export declare class GetKeywordLeaseConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    keywordConfig?: shared.KeywordConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
