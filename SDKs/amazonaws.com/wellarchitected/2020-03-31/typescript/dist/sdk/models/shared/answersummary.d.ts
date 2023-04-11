import { SpeakeasyBase } from "../../../internal/utils";
import { AnswerReasonEnum } from "./answerreasonenum";
import { Choice } from "./choice";
import { ChoiceAnswerSummary } from "./choiceanswersummary";
import { RiskEnum } from "./riskenum";
/**
 * An answer summary of a lens review in a workload.
 */
export declare class AnswerSummary extends SpeakeasyBase {
    choiceAnswerSummaries?: ChoiceAnswerSummary[];
    /**
     * List of choices available for a question.
     */
    choices?: Choice[];
    /**
     * Defines whether this question is applicable to a lens review.
     */
    isApplicable?: boolean;
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
    reason?: AnswerReasonEnum;
    /**
     * The risk for a given workload, lens review, pillar, or question.
     */
    risk?: RiskEnum;
    /**
     * <p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>
     */
    selectedChoices?: string[];
}
