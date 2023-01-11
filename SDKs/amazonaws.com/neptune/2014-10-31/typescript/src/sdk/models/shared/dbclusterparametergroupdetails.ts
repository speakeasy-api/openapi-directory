import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";



export class DbClusterParameterGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ParametersList })
  parameters?: ParametersList[];
}
