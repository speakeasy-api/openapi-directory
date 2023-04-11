import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.
 */
export declare class ElicitationCodeHookInvocationSetting extends SpeakeasyBase {
    enableCodeHookInvocation: boolean;
    invocationLabel?: string;
}
