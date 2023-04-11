import { SpeakeasyBase } from "../../../internal/utils";
import { IpPermissionList } from "./ippermissionlist";
export declare class RevokeSecurityGroupIngressRequest extends SpeakeasyBase {
    cidrIp?: string;
    dryRun?: boolean;
    fromPort?: number;
    groupId?: string;
    groupName?: string;
    ipPermissions?: IpPermissionList[];
    ipProtocol?: string;
    securityGroupRuleIds?: string[];
    sourceSecurityGroupName?: string;
    sourceSecurityGroupOwnerId?: string;
    toPort?: number;
}
