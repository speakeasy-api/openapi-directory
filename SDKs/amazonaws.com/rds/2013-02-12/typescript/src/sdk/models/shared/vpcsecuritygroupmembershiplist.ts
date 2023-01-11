import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VpcSecurityGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  vpcSecurityGroupId?: string;
}
