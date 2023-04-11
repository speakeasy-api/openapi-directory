import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.
 */
export declare class ProductRecommendation extends SpeakeasyBase {
    /**
     * This field will return the eBay Product ID {ePID) of an eBay Catalog product that eBay recommends that the seller use to make their listing compliant. Note: Product Adoption is not enforced at this time. Product Adoption violations are no longer returned.
     */
    epid?: string;
}
