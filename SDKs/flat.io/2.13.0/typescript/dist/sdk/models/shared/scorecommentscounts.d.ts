import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A computed version of the total, unique, weekly and monthly number of
 *
 * @remarks
 * comments added on the documents (this doesn't include inline comments).
 *
 */
export declare class ScoreCommentsCounts extends SpeakeasyBase {
    /**
     * The monthly unique number of comments added to the score
     */
    monthly?: number;
    /**
     * The total number of comments added to the score
     */
    total?: number;
    /**
     * The unique (1/user) number of comments added to the score
     */
    unique?: number;
    /**
     * The weekly unique number of comments added to the score
     */
    weekly?: number;
}
