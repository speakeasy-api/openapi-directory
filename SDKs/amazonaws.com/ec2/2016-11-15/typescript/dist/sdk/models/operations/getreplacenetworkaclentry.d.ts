import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReplaceNetworkAclEntryActionEnum {
    ReplaceNetworkAclEntry = "ReplaceNetworkAclEntry"
}
/**
 * Describes the ICMP type and code.
 */
export declare class GETReplaceNetworkAclEntryIcmp extends SpeakeasyBase {
    code?: number;
    type?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GETReplaceNetworkAclEntryPortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Indicates whether to allow or deny the traffic that matches the rule.
 */
export declare enum GETReplaceNetworkAclEntryRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum GETReplaceNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReplaceNetworkAclEntryRequest extends SpeakeasyBase {
    action: GETReplaceNetworkAclEntryActionEnum;
    /**
     * The IPv4 network range to allow or deny, in CIDR notation (for example <code>172.16.0.0/24</code>).
     */
    cidrBlock?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * <p>Indicates whether to replace the egress rule.</p> <p>Default: If no value is specified, we replace the ingress rule.</p>
     */
    egress: boolean;
    /**
     * ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.
     */
    icmp?: GETReplaceNetworkAclEntryIcmp;
    /**
     * The IPv6 network range to allow or deny, in CIDR notation (for example <code>2001:bd8:1234:1a00::/64</code>).
     */
    ipv6CidrBlock?: string;
    /**
     * The ID of the ACL.
     */
    networkAclId: string;
    /**
     * TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).
     */
    portRange?: GETReplaceNetworkAclEntryPortRange;
    /**
     * The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.
     */
    protocol: string;
    /**
     * Indicates whether to allow or deny the traffic that matches the rule.
     */
    ruleAction: GETReplaceNetworkAclEntryRuleActionEnum;
    /**
     * The rule number of the entry to replace.
     */
    ruleNumber: number;
    version: GETReplaceNetworkAclEntryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReplaceNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
