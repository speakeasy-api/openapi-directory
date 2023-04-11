import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestBuyRecommendationRequest extends SpeakeasyBase {
    /**
     * The url of the requested product.
     */
    url: string;
}
export declare class RequestBuyRecommendationResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    buyRecommendationResponse?: shared.BuyRecommendationResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
