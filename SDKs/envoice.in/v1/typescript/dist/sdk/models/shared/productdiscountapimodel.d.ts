import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductDiscountApiModel extends SpeakeasyBase {
    /**
     * Discount amount
     */
    discountAmount?: number;
    /**
     * Discount percentage
     */
    discountPercentage?: number;
    /**
     * Product discount id
     */
    id?: number;
    /**
     * Name
     */
    name?: string;
    /**
     * Discount start date
     */
    validFrom?: Date;
    /**
     * Discount expiration date
     */
    validTo?: Date;
}
