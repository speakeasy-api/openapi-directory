import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchSecurity extends SpeakeasyBase {
    apiKey: string;
}
/**
 * Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.
 */
export declare enum SearchMatchModeEnum {
    Literal = "literal",
    Regexp = "regexp"
}
export declare class SearchRequest extends SpeakeasyBase {
    /**
     * Whether the query is to be interpreted as a literal (`literal`) instead of as an RE2 regular expression (`regexp`). Literal searches are faster and do not require escaping special characters, regular expression searches are more powerful.
     */
    matchMode?: SearchMatchModeEnum;
    /**
     * The search query, for example `who knows...` (literal) or `who knows\.\.\.` (regular expression). See https://codesearch.debian.net/faq for more details about which keywords are supported. The regular expression flavor is RE2, see https://github.com/google/re2/blob/master/doc/syntax.txt
     */
    query: string;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * All search results
     */
    searchResults?: shared.SearchResult[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
