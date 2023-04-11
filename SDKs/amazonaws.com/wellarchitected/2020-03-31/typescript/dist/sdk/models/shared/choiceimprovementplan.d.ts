import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The choice level improvement plan.
 */
export declare class ChoiceImprovementPlan extends SpeakeasyBase {
    /**
     * The ID of a choice.
     */
    choiceId?: string;
    displayText?: string;
    /**
     * <p>The improvement plan URL for a question.</p> <p>This value is only available if the question has been answered.</p>
     */
    improvementPlanUrl?: string;
}
