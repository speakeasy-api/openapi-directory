import { SpeakeasyBase } from "../../../internal/utils";
import { PromptSpecification } from "./promptspecification";
import { SampleUtterance } from "./sampleutterance";
import { SlotCaptureSetting } from "./slotcapturesetting";
import { SlotConstraintEnum } from "./slotconstraintenum";
import { SlotDefaultValueSpecification } from "./slotdefaultvaluespecification";
import { WaitAndContinueSpecification } from "./waitandcontinuespecification";
/**
 * Specifies the elicitation setting details for constituent sub slots of a composite slot.
 */
export declare class SlotValueElicitationSetting extends SpeakeasyBase {
    defaultValueSpecification?: SlotDefaultValueSpecification;
    promptSpecification?: PromptSpecification;
    sampleUtterances?: SampleUtterance[];
    slotCaptureSetting?: SlotCaptureSetting;
    slotConstraint: SlotConstraintEnum;
    /**
     * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
     */
    waitAndContinueSpecification?: WaitAndContinueSpecification;
}
