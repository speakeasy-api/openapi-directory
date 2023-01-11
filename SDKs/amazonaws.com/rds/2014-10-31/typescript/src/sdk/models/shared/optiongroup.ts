import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionsList } from "./optionslist";



// OptionGroup
/** 
 * <p/>
**/
export class OptionGroup extends SpeakeasyBase {
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
