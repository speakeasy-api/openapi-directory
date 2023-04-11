import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCategoriesKeywordsIdKeywordRequest extends SpeakeasyBase {
    expand?: string;
    idKeyword: number;
}
export declare class DeleteCategoriesKeywordsIdKeywordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful DELETE on Keyword resource
     */
    keyword?: shared.Keyword;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
