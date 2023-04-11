import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input for the <a>SetStackPolicy</a> action.
 */
export declare class SetStackPolicyInput extends SpeakeasyBase {
    stackName: string;
    stackPolicyBody?: string;
    stackPolicyURL?: string;
}
