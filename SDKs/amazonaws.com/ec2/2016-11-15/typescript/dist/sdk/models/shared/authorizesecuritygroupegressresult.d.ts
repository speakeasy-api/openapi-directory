import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the security group that is referenced in the rule.
 */
export declare class AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo extends SpeakeasyBase {
    groupId?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a tag.
 */
export declare class AuthorizeSecurityGroupEgressResultSecurityGroupRulesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a security group rule.
 */
export declare class AuthorizeSecurityGroupEgressResultSecurityGroupRules extends SpeakeasyBase {
    cidrIpv4?: string;
    cidrIpv6?: string;
    description?: string;
    fromPort?: number;
    groupId?: string;
    groupOwnerId?: string;
    ipProtocol?: string;
    isEgress?: boolean;
    prefixListId?: string;
    referencedGroupInfo?: AuthorizeSecurityGroupEgressResultSecurityGroupRulesReferencedGroupInfo;
    securityGroupRuleId?: string;
    tags?: AuthorizeSecurityGroupEgressResultSecurityGroupRulesTags[];
    toPort?: number;
}
/**
 * Success
 */
export declare class AuthorizeSecurityGroupEgressResult extends SpeakeasyBase {
    return?: boolean;
    securityGroupRules?: AuthorizeSecurityGroupEgressResultSecurityGroupRules[];
}
