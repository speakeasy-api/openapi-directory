import { SpeakeasyBase } from "../../../internal/utils";
import { PromptSpecification } from "./promptspecification";
import { SlotConstraintEnum } from "./slotconstraintenum";
/**
 * Summary information about a slot, a value that the bot elicits from the user.
 */
export declare class SlotSummary extends SpeakeasyBase {
    description?: string;
    lastUpdatedDateTime?: Date;
    slotConstraint?: SlotConstraintEnum;
    slotId?: string;
    slotName?: string;
    slotTypeId?: string;
    valueElicitationPromptSpecification?: PromptSpecification;
}
