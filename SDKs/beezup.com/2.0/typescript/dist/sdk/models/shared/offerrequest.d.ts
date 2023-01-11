import { SpeakeasyBase } from "../../../internal/utils";
export declare class OfferRequest extends SpeakeasyBase {
    billingPeriodInMonth: number;
    couponDiscountCode?: string;
    couponOfferCode?: string;
    offerId: number;
    storeCount: number;
}
