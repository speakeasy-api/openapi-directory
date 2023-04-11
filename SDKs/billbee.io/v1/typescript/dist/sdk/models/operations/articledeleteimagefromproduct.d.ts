import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ArticleDeleteImageFromProductRequest extends SpeakeasyBase {
    /**
     * The image id
     */
    imageId: number;
    /**
     * The product id
     */
    productId: number;
}
export declare class ArticleDeleteImageFromProductResponse extends SpeakeasyBase {
    /**
     * OK
     */
    articleDeleteImageFromProduct200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    articleDeleteImageFromProduct200TextJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
