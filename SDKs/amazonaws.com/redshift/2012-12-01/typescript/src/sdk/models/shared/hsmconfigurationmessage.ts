import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmConfigurationList } from "./hsmconfigurationlist";



// HsmConfigurationMessage
/** 
 * <p/>
**/
export class HsmConfigurationMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: HsmConfigurationList })
  hsmConfigurations?: HsmConfigurationList[];

  @SpeakeasyMetadata()
  marker?: string;
}
