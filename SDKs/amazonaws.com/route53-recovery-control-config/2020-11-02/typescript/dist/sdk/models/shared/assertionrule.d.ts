import { SpeakeasyBase } from "../../../internal/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";
/**
 * An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
 */
export declare class AssertionRule extends SpeakeasyBase {
    assertedControls: string[];
    controlPanelArn: string;
    name: string;
    ruleConfig: RuleConfig;
    safetyRuleArn: string;
    status: StatusEnum;
    waitPeriodMs: number;
}
