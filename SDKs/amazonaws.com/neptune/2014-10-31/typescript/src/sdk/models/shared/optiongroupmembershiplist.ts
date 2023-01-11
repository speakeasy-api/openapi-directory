import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionGroupMembershipList
/** 
 * Not supported by Neptune.
**/
export class OptionGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
