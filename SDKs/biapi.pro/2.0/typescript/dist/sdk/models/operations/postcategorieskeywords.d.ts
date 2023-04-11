import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCategoriesKeywordsRequest extends SpeakeasyBase {
    expand?: string;
}
export declare class PostCategoriesKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful POST on Keyword resource
     */
    keyword?: shared.Keyword;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
