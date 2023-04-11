import { SpeakeasyBase } from "../../../internal/utils";
import { PromptSpecification } from "./promptspecification";
import { SampleUtterance } from "./sampleutterance";
import { SlotDefaultValueSpecification } from "./slotdefaultvaluespecification";
import { WaitAndContinueSpecification } from "./waitandcontinuespecification";
/**
 * <p>Subslot elicitation settings.</p> <p> <code>DefaultValueSpecification</code> is a list of default values for a constituent sub slot in a composite slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values. This is similar to <code>DefaultValueSpecification</code> for slots.</p> <p> <code>PromptSpecification</code> is the prompt that Amazon Lex uses to elicit the sub slot value from the user. This is similar to <code>PromptSpecification</code> for slots.</p>
 */
export declare class SubSlotValueElicitationSetting extends SpeakeasyBase {
    /**
     * Defines a list of values that Amazon Lex should use as the default value for a slot.
     */
    defaultValueSpecification?: SlotDefaultValueSpecification;
    /**
     * Specifies a list of message groups that Amazon Lex sends to a user to elicit a response.
     */
    promptSpecification: PromptSpecification;
    sampleUtterances?: SampleUtterance[];
    /**
     * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.
     */
    waitAndContinueSpecification?: WaitAndContinueSpecification;
}
