import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingPromotion } from "./offeringpromotion";
/**
 * Success
 */
export declare class ListOfferingPromotionsResult extends SpeakeasyBase {
    nextToken?: string;
    offeringPromotions?: OfferingPromotion[];
}
