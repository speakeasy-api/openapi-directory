import { SpeakeasyBase } from "../../../internal/utils";
import { AnswerReasonEnum } from "./answerreasonenum";
import { Choice } from "./choice";
import { ChoiceAnswer } from "./choiceanswer";
import { RiskEnum } from "./riskenum";
/**
 * An answer of the question.
 */
export declare class Answer extends SpeakeasyBase {
    choiceAnswers?: ChoiceAnswer[];
    /**
     * List of choices available for a question.
     */
    choices?: Choice[];
    helpfulResourceDisplayText?: string;
    /**
     * The helpful resource URL for a question.
     */
    helpfulResourceUrl?: string;
    /**
     * <p>The improvement plan URL for a question.</p> <p>This value is only available if the question has been answered.</p>
     */
    improvementPlanUrl?: string;
    /**
     * Defines whether this question is applicable to a lens review.
     */
    isApplicable?: boolean;
    /**
     * The notes associated with the workload.
     */
    notes?: string;
    /**
     * <p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>
     */
    pillarId?: string;
    /**
     * The description of the question.
     */
    questionDescription?: string;
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
