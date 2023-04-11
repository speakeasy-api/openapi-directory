import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type that defines the field for the aspect rating details, such as the aspect rating value, usually TRUE or FALSE and the user count and percentage.
 */
export declare class RatingAspectDistribution extends SpeakeasyBase {
    /**
     * The number of eBay users that choose this rating aspect value.
     */
    count?: number;
    /**
     * The percentage of the aspect rating value. <br /><br /> <b> ratingAspectDistributions.percentage</b> =  <b> ratingAspectDistributions.count</b> /  <b>ratingAspects.count</b>
     */
    percentage?: string;
    /**
     * The rating aspect. For example: TRUE or FALSE
     */
    value?: string;
}
