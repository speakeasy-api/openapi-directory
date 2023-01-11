import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DbSecurityGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbSecurityGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
