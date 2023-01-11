import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodeConfigurationOptionList } from "./nodeconfigurationoptionlist";



export class NodeConfigurationOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: NodeConfigurationOptionList })
  nodeConfigurationOptionList?: NodeConfigurationOptionList[];
}
