import { SpeakeasyBase } from "../../../internal/utils";
import { AspectValueDistribution } from "./aspectvaluedistribution";
/**
 * This type contains information about one category aspect that is associated with a specified category.
 */
export declare class AspectDistribution extends SpeakeasyBase {
    /**
     * Contains information about one or more values of the category aspect identified by <b>localizedAspectName</b>.
     */
    aspectValueDistributions?: AspectValueDistribution[];
    /**
     * The localized name of an aspect that is associated with the category identified by <b>dominantCategoryId</b>.
     */
    localizedAspectName?: string;
}
