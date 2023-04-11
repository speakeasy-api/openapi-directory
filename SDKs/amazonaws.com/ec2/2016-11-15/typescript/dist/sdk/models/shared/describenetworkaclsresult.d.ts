import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an association between a network ACL and a subnet.
 */
export declare class DescribeNetworkAclsResultNetworkAclsAssociations extends SpeakeasyBase {
    networkAclAssociationId?: string;
    networkAclId?: string;
    subnetId?: string;
}
/**
 * ICMP protocol: The ICMP type and code.
 */
export declare class DescribeNetworkAclsResultNetworkAclsEntriesIcmpTypeCode extends SpeakeasyBase {
    code?: number;
    type?: number;
}
/**
 * TCP or UDP protocols: The range of ports the rule applies to.
 */
export declare class DescribeNetworkAclsResultNetworkAclsEntriesPortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Indicates whether to allow or deny the traffic that matches the rule.
 */
export declare enum DescribeNetworkAclsResultNetworkAclsEntriesRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * Describes an entry in a network ACL.
 */
export declare class DescribeNetworkAclsResultNetworkAclsEntries extends SpeakeasyBase {
    cidrBlock?: string;
    egress?: boolean;
    icmpTypeCode?: DescribeNetworkAclsResultNetworkAclsEntriesIcmpTypeCode;
    ipv6CidrBlock?: string;
    portRange?: DescribeNetworkAclsResultNetworkAclsEntriesPortRange;
    protocol?: string;
    ruleAction?: DescribeNetworkAclsResultNetworkAclsEntriesRuleActionEnum;
    ruleNumber?: number;
}
/**
 * Describes a tag.
 */
export declare class DescribeNetworkAclsResultNetworkAclsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a network ACL.
 */
export declare class DescribeNetworkAclsResultNetworkAcls extends SpeakeasyBase {
    associations?: DescribeNetworkAclsResultNetworkAclsAssociations[];
    entries?: DescribeNetworkAclsResultNetworkAclsEntries[];
    isDefault?: boolean;
    networkAclId?: string;
    ownerId?: string;
    tags?: DescribeNetworkAclsResultNetworkAclsTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeNetworkAclsResult extends SpeakeasyBase {
    networkAcls?: DescribeNetworkAclsResultNetworkAcls[];
    nextToken?: string;
}
