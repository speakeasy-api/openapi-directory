import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleVersionsRequest extends SpeakeasyBase {
    /**
     * Article Unique identifier
     */
    articleId: number;
}
export declare class ArticleVersionsResponse extends SpeakeasyBase {
    /**
     * OK. Article version representations
     */
    articleVersions?: shared.ArticleVersions[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
