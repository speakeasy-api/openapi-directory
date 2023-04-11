import { SpeakeasyBase } from "../../../internal/utils";
import { ListingRecommendation } from "./listingrecommendation";
/**
 * The high-level object used to return a set of Promoted Listings ad recommendations.
 */
export declare class PagedListingRecommendationCollection extends SpeakeasyBase {
    /**
     * The URI of the current page of results from the result set.
     */
    href?: string;
    /**
     * The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter.
     */
    limit?: number;
    /**
     * Returns a list of listingRecommendations, where each element in the list offers recommendations for the associated listingId. Which elements are returned depend on how you structure the request. For example, if you request recommendations for all of a sellers listings (by leaving the request payload empty), ad recommendations are returned only for those listings where promoteWithAd is set to RECOMMENDED.
     */
    listingRecommendations?: ListingRecommendation[];
    /**
     * The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048
     */
    next?: string;
    /**
     * The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0.
     */
    offset?: number;
    /**
     * The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048
     */
    prev?: string;
    /**
     * The total number of items retrieved in the result set. If no items are found, this field is returned with a value of 0.
     */
    total?: number;
}
