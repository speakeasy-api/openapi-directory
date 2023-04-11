import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityGroupRuleRequest } from "./securitygrouprulerequest";
/**
 * Describes an update to a security group rule.
 */
export declare class ModifySecurityGroupRulesRequestSecurityGroupRules extends SpeakeasyBase {
    securityGroupRule?: SecurityGroupRuleRequest;
    securityGroupRuleId: string;
}
export declare class ModifySecurityGroupRulesRequest extends SpeakeasyBase {
    dryRun?: boolean;
    groupId: string;
    securityGroupRules: ModifySecurityGroupRulesRequestSecurityGroupRules[];
}
