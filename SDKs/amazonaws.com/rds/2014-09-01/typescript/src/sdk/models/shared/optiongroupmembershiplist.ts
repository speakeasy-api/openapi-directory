import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
