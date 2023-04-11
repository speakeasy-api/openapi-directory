import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type defines of a piece of data that is grouped by the associated basis. It contains the name for the data set and its associated value.
 */
export declare class Distribution extends SpeakeasyBase {
    /**
     * The name of a distribution in which the seller is active.
     */
    name?: string;
    /**
     * This field contains the number of transactions the seller had in the distribution (identified by the associated name field) during the metric evaluationCycle.
     */
    value?: string;
}
