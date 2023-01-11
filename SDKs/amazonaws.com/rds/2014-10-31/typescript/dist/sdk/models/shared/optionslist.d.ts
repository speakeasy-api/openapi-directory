import { SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { OptionSettingConfigurationList } from "./optionsettingconfigurationlist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";
/**
 * Option details.
**/
export declare class OptionsList extends SpeakeasyBase {
    dbSecurityGroupMemberships?: DbSecurityGroupMembershipList[];
    optionDescription?: string;
    optionName?: string;
    optionSettings?: OptionSettingConfigurationList[];
    optionVersion?: string;
    permanent?: boolean;
    persistent?: boolean;
    port?: number;
    vpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList[];
}
