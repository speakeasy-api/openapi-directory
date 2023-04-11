import { SpeakeasyBase } from "../../../internal/utils";
import { RatingAspectDistribution } from "./ratingaspectdistribution";
/**
 * The type that defines the fields for the product aspect ratings.
 */
export declare class RatingAspect extends SpeakeasyBase {
    /**
     * The number of eBay users that rated the product on this aspect.
     */
    count?: number;
    /**
     * The name of the rating aspect. Camping tent examples: Is it lightweight? or Is it easy to set up?
     */
    description?: string;
    /**
     * The answer or value of the rating aspect. Camping tent examples: Lightweight or Easy to set up
     */
    name?: string;
    /**
     * The container for the details of the aspect rating. The details show the aspect rating value, usually TRUE or FALSE and the user count and percentage.
     */
    ratingAspectDistributions?: RatingAspectDistribution[];
}
