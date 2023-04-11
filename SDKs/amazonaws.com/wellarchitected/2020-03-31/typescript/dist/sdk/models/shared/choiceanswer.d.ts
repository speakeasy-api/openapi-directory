import { SpeakeasyBase } from "../../../internal/utils";
import { ChoiceReasonEnum } from "./choicereasonenum";
import { ChoiceStatusEnum } from "./choicestatusenum";
/**
 * A choice that has been answered on a question in your workload.
 */
export declare class ChoiceAnswer extends SpeakeasyBase {
    /**
     * The ID of a choice.
     */
    choiceId?: string;
    notes?: string;
    reason?: ChoiceReasonEnum;
    status?: ChoiceStatusEnum;
}
