import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferResponse extends SpeakeasyBase {
    /**
     * Bad request. (Invalid billing period, invalid offer, etc.). You cannot get a pricing for a free offer.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get the offer proposal considering your current contract
     */
    offer?: shared.Offer;
}
