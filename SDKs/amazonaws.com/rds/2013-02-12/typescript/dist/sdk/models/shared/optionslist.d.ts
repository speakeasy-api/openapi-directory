import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { OptionSettingConfigurationList } from "./optionsettingconfigurationlist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
export declare class OptionsList extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DbSecurityGroupMembershipList[];
    optionDescription?: string;
    optionName?: string;
    optionSettings?: OptionSettingConfigurationList[];
    persistent?: boolean;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList[];
}
