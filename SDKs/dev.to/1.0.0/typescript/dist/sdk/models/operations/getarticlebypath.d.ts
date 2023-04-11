import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetArticleByPathRequest extends SpeakeasyBase {
    slug: string;
    username: string;
}
export declare class GetArticleByPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An Article
     */
    getArticleByPath200ApplicationJSONObject?: Record<string, any>;
}
