import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendOfferToInterestedBuyersSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class SendOfferToInterestedBuyersRequest extends SpeakeasyBase {
    /**
     * Send offer to eligible items request.
     */
    createOffersRequest?: shared.CreateOffersRequest;
    /**
     * The eBay marketplace on which your listings with &quot;eligible&quot; buyers appear. For a complete list of supported marketplaces, see Negotiation API requirements and restrictions.
     */
    xEbayCMarketplaceId: string;
}
export declare class SendOfferToInterestedBuyersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sendOfferToInterestedBuyersCollectionResponse?: shared.SendOfferToInterestedBuyersCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
