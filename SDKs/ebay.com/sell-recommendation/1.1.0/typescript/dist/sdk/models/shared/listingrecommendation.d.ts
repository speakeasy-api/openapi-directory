import { SpeakeasyBase } from "../../../internal/utils";
import { MarketingRecommendation } from "./marketingrecommendation";
/**
 * A complex type that contains the ID of an actively listed item and a set of related listing recommendations. The recommendations contain information the seller can use to optimize their listing configurations.
 */
export declare class ListingRecommendation extends SpeakeasyBase {
    /**
     * An ID that identifies the active listing associated with the eBay recommendations.
     */
    listingId?: string;
    /**
     * A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.
     */
    marketing?: MarketingRecommendation;
}
