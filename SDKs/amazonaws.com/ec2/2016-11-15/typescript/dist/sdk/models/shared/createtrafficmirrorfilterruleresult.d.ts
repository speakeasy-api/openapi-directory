import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range assigned to the Traffic Mirror rule.
**/
export declare class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: Record<string, any>;
    toPort?: Record<string, any>;
}
/**
 * The source port range assigned to the Traffic Mirror rule.
**/
export declare class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: Record<string, any>;
    toPort?: Record<string, any>;
}
/**
 * The Traffic Mirror rule.
**/
export declare class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule extends SpeakeasyBase {
    description?: Record<string, any>;
    destinationCidrBlock?: Record<string, any>;
    destinationPortRange?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
    protocol?: Record<string, any>;
    ruleAction?: Record<string, any>;
    ruleNumber?: Record<string, any>;
    sourceCidrBlock?: Record<string, any>;
    sourcePortRange?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
    trafficDirection?: Record<string, any>;
    trafficMirrorFilterId?: Record<string, any>;
    trafficMirrorFilterRuleId?: Record<string, any>;
}
export declare class CreateTrafficMirrorFilterRuleResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    trafficMirrorFilterRule?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}
