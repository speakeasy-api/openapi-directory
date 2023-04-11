import { SpeakeasyBase } from "../../../internal/utils";
import { IpPermissionList } from "./ippermissionlist";
/**
 * <p>Describes the description of a security group rule.</p> <p>You can use this when you want to update the security group rule description for either an inbound or outbound rule.</p>
 */
export declare class UpdateSecurityGroupRuleDescriptionsEgressRequestSecurityGroupRuleDescriptions extends SpeakeasyBase {
    description?: string;
    securityGroupRuleId?: string;
}
export declare class UpdateSecurityGroupRuleDescriptionsEgressRequest extends SpeakeasyBase {
    dryRun?: boolean;
    groupId?: string;
    groupName?: string;
    ipPermissions?: IpPermissionList[];
    securityGroupRuleDescriptions?: UpdateSecurityGroupRuleDescriptionsEgressRequestSecurityGroupRuleDescriptions[];
}
