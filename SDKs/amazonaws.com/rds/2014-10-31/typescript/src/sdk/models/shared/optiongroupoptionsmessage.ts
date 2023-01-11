import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionsList } from "./optiongroupoptionslist";



// OptionGroupOptionsMessage
/** 
 * <p/>
**/
export class OptionGroupOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupOptionsList })
  optionGroupOptions?: OptionGroupOptionsList[];
}
