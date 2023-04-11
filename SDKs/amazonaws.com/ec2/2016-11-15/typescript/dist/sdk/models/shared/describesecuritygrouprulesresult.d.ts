import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the security group that is referenced in the rule.
 */
export declare class DescribeSecurityGroupRulesResultSecurityGroupRulesReferencedGroupInfo extends SpeakeasyBase {
    groupId?: string;
    peeringStatus?: string;
    userId?: string;
    vpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeSecurityGroupRulesResultSecurityGroupRulesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a security group rule.
 */
export declare class DescribeSecurityGroupRulesResultSecurityGroupRules extends SpeakeasyBase {
    cidrIpv4?: string;
    cidrIpv6?: string;
    description?: string;
    fromPort?: number;
    groupId?: string;
    groupOwnerId?: string;
    ipProtocol?: string;
    isEgress?: boolean;
    prefixListId?: string;
    referencedGroupInfo?: DescribeSecurityGroupRulesResultSecurityGroupRulesReferencedGroupInfo;
    securityGroupRuleId?: string;
    tags?: DescribeSecurityGroupRulesResultSecurityGroupRulesTags[];
    toPort?: number;
}
/**
 * Success
 */
export declare class DescribeSecurityGroupRulesResult extends SpeakeasyBase {
    nextToken?: string;
    securityGroupRules?: DescribeSecurityGroupRulesResultSecurityGroupRules[];
}
