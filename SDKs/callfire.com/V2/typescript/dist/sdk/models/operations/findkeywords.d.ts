import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindKeywordsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindKeywordsRequest extends SpeakeasyBase {
    /**
     * A keyword to search for
     */
    keywords?: string[];
}
export declare class FindKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    keywordList?: shared.KeywordList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
