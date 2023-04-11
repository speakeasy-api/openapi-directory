import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalSpecification } from "./conditionalspecification";
import { DialogCodeHookInvocationSetting } from "./dialogcodehookinvocationsetting";
import { DialogState } from "./dialogstate";
import { ElicitationCodeHookInvocationSetting } from "./elicitationcodehookinvocationsetting";
import { PromptSpecification } from "./promptspecification";
import { ResponseSpecification } from "./responsespecification";
/**
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
 */
export declare class IntentConfirmationSetting extends SpeakeasyBase {
    active?: boolean;
    codeHook?: DialogCodeHookInvocationSetting;
    confirmationConditional?: ConditionalSpecification;
    confirmationNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    confirmationResponse?: ResponseSpecification;
    declinationConditional?: ConditionalSpecification;
    declinationNextStep?: DialogState;
    declinationResponse?: ResponseSpecification;
    elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
    /**
     * Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
     */
    failureConditional?: ConditionalSpecification;
    failureNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    failureResponse?: ResponseSpecification;
    promptSpecification: PromptSpecification;
}
