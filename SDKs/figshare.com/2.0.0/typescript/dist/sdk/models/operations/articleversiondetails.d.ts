import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleVersionDetailsRequest extends SpeakeasyBase {
    /**
     * Article Unique identifier
     */
    articleId: number;
    /**
     * Article Version Number
     */
    vNumber: number;
}
export declare class ArticleVersionDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Article representation
     */
    articleComplete?: shared.ArticleComplete;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
