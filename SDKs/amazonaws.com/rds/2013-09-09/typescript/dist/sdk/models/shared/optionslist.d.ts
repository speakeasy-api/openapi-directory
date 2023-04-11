import { SpeakeasyBase } from "../../../internal/utils";
import { DBSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { OptionSettingConfigurationList } from "./optionsettingconfigurationlist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
export declare class OptionsList extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DBSecurityGroupMembershipList[];
    optionDescription?: string;
    optionName?: string;
    optionSettings?: OptionSettingConfigurationList[];
    permanent?: boolean;
    persistent?: boolean;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList[];
}
