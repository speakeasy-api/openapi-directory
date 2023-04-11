import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This container defines a coded coupon promotion. It is required if the promotion type is CODED_COUPON.
 */
export declare class CouponConfiguration extends SpeakeasyBase {
    /**
     * A unique code that buyers can use during checkout to receive a discount. The code must be unique across eBay. <br><br>The code must be from 8-15 alphanumeric characters and can contain no more than two dashes ( - ).<br><br>This is required when the promotion type is CODED_COUPON.
     */
    couponCode?: string;
    /**
     * This indicates the type of Coded Coupon promotion, and is required when the promotion type is <b>CODED_COUPON</b>.<br><br>Supported types:<ul><li><b>PRIVATE_SINGLE_SELLER_COUPON:</b> Anyone can use and share the coupon code, but it isn't posted on eBay.</li><li><b>PUBLIC_SINGLE_SELLER_COUPON:</b> Anyone can find the coupon code on eBay and use it.</li></ul> For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/sme:CouponTypeEnum'>eBay API documentation</a>
     */
    couponType?: string;
    /**
     * This sets the limit on the number of times a buyer can use this coupon. The range of values is 1-10. If no value is provided, a buyer can use the coupon an unlimited number of times.
     */
    maxCouponRedemptionPerUser?: number;
}
