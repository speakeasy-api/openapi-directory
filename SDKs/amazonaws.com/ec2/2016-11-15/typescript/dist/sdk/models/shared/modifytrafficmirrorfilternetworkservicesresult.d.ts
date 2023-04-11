import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * Describes the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRules extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesDestinationPortRange;
    protocol?: number;
    ruleAction?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesSourcePortRange;
    trafficDirection?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRulesTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * Describes the Traffic Mirror rule.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRules extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesDestinationPortRange;
    protocol?: number;
    ruleAction?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesSourcePortRange;
    trafficDirection?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRulesTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
export declare enum ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterNetworkServicesEnum {
    AmazonDns = "amazon-dns"
}
/**
 * Describes a tag.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The Traffic Mirror filter that the network service is associated with.
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter extends SpeakeasyBase {
    description?: string;
    egressFilterRules?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterEgressFilterRules[];
    ingressFilterRules?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterIngressFilterRules[];
    networkServices?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterNetworkServicesEnum[];
    tags?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilterTags[];
    trafficMirrorFilterId?: string;
}
/**
 * Success
 */
export declare class ModifyTrafficMirrorFilterNetworkServicesResult extends SpeakeasyBase {
    trafficMirrorFilter?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter;
}
