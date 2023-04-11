import { SpeakeasyBase } from "../../../internal/utils";
import { AspectDistribution } from "./aspectdistribution";
/**
 * This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
 */
export declare class Refinement extends SpeakeasyBase {
    /**
     * Contains information about one or more aspects that are associated with the category identified by <b>dominantCategoryId</b>.
     */
    aspectDistributions?: AspectDistribution[];
    /**
     * The ID of the category that eBay determines is most likely to cover the products matching the search criteria.
     */
    dominantCategoryId?: string;
}
