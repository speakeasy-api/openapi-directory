import { SpeakeasyBase } from "../../../internal/utils";
import { AspectRecommendations } from "./aspectrecommendations";
import { ProductRecommendation } from "./productrecommendation";
/**
 * This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.
 */
export declare class CorrectiveRecommendations extends SpeakeasyBase {
    /**
     * This container is returned for ASPECTS_ADOPTION violations if eBay has found one or more item aspect name-value pairs that may be appropriate for the seller's product. In many cases, the missing or invalid item aspect(s) shown under the corresponding violationData array, will also show up under this array with suggested value(s).
     */
    aspectRecommendations?: AspectRecommendations[];
    /**
     * This type is used by the productRecommendation container, which is returned if eBay has found an eBay catalog product that may be a match for the product (or product variation) that has a listing violation. Note: eBay catalog product adoption is not enforced at this time, so product adoption violations are no longer returned. Due to this fact, this type and productRecommendation container are not currently applicable.
     */
    productRecommendation?: ProductRecommendation;
}
