import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalSpecification } from "./conditionalspecification";
import { DialogCodeHookInvocationSetting } from "./dialogcodehookinvocationsetting";
import { DialogState } from "./dialogstate";
import { ElicitationCodeHookInvocationSetting } from "./elicitationcodehookinvocationsetting";
import { ResponseSpecification } from "./responsespecification";
/**
 * Settings used when Amazon Lex successfully captures a slot value from a user.
 */
export declare class SlotCaptureSetting extends SpeakeasyBase {
    captureConditional?: ConditionalSpecification;
    captureNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    captureResponse?: ResponseSpecification;
    codeHook?: DialogCodeHookInvocationSetting;
    elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
    failureConditional?: ConditionalSpecification;
    failureNextStep?: DialogState;
    /**
     * Specifies a list of message groups that Amazon Lex uses to respond the user input.
     */
    failureResponse?: ResponseSpecification;
}
