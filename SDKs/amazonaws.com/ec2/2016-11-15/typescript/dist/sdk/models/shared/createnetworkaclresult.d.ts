import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an association between a network ACL and a subnet.
 */
export declare class CreateNetworkAclResultNetworkAclAssociations extends SpeakeasyBase {
    networkAclAssociationId?: string;
    networkAclId?: string;
    subnetId?: string;
}
/**
 * ICMP protocol: The ICMP type and code.
 */
export declare class CreateNetworkAclResultNetworkAclEntriesIcmpTypeCode extends SpeakeasyBase {
    code?: number;
    type?: number;
}
/**
 * TCP or UDP protocols: The range of ports the rule applies to.
 */
export declare class CreateNetworkAclResultNetworkAclEntriesPortRange extends SpeakeasyBase {
    from?: number;
    to?: number;
}
/**
 * Indicates whether to allow or deny the traffic that matches the rule.
 */
export declare enum CreateNetworkAclResultNetworkAclEntriesRuleActionEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * Describes an entry in a network ACL.
 */
export declare class CreateNetworkAclResultNetworkAclEntries extends SpeakeasyBase {
    cidrBlock?: string;
    egress?: boolean;
    icmpTypeCode?: CreateNetworkAclResultNetworkAclEntriesIcmpTypeCode;
    ipv6CidrBlock?: string;
    portRange?: CreateNetworkAclResultNetworkAclEntriesPortRange;
    protocol?: string;
    ruleAction?: CreateNetworkAclResultNetworkAclEntriesRuleActionEnum;
    ruleNumber?: number;
}
/**
 * Describes a tag.
 */
export declare class CreateNetworkAclResultNetworkAclTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the network ACL.
 */
export declare class CreateNetworkAclResultNetworkAcl extends SpeakeasyBase {
    associations?: CreateNetworkAclResultNetworkAclAssociations[];
    entries?: CreateNetworkAclResultNetworkAclEntries[];
    isDefault?: boolean;
    networkAclId?: string;
    ownerId?: string;
    tags?: CreateNetworkAclResultNetworkAclTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateNetworkAclResult extends SpeakeasyBase {
    networkAcl?: CreateNetworkAclResultNetworkAcl;
}
