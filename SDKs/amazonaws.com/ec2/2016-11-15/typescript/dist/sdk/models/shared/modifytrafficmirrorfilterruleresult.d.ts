import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range assigned to the Traffic Mirror rule.
**/
export declare class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: Record<string, any>;
    toPort?: Record<string, any>;
}
/**
 * The source port range assigned to the Traffic Mirror rule.
**/
export declare class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: Record<string, any>;
    toPort?: Record<string, any>;
}
/**
 * Modifies a Traffic Mirror rule.
**/
export declare class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule extends SpeakeasyBase {
    description?: Record<string, any>;
    destinationCidrBlock?: Record<string, any>;
    destinationPortRange?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;
    protocol?: Record<string, any>;
    ruleAction?: Record<string, any>;
    ruleNumber?: Record<string, any>;
    sourceCidrBlock?: Record<string, any>;
    sourcePortRange?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;
    trafficDirection?: Record<string, any>;
    trafficMirrorFilterId?: Record<string, any>;
    trafficMirrorFilterRuleId?: Record<string, any>;
}
export declare class ModifyTrafficMirrorFilterRuleResult extends SpeakeasyBase {
    trafficMirrorFilterRule?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}
