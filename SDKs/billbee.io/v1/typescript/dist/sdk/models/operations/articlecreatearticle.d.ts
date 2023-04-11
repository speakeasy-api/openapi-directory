import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArticleCreateArticleResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articleCreateArticle200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    articleCreateArticle200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
