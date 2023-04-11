import { SpeakeasyBase } from "../../../internal/utils";
import { DBSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
export declare class OptionsList extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DBSecurityGroupMembershipList[];
    optionDescription?: string;
    optionName?: string;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList[];
}
