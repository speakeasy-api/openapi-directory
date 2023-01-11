import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModeEnum } from "./modeenum";



// NodeConfigurationOptionList
/** 
 * A list of node configurations.
**/
export class NodeConfigurationOptionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  estimatedDiskUtilizationPercent?: number;

  @SpeakeasyMetadata()
  mode?: ModeEnum;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  numberOfNodes?: number;
}
