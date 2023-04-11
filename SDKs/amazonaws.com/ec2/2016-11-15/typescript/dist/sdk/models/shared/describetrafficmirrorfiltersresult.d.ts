import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * Describes the Traffic Mirror rule.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRules extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesDestinationPortRange;
    protocol?: number;
    ruleAction?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesSourcePortRange;
    trafficDirection?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRulesTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
/**
 * The destination port range assigned to the Traffic Mirror rule.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action assigned to the Traffic Mirror rule.
 */
export declare enum DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * The source port range assigned to the Traffic Mirror rule.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The traffic direction assigned to the Traffic Mirror rule.
 */
export declare enum DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
/**
 * Describes the Traffic Mirror rule.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRules extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesDestinationPortRange;
    protocol?: number;
    ruleAction?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesSourcePortRange;
    trafficDirection?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRulesTrafficDirectionEnum;
    trafficMirrorFilterId?: string;
    trafficMirrorFilterRuleId?: string;
}
export declare enum DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersNetworkServicesEnum {
    AmazonDns = "amazon-dns"
}
/**
 * Describes a tag.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes the Traffic Mirror filter.
 */
export declare class DescribeTrafficMirrorFiltersResultTrafficMirrorFilters extends SpeakeasyBase {
    description?: string;
    egressFilterRules?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersEgressFilterRules[];
    ingressFilterRules?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersIngressFilterRules[];
    networkServices?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersNetworkServicesEnum[];
    tags?: DescribeTrafficMirrorFiltersResultTrafficMirrorFiltersTags[];
    trafficMirrorFilterId?: string;
}
/**
 * Success
 */
export declare class DescribeTrafficMirrorFiltersResult extends SpeakeasyBase {
    nextToken?: string;
    trafficMirrorFilters?: DescribeTrafficMirrorFiltersResultTrafficMirrorFilters[];
}
