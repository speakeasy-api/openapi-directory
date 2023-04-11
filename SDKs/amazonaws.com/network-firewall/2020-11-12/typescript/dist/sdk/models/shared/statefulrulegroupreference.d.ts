import { SpeakeasyBase } from "../../../internal/utils";
import { StatefulRuleGroupOverride } from "./statefulrulegroupoverride";
/**
 * Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.
 */
export declare class StatefulRuleGroupReference extends SpeakeasyBase {
    override?: StatefulRuleGroupOverride;
    priority?: number;
    resourceArn: string;
}
