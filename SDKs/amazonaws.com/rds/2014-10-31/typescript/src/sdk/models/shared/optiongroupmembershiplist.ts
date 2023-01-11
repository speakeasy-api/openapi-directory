import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OptionGroupMembershipList
/** 
 * Provides information on the option groups the DB instance is a member of.
**/
export class OptionGroupMembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata()
  status?: string;
}
