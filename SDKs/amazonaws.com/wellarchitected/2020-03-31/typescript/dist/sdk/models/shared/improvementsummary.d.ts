import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceImprovementPlan } from "./choiceimprovementplan";
import { RiskEnum } from "./riskenum";
/**
 * An improvement summary of a lens review in a workload.
 */
export declare class ImprovementSummary extends SpeakeasyBase {
    /**
     * <p>The improvement plan URL for a question.</p> <p>This value is only available if the question has been answered.</p>
     */
    improvementPlanUrl?: string;
    improvementPlans?: ChoiceImprovementPlan[];
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    pillarId?: string;
    /**
     * The ID of the question.
     */
    questionId?: string;
    /**
     * The title of the question.
     */
    questionTitle?: string;
    /**
     * The risk for a given workload, lens review, pillar, or question.
     */
    risk?: RiskEnum;
}
