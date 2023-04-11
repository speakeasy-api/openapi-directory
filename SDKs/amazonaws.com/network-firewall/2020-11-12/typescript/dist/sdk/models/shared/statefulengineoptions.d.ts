import { SpeakeasyBase } from "../../../internal/utils";
import { RuleOrderEnum } from "./ruleorderenum";
import { StreamExceptionPolicyEnum } from "./streamexceptionpolicyenum";
/**
 * Configuration settings for the handling of the stateful rule groups in a firewall policy.
 */
export declare class StatefulEngineOptions extends SpeakeasyBase {
    ruleOrder?: RuleOrderEnum;
    streamExceptionPolicy?: StreamExceptionPolicyEnum;
}
