import { SpeakeasyBase } from "../../../internal/utils";
import { DifferenceStatusEnum } from "./differencestatusenum";
import { QuestionDifference } from "./questiondifference";
/**
 * A pillar difference return object.
 */
export declare class PillarDifference extends SpeakeasyBase {
    differenceStatus?: DifferenceStatusEnum;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    pillarId?: string;
    /**
     * The name of the pillar.
     */
    pillarName?: string;
    questionDifferences?: QuestionDifference[];
}
