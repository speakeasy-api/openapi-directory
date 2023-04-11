import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalSpecification } from "./conditionalspecification";
import { DialogCodeHookInvocationSetting } from "./dialogcodehookinvocationsetting";
import { DialogState } from "./dialogstate";
import { ResponseSpecification } from "./responsespecification";
/**
 * Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
 */
export declare class InitialResponseSetting extends SpeakeasyBase {
    /**
     *  Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
     */
    codeHook?: DialogCodeHookInvocationSetting;
    /**
     * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     */
    conditional?: ConditionalSpecification;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    initialResponse?: ResponseSpecification;
    nextStep?: DialogState;
}
