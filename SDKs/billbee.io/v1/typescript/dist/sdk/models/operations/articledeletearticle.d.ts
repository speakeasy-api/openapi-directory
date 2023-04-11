import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArticleDeleteArticleRequest extends SpeakeasyBase {
    /**
     * The id of the Product
     */
    id: number;
}
export declare class ArticleDeleteArticleResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articleDeleteArticle200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    articleDeleteArticle200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
