import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the security group that is referenced in the rule.
 */
export declare class AuthorizeSecurityGroupIngressResultSecurityGroupRulesReferencedGroupInfo extends SpeakeasyBase {
    groupId?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a tag.
 */
export declare class AuthorizeSecurityGroupIngressResultSecurityGroupRulesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a security group rule.
 */
export declare class AuthorizeSecurityGroupIngressResultSecurityGroupRules extends SpeakeasyBase {
    cidrIpv4?: string;
    cidrIpv6?: string;
    description?: string;
    fromPort?: number;
    groupId?: string;
    groupOwnerId?: string;
    ipProtocol?: string;
    isEgress?: boolean;
    prefixListId?: string;
    referencedGroupInfo?: AuthorizeSecurityGroupIngressResultSecurityGroupRulesReferencedGroupInfo;
    securityGroupRuleId?: string;
    tags?: AuthorizeSecurityGroupIngressResultSecurityGroupRulesTags[];
    toPort?: number;
}
/**
 * Success
 */
export declare class AuthorizeSecurityGroupIngressResult extends SpeakeasyBase {
    return?: boolean;
    securityGroupRules?: AuthorizeSecurityGroupIngressResultSecurityGroupRules[];
}
