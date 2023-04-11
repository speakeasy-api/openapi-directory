import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An list of listing ID values for which you want Promoted Listings ad configuration information.
 */
export declare class FindListingRecommendationRequest extends SpeakeasyBase {
    /**
     * A comma-separated list of listing IDs for which you want Promoted Listings ad configuration information. Currently, this method accepts only listingId values from the Trading API. Max: 500 listing IDs
     */
    listingIds?: string[];
}
