import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class KeywordSearchQueryParams extends SpeakeasyBase {
    domainCode: string;
    keyword: string;
    numberOfProducts?: number;
    sortBy?: string;
}
export declare class KeywordSearchRequest extends SpeakeasyBase {
    queryParams: KeywordSearchQueryParams;
}
export declare class KeywordSearchResponse extends SpeakeasyBase {
    contentType: string;
    keywordSearchResponse?: shared.KeywordSearchResponse;
    statusCode: number;
}
