import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArticlePatchArticleRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * The id of the Product
     */
    id: number;
}
export declare class ArticlePatchArticleResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articlePatchArticle200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    articlePatchArticle200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
