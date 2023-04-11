import { SpeakeasyBase } from "../../../internal/utils";
import { PostDialogCodeHookInvocationSpecification } from "./postdialogcodehookinvocationspecification";
/**
 *  Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
 */
export declare class DialogCodeHookInvocationSetting extends SpeakeasyBase {
    active: boolean;
    enableCodeHookInvocation: boolean;
    invocationLabel?: string;
    postCodeHookSpecification: PostDialogCodeHookInvocationSpecification;
}
