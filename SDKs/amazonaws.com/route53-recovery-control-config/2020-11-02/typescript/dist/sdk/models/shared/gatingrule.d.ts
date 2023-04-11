import { SpeakeasyBase } from "../../../internal/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";
/**
 * <p>A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.</p> <p>For example, if you specify one gating routing control and you set the Type in the rule configuration to OR, that indicates that you must set the gating routing control to On for the rule to evaluate as true; that is, for the gating control "switch" to be "On". When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.</p>
 */
export declare class GatingRule extends SpeakeasyBase {
    controlPanelArn: string;
    gatingControls: string[];
    name: string;
    ruleConfig: RuleConfig;
    safetyRuleArn: string;
    status: StatusEnum;
    targetControls: string[];
    waitPeriodMs: number;
}
