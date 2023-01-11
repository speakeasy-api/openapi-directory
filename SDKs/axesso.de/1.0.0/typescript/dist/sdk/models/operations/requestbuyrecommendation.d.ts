import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestBuyRecommendationQueryParams extends SpeakeasyBase {
    url: string;
}
export declare class RequestBuyRecommendationRequest extends SpeakeasyBase {
    queryParams: RequestBuyRecommendationQueryParams;
}
export declare class RequestBuyRecommendationResponse extends SpeakeasyBase {
    buyRecommendationResponse?: shared.BuyRecommendationResponse;
    contentType: string;
    statusCode: number;
}
