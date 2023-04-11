import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeywordSearchRequest extends SpeakeasyBase {
    /**
     * domain for the search
     */
    domainCode: string;
    /**
     * keyword to search
     */
    keyword: string;
    /**
     * number of the results (max 20)
     */
    numberOfProducts?: number;
    /**
     * sort option
     */
    sortBy?: string;
}
export declare class KeywordSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    keywordSearchResponse?: shared.KeywordSearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
