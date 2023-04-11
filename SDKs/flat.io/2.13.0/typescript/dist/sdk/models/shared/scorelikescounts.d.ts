import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A computed version of the weekly, monthly and total of number of likes
 *
 * @remarks
 * for a score
 *
 */
export declare class ScoreLikesCounts extends SpeakeasyBase {
    /**
     * The number of new likes during the last month
     */
    monthly?: number;
    /**
     * The total number of likes of the score
     */
    total?: number;
    /**
     * The number of new likes during the last week
     */
    weekly?: number;
}
