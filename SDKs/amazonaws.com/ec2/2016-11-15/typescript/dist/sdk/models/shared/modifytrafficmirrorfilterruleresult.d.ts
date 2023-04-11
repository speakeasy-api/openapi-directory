import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * Modifies a Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
    protocol?: number;
    ruleAction?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
    trafficDirection?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
/**
 * Success
 */
export declare class ModifyTrafficMirrorFilterRuleResult extends SpeakeasyBase {
    trafficMirrorFilterRule?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}
