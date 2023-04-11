import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArticleGetCategoryResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articleGetCategory200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    articleGetCategory200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
