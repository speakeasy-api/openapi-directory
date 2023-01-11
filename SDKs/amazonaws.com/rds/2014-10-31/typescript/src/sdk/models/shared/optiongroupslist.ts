import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionsList } from "./optionslist";



// OptionGroupsList
/** 
 * <p/>
**/
export class OptionGroupsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowsVpcAndNonVpcInstanceMemberships?: boolean;

  @SpeakeasyMetadata()
  engineName?: string;

  @SpeakeasyMetadata()
  majorEngineVersion?: string;

  @SpeakeasyMetadata()
  optionGroupArn?: string;

  @SpeakeasyMetadata()
  optionGroupDescription?: string;

  @SpeakeasyMetadata()
  optionGroupName?: string;

  @SpeakeasyMetadata({ elemType: OptionsList })
  options?: OptionsList[];

  @SpeakeasyMetadata()
  vpcId?: string;
}
