import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * The Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
    protocol?: number;
    ruleAction?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
    trafficDirection?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
/**
 * Success
 */
export declare class CreateTrafficMirrorFilterRuleResult extends SpeakeasyBase {
    clientToken?: string;
    trafficMirrorFilterRule?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}
