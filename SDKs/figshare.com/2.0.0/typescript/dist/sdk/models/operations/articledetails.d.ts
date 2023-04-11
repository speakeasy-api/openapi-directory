import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleDetailsRequest extends SpeakeasyBase {
    /**
     * Article Unique identifier
     */
    articleId: number;
}
export declare class ArticleDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Article representation
     */
    articleComplete?: shared.ArticleComplete;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
