import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains information about one value of a specified aspect. This value serves as a product refinement.
 */
export declare class AspectValueDistribution extends SpeakeasyBase {
    /**
     * The localized value of the category aspect identified by <b>refinement.aspectDistributions.localizedAspectName</b>.
     */
    localizedAspectValue?: string;
    /**
     * The number of times the value of <b>localizedAspectValue</b> has been used for eBay product listings. By comparing this quantity to the <b>matchCount</b> for other values of the same aspect, you can present a histogram of the values to sellers, who can use that information to select which aspect value is most appropriate for their product. You can then include the user-selected value in the the <b>search</b> call's <b>aspect_filter</b> parameter to refine your search.
     */
    matchCount?: number;
    /**
     * A HATEOAS reference that further refines the search with this particular <b>localizedAspectValue</b>.
     */
    refinementHref?: string;
}
