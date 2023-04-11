import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalSpecification } from "./conditionalspecification";
import { DialogState } from "./dialogstate";
import { ResponseSpecification } from "./responsespecification";
/**
 * Specifies next steps to run after the dialog code hook finishes.
 */
export declare class PostDialogCodeHookInvocationSpecification extends SpeakeasyBase {
    failureConditional?: ConditionalSpecification;
    failureNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    failureResponse?: ResponseSpecification;
    successConditional?: ConditionalSpecification;
    successNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    successResponse?: ResponseSpecification;
    timeoutConditional?: ConditionalSpecification;
    timeoutNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    timeoutResponse?: ResponseSpecification;
}
