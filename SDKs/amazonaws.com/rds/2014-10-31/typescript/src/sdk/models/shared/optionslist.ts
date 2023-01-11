import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { OptionSettingConfigurationList } from "./optionsettingconfigurationlist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";



// OptionsList
/** 
 * Option details.
**/
export class OptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroupMembershipList })
  dbSecurityGroupMemberships?: DbSecurityGroupMembershipList[];

  @SpeakeasyMetadata()
  optionDescription?: string;

  @SpeakeasyMetadata()
  optionName?: string;

  @SpeakeasyMetadata({ elemType: OptionSettingConfigurationList })
  optionSettings?: OptionSettingConfigurationList[];

  @SpeakeasyMetadata()
  optionVersion?: string;

  @SpeakeasyMetadata()
  permanent?: boolean;

  @SpeakeasyMetadata()
  persistent?: boolean;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList[];
}
