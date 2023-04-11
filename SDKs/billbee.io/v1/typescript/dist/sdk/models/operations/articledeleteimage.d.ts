import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArticleDeleteImageRequest extends SpeakeasyBase {
    /**
     * The image id
     */
    imageId: number;
}
export declare class ArticleDeleteImageResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articleDeleteImage200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    articleDeleteImage200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
