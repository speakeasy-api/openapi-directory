import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * Describes the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRules extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesDestinationPortRange;
    protocol?: number;
    ruleAction?: CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesSourcePortRange;
    trafficDirection?: CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRulesTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * Describes the Traffic Mirror rule.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRules extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesDestinationPortRange;
    protocol?: number;
    ruleAction?: CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesSourcePortRange;
    trafficDirection?: CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRulesTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
export declare enum CreateTrafficMirrorFilterResultTrafficMirrorFilterNetworkServicesEnum {
    AmazonDns = "amazon-dns"
}
/**
 * Describes a tag.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilterTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the Traffic Mirror filter.
 */
export declare class CreateTrafficMirrorFilterResultTrafficMirrorFilter extends SpeakeasyBase {
    description?: string;
    egressFilterRules?: CreateTrafficMirrorFilterResultTrafficMirrorFilterEgressFilterRules[];
    ingressFilterRules?: CreateTrafficMirrorFilterResultTrafficMirrorFilterIngressFilterRules[];
    networkServices?: CreateTrafficMirrorFilterResultTrafficMirrorFilterNetworkServicesEnum[];
    tags?: CreateTrafficMirrorFilterResultTrafficMirrorFilterTags[];
    trafficMirrorFilterId?: string;
}
/**
 * Success
 */
export declare class CreateTrafficMirrorFilterResult extends SpeakeasyBase {
    clientToken?: string;
    trafficMirrorFilter?: CreateTrafficMirrorFilterResultTrafficMirrorFilter;
}
