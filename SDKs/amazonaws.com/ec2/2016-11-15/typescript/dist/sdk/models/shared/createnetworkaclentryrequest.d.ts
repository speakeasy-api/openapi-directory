import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.
 */
export declare class CreateNetworkAclEntryRequestIcmpTypeCode extends SpeakeasyBase {
    code?: number;
    type?: number;
}
/**
 * TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).
 */
export declare class CreateNetworkAclEntryRequestPortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Indicates whether to allow or deny the traffic that matches the rule.
 */
export declare enum CreateNetworkAclEntryRequestRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare class CreateNetworkAclEntryRequest extends SpeakeasyBase {
    cidrBlock?: string;
    dryRun?: boolean;
    egress: boolean;
    icmpTypeCode?: CreateNetworkAclEntryRequestIcmpTypeCode;
    ipv6CidrBlock?: string;
    networkAclId: string;
    portRange?: CreateNetworkAclEntryRequestPortRange;
    protocol: string;
    ruleAction: CreateNetworkAclEntryRequestRuleActionEnum;
    ruleNumber: number;
}
