import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
export declare class OptionsList extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DbSecurityGroupMembershipList[];
    optionDescription?: string;
    optionName?: string;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList[];
}
