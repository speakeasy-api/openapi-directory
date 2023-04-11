import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleVersionEmbargoRequest extends SpeakeasyBase {
    /**
     * Article Unique identifier
     */
    articleId: number;
    /**
     * Version Number
     */
    vNumber: number;
}
export declare class ArticleVersionEmbargoResponse extends SpeakeasyBase {
    /**
     * OK. Embargo representation
     */
    articleEmbargo?: shared.ArticleEmbargo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
