import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateNetworkAclEntryActionEnum {
    CreateNetworkAclEntry = "CreateNetworkAclEntry"
}
/**
 * Describes the ICMP type and code.
 */
export declare class GETCreateNetworkAclEntryIcmp extends SpeakeasyBase {
    code?: number;
    type?: number;
}
/**
 * Describes a range of ports.
 */
export declare class GETCreateNetworkAclEntryPortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Indicates whether to allow or deny the traffic that matches the rule.
 */
export declare enum GETCreateNetworkAclEntryRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum GETCreateNetworkAclEntryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateNetworkAclEntryRequest extends SpeakeasyBase {
    action: GETCreateNetworkAclEntryActionEnum;
    /**
     * The IPv4 network range to allow or deny, in CIDR notation (for example <code>172.16.0.0/24</code>). We modify the specified CIDR block to its canonical form; for example, if you specify <code>100.68.0.18/18</code>, we modify it to <code>100.68.0.0/18</code>.
     */
    cidrBlock?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * Indicates whether this is an egress rule (rule is applied to traffic leaving the subnet).
     */
    egress: boolean;
    /**
     * ICMP protocol: The ICMP or ICMPv6 type and code. Required if specifying protocol 1 (ICMP) or protocol 58 (ICMPv6) with an IPv6 CIDR block.
     */
    icmp?: GETCreateNetworkAclEntryIcmp;
    /**
     * The IPv6 network range to allow or deny, in CIDR notation (for example <code>2001:db8:1234:1a00::/64</code>).
     */
    ipv6CidrBlock?: string;
    /**
     * The ID of the network ACL.
     */
    networkAclId: string;
    /**
     * TCP or UDP protocols: The range of ports the rule applies to. Required if specifying protocol 6 (TCP) or 17 (UDP).
     */
    portRange?: GETCreateNetworkAclEntryPortRange;
    /**
     * The protocol number. A value of "-1" means all protocols. If you specify "-1" or a protocol number other than "6" (TCP), "17" (UDP), or "1" (ICMP), traffic on all ports is allowed, regardless of any ports or ICMP types or codes that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv4 CIDR block, traffic for all ICMP types and codes allowed, regardless of any that you specify. If you specify protocol "58" (ICMPv6) and specify an IPv6 CIDR block, you must specify an ICMP type and code.
     */
    protocol: string;
    /**
     * Indicates whether to allow or deny the traffic that matches the rule.
     */
    ruleAction: GETCreateNetworkAclEntryRuleActionEnum;
    /**
     * <p>The rule number for the entry (for example, 100). ACL entries are processed in ascending order by rule number.</p> <p>Constraints: Positive integer from 1 to 32766. The range 32767 to 65535 is reserved for internal use.</p>
     */
    ruleNumber: number;
    version: GETCreateNetworkAclEntryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateNetworkAclEntryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
