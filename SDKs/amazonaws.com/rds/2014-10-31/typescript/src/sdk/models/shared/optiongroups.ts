import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupsList } from "./optiongroupslist";



// OptionGroups
/** 
 * List of option groups.
**/
export class OptionGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupsList })
  optionGroupsList?: OptionGroupsList[];
}
