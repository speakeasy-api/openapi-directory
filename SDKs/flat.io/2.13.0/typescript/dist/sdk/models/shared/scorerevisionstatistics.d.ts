import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The statistics related to the score revision (additions and deletions)
 *
 * @remarks
 *
 */
export declare class ScoreRevisionStatistics extends SpeakeasyBase {
    /**
     * The number of additions operations in the last revision
     */
    additions?: number;
    /**
     * The number of deletions operations in the last revision
     */
    deletions?: number;
}
