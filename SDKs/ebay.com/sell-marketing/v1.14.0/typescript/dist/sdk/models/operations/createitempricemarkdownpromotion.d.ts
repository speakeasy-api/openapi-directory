import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateItemPriceMarkdownPromotionSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateItemPriceMarkdownPromotionResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    createItemPriceMarkdownPromotion201ApplicationJSONObject?: Record<string, any>;
}
