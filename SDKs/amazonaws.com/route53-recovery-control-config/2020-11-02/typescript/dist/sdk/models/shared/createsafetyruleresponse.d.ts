import { SpeakeasyBase } from "../../../internal/utils";
import { AssertionRule } from "./assertionrule";
import { GatingRule } from "./gatingrule";
/**
 * Success
 */
export declare class CreateSafetyRuleResponse extends SpeakeasyBase {
    assertionRule?: AssertionRule;
    gatingRule?: GatingRule;
}
