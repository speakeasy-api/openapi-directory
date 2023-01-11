import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbSecurityGroupMembershipList } from "./dbsecuritygroupmembershiplist";
import { VpcSecurityGroupMembershipList } from "./vpcsecuritygroupmembershiplist";



export class OptionsList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbSecurityGroupMembershipList })
  dbSecurityGroupMemberships?: DbSecurityGroupMembershipList[];

  @SpeakeasyMetadata()
  optionDescription?: string;

  @SpeakeasyMetadata()
  optionName?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembershipList })
  vpcSecurityGroupMemberships?: VpcSecurityGroupMembershipList[];
}
