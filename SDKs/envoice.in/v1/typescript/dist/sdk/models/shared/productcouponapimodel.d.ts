import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductCouponApiModel extends SpeakeasyBase {
    /**
     * Coupon to apply in order to get the discount
     */
    code?: string;
    /**
     * Discount amount
     */
    discountAmount?: number;
    /**
     * Discount percentage
     */
    discountPercentage?: number;
    /**
     * Product coupon id
     */
    id?: number;
    /**
     * Coupon expiration date
     */
    validUntil?: Date;
}
